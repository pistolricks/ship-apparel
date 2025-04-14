import {IconCalendar, IconCircle, IconClock, IconCreditCard, IconProps} from "~/components/svg";
import {Component, For, JSX, Show} from "solid-js";
import {SM_PRODUCT} from "~/lib/types";
import {Format} from '@ark-ui/solid/format'


const policies = [
    {name: 'No Minimum', icon: IconCircle, description: 'Order a million or just one!'},
    {name: 'Price Match', icon: IconCreditCard, description: "We will beat any price!"},
    {name: 'Fast Turnover', icon: IconCalendar, description: "1 - 3 days - No rush fees!"},
    {name: 'Buy Now, Pay Later', icon: IconClock, description: "PO Financing up to 6 months"},
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

    const cleanTitle = () => {
        return product()?.product_title?.replace(`${product()?.mill}`, '')?.replace(`${product()?.style}`, '')?.replace(' - ', '')?.replace('.','')
    }

    const NumberWithCurrency = () => {
        return <Format.Number value={Number(product()?.msrp)} style="currency" currency="USD"/>
    }

    const images = () => [product()?.front_model_image_url, product()?.back_model_image, product()?.front_flat_image, product()?.back_flat_image].filter((image): image is string => !!image)


    const details = () => [`Brand: ${product()?.mill}`, `Style: ${product()?.style}`, `Status: ${product()?.product_status}`, product()?.available_sizes, `GTIN: ${product()?.gtin}`].filter((detail): detail is string => detail !== undefined)

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

    console.log(product())

    return (
        <Show<boolean> when={!!product()}>
            <div class="relative bg-white rounded-xl overflow-y-auto scrollbar-hide">
                <div class="pb-16 sm:pt-6 sm:pb-24">
                    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">

                        <div class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
                            <div class="lg:col-span-5 lg:col-start-8">
                                <div class="flex justify-between">
                                    <h1 class="text-xl font-medium text-gray-900">{cleanTitle()}</h1>
                                    <p class="text-xl font-medium text-gray-900">{NumberWithCurrency()}</p>
                                </div>
                            </div>

                            {/* Image gallery */}
                            <div class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
                                <h2 class="sr-only">Images</h2>

                                <div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                                    <For<string[]> each={images()}>
                                        {(image, i) => (
                                            <img
                                                alt={`${product()?.product_title}-${i()}`}
                                                src={image}
                                                class={classNames(
                                                    i() === 0 ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block',
                                                    'rounded-lg',
                                                )}
                                            />
                                        )}
                                    </For>
                                </div>
                            </div>

                            <div class="mt-8 lg:col-span-5">


                                {/* Product details */}
                                <div class="mt-10">
                                    <h2 class="text-sm font-medium text-gray-900">Description</h2>

                                    <div class="mt-4 space-y-4 text-sm/6 text-gray-500">
                                        {product()?.product_description}
                                    </div>
                                </div>

                                <div class="mt-8 border-t border-gray-200 pt-8">
                                    <h2 class="text-sm font-medium text-gray-900">Details</h2>

                                    <div class="mt-4">
                                        <ul role="list"
                                            class="space-y-1 pl-2 text-sm/6 text-gray-500 marker:text-gray-300">


                                            <For<string[]> each={details()}>
                                                {(item) => (
                                                    <li class="pl-2">
                                                        {item}
                                                    </li>
                                                )}
                                            </For>

                                        </ul>
                                    </div>
                                </div>

                                {/* Policies */}
                                <section aria-labelledby="policies-heading" class="mt-10">
                                    <h2 id="policies-heading" class="sr-only">
                                        Our Policies
                                    </h2>

                                    <dl class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                                        <For<{
                                            name: string,
                                            icon: (props: IconProps) => JSX.Element,
                                            description: string
                                        }[]> each={policies}>
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
