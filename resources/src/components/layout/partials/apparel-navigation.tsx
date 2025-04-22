import {Component, createSelector, createSignal, For, Match, Show, Switch} from "solid-js"

import type {Orientation} from "@kobalte/core/navigation-menu"
import {ContentItemType, MenuItemType} from "~/lib/types";
import MenuLeftImagesRight from "~/components/section/menu/menu-left-images-right";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "~/components/ui/tabs";
import {Grid} from "~/components/ui/grid";
import {A} from "@solidjs/router";
import Icon from "~/components/ui/icon";


type PROPS = {
    menu: MenuItemType[]
    slides: ContentItemType[]
    orientation?: Orientation;
}

const ApparelNavigation: Component<PROPS> = props => {

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

        <div class="hidden sm:block relative h-[540px] w-full  items-left space-y-4">

            <Tabs class={'max-h-[540px] flex justify-start w-full shadow'} orientation={"horizontal"}>


                <TabsList class="flex flex-col items-center text-left">
                    <For each={menu()?.[0]?.sub}>
                        {(item: MenuItemType) => (


                            <TabsTrigger on:mouseover={(event) => {
                                event.stopPropagation()
                                handleSelect(item.title)
                            }} as={A} type="button"
                                         href={item.href}
                                         class={'w-40 font-medium tracking-wide'} value={getTitle()}>
                                {item.title}
                            </TabsTrigger>
                        )}
                    </For>
                </TabsList>
                <div class={"h-[540px] absolute inset-y-0 right-0 w-[87svw] flex justify-end items-center"}>
                    <div
                        class="relative h-[540px] w-4/5 bg-cyan-500 flex flex-col justify-center items-center text-white">
                        <p class={"absolute top-0 py-5 text-base  text-yellow-200 uppercase"}>
                            Custom Branded Gear
                        </p>
                        <h1 class="text-[2.8rem] font-bold">
                            Brands You Love!
                        </h1>
                        <p class={"text-lg text-pretty px-4 text-center"}>
                            Bring your organization's pride to life on your favorite brands. From screen printing to
                            embroidery, heat press, and DTG printing. We offer endless options to showcase your team
                            cultures spirit.
                        </p>
                    </div>
                    <img class="w-7/12 h-full object-cover"
                         src={"https://ink-and-thread.com/storage/assets/4_21_lp/LST420LS_LIGHT BLUE_Multi_Model_SPRING24_1.2195_1565_504_235.2184_1404_4_26.jpg"}
                         alt={""}/>
                </div>
                <Grid cols={3} class="relative h-[540px] w-full overflow-x-hidden">
                    <For each={menu()?.[0]?.sub}>
                        {(item: MenuItemType) => (
                            <TabsContent value={item.title} class="">

                                <Switch>
                                    <Match when={getTitle() !== item.title}>
                                        <div class={"w-[75dvw] md:w-[85dvw] lg:w-[90dvw]"}>


                                        </div>
                                    </Match>
                                    <Match when={isSelected(item.title)}>
                                        <div class="p-5">
                                            <MenuLeftImagesRight title={item.title} href={item.href} list={item?.sub}/>


                                        </div>
                                    </Match>
                                </Switch>
                            </TabsContent>
                        )}
                    </For>

                </Grid>
                <Show when={getTitle() !== ""}>
                    <TabsTrigger onClick={() => handleSelect("")} value={getTitle()}
                                 class={"absolute bottom-0 right-0 w-12 bg-transparent cursor-pointer m-2"}>
                        <Icon name={"CircleX"} class={"size-8 text-gray-500"}/>
                    </TabsTrigger>
                </Show>
            </Tabs>

        </div>

    )
}

export {ApparelNavigation}
