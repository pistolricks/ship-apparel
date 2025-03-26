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

export function CarouselCard(props: PROPS) {


    const list = () => props.list;
    const images = () => props.list?.images;
    const start = () => props.start ?? 0;
    const end = () => props.end ?? list()?.length;

    const className = () => props.class;


    const menu = createMemo(() => list()?.slice(start(), end()))




    console.log('contents' , menu())

    return (
        <Carousel
            opts={{
                align: "start"
            }}
            class={className()}>
            <CarouselContent>
                <Index each={menu()}>
                    {(item, index) => (
                        <CarouselItem class={`${className()}}`}>

                            <div class={list()[index]?.class}>
                                        <img src={list()[index]?.src} class={className()} alt={''} />
                            </div>
                        </CarouselItem>
                    )}
                </Index>

            </CarouselContent>
        </Carousel>
    )
}
