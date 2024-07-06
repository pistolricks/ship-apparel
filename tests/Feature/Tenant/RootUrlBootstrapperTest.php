<?php

namespace Tests\Feature\Tenant;

use Tests\TestCase;
use App\Models\Tenant;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Route;
use PHPUnit\Framework\Attributes\Test;
use App\TenancyBootstrappers\RootUrlBootstrapper;
use Illuminate\Foundation\Testing\DatabaseMigrations;

final class RootUrlBootstrapperTest extends TestCase
{
    use DatabaseMigrations;

    protected function setUp(): void
    {
        parent::setUp();

        Route::get('/foo/{bar}', [
            'as' => 'foo',
            'action' => function ($bar) {
                return $bar;
            },
        ]);

        $this->app->singleton(RootUrlBootstrapper::class);
    }

    #[Test]
    public function url_bootstrapper_changes_url_with_context(): void
    {
        $appUrl = 'http://localhost';
        $routeUrl = 'http://localhost/foo/xyz';

        config(['app.url' => $appUrl]);

        $tenant = Tenant::factory()->create();

        // Subdomain
        $subdomain = $tenant->createDomain([
            'domain' => 'subdomain',
        ]);

        $subdomain->makePrimary();

        $tenantAppUrl = 'http://subdomain.localhost';
        $tenantRouteUrl = 'http://subdomain.localhost/foo/xyz';

        $this->assertSame($routeUrl, route('foo', 'xyz'));
        $this->assertSame($appUrl, URL::to('/'));
        $this->assertSame($appUrl, url('/'));

        tenancy()->initialize($tenant);

        $this->assertSame($tenantRouteUrl, route('foo', 'xyz'));
        $this->assertSame($tenantAppUrl, URL::to('/'));
        $this->assertSame($tenantAppUrl, url('/'));
        $this->assertSame($tenantAppUrl, config('app.url'));

        tenancy()->end();

        $this->assertSame($routeUrl, route('foo', 'xyz'));
        $this->assertSame($appUrl, URL::to('/'));
        $this->assertSame($appUrl, url('/'));
        $this->assertSame($appUrl, config('app.url'));

        // Domain
        $domain = $tenant->createDomain([
            'domain' => 'tenant_app.com',
        ]);

        $domain->makePrimary();

        $tenantAppUrl = 'http://tenant_app.com';
        $tenantRouteUrl = 'http://tenant_app.com/foo/xyz';

        tenancy()->initialize($tenant);

        $this->assertSame($tenantRouteUrl, route('foo', 'xyz'));
        $this->assertSame($tenantAppUrl, URL::to('/'));
        $this->assertSame($tenantAppUrl, url('/'));
        $this->assertSame($tenantAppUrl, config('app.url'));

        tenancy()->end();

        $this->assertSame($routeUrl, route('foo', 'xyz'));
        $this->assertSame($appUrl, URL::to('/'));
        $this->assertSame($appUrl, url('/'));
        $this->assertSame($appUrl, config('app.url'));
    }
}
