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
        <div class="bg-white">
            <div class="mx-auto max-w-7xl">
                <div class="relative overflow-hidden">
                    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="absolute inset-0">
                        <img
                            src={src()}
                            alt="" class="size-full object-cover"/>
                    </div>
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
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromoWithBackgroundImage;
