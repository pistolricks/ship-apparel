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

            <NavigationMenu class={'shadow'} orientation={orientation()}>

                <img
                    src="https://ink-and-thread.com/cdn-cgi/imagedelivery/jYAILuSxmZBHJW3H5LQP5g/9d3d236f-83da-4094-7b64-850936c9db00/public"
                    class={'absolute top-0 object-cover right-0  align-right backdrop-opacity-25  w-full -z-10 h-[540px]'}
                    alt=""
                />
                <For<MenuItemType[]> each={menu()}>
                    {(item) => (
                        <NavigationMenuItem >

                            <NavigationMenuTrigger class={'w-56 font-medium tracking-wide'}>
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
