<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Page extends Model
{
    use HasUuids;

    protected $fillable = [
        'name',
        'title',
        'description',
        'authorization',
    ];

    public function sections(): BelongsToMany
    {
        return $this->belongsToMany(Section::class, 'page_section', 'page_id', 'section_id');
    }

    protected function casts(): array
    {
        return [
            'description' => 'array',
            'authorization' => 'boolean',
        ];
    }
}
