import {createMemo, Index} from "solid-js"

import { Card, CardContent } from "~/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "~/components/ui/carousel"
import {MenuItemType} from "~/lib/types";

type PROPS = {
    isCollection?: boolean
    list: MenuItemType[]
    start?: number
    end?: number
    class?: string
}

export function CarouselCard(PROPS) {

    const  isCollection = () => props.isCollection ?? false;
    const list = () => props.list;
    const start = () => props.start ?? 0;
    const end = () => props.end ?? list()?.length;

    const className = () => props.class;

    const menu = createMemo(() => list()?.slice(start(), end()))

    console.log('contents' , list())

    return (
        <Carousel
            opts={{
                align: "start"
            }}
            class="w-full max-w-sm"
        >
            <CarouselContent>

                <Show
                    fallback={
                        <Index each={menu()}>
                            {(item, index) => (
                                <CarouselItem class="h-full w-full">
                                    <div class="p-1">
                                        <Card>
                                            <CardContent class="flex w-full h-full items-center justify-center p-6">
                                                <img src={item.src} class="h-full w-full object-cover" alt={''} />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            )}
                        </Index>
                    }
                    when={isCollection()}>
                    <Index each={menu()}>
                        {(item, index) => (
                            <CarouselItem class="h-full w-full">
                                <div class="p-1">
                                    <Card>
                                        <CardContent class="flex aspect-square items-center justify-center p-6">
                                            <img src={item.src} alt={''} />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        )}
                    </Index>
                </Show>


            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
