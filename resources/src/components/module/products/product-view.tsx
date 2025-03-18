import {IconCircle, IconCreditCard, IconStar, IconX} from "~/components/svg";
import {Component, createSelector, createSignal, For, Show} from "solid-js";
import {RadioGroup, RadioGroupItem} from "~/components/ui/radio-group/radio-group";
import Drawer from "@corvu/drawer";
import {SM_PRODUCT} from "~/lib/types";


const policies = [
    {name: 'International delivery', icon: IconCircle, description: 'Get your order in 2 years'},
    {name: 'Loyalty rewards', icon: IconCreditCard, description: "Don't look at other tees"},
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export type ProductImageType = {
    id: number,
    src: string,
    alt: string,
}

export type ProductColorType = {
    name: string;
    bgColor: string;
    selectedColor: string;
}

export type ProductSizesType = "XXS" | "XS" | "S" | "M" | "L" | "XL" | "NA"

export type ProductSizeType = {
    name: ProductSizesType,
    inStock: boolean
}


const ProductView: Component<{
    product: SM_PRODUCT;
}> = props => {

    const product = () => props.product;

    const defaultColor = {
        name: "",
        bgColor: "",
        selectedColor: "",
    }
    const defaultSize = {
        name: "NA",
        inStock: false
    }


    // const [selectedColor, setSelectedColor] = createSignal(colors()[0])
    // const [selectedSize, setSelectedSize] = createSignal(sizes()[2])


    return (
        <Show when={product()}>
            <div class="relative bg-white rounded-xl overflow-y-auto scrollbar-hide">
                <div class="pb-16 pt-6 sm:pb-24">
                    <div class="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">

                        <div class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
                            <div class="lg:col-span-5 lg:col-start-8">
                                <div class="flex justify-between">
                                    <h1 class="text-xl font-medium text-gray-900">{product()?.PRODUCT_TITLE}</h1>
                                    <p class="text-xl font-medium text-gray-900">{product()?.MSRP}</p>
                                </div>
                            </div>

                            {/* Image gallery */}
                            <div class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
                                <h2 class="sr-only">Images</h2>

                                <div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                                    <img src={product()?.FRONT_FLAT_IMAGE_URL} class={'rounded-lg'} alt={product()?.PRODUCT_TITLE} />

                                </div>
                            </div>

                            <div class="mt-8 lg:col-span-5">


                                {/* Product details */}
                                <div class="mt-10">
                                    <h2 class="text-sm font-medium text-gray-900">Description</h2>

                                    <div class="mt-4 space-y-4 text-sm/6 text-gray-500">
                                        {product()?.PRODUCT_DESCRIPTION}
                                    </div>
                                </div>

                                <div class="mt-8 border-t border-gray-200 pt-8">
                                    <h2 class="text-sm font-medium text-gray-900">Fabric &amp; Care</h2>

                                    <div class="mt-4">
                                        <ul role="list"
                                            class="list-disc space-y-1 pl-5 text-sm/6 text-gray-500 marker:text-gray-300">
                                           {/*

                                            <For each={details()}>
                                                {(item) => (
                                                    <li class="pl-2">
                                                        {item}
                                                    </li>
                                                )}
                                            </For>
                                            */}
                                        </ul>
                                    </div>
                                </div>

                                {/* Policies */}
                                <section aria-labelledby="policies-heading" class="mt-10">
                                    <h2 id="policies-heading" class="sr-only">
                                        Our Policies
                                    </h2>

                                    <dl class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                                        <For each={policies}>
                                            {(policy) => (
                                                <div
                                                    class="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                                                    <dt>
                                                        <policy.icon aria-hidden="true"
                                                                     class="mx-auto size-6 shrink-0 text-gray-400"/>
                                                        <span
                                                            class="mt-4 text-sm font-medium text-gray-900">{policy.name}</span>
                                                    </dt>
                                                    <dd class="mt-1 text-sm text-gray-500">{policy.description}</dd>
                                                </div>
                                            )}
                                        </For>
                                    </dl>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Show>
    )
}
export default ProductView;
