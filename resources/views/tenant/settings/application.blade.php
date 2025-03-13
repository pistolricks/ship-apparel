<x-layouts.tenant title="Application settings">
    <x-section title="Configuration" description="Settings for your application.">
        <div class="mt-4 md:mt-0 w-full md:w-2/3 pl-0 md:pl-2">
            <form action="{{ route('tenant.settings.application.configuration') }}" method="POST">
                @csrf
                <div class="px-4 py-5 bg-white sm:p-6 shadow sm:rounded-tl-md sm:rounded-tr-md">
                    <div class="grid grid-cols-1 gap-6">
                        <div class="col-span-12 sm:col-span-4">
                            <x-form.label for="name" value="Company name"/>
                            <x-form.input type="text" id="company" name="company" value="{{ old('company', tenant('company')) }}" placeholder="My company"/>
                            <x-form.input-error for="company" />
                        </div>
                    </div>
                </div>
                <div class="px-4 sm:px-6 py-2 bg-gray-50 flex justify-end">
                    <x-button type="submit">Save</x-button>
                </div>
            </form>
        </div>
    </x-section>

    <x-section-divider />

    <x-section title="Domains" description="Manage your application's domains.">
        <div class="mt-4 md:mt-0 w-full md:w-2/3 pl-0 md:pl-2">
            @livewire('domains')
            @livewire('new-domain')
            @livewire('fallback-domain')
        </div>
    </x-section>

    <x-section-divider />
    <x-section title="Address" description="Manage your billing address.">
        <div class="mt-4 md:mt-0 w-full md:w-2/3 pl-0 md:pl-2">
        @livewire('billing-address')
        </div>
    </x-section>
    <x-section-divider />
    <x-section title="Invoices" description="Manage your invoices.">
        <div class="mt-4 md:mt-0 w-full md:w-2/3 pl-0 md:pl-2">
            @livewire('invoices')
        </div>
    </x-section>
    <x-section-divider />
    <x-section title="Payment Methods" description="Manage your payment methods.">
        <div class="mt-4 md:mt-0 w-full md:w-2/3 pl-0 md:pl-2">
            {{--
            @livewire('subscription-banner')
            @livewire('subscription-plan')
            @livewire('upcoming-payment')
            --}}
            @livewire('payment-method')
        </div>
    </x-section>
</x-layouts.tenant>
