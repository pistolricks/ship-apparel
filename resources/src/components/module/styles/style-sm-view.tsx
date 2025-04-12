import {Component, createEffect, createMemo, createSelector, createSignal, For, onMount} from "solid-js";
import {SM_PRODUCT, StyleType} from "~/lib/types";
import {Grid} from "~/components/ui/grid";
import {classNames} from "~/lib/utils";
import {Format} from '@ark-ui/solid/format'

type PROPS = {
    style: StyleType;
    products: SM_PRODUCT[]
}

export type MiniProductType = {
    id: string
    msrp: string
    size: string
    available_sizes: string,
    color_name: string
    back_flat_image_url?: string
    back_model_image_url?: string
    color_square_image: string
    front_flat_image_url?: string
    front_model_image_url?: string
    piece_weight?: string
    case_size?: string
    gtin?: string

}

const StyleSmView: Component<PROPS> = props => {

    const style = () => props.style;
    const products = () => props.products;

    console.log(style(), "style viewer")

    const [getSelectedId, setSelectedId] = createSignal<string>()
    const [getSelected, setSelected] = createSignal<SM_PRODUCT|StyleType|undefined>(style())
    const isSelected = createSelector(getSelectedId)

    const [getImages, setImages] = createSignal(
        [getSelected()?.front_model_image_url, getSelected()?.back_model_image_url, getSelected()?.front_flat_image_url, getSelected()?.back_flat_image_url].filter((image): image is string => !!image)
    )

    const [getSrc, setSrc] = createSignal(style()?.front_model_image_url)

    const isSrc = createSelector<string|undefined>(getSrc)

    function colorHandler(data: SM_PRODUCT) {
        setSelectedId(data.id)
        if (isSelected(data.id)) {
            setSelected(data)
            setSrc(data?.front_model_image_url)
            setImages(
                [data?.front_model_image_url, data?.back_model_image_url, data?.front_flat_image_url, data?.back_flat_image_url].filter((image): image is string => !!image)
            )
        }
        console.log(getSelected())
    }

    function imageHandler(src: string) {
        setSrc(src)
        if (isSrc(src)) {
            setSrc(src)
        }
        console.log(getSrc())

    }

    const images = createMemo(() => getImages())
    const src = createMemo(() => getSrc())

    const numberWithCurrency = () => {
        return <Format.Number value={Number(getSelected()?.msrp)} style="currency" currency="USD"/>
    }


    const availableSizes = () => {

    }




    createEffect(() => console.log("props", props))

    onMount(() => {
        setSelected(style())
        setSrc(style().front_model_image_url)
        setImages(
            [style().front_model_image_url, style().back_model_image_url, style().front_flat_image_url, style().back_flat_image_url].filter((image): image is string => !!image)
        )
        isSrc(style().front_model_image_url)
    })

    return (
        <div
            class="mx-auto max-w-7xl sm:px-6 sm:pt-8 lg:px-8 relative bg-white rounded-xl overflow-y-auto scrollbar-hide">
            <div class="mx-auto max-w-2xl lg:max-w-none">
                <div class="px-4 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                    <div class="flex flex-col-reverse">
                        <div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                            <div class="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
                                <For<string[]> each={images()}>
                                    {(image) => (
                                        <button
                                            onClick={() => imageHandler(image)}
                                            type="button"
                                            id="tabs-2-tab-1"
                                            class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-blue-500/50 focus:ring-offset-4"
                                            aria-controls="tabs-2-panel-1" role="tab">
                                            <span class="sr-only">Angled view</span>
                                            <span class="absolute inset-0 overflow-hidden rounded-md">
                                         <img src={image}
                                              alt="" class="size-full object-cover"/>
                                       </span>
                                            <span
                                                class="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2"
                                                aria-hidden="true"></span>
                                        </button>

                                    )}
                                </For>

                            </div>
                        </div>

                        <div>
                            <div id="tabs-2-panel-1" aria-labelledby="tabs-2-tab-1" class={'h-95 sm:h-full'}
                                 role="tabpanel" tabindex="0">


                                <img
                                    src={src()}
                                    alt=""
                                    class="sm:aspect-square w-full object-cover sm:object-contain sm:rounded-lg"/>
                            </div>

                        </div>
                    </div>

                    <div class="sm:mt-10  mt:mt-16 sm:px-0 lg:mt-0">

                        <div class={'w-full flex justify-end mb-2'}>
                            <img src={style()?.brand_logo_image}
                                 class={'absolute top-0 sm:static  w-[60px] h-[60px] rounded-xl object-contain'}
                                 alt={''}/>
                        </div>

                        <h1 class="text-xl font-medium tracking-tight text-right text-gray-900 text-balance">{style()?.product_title}</h1>
                        <form class="mt-2 w-full pt-4 border-t border-gray-200">
                            <div class={'flex justify-between items-center space-x-5 sm:space-x-0'}>
                                <div class="">
                                    <h2 class="sr-only">Product information</h2>
                                    <p class="text-xl font-semibold tracking-tight text-gray-600">{numberWithCurrency()}
                                        <span class="text-sm font-normal pl-1">msrp</span></p>
                                </div>


                                <button type="button"
                                        class="flex max-w-xs flex-1 items-center justify-center rounded-sm border border-transparent bg-blue-500 px-2 sm:px-8 py-1.5 text-sm sm:text-base font-light text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full">
                                    Login for <span class={'hidden sm:block px-1'}> Inventory / </span> Pricing
                                </button>
                            </div>


                            <div>
                                <div class="py-1  mt-6 flex justify-between items-center">
                                    <div class="-ml-2 -mt-2 flex flex-wrap items-baseline">
                                        <h3 class="ml-2 mt-2 text-sm font-semibold text-gray-900">Style</h3>
                                        <p class="ml-2 mt-1 truncate text-sm text-gray-500">{style()?.id}</p>
                                    </div>
                                    <div class="-ml-2 -mt-2 flex flex-wrap items-baseline">
                                        <h3 class="ml-2 mt-2 text-sm font-semibold text-gray-900">Color</h3>
                                        <p class="ml-2 mt-1 truncate text-sm text-gray-500">{getSelected()?.color_name}</p>
                                    </div>

                                    <div class="-ml-2 -mt-2 flex flex-wrap items-baseline">
                                        <h3 class="ml-2 mt-2 text-sm font-semibold text-gray-900">{availableSizes()?.[0]}</h3>
                                        <p class="ml-2 mt-1 truncate text-sm text-gray-500">{availableSizes()?.[1]?.replace('Sizes available vary by color.', '')}</p>
                                    </div>
                                </div>
                                <fieldset aria-label="Choose a color"
                                          class="w-full border-gray-200 border-b border-t py-2">


                                    <Grid cols={8} class={'gap-2 w-full'}>
                                        <For<SM_PRODUCT[]> each={products()}>
                                            {(product) => (
                                                <button
                                                    onClick={() => colorHandler(product)}
                                                    class="w-full items-center  justify-center"
                                                    type="button">
                                                    <img
                                                        class={classNames(
                                                            'relative -m-0.5 flex cursor-pointer  rounded-full p-0.5  focus:outline-none object-center',
                                                            isSelected(product.id) ? 'ring-2 ring-amber-400 bg-amber-200 ' : 'ring-2 ring-transparent'
                                                        )}
                                                        src={`https://ink-and-thread.com/storage/swatches/${product.color_square_image}`}
                                                        alt={product.color_name}/>
                                                </button>
                                            )}
                                        </For>
                                    </Grid>
                                </fieldset>
                            </div>

                            <div class="mt-10 flex">


                                <div class="mt-6">
                                    <h3 class="sr-only">Description</h3>

                                    <div class="space-y-6 text-sm text-gray-700">
                                        <p>{style()?.product_description}</p>
                                    </div>
                                </div>


                            </div>
                        </form>

                        <section aria-labelledby="details-heading" class="mt-12">
                            <h2 id="details-heading" class="sr-only">Additional details</h2>

                            <div class="divide-y divide-gray-200 border-t">
                                <div>

                                    <div class="mt-6 pb-6" id="disclosure-1">
                                        <ul role="list"
                                            class="list-disc space-y-1 pl-5 text-sm/6 text-gray-700 marker:text-gray-300">
                                            <li class="pl-2">{style()?.mill}</li>
                                            <li class="pl-2"><span class="text-[10px] uppercase font-semibold">Style</span> {style()?.id}</li>
                                            <li class="pl-2"><span class="text-[10px] uppercase font-semibold">GTIN</span> {getSelected()?.gtin}</li>

                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StyleSmView;
