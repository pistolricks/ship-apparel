<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Section extends Model
{
    protected $fillable = [
        'id',
        'name',
        'title',
        'href',
        'class',
        'data',
        'start',
        'end',
        'active',
        'status',
    ];

    public function contents(): BelongsToMany
    {
        return $this->belongsToMany(Content::class, 'section_content', 'section_id', 'content_id');
    }

    protected function casts(): array
    {
        return [
            'class' => 'array',
            'data' => 'array',
            'active' => 'boolean',
        ];
    }
}
