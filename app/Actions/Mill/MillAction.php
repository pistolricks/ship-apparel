<?php

namespace App\Actions\Mill;

use App\Models\Mill;
use Spatie\QueueableAction\QueueableAction;

class MillAction
{
    use QueueableAction;

    /**
     * Create a new action instance.
     *
     * @return void
     */
    public function __construct()
    {
        // Prepare the action for execution, leveraging constructor injection.
    }

    /**
     * Execute the action.
     *
     * @return mixed
     */
    public function execute(string $name, ?string $description = null)
    {
       return Mill::updateOrCreate(
            [
                'name' => $name
            ],
       [
           'description' => $description,
       ]
       );

    }
}
