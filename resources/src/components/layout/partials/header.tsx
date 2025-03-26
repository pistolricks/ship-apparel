import {Component} from "solid-js";
import {A, useLocation} from "@solidjs/router";
import Drawer from "@corvu/drawer";
import {LogoIcon} from "~/components/svg";
import {Breadcrumbs} from "~/components/layout/partials/breadcrumbs";


const Header: Component<{
    contextId: string;
}> = props => {

    const location = useLocation();
    const contextId = () => props.contextId;

    let path = 'products'

    return (
        <>
            <div class={'h-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 items-center flex font-light text-xs'}>
                Manufacture Direct Supplier | Complete Custom Branded Gear
            </div>
            <header class="h-16 sm:h-20">
                <nav class={''} aria-label="Top">
                    <div class="bg-primary/10 backdrop-blur-md backdrop-filter h-16 sm:h-20">
                        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div>
                                <div class="flex h-16 sm:h-20 items-center justify-between">

                                    <div class="flex lg:flex-1 lg:items-center">
                                        <A href="/">
                                            <span class="sr-only"></span>
                                            <LogoIcon class={'h-12'}/>

                                        </A>
                                    </div>

                                    <div class="hidden h-full lg:flex">


                                        <div class="flex h-full justify-center items-center space-x-8 p-2">


                                        </div>
                                    </div>
                                    <div class="flex flex-1 items-center justify-end">

                                        <div class="flex items-center lg:ml-8">

                                            <Drawer.Trigger contextId={contextId()}>
                                                <span class="sr-only">Open menu</span>
                                                <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                     stroke="currentColor" aria-hidden="true" data-slot="icon">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                                </svg>
                                            </Drawer.Trigger>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div class={'w-full  bg-secondary/20 shadow-accent/70'}>
                <div class="mx-auto flex max-w-7xl   h-[40px] items-center  justify-between px-6  lg:px-8" aria-label="Global">

                    <Show
                        fallback={<A href="/products" class="w-[224px]  h-[40px] flex items-center text-content    text-base font-semibold tracking-wide  hover:text-secondary">Products</A>}
                        when={location.pathname.includes('products')}>
                        <Breadcrumbs path={location?.pathname}/>
                    </Show>

                    <div class="hidden lg:flex lg:gap-x-12 w-full  justify-end">

                        <A href="/reversible-apparel" class="text-sm/6 font-semibold text-gray-900">Reversible Apparel</A>
                        <A href="/school-specials" class="text-sm/6 font-semibold text-gray-900">School Specials</A>
                        <A href="/our-company" class="text-sm/6 font-semibold text-gray-900">Our Company</A>
                        <A href="/contact-us" class="text-sm/6 font-semibold text-gray-900">Contact Us</A>
                    </div>

                </div>
            </div>

        </>
    )

};

export default Header;
