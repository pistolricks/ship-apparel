import {Component, createSelector, createSignal, For, Match, Show, Switch} from "solid-js"

import type {Orientation} from "@kobalte/core/navigation-menu"
import {MenuItemType} from "~/lib/types";
import MenuLeftImagesRight from "~/components/section/menu/menu-left-images-right";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "~/components/ui/tabs";
import {Grid} from "~/components/ui/grid";
import {A} from "@solidjs/router";
import {CarouselAuto} from "~/components/ui/carousel/carousel-auto";


type PROPS = {
    menu: MenuItemType[]
    slides: MenuItemType[]
    orientation?: Orientation;
}

const ApparelNavigation: Component<PROPS> = props => {

    const menu = () => props.menu;
    const slides = () => props.slides;


    const [getTitle, setTitle] = createSignal<string>("")

    const handleSelect = (data: string) => {
        console.log("Data:", data);
        getTitle() === data ? setTitle("") : setTitle(data)

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


                            <TabsTrigger as={"button"} type="button"
                                         onClick={() => handleSelect(item.title)}
                                         class={'w-40 font-medium tracking-wide'} value={item.title}>
                                {item.title}
                            </TabsTrigger>
                        )}
                    </For>
                </TabsList>

                <Grid cols={3} class="relative h-[540px] overflow-x-hidden">
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
                                            <div class="w-full h-12">
                                                <A href={item.href}
                                                   class="animate animate-out fade-out-75 -m-2 rounded hover:bg-amber-100/50 hover:text-amber-600 font-semibold focus:bg-white/25 focus:text-amber-700 block p-2 text-gray-700">{item.title}</A>
                                            </div>
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
