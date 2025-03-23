<?php

namespace App\Data;

use Illuminate\Support\Collection;
use Spatie\LaravelData\Data;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

/** @typescript
 * @method static create(array $array)
 * @method exists()
 */

class ResponsiveImage extends Data
{
    public function __construct(
        public ?string $id,
        public ?string $uuid,
        public ?string $name,
        public ?string $file_name,
        public ?string $mime_type,
        public ?string $created_at,
        public ?string $updated_at,
        public ?string $model_type,
        public ?string $model_id,
        public ?string $collection_name,
        public ?string $disk,
        public ?string $conversions_disk,
        public ?string $size,
        public ?string $src,
        public ?string $srcset,
        public ?array $manipulations,
        public ?array $custom_properties,
        public ?array $generated_conversions,
        public ?string $order_column,
        public ?ResponsiveImage $original,

    ) {}

    public static function fromMedia(?Media $media): self
    {

        $original = null;

        return new self(
            $media?->id,
            $media?->uuid,
            $media?->name,
            $media?->file_name,
            $media?->mime_type,
            $media?->created_at->diffForHumans(),
            $media?->updated_at->diffForHumans(),
            $media?->model_type,
            $media?->model_id,
            $media?->collection_name,
            $media?->disk,
            $media?->conversions_disk,
            $media?->human_readable_size,
            $media?->getUrl(),
            $media?->getSrcset(),
            $media?->manipulations,
            $media?->custom_properties,
            $media?->generated_conversions,
            $media?->order_column,
            $original,

        );
    }
}
