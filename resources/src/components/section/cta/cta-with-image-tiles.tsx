import {Component, JSXElement} from "solid-js";
import {A} from "@solidjs/router";

type PROPS = {
    images?: string[]
    children?: JSXElement;
}

const CtaWithImageTiles: Component<PROPS> = props => {

    const images = () => props.images ?? [
        "storage/cta_group_1.webp",
        "storage/cta_merchandise_1.jpg",
        "storage/cta_sports_pack_1.png",
        "storage/cta_kid_1.jpg",
        ];

    const children = () => props.children;
    return (
        <div class="overflow-hidden py-12">
            <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div
                    class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                    {children()}
                    <div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                        <div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                            <img
                                src={images()?.[0]}
                                alt="" class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"/>
                        </div>
                        <div
                            class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                            <div class="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                <img
                                    src={images()?.[1]}
                                    alt=""
                                    class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"/>
                            </div>
                            <div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                <img
                                    src={images()?.[2]}
                                    alt=""
                                    class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"/>
                            </div>
                            <div class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                <img
                                    src={images()?.[3]}
                                    alt=""
                                    class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CtaWithImageTiles;
