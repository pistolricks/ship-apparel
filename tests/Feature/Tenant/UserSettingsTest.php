<?php

namespace Tests\Feature\Tenant;

use PHPUnit\Framework\Attributes\Test;
use App\Models\User;
use Illuminate\Validation\ValidationException;
use Tests\TenantTestCase;

final class UserSettingsTest extends TenantTestCase
{
    #[Test]
    public function owner_cannot_use_a_different_tenants_email(): void
    {
        $tenant2 = $this->createTenant([
            'email' => 'second@tenant',
        ]);

        $this->expectException(ValidationException::class);
        $this->withoutExceptionHandling()->post(route('tenant.settings.user.personal'), [
            'name' => 'John Foo',
            'email' => 'second@tenant',
        ]);
    }

    #[Test]
    public function normal_user_can_use_a_different_tenants_email(): void
    {
        $tenant2 = $this->createTenant([
            'email' => 'second@tenant',
        ]);

        $user2 = User::factory()->create();
        $this->actingAs($user2);

        $this->withoutExceptionHandling()->post(route('tenant.settings.user.personal'), [
            'name' => 'John Foo',
            'email' => 'second@tenant',
        ])->assertRedirect();
    }
}
