import {Component, For, Show} from "solid-js";
import list from "~/components/list/list";
import {MenuItemType} from "~/lib/types";
import {A} from "@solidjs/router";

type PROPS = {
    title: string;
    href: string;
    list?: MenuItemType[]
}

const MenuLeftImagesRight: Component<PROPS> = props => {

    const title = () => props.title;
    const href = () => props.href;
    const list = () => props.list;

    return (
        <div>
            <div id="tabs-1-panel-1" class="space-y-10 px-4 pb-8 pt-6" aria-labelledby="tabs-1-tab-1" role="tabpanel"
                 tabindex="0">
                <div class={'w-full flex justify-start items-start space-x-14'}>
                    <ul role="list" aria-labelledby={title()}
                        class="flex flex-col space-y-6">
                        <For each={list()}>
                            {(item, index) => (
                                <Show when={index() < 12}>
                                    <li class="flow-root">
                                        <A href={item.href} class="-m-2 rounded hover:bg-amber-100/50 hover:text-amber-600  focus:bg-white/25 focus:text-amber-700 block p-2 text-gray-700">{item.title}</A>
                                    </li>
                                </Show>
                            )}
                        </For>
                    </ul>
                    <ul role="list" aria-labelledby={title()}
                        class="flex flex-col space-y-6">
                        <For each={list()}>
                            {(item, index) => (
                                <Show when={index() > 11 && index() < 24}>
                                <li class="flow-root">
                                   <A href={item.href} class="-m-2 rounded hover:bg-amber-100/50 hover:text-amber-600  focus:bg-white/25 focus:text-amber-700 block p-2 text-gray-700">{item.title}</A>
                                </li>
                                </Show>
                            )}
                        </For>
                    </ul>
                    <ul role="list" aria-labelledby={title()}
                        class="flex flex-col space-y-6">
                        <For each={list()}>
                            {(item, index) => (
                                <Show when={index() > 23}>
                                    <li class="flow-root">
                                       <A href={item.href} class="-m-2 rounded hover:bg-amber-100/50 hover:text-amber-600  focus:bg-white/25 focus:text-amber-700 block p-2 text-gray-700">{item.title}</A>
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
