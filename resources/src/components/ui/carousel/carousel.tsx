import {Accessor, Component, For, Index, JSX, Match, Switch} from "solid-js"

import {Card, CardContent, CardFooter, CardHeader} from "~/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "~/components/ui/carousel"


export type CarouselItemProps = {
    title: string
    description: string
    cta: string
    href?: string
    src?: string
    side?: "top" | "bottom" | "both"
}

type PROPS = {
    list?: CarouselItemProps[]
    children: (item: Accessor<CarouselItemProps>, index: number) => JSX.Element;
}

const BaseCarousel:Component<PROPS> = props => {

    const list: () => CarouselItemProps[] = () => props.list ?? [
        {
            title: "Title",
            description: "description",
            cta: "cta",
            href: "#",
            src: "storage/cta_sports_pack_1.png",
        }
    ];

    return (
        <Carousel
            opts={{
                align: "start"
            }}
            class="w-full h-full"
        >
            <CarouselContent>
                <Index each={list()}>
                    {props.children}
                </Index>
            </CarouselContent>
        </Carousel>
    )
}

export default BaseCarousel;





const CarouselItemCard: Component<CarouselItemProps> = props => {

    const title = () => props.title;
    const description = () => props.description;
    const cta = () => props.cta;
    const href = () => props.href;
    const src = () => props.src;

    const side = () => props.side ?? "top";

    return (
        <CarouselItem class="basis-full">
            <div class="p-1">
                <Card class={'h-[80dvh] bg-white/40 relative'}>

                    <CardContent class="relative flex w-full h-[80dvh] items-center justify-center">
                        <img src={src()} class={'absolute inset-0 rounded-lg p-0.5 w-full h-full object-cover'} alt={""}/>
                    </CardContent>

                    <Switch>
                        <Match when={side() === "top"}>
                    <CardHeader
                        class={'absolute top-0 w-full p-2  bg-white/40 glass rounded-t-lg'}>
                        <div class="flex-1 px-6 py-2 rounded-b-lg">
                            <div class="font-bold text-xl mb-2">{title()}</div>
                            <p class="text-gray-700 text-base">
                                {description()}
                            </p>
                        </div>
                    </CardHeader>
                        </Match>
                        <Match when={side() === "bottom"}>
                    <CardFooter
                        class={'absolute bottom-0 w-full p-2 bg-white/40 glass rounded-b-lg'}>
                        <div class="flex-1 px-6 py-4 rounded-b-lg">
                            <div class="font-bold text-xl mb-2">{title()}</div>
                            <p class="text-gray-700 text-base">
                                {description()}
                            </p>
                        </div>
                    </CardFooter>
                        </Match>


                        <Match when={side() === "both"}>
                            <CardHeader
                                class={'absolute top-0 w-full p-2  bg-white/40 glass rounded-t-lg'}>
                                <div class="flex-1 px-6 py-2 rounded-b-lg">
                                    <div class="font-bold text-xl mb-2">{title()}</div>
                                    <p class="text-gray-700 text-base">
                                        {description()}
                                    </p>
                                </div>
                            </CardHeader>
                            <CardFooter
                                class={'absolute bottom-0 w-full p-2 bg-white/40 glass rounded-b-lg'}>
                                <div class="flex-1 px-6 py-4 rounded-b-lg">
                                    <div class="font-bold text-xl mb-2">{title()}</div>
                                    <p class="text-gray-700 text-base">
                                        {description()}
                                    </p>
                                </div>
                            </CardFooter>
                        </Match>
                    </Switch>
                </Card>
            </div>
        </CarouselItem>
    );
};

export {CarouselItemCard};
