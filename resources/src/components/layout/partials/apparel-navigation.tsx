import {Component, createSelector, createSignal, For, JSX, Match, Show, Switch} from "solid-js"

import type {Orientation} from "@kobalte/core/navigation-menu"
import {ContentItemType, MenuItemType} from "~/lib/types";
import MenuLeftImagesRight from "~/components/section/menu/menu-left-images-right";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "~/components/ui/tabs";
import {Grid} from "~/components/ui/grid";
import {A} from "@solidjs/router";
import {CarouselAuto} from "~/components/ui/carousel/carousel-auto";



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
        setTitle(data)
    }

    const isSelected = createSelector(getTitle)


    return (

        <div class="relative h-[540px] w-full  items-left space-y-4">

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

                <Grid cols={3} class="relative h-[540px] w-full overflow-x-hidden">
                    <For each={menu()?.[0]?.sub}>
                        {(item: MenuItemType) => (
                            <TabsContent value={item.title} class="">
                                <Switch>
                                    <Match when={getTitle() !== item.title}>
                                        <div class={ "w-[75dvw] md:w-[85dvw] lg:w-[90dvw]" }>
                                            <CarouselAuto slides={slides()} />
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

            </Tabs>

        </div>

    )
}

export {ApparelNavigation}
