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
        <div class="flex flex-col items-left space-y-4">
            <NavigationMenu orientation={orientation()}>


                <For<MenuItemType[]> each={menu()}>
                    {(item) => (
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                {item.title}
                            </NavigationMenuTrigger>

                            <NavigationMenuContent class="sm:h-[45dvh]">

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
