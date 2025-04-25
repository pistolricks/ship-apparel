import {Component, For, JSXElement, Show} from "solid-js";
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
                <div class={'h-[588px]  min-w-full flex flex-col'}>
                    <div class={" min-w-full flex justify-end items-center"}>
                        {children()}
                    </div>
                    <div class={" flex justify-start py-5 pr-5 items-start"}>
                        <ul role="list" aria-labelledby={title()}
                            class="flex flex-col space-y-4 w-full">
                            <For each={list()}>
                                {(item, index) => (
                                    <Show when={index() < 13}>
                                        <li class="px-5 flow-root">
                                            <A href={item.href}
                                               class="-m-2   block p-2 text-gray-700">{item.title}</A>
                                        </li>
                                    </Show>
                                )}
                            </For>
                        </ul>

                        <ul role="list" aria-labelledby={title()}
                            class="flex flex-col space-y-4 w-full">
                            <For each={list()}>
                                {(item, index) => (
                                    <Show when={index() > 12 && index() < 26}>
                                        <li class="flow-root">
                                            <A href={item.href}
                                               class="-m-2   block p-2 text-gray-700">{item.title}</A>
                                        </li>
                                    </Show>
                                )}
                            </For>
                        </ul>
                        <ul role="list" aria-labelledby={title()}
                            class="flex flex-col space-y-4 w-full">
                            <For each={list()}>
                                {(item, index) => (
                                    <Show when={index() > 25}>
                                        <li class="flow-root">
                                            <A href={item.href}
                                               class="-m-2   block p-2 text-gray-700">{item.title}</A>
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


