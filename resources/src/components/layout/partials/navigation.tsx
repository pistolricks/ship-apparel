import {createSignal, For} from 'solid-js'
import {A, useLocation} from "@solidjs/router";
import {classNames} from "~/lib/utils";
import Drawer from "@corvu/drawer";

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const menu: { name: string, href: string }[] = [
    {name: "Custom Apparel", href: "/custom-apparel"},
    {name: "Work Apparel", href: "/work-apparel"},
    {name: "School Spirit", href: "/school-spirit"},
    {name: "Team Athletics", href: "/team-athletics"},
    {name: "Design Lab", href: "/design-lab"},
    {name: "Popup Shops", href: "/popup-shops"},
]


export default function Navigation(props: { contextId: string }) {
    const [open, setOpen] = createSignal(false)
    const contextId = () => props.contextId
    const location = useLocation()

    return (
        <div class="bg-white">
            <header class="relative">
                <nav aria-label="Top">

                    <div class="hidden sm:block bg-sky-400/70">
                        <div class="mx-auto flex h-10 max-w-7xl px-4 items-center justify-between">

                            <div class="hidden lg:block lg:flex-1">

                                <div class="-ml-2 inline-grid grid-cols-1">
                                    <div class="col-start-1 row-start-1 w-full appearance-none rounded-md  py-0.5 pl-2 pr-7 text-left text-base font-medium text-white focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-white sm:text-sm/6">

                                    </div>
                                </div>
                            </div>

                            <p class="flex-1 text-center text-sm font-medium text-white lg:flex-none">

                            </p>

                            <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                <a href="#" class="text-sm font-medium text-white hover:text-gray-100">
                                    Create an account
                                </a>
                                <span class="h-6 w-px bg-gray-600" aria-hidden="true"></span>
                                <a href="#" class="text-sm font-medium text-white hover:text-gray-100">
                                    Sign in
                                </a>
                            </div>
                        </div>
                    </div>


                    <div class="bg-white">
                        <div class="mx-auto max-w-7xl">
                            <div class="border-b border-gray-200">
                                <div class="flex h-16 items-center justify-between">

                                    <div class="hidden lg:flex lg:items-center">

                                        <A href="/">
                                            <img src={'/logo.png'} class="pl-4 h-8 w-auto" alt="logo"/>
                                            <span class="sr-only"></span>
                                        </A>

                                    </div>

                                    <div class="hidden h-full lg:flex">
                                        <For each={menu}>
                                            {(item) => (
                                        <div class="ml-8">

                                                    <div class="flex h-full justify-center space-x-8">

                                                        <A href={item.href}

                                                           class={classNames(
                                                               location.pathname === item.href ? "activeClass" : "text-gray-500",
                                                               "flex items-center text-sm font-medium  hover:text-gray-800")}>
                                                            {item.name}
                                                        </A>
                                                    </div>
                                        </div>
                                            )}
                                        </For>
                                    </div>


                                    <div class="flex flex-1 items-center lg:hidden">

                                        <button type="button" class="pl-4 rounded-md bg-white p-2 text-gray-400">
                                            <span class="sr-only">Open menu</span>
                                            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                 stroke="currentColor" aria-hidden="true" data-slot="icon">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                            </svg>
                                        </button>


                                        <a href="#" class="ml-2 p-2 text-gray-400 hover:text-gray-500">
                                            <span class="sr-only">Search</span>
                                            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                 stroke="currentColor" aria-hidden="true" data-slot="icon">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                                            </svg>
                                        </a>
                                    </div>


                                    <A href="/" class="lg:hidden">
                                        <span class="sr-only">Custom Ink and Thread</span>
                                        <img
                                            src={'/logo.png'}
                                            alt="" class="h-8 w-auto"/>
                                    </A>

                                    <div class="flex flex-1 items-center justify-end">
                                        <div class="flex items-center lg:ml-8">
                                            <div class="flex space-x-4">
                                                <div class="hidden lg:flex">
                                                    <a href="#" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                                                        <span class="sr-only">Search</span>
                                                        <svg class="size-6" fill="none" viewBox="0 0 24 24"
                                                             stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                                             data-slot="icon">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                                                        </svg>
                                                    </a>
                                                </div>

                                                <div class="flex">
                                                    <a href="#" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                                                        <span class="sr-only">Account</span>
                                                        <svg class="size-6" fill="none" viewBox="0 0 24 24"
                                                             stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                                             data-slot="icon">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                                                        </svg>
                                                    </a>
                                                </div>
                                                <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                                                <Drawer.Trigger class={"pr-4"} contextId={contextId()}>
                                                    <span class="sr-only">Open menu</span>
                                                    <svg class="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                                                         fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                         stroke="currentColor" aria-hidden="true" data-slot="icon">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                                                    </svg>
                                                    <span class="sr-only">items in cart, view bag</span>
                                                </Drawer.Trigger>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>

    )
}
