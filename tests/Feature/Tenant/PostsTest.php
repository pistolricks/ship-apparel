<?php

namespace Tests\Feature\Tenant;

use PHPUnit\Framework\Attributes\Test;
use App\Models\Post;
use Tests\TenantTestCase;

final class PostsTest extends TenantTestCase
{
    protected $shouldSeed = false;

    #[Test]
    public function posts_can_be_created(): void
    {
        $this->post('/posts', [
            'title' => 'Foo',
            'body' => 'Bar',
        ]);

        $this->assertSame('Foo', Post::first()->title);
        $this->assertSame('Bar', Post::first()->body);
    }

    #[Test]
    public function posts_appear_on_the_post_index(): void
    {
        auth()->user()->posts()->create([
            'title' => 'Foo post',
            'body' => 'Bar',
        ]);

        $this->get('/posts')
            ->assertSee('Foo post');
    }

    #[Test]
    public function each_post_has_a_detail_page(): void
    {
        $this->post('/posts', [
            'title' => 'Foo post',
            'body' => 'Bar',
        ]);

        $this->get('/posts/1')
            ->assertSee('Foo post');
    }
}
