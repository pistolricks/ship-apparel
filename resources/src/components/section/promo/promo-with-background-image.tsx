import {Component} from "solid-js";
import {A} from "@solidjs/router";

type PROPS = {
    title: string;
    description: string;
    cta: string;
    href?: string;
    src?: string;
}

const PromoWithBackgroundImage: Component<PROPS> = props => {
    const title = () => props.title;
    const description = () => props.description;
    const cta = () => props.cta;
    const href = () => props.href ?? "#";
    const src = () => props.src ?? "storage/promo_basketball_1.png";
    return (
        <div class="relative">


            <div class="overflow-hidden">
                <div class="absolute inset-0">
                    <img
                        src={src()}
                        alt="" class="size-full object-cover"/>
                </div>
                <div class="bg-linear-to-b  pt-32 sm:pt-14 from-[#fccb90] to-bg-gray-800/25">

                    <div class="mx-auto max-w-7xl sm:px-4 lg:px-8">
                        <div class="relative px-2 sm:px-0 pb-16 pt-32 xl:pt-48 sm:pb-24">
                            <div>
                                <h2 id="sale-heading" class="text-4xl font-bold tracking-tight text-white/80 md:text-5xl">
                                    {title()}
                                </h2>
                                <h3 class="text-xl font-semibold tracking-tight text-white/80">
                                    {description()}
                                </h3>
                                <div class="mt-6 text-base">
                                    <A href={href()} class="font-semibold text-white">
                                        {cta()}
                                        <span aria-hidden="true"> &rarr;</span>
                                    </A>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PromoWithBackgroundImage;
