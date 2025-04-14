import { Index } from "solid-js"

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
                    {(_, index) => (
                        <CarouselItem>
                                <div class="flex h-[540px] min-w-full items-center justify-center border border-gray-400">
                                        <span class="text-4xl font-semibold">{index + 1}</span>
                                </div>
                        </CarouselItem>
                    )}
                </Index>
            </CarouselContent>

        </Carousel>
    )
}
