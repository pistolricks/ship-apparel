import {Component} from "solid-js";
import {A} from "@solidjs/router";

export type ImageSet = {
    first: string;
    second: string;
}

type PROPS = {
    title: string;
    description: string;
    cta: string;
    href?: string;
    images?: ImageSet[];
}

const PromoWithTileOverlap: Component<PROPS> = props => {

    const title = () => props.title;
    const description = () => props.description;
    const cta = () => props.cta;
    const href = () => props.href ?? "#";
     const images = () => props.images ?? [
        {
            first: "storage/promo_woman_1.jpeg",
            second: "storage/promo_woman_2.jpeg",
        },
        {
            first: "storage/promo_woman_2.jpeg",
            second: "storage/promo_woman_1.jpeg",
        },
        {
            first: "storage/promo_woman_1.jpeg",
            second: "storage/promo_woman_2.jpeg",
        }
    ];


    return (
        <div class="bg-white">
            <div class="overflow-hidden">
                <div class="bg-gray-800">
                    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div class="relative pb-16 pt-48 sm:pb-24">
                            <div>
                                <h2 id="sale-heading" class="text-4xl font-bold tracking-tight text-white md:text-5xl">
                                    {title()}
                                </h2>
                                <h3 class="text-xl font-semibold tracking-tight text-white">
                                    {description()}
                                </h3>
                                <div class="mt-6 text-base">
                                    <A href={href()} class="font-semibold text-white">
                                        {cta()}
                                        <span aria-hidden="true"> &rarr;</span>
                                    </A>
                                </div>
                            </div>

                            <div
                                class="absolute -top-32 left-1/2 min-w-max -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                                <div class="ml-24 flex space-x-6 sm:ml-3 lg:space-x-8">

                                    <div class="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                        <div class="shrink-0">
                                            <img class="size-64 rounded-lg object-cover md:size-72"
                                                 src={images()?.[0]?.first}
                                                 alt=""/>
                                        </div>

                                        <div class="mt-6 shrink-0 sm:mt-0">
                                            <img class="size-64 rounded-lg object-cover md:size-72"
                                                 src={images()?.[0]?.second}
                                                 alt=""/>
                                        </div>
                                    </div>
                                    <div
                                        class="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                        <div class="shrink-0">
                                            <img class="size-64 rounded-lg object-cover md:size-72"
                                                 src={images()?.[1]?.first}
                                                 alt=""/>
                                        </div>

                                        <div class="mt-6 shrink-0 sm:mt-0">
                                            <img class="size-64 rounded-lg object-cover md:size-72"
                                                 src={images()?.[1]?.second}
                                                 alt=""/>
                                        </div>
                                    </div>
                                    <div class="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                        <div class="shrink-0">
                                            <img class="size-64 rounded-lg object-cover md:size-72"
                                                 src={images()?.[2]?.first}
                                                 alt=""/>
                                        </div>

                                        <div class="mt-6 shrink-0 sm:mt-0">
                                            <img class="size-64 rounded-lg object-cover md:size-72"
                                                 src={images()?.[2]?.second}                                              alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PromoWithTileOverlap;
