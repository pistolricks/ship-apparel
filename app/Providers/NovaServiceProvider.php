<?php

namespace App\Providers;


use App\Models\Tenant;
use App\Nova\Central\Admin;
use App\Nova\Central\Domain;
use App\Nova\Central\SubscriptionCancelation;
use App\Nova\Central\Tenant as TenantResource;
use App\Nova\Central\WebContent;
use App\Nova\Central\WebPage;
use App\Nova\Central\WebProject;
use App\Nova\Central\WebSection;
use App\Nova\Dashboards\Main;
use App\Nova\Tenant\Post;
use App\Nova\Tenant\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Gate;
use Laravel\Nova\Menu\MenuSection;
use Laravel\Nova\Nova;
use Laravel\Nova\NovaApplicationServiceProvider;
use Oneduo\NovaFileManager\NovaFileManager;
use SimonHamp\LaravelNovaCsvImport\LaravelNovaCsvImport;

class NovaServiceProvider extends NovaApplicationServiceProvider
{

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        parent::boot();

        Nova::serving(function () {
            Tenant::creating(function (Tenant $tenant) {
                $tenant->ready = false;
            });

            Tenant::created(function (Tenant $tenant) {
                $tenant->createAsStripeCustomer();
            });
        });
        /*
        MenuSection::make('CSV Import')
            ->path('/csv-import')
            ->icon('upload');
        */
        Nova::footer(function (Request $request) {
            return Blade::render('
                <p class="mt-8 text-center text-xs text-80">

                </p>

        ');
        });
    }

    /**
     * Register the Nova routes.
     */
    protected function routes(): void
    {
        Nova::routes()
            ->withAuthenticationRoutes(['tenant', 'universal', 'nova'])
            ->withPasswordResetRoutes(['tenant', 'universal', 'nova'])
            ->register();
    }

    /**
     * Register the Nova gate.
     *
     * This gate determines who can access Nova in non-local environments.
     */
    protected function gate(): void
    {
        Gate::define('viewNova', function ($user) {
            if ($user instanceof \App\Models\User) {
                // In the tenant app, only the owner of the tenant can view Nova
                return $user->isOwner();
            } elseif ($user instanceof \App\Models\Admin) {
                // In the central app, the only logged in users are admins
                return true;
            }

            return false;
        });
    }

    /**
     * Get the dashboards that should be listed in the Nova sidebar.
     */
    protected function dashboards(): array
    {
        return [
            new Main,

        ];
    }

    /**
     * Get the tools that should be listed in the Nova sidebar.
     */
    public function tools(): array
    {
        return [
            NovaFileManager::make(),

        ];
    }

    protected function resources()
    {
        if (tenancy()->initialized) {
            Nova::resources([
                Post::class,
                User::class,

            ]);
        } else {
            Nova::resources([
                Admin::class,
                TenantResource::class,
                Domain::class,
                SubscriptionCancelation::class,
                WebProject::class,
                WebContent::class,
                WebSection::class,
                WebPage::class
            ]);
        }
    }

    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }
}
