import {Component} from "solid-js";
import {A} from "@solidjs/router";

export type CategorySetProps = {
    title: string;
    cta: string;
    href: string;
    src?: string;
}

type PROPS = {
    categories?: CategorySetProps[];
}

const Category1c2c: Component<PROPS> = props => {

    const categories = () => props.categories ?? [
        {
            title: "Sports",
            cta: "Shop Now",
            href: "#",
            src: "storage/category_sports_1.jpg"
        },
        {
            title: "Uniforms",
            cta: "Shop Now",
            href: "#",
            src: "storage/category_uniforms_1.png"
        },
        {
            title: "Reversible Hoodies",
            cta: "Shop Now",
            href: "#",
            src: "storage/promo_reversible_2.gif"
        }
    ]

    return (
        <div class="mt-2 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-2 lg:gap-2">
            <div class="group relative aspect-[2/1] overflow-hidden sm:row-span-2 sm:aspect-square">
                <img src={categories()?.[0]?.src}
                     alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                     class="absolute size-full object-cover group-hover:opacity-75"/>
                <div aria-hidden="true"
                     class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                <div class="absolute inset-0 flex items-end p-6">
                    <div>
                        <h3 class="font-semibold text-white">
                            <A href={categories()?.[0]?.href}>
                                <span class="absolute inset-0"></span>
                                {categories()?.[0]?.title}
                            </A>
                        </h3>
                        <p aria-hidden="true" class="mt-1 text-sm text-white">{categories()?.[0]?.cta}</p>
                    </div>
                </div>
            </div>
            <div class="group relative aspect-[2/1] overflow-hidden sm:aspect-auto">
                <img src={categories()?.[1]?.src}
                     alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                     class="absolute size-full object-cover group-hover:opacity-75"/>
                <div aria-hidden="true"
                     class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                <div class="absolute inset-0 flex items-end p-6">
                    <div>
                        <h3 class="font-semibold text-white">
                            <A href={categories()?.[1]?.href}>
                                <span class="absolute inset-0"></span>
                                {categories()?.[1]?.title}
                            </A>
                        </h3>
                        <p aria-hidden="true" class="mt-1 text-sm text-white">{categories()?.[1]?.cta}</p>
                    </div>
                </div>
            </div>
            <div class="group relative aspect-[2/1] overflow-hidden sm:aspect-auto">
                <img src={categories()?.[2]?.src}
                     alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                     class="absolute size-full object-cover group-hover:opacity-75"/>
                <div aria-hidden="true"
                     class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                <div class="absolute inset-0 flex items-end p-6">
                    <div>
                        <h3 class="font-semibold text-white">
                            <A href={categories()?.[2]?.href}>
                                <span class="absolute inset-0"></span>
                                {categories()?.[2]?.title}
                            </A>
                        </h3>
                        <p aria-hidden="true" class="mt-1 text-sm text-white">{categories()?.[2]?.cta}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Category1c2c;
