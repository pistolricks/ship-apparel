<?php

declare(strict_types=1);

namespace App\TenancyBootstrappers;

use Illuminate\Config\Repository;
use Illuminate\Routing\UrlGenerator;
use Stancl\Tenancy\Contracts\Tenant;
use Illuminate\Contracts\Foundation\Application;
use Stancl\Tenancy\Contracts\TenancyBootstrapper;

/**
 * While in CLI and in tenant context, automatically use the tenant's primary domain/subdomain as
 * the app's root URL (used by the URL generator -- affects the url() and the route() helpers).
 *
 * For example, when your app's URL is configured to https://acme.com
 * and you have a tenant with the primary domain 'foo.com',
 * this bootstrapper will make url('/bar') return https://foo.com/bar instead of
 * https://acme.com/bar in the CLI while you're in the tenant's context.
 *
 * This is mainly useful when sending email to tenant users where you generate some URLs for the users to click.
 *
 * Note that this only works if the tenant has a primary domain and is only used while running the app in CLI/tests.
 */
class RootUrlBootstrapper implements TenancyBootstrapper
{
    protected string|null $originalRootUrl = null;

    public function __construct(
        protected Application $app,
        protected Repository $config,
        protected UrlGenerator $urlGenerator,
    ) {}

    public function bootstrap(Tenant $tenant): void
    {
        $primaryDomain = $tenant->primary_domain;

        if (! $this->app->runningInConsole() || is_null($primaryDomain)) {
            return;
        }

        $this->originalRootUrl = $this->config->get('app.url');

        $scheme = str($this->originalRootUrl)->before('://');

        // It's assumed the root URL doesn't have any additional path information
        $hostname = str($this->originalRootUrl)->after($scheme . '://')->rtrim('/');

        // Use the tenant's primary domain as the hostname
        // Or if the tenant's primary domain is a subdomain, prefix the original hostname with it
        $tenantDomain = $primaryDomain->domain;

        $hostname = $this->isSubdomain($tenantDomain) ? ($tenantDomain . '.' . $hostname) : $tenantDomain;

        $newRootUrl = $scheme . '://' . $hostname;

        $this->urlGenerator->forceRootUrl($newRootUrl);
        $this->config->set('app.url', $newRootUrl);
    }

    public function revert(): void
    {
        if ($this->originalRootUrl) {
            $this->urlGenerator->forceRootUrl($this->originalRootUrl);
            $this->config->set('app.url', $this->originalRootUrl);
        }
    }

    protected function isSubdomain(string $hostname): bool
    {
        // Hostname is considered a full domain if it contains a dot
        return ! str($hostname)->contains('.');
    }
}
