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
        'component'
    ];

    public function contents(): BelongsToMany
    {
        return $this->belongsToMany(Content::class, 'section_content', 'section_id', 'content_id');
    }

    public function pages(): BelongsToMany
    {
        return $this->belongsToMany(Page::class, 'page_section', 'section_id', 'page_id');
    }

    protected function casts(): array
    {
        return [
            'href' => 'json',
            'class' => 'json',
            'data' => 'json',
            'active' => 'boolean',

        ];
    }
}
