import {Component, For, JSXElement, Show} from "solid-js";
import list from "~/components/list/list";
import {MenuItemType} from "~/lib/types";
import {A} from "@solidjs/router";

type PROPS = {
    title: string;
    href: string;
    src?: string;
    list?: MenuItemType[]
    children: JSXElement
}

const MenuLeftImagesRight: Component<PROPS> = props => {

    const title = () => props.title;
    const href = () => props.href;
    const src = () => props.src;
    const list = () => props.list;
    const children = () => props.children;
    return (
        <div class={''}>
            <div>
                <div class={'glass h-[540px]  w-[65dvw] max-w-[800px] flex flex-col'}>
                    <div class={"w-[65dvw] max-w-[800px] flex justify-end items-center"}>
                        {children()}
                    </div>
                    <div class={" flex justify-start py-5 pr-5 items-start"}>
                        <ul role="list" aria-labelledby={title()}
                            class="flex flex-col space-y-4 w-full">
                            <For each={list()}>
                                {(item, index) => (
                                    <Show when={index() < 15}>
                                        <li class="px-5 flow-root">
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
                                    <Show when={index() > 14 && index() < 30}>
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
                                    <Show when={index() > 29}>
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
        </div>
    );
};

export default MenuLeftImagesRight;


