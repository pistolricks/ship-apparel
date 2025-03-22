import {Component, For} from "solid-js";
import { MenuItemType } from "~/lib/types";

type PROPS = {
    list: MenuItemType[]
}

const LogoCloud: Component<PROPS> = props => {
    const list = () => props.list;
    return (
        <section class="py-16 bg-white dark:bg-gray-950">
            <div class="max-w-5xl m-auto px-6">
                <h2 class="text-lg text-center text-title font-medium">Your favorite companies are our partners.</h2>
                <div
                    class="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
                    <For each={list()}>
                        {(item) => (
                            <img class="h-5 w-fit dark:invert" src={item.src} alt="Nvidia Logo" height="20"
                                 width="auto"/>
                        )}

                    </For>
                </div>
            </div>
        </section>
    );
};

export default LogoCloud;
