<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Sluggable\HasSlug;
use Spatie\Tags\HasTags;

class Project extends Model implements HasMedia
{
    use HasUuids;
    use InteractsWithMedia;
    use HasTags;
    protected $guarded = [];

    protected function casts(): array
    {
        return [
            'data' => 'array',
            'start' => 'datetime',
            'end' => 'datetime',
        ];
    }



    public function admin(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Admin::class, 'admin_id', 'id');
    }



    public function registerMediaCollections(): void
    {
        $this
            ->addMediaCollection('gallery');

        $this
            ->addMediaCollection('in-progress');

        $this
            ->addMediaCollection('completed');


    }
}
