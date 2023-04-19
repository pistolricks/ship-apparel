<?php

namespace Tests\Feature\Tenant;

use PHPUnit\Framework\Attributes\Test;
use App\Models\User;
use Tests\TenantTestCase;

final class ApplicationSettingsTest extends TenantTestCase
{
    protected $createStripeCustomer = true;

    #[Test]
    public function only_owner_can_view_application_settings(): void
    {
        $owner = User::first();
        $this->actingAs($owner)->get(route('tenant.settings.application'))
            ->assertSuccessful();

        $mortal = User::factory()->create();
        $this->actingAs($mortal)->get(route('tenant.settings.application'))
            ->assertForbidden();
    }
}
