<?php

namespace App\Providers;

use App\Models\Tenant;
use App\Nova\Central\Admin;
use App\Nova\Central\Domain;
use App\Nova\Central\SubscriptionCancelation;
use App\Nova\Central\Tenant as TenantResource;
use App\Nova\Dashboards\Main;
use App\Nova\Tenant\Post;
use App\Nova\Tenant\User;
use Illuminate\Support\Facades\Gate;
use Laravel\Nova\Nova;
use Laravel\Nova\NovaApplicationServiceProvider;

class NovaServiceProvider extends NovaApplicationServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
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
    }

    /**
     * Register the Nova routes.
     *
     * @return void
     */
    protected function routes()
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
     *
     * @return void
     */
    protected function gate()
    {
        Gate::define('viewNova', function ($user) {
            if ($user instanceof \App\Models\User) {
                // In the tenant app, only the owner of the tenant can view Nova
                return $user->isOwner();
            } else if ($user instanceof \App\Models\Admin) {
                // In the central app, the only logged in users are admins
                return true;
            }

            return false;
        });
    }

    /**
     * Get the dashboards that should be listed in the Nova sidebar.
     *
     * @return array
     */
    protected function dashboards()
    {
        return [
            new Main,
        ];
    }

    /**
     * Get the tools that should be listed in the Nova sidebar.
     *
     * @return array
     */
    public function tools()
    {
        return [];
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
            ]);
        }
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
