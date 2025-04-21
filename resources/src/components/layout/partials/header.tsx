import {Component, Show} from "solid-js";
import {A, useLocation} from "@solidjs/router";
import Drawer from "@corvu/drawer";
import {Breadcrumbs} from "~/components/layout/partials/breadcrumbs";
import {IconSearch, IconShoppingCart} from "~/components/svg";
import { classNames } from "~/lib/utils";


const Header: Component<{
    contextId: string;
}> = props => {

    const location = useLocation();
    const contextId = () => props.contextId;

    let path = 'shop'

    return (
        <>

            <header class="h-16">
                <nav class={''} aria-label="Top">
                    <div class="bg-primary/10 backdrop-blur-md backdrop-filter h-16">
                        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div>
                                <div class="flex h-16 items-center justify-between">

                                    <div class="flex lg:flex-1 lg:items-center">
                                        <A href="/">
                                            <img src={'/logo.png'} class="h-12" alt="logo"/>
                                            <span class="sr-only"></span>


                                        </A>
                                    </div>

                                    <div class="hidden h-full lg:flex">


                                        <div class="flex h-full justify-center items-center space-x-8 p-2">



                                        </div>
                                    </div>
                                    <div class="flex flex-1 items-center justify-end sm:space-x-6">

                                            <A href="#" class="hidden sm:block text-gray-400 hover:text-gray-500">
                                                <span class="sr-only">Search</span>
                                                <IconSearch class="size-6"/>
                                            </A>

                                            <A href="/checkout" class="hidden sm:block text-gray-400 hover:text-gray-500">
                                                <span class="sr-only">Search</span>
                                                <IconShoppingCart class="size-6"/>
                                            </A>

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
            <div class={'w-full bg-secondary/20 shadow-accent/70 relative hidden sm:block'}>
                <div class="mx-auto flex max-w-7xl text-sm md:text-base  h-[60px] items-center  justify-center md:px-4 sm:space-x-4 md:space-x-6 lg:space-x-8" aria-label="Global">


                    <li role="none" class="flex items-stretch">
                        <A href={"/custom-apparel"} role="menuitem" aria-haspopup="false" class={classNames(
                            location.pathname === "/custom-apparel" ? "activeClass" : "",
                            "flex items-center gap-2 py-4 transition-colors duration-300 hover:text-sky-500 focus:text-sky-600 focus:outline-none focus-visible:outline-none ")}>
                            <span>Custom Apparel</span>
                        </A>
                    </li>

                        <li role="none" class="flex items-stretch">
                            <A href={"/work-apparel"} role="menuitem"  aria-haspopup="false" class={classNames(
                                location.pathname === "/work-apparel" ? "activeClass" : "",
                                "flex items-center gap-2 py-4 transition-colors duration-300 hover:text-sky-500 focus:text-sky-600 focus:outline-none focus-visible:outline-none ")}>
                                <span>Work Apparel</span>
                            </A>
                        </li>

                        <li role="none" class="flex items-stretch">
                            <A href={"/school-spirit"} role="menuitem" aria-haspopup="false" class={classNames(
                                location.pathname === "/school-spirit" ? "activeClass" : "",
                                "flex items-center gap-2 py-4 transition-colors duration-300 hover:text-sky-500 focus:text-sky-600 focus:outline-none focus-visible:outline-none ")}>
                                <span>School Spirit</span>
                            </A>
                        </li>

                    <li role="none" class="flex items-stretch">
                        <A href={"/team-athletics"} role="menuitem" aria-haspopup="false" class={classNames(
                            location.pathname === "/team-athletics" ? "activeClass" : "",
                            "flex items-center gap-2 py-4 transition-colors duration-300 hover:text-sky-500 focus:text-sky-600 focus:outline-none focus-visible:outline-none ")}>
                            <span>Team Athletics</span>
                        </A>
                    </li>
                    <li role="none" class="flex items-stretch">
                        <A href={"/design-lab"} role="menuitem" aria-haspopup="false" class={classNames(
                            location.pathname === "/design-lab" ? "activeClass" : "",
                            "flex items-center gap-2 py-4 transition-colors duration-300 hover:text-sky-500 focus:text-sky-600 focus:outline-none focus-visible:outline-none ")}>
                            <span>Design Lab</span>
                        </A>
                    </li>
                    <li role="none" class="flex items-stretch">
                        <A href={"/popup-shops"} role="menuitem" aria-haspopup="false" class={classNames(
                            location.pathname === "/popup-shops" ? "activeClass" : "",
                            "flex items-center gap-2 py-4 transition-colors duration-300 hover:text-sky-500 focus:text-sky-600 focus:outline-none focus-visible:outline-none")}>
                            <span>Pop-Up Shop</span>
                        </A>
                    </li>

                </div>
                <div class="h-11 w-full bg-gray-100 flex items-center">
                    <Show when={location.pathname.includes('shop')}>
                        <div class="  absolute bottom-0 w-full">
                            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  flex justify-between items-center">
                                <Breadcrumbs path={location?.pathname}/>



                            </div>
                        </div>
                    </Show>
                </div>
            </div>

        </>
    )

};

export default Header;
