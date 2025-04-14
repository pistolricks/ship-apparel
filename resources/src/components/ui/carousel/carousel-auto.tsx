import {Index, Show} from "solid-js"

import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "~/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "~/components/ui/carousel"
import {MenuItemType} from "~/lib/types";

export function CarouselAuto(props: { slides: MenuItemType[] }) {

    const slides = () => props.slides ?? Array.from({ length: 5 });

    const plugin = Autoplay({ delay: 4000, stopOnInteraction: true })
    return (
        <Carousel
            plugins={[plugin]}
            class="w-full h-full p-0"
            onMouseEnter={plugin.stop}
            onMouseLeave={() => plugin.play(false)}
        >
            <CarouselContent>
                <Index<MenuItemType[]> each={slides()}>
                    {(item, index) => (
                        <CarouselItem class="overflow-y-hidden">
                            <Show<boolean>
                                fallback={
                                    <div class="flex h-[540px] min-w-full items-center justify-center border border-gray-100">
                                        <span class="text-4xl font-semibold">{index + 1}</span>
                                    </div>
                                }
                                when={!!item}>
                              <img class="h-[540px] w-full object-cover" src={"//sanmarsports.com/cdn/shop/files/SanMar-Sports-HP_Slide-D-Fanwear_2337x1569_761e3de2-50c3-43ce-b6ea-958f600debe9.jpg"} alt={item.name}/>
                            </Show>

                        </CarouselItem>
                    )}
                </Index>
            </CarouselContent>

        </Carousel>
    )
}
