import {Component, JSXElement} from "solid-js";
import CtaText from "~/components/section/cta/cta-text";

const PromoTextImage: Component<{
    title: string;
    description?: string;
    information?: string;
    cta?: string;
    href?: string;
   src: string;
   class?: string;
   children?: JSXElement;
}> = props => {


    const title = () => props.title ?? "Browse Our Vast Product Line";
    const description = () => props.description ?? "Find Any Brand/Style From Our Top Catalogs";
    const information = () => props.information ??  "Representing the top 50 brands with over 2,890 styles, including 458 new trending styles."
    const cta = () => props.cta ??  "Shop";
    const href = () => props.href ?? "#";

    const src= () => props.src;
    const className = () => props.class ?? ' lg:hidden glass';
    const children = () => props.children;
    return (
        <div class="relative overflow-hidden py-12">
            <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div
                    class="mx-auto min-h-[336px] grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">


                    {children()}

                        <div class={`absolute inset-x-0 z-10 p-4 bottom-0`}>
                        <CtaText
                            class={className()}
                            title={title()}
                            description={description()}
                            information={information()}
                            cta={cta()}
                        />
                        </div>

                    <div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                        <div class="flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                            <img
                                src={src()}
                                alt="" class="hidden lg:block aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"/>
                            <div class="absolute inset-0 lg:hidden">
                                <img
                                    src={src()}
                                    alt="" class="size-full object-cover"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default PromoTextImage;
