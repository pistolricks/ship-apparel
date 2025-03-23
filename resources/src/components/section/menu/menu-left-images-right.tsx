import {Component, For, Show} from "solid-js";
import list from "~/components/list/list";
import {MenuItemType} from "~/lib/types";
import {A} from "@solidjs/router";

type PROPS = {
    title: string;
    href: string;
    src?: string;
    list?: MenuItemType[]
}

const MenuLeftImagesRight: Component<PROPS> = props => {

    const title = () => props.title;
    const href = () => props.href;
    const src = () => props.src;
    const list = () => props.list;

    return (
        <div class={''}>
            <div id="tabs-1-panel-1" class="space-y-10 px-4 pb-8" aria-labelledby="tabs-1-tab-1" role="tabpanel"
                 tabindex="0">
                <div class={'flex justify-start items-start w-screen max-w-[300px] sm:max-w-sm md:max-w-md space-x-4'}>
                    <ul role="list" aria-labelledby={title()}
                        class="flex flex-col space-y-4 md:w-full">
                        <li class="flow-root">
                            <A href={href()}
                               class="-m-2 rounded hover:bg-amber-100/50 hover:text-amber-600 font-semibold focus:bg-white/25 focus:text-amber-700 block p-2 text-gray-700">{title()}</A>
                        </li>
                        <For<MenuItemType[]> each={list()}>
                            {(item, index) => (
                                <Show<boolean> when={index() < 12}>
                                    <li class="flow-root">
                                        <A href={item.href}
                                           class="-m-2 rounded hover:bg-amber-100/50 hover:text-amber-600  focus:bg-white/25 focus:text-amber-700 block p-2 text-gray-700">{item.title}</A>
                                    </li>
                                </Show>
                            )}
                        </For>
                    </ul>
                    <ul role="list" aria-labelledby={title()}
                        class="flex flex-col space-y-4 md:w-full">
                        <For<MenuItemType[]>  each={list()}>
                            {(item, index) => (
                                <Show<boolean> when={index() > 11 && index() < 25}>
                                    <li class="flow-root">
                                        <A href={item.href}
                                           class="-m-2 rounded hover:bg-amber-100/50 hover:text-amber-600  focus:bg-white/25 focus:text-amber-700 block p-2 text-gray-700">{item.title}</A>
                                    </li>
                                </Show>
                            )}
                        </For>
                    </ul>
                    <ul role="list" aria-labelledby={title()}
                        class="flex flex-col space-y-4 md:w-full">
                        <For<MenuItemType[]>  each={list()}>
                            {(item, index) => (
                                <Show<boolean> when={index() > 24}>
                                    <li class="flow-root">
                                        <A href={item.href}
                                           class="-m-2 rounded hover:bg-amber-100/50 hover:text-amber-600  focus:bg-white/25 focus:text-amber-700 block p-2 text-gray-700">{item.title}</A>
                                    </li>
                                </Show>
                            )}
                        </For>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MenuLeftImagesRight;


