import {Component, Show, VoidComponent} from "solid-js";
import {A} from "@solidjs/router";



const Header: Component<{

}> = props => {

    const logo = () => "/logo.svg"

    return (
        <>

            <header class="h-16">
                <nav class={''} aria-label="Top">

                    <div class="bg-gray-200/50 backdrop-blur-md backdrop-filter">
                        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div>
                                <div class="flex h-16 items-center justify-between">

                                    <div class="flex lg:flex-1 lg:items-center">
                                        <A href="/">
                                            <span class="sr-only"></span>
                                            <img
                                                src={logo()}
                                                class={'h-12'}
                                                alt="Custom Ink and Thread"
                                            />

                                        </A>
                                    </div>

                                    <div class="hidden h-full lg:flex">


                                        <div class="flex h-full justify-center items-center space-x-8 p-2">


                                        </div>
                                    </div>
                                    <div class="flex flex-1 items-center justify-end">

                                        <div class="flex items-center lg:ml-8">


                                                <span class="sr-only">Open menu</span>
                                                <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                     stroke="currentColor" aria-hidden="true" data-slot="icon">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                                </svg>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )

};

export default Header;
