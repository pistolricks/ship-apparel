<?php

namespace App\Observers;

use App\Actions\images\ImageUploadAction;
use App\Models\Content;

class ContentObserver
{
    public function __construct(
        private readonly ImageUploadAction $imageUploadAction
    ){}

    public function created(Content $content): void
    {

    }

    public function updated(Content $content): void
    {
    }

    public function deleted(Content $content): void
    {
    }

    public function restored(Content $content): void
    {
    }
}
