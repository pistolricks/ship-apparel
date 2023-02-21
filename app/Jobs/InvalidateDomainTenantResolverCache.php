<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Stancl\Tenancy\Contracts\Domain;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Stancl\Tenancy\Resolvers\DomainTenantResolver;

class InvalidateDomainTenantResolverCache implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(
        protected Domain $domain,
    ) {}

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle(DomainTenantResolver $resolver)
    {
        $resolver->invalidateCache($this->domain->tenant);
    }
}
