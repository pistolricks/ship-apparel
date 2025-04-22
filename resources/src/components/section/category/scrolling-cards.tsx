import {Component, For} from "solid-js";
import { MenuItemType } from "~/lib/types";
import {A} from "@solidjs/router";




const ScrollingCards: Component<{
    categories: {name: string, href: string, src: string, width: number, height: number}[]
}> = props => {
    const categories = () => props.categories;


    return (
        <div class="bg-white">
            <div class=" xl:mx-auto max-w-7xl ">
                <div class="mt-4 flow-root">
                    <div class="-my-2">
                        <div class="relative box-content overflow-hidden py-2 xl:overflow-visible">
                            <div
                                class="absolute flex space-x-4 relative">
                                <For each={categories()}>
                                    {(category) => (
                                        <A
                                            style={{
                                                width: `${category.width}px`,
                                                height: `${category.height}px`,
                                            }}
                                            href={category.href}
                                            class="relative flex  flex-col overflow-hidden rounded-lg p-6 hover:opacity-75"
                                        >
                                              <span aria-hidden="true" class="absolute inset-0">
                                                <img alt="" src={category.src} class="size-full object-cover"/>
                                              </span>
                                            <span
                                                aria-hidden="true"
                                                class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                                            />
                                            <span
                                                class="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                                        </A>
                                    )}
                                </For>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export {ScrollingCards};
