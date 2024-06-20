<?php

namespace App\Providers;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Support\ServiceProvider;
use Laravel\Cashier\Cashier;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Cashier::useCustomerModel(Tenant::class);
        ResetPassword::createUrlUsing(function (User $notifiable, string $token) {
            return route('tenant.password.reset', ['token' => $token, 'email' => $notifiable->getEmailForPasswordReset()]);
        });
    }
}
