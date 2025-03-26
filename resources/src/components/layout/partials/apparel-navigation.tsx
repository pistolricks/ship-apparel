import {Component, createSignal, For} from "solid-js"

import type {Orientation} from "@kobalte/core/navigation-menu"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuTrigger
} from "~/components/ui/navigation-menu"
import {MenuItemType} from "~/lib/types";
import MenuLeftImagesRight from "~/components/section/menu/menu-left-images-right";


type PROPS = {
    menu: MenuItemType[]
    orientation?: Orientation;
}

const ApparelNavigation: Component<PROPS> = props => {

    const menu = () => props.menu;

    const oz = () => props.orientation ?? "horizontal"

    const [orientation, setOrientation] = createSignal<Orientation>(oz())

    return (

            <div class="relative h-[540px] flex flex-col items-left space-y-4">

                <NavigationMenu class={'max-h-[540px] shadow'} orientation={orientation()}>

                    <img
                        src={menu()?.[0]?.src}
                        class={'absolute top-0 object-cover right-0 object-top align-right backdrop-opacity-25  w-7/8 -z-10 h-[540px]'}
                        alt=""
                    />
                    <For<MenuItemType[]> each={menu()?.[0]?.sub}>
                        {(item) => (
                            <NavigationMenuItem>

                                <NavigationMenuTrigger class={'w-40 font-medium tracking-wide'}>
                                    {item.title}
                                </NavigationMenuTrigger>

                                <NavigationMenuContent class="h-[530px]">

                                    <MenuLeftImagesRight title={item.title} href={item.href} list={item?.sub}/>

                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        )}
                    </For>

                </NavigationMenu>

            </div>

    )
}

export {ApparelNavigation}
