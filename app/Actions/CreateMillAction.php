<?php

namespace App\Actions;

use App\Models\Mill;
use App\Models\Style;
use Spatie\QueueableAction\QueueableAction;

class CreateMillAction
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
