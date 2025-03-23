import {Component, Show, VoidComponent} from "solid-js";
import {A, useLocation} from "@solidjs/router";
import Drawer from "@corvu/drawer";
import {LogoIcon} from "~/components/svg";
import Breadcrumbs from "~/components/layout/partials/breadcrumbs";
import {SidebarTrigger} from "~/components/ui/sidebar";
import {ApparelNavigation} from "~/components/layout/partials/apparel-navigation";


const Header: Component<{
    contextId: string;
}> = props => {

    const location = useLocation();
    const contextId = () => props.contextId;

    return (
        <>

            <header class="h-16">
                <nav class={''} aria-label="Top">

                    <div class="bg-gray-200/20 backdrop-blur-md backdrop-filter">
                        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div>
                                <div class="flex h-16 items-center justify-between">

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
            <div class={'w-full bg-gray-100'}>
                <div class={'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 '}>
                    <Breadcrumbs path={location?.pathname}/>
                </div>
            </div>
        </>
    )

};

export default Header;
