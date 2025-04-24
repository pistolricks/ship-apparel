import {Component, createSelector, createSignal, For, Match, Show, Switch} from "solid-js"


import {ContentItemType, MenuItemType} from "~/lib/types";
import MenuLeftImagesRight from "~/components/section/menu/menu-left-images-right";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "~/components/ui/tabs";
import {Grid} from "~/components/ui/grid";
import {A} from "@solidjs/router";
import {CircleX} from "lucide-solid";


type PROPS = {
    menu: MenuItemType[]
    slides: ContentItemType[]
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

        <div class="block relative h-[540px] w-full  items-left space-y-4">

            <Tabs class={'absolute z-10 h-full w-full'} orientation={"horizontal"}>
                <div class={"absolute z-40 w-full h-full flex justify-start shadow"}>
                    <TabsList class="flex flex-col items-center text-left w-40 z-40">
                        <For each={menu()?.[0]?.sub}>
                            {(item: MenuItemType) => (


                                <TabsTrigger on:mouseover={(event) => {

                                    handleSelect(item.title)
                                }} as={A} type="button"
                                             href={item.href}
                                             class={'font-medium tracking-wide'} value={item.title}>
                                    {item.title}
                                </TabsTrigger>
                            )}
                        </For>
                    </TabsList>
                    <div class={"aspect-14/10 absolute inset-y-0 right-0 z-0 flex justify-end items-center"}>
                        <img class="w-full h-full object-cover"
                             src={"https://ink-and-thread.com/storage/assets/4_21_lp/slider_1.png"}
                             alt={""}/>


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
                                                        <TabsTrigger
                                                            class={"w-[65dvw] h-8 flex items-center justify-center glass"}
                                                            onClick={() => handleSelect("")} value={item.tit}
                                                        >
                                                            <div class={"flex justify-between items-center pr-4"}>
                                                                <CircleX
                                                                    class={"size-4 text-gray-500 hover:text-red-300"}/>
                                                                <span class={"uppercase"}>{item.title}</span>
                                                            </div>
                                                        </TabsTrigger>
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
