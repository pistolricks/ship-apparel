<?php

namespace Tests\Feature\Tenant;

use PHPUnit\Framework\Attributes\Test;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TenantTestCase;

final class CheckSubscriptionMiddlewareTest extends TenantTestCase
{
    use DatabaseMigrations;

    #[Test]
    public function the_tenant_is_taken_to_the_billing_screen_if_he_doesnt_have_a_subscription_or_trial(): void
    {
        $this->get('posts')
            ->assertStatus(200);

        tenant()->update([
            'trial_ends_at' => Carbon::now()->subtract('30d'),
        ]);

        tenant()->refresh(); // Update model persisted on Tenancy singleton

        $this->get('posts')
            ->assertRedirect('/settings/application');

        $this->get('settings/application')
            ->assertSee('not subscribed');
    }
}
