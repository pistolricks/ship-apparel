<?php

use App\Http\Controllers\Central\Api\Shop\Tenant as Controllers;
use App\Http\Middleware\CheckSubscription;
use App\Http\Middleware\OwnerOnly;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Stancl\Tenancy\Features\UserImpersonation;
use Stancl\Tenancy\Middleware\InitializeTenancyByRequestData;
use Stancl\Tenancy\Middleware\PreventAccessFromCentralDomains;


// curl -H "X-Tenant: e83eec07-1345-47ad-a272-9864153a782a" https://ollivr.ink-tenancy.test/foo

Route::middleware([
    'web',
    InitializeTenancyByRequestData::class
])->group(function () {
    Route::get('/foo', function () {
        return response('The ID of the current tenant is ' . tenant('id') . "\n");
    });
});

Route::middleware('tenant', PreventAccessFromCentralDomains::class)->name('tenant.')->group(function () {
    Route::redirect('/', '/home');

    Route::get('/impersonate/{token}', function ($token) {
        return UserImpersonation::makeResponse($token);
    })->name('impersonate');

    Route::post('/ploi/webhook/certificateIssued', [Controllers\PloiWebhookController::class, 'certificateIssued'])->name('ploi.certificate.issued');
    Route::post('/ploi/webhook/certificateRevoked', [Controllers\PloiWebhookController::class, 'certificateRevoked'])->name('ploi.certificate.revoked');

    Route::middleware(['auth', CheckSubscription::class])->group(function () {
        Route::redirect('/home', '/posts')->name('home');

        Route::get('/posts', [Controllers\PostController::class, 'index'])->name('posts.index');
        Route::post('/posts', [Controllers\PostController::class, 'store'])->name('posts.store');
        Route::get('/posts/create', [Controllers\PostController::class, 'create'])->name('posts.create');
        Route::get('/posts/{post}', [Controllers\PostController::class, 'show'])->name('posts.show');

        Route::get('/settings/user', [Controllers\UserSettingsController::class, 'show'])->name('settings.user');
        Route::post('/settings/user/personal', [Controllers\UserSettingsController::class, 'personal'])->name('settings.user.personal');
        Route::post('/settings/user/password', [Controllers\UserSettingsController::class, 'password'])->name('settings.user.password');

        Route::middleware(OwnerOnly::class)->group(function () {
            Route::get('/settings/application', [Controllers\ApplicationSettingsController::class, 'show'])->name('settings.application');
            Route::post('/settings/application/configuration', [Controllers\ApplicationSettingsController::class, 'storeConfiguration'])->name('settings.application.configuration');
            Route::get('/settings/application/invoice/{id}/download', Controllers\DownloadInvoiceController::class)->name('invoice.download');
        });
    });

    Route::namespace('App\\Http\\Controllers\\Tenant')->group(function () {
        Auth::routes(['verify' => true]);
    });

    // Example API route:
    // Route::middleware(['api'])->prefix('api/')->group(function () {
    //     // E.g. GET http://tenantapp.test/api/tenant will return the tenant key of a tenant that has the domain tenantapp.test
    //     Route::get('/tenant', fn () => ['tenant_id' => tenant()->getTenantKey()]);
    // });
});



