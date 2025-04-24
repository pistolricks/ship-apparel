import {Component, createSelector, createSignal, For, Match, Show, Switch} from "solid-js"

import type {Orientation} from "@kobalte/core/navigation-menu"
import {ContentItemType, MenuItemType} from "~/lib/types";
import MenuLeftImagesRight from "~/components/section/menu/menu-left-images-right";
import {Tabs, TabsContent, TabsList} from "~/components/ui/tabs";
import {Grid} from "~/components/ui/grid";
import {A, useLocation} from "@solidjs/router";
import {CircleX} from "lucide-solid";
import {cn} from "~/lib/utils";
import style from "~/components/ui/tab/tabs.module.css";
import { Frame } from '@ark-ui/solid'


type PROPS = {
    menu: MenuItemType[]
    slides: ContentItemType[]
    orientation?: Orientation;
}

const ApparelNavigation: Component<PROPS> = props => {
    const location = useLocation();


    const menu = () => props.menu;
    const slides = () => props.slides;


    const [getTitle, setTitle] = createSignal<string>("")

    const handleSelect = (data: string) => {
        console.log("Data:", data);
        setTitle(() => data)


    };

    const handleDeselect = (data: string, event: Event) => {
        console.log("Data:", data);
        setTitle(() => data)
    }

    const isSelected = createSelector(getTitle)



    return (

        <div class="block relative h-[540px] bg-black w-full  items-left space-y-4">

            <Tabs class={'absolute z-10 h-full w-full'} value={getTitle()} onChange={setTitle}
                  orientation={"horizontal"}>
                <div class={"absolute z-40 w-full h-full flex justify-start shadow"}>
                    <TabsList class="flex flex-col items-center text-left w-40 z-40">
                        <For each={menu()?.[0]?.sub}>
                            {(item: MenuItemType) => (
                                <A
                                    href={item.href}
                                    class={cn(
                                        style.tabs__trigger,
                                        isSelected(item.title) ? "activeClass"  : "text-gray-500",
                                        "group/trigger inline-flex h-9 w-full items-center justify-start whitespace-nowrap   bg-gray-100 px-4 py-2 text-xs transition-colors hover:text-content focus:bg-bgBase/50 focus:text-content focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-secondary/50 data-[expanded]:bg-bgBase"
                                    )}
                                    on:mouseover={(event) => {
                                        event.stopPropagation()
                                        handleSelect(item.title)
                                    }}


                                >
                                    {item.title}
                                </A>


                            )}
                        </For>
                    </TabsList>
                    <div class={"aspect-14/10 absolute inset-y-0 right-0 z-0 flex justify-end items-center"}>
                        <iframe
                            title={"Sports"}
                            src="https://paneflow.com/share/green-christal-84"
                            class="absolute inset-0 w-full h-full"
                        >
                        </iframe>

                    </div>
                    <Grid cols={3} class="relative h-[540px] w-full overflow-x-hidden">
                        <For each={menu()?.[0]?.sub}>
                            {(item: MenuItemType) => (
                                <TabsContent value={item.title} class="">

                                    <Switch>
                                        <Match when={getTitle() !== item.title}>
                                            <div class={"aspect-16/10"}>


                                            </div>
                                        </Match>
                                        <Match when={isSelected(item.title)}>
                                            <div class="relative h-full w-full">
                                                <MenuLeftImagesRight title={item.title}
                                                                     href={item.href}
                                                                     list={item?.sub}
                                                >
                                                    <Show when={getTitle() !== ""}>
                                                        <div
                                                            class={"w-[65dvw] h-8 flex items-center justify-between glass_primary px-4 bg-blue-50"}>

                                                            <button onClick={() => handleSelect("")} value={item.title}
                                                                    class={"flex justify-center items-center pr-4"}>
                                                                <CircleX
                                                                    class={"size-4 text-gray-500 hover:text-red-300"}/>
                                                            </button>

                                                            <A
                                                                class={"uppercase tracking-widest hover:text-red-300"}
                                                                href={item.href}>
                                                                {item.title}
                                                            </A>
                                                        </div>
                                                    </Show>

                                                </MenuLeftImagesRight>


                                            </div>
                                        </Match>
                                    </Switch>
                                </TabsContent>
                            )}
                        </For>

                    </Grid>
                </div>

            </Tabs>

        </div>

    )
}

export {ApparelNavigation}
