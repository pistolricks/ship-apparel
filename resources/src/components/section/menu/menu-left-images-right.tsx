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
            <div>
                <div class={'flex justify-start items-start w-[65dvw] space-x-4'}>
                    <ul role="list" aria-labelledby={title()}
                        class="flex flex-col space-y-4 w-full">

                        <For each={list()}>
                            {(item, index) => (
                                <Show when={index() < 12}>
                                    <li class="flow-root">
                                        <A href={item.href}
                                           class="-m-2 rounded hover:bg-amber-100/50 hover:text-amber-600  focus:bg-white/25 focus:text-amber-700 block p-2 text-gray-700">{item.title}</A>
                                    </li>
                                </Show>
                            )}
                        </For>
                    </ul>
                    <ul role="list" aria-labelledby={title()}
                        class="flex flex-col space-y-4 w-full">
                        <For each={list()}>
                            {(item, index) => (
                                <Show when={index() > 11 && index() < 25}>
                                    <li class="flow-root">
                                        <A href={item.href}
                                           class="-m-2 rounded hover:bg-amber-100/50 hover:text-amber-600  focus:bg-white/25 focus:text-amber-700 block p-2 text-gray-700">{item.title}</A>
                                    </li>
                                </Show>
                            )}
                        </For>
                    </ul>
                    <ul role="list" aria-labelledby={title()}
                        class="flex flex-col space-y-4 w-full">
                        <For  each={list()}>
                            {(item, index) => (
                                <Show when={index() > 24}>
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


