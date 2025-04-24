import {Component, createEffect, createMemo, createSelector, createSignal, For, lazy, onMount, Show} from "solid-js";
import {SM_PRODUCT} from "~/lib/types";
import {Grid} from "~/components/ui/grid";
import {classNames} from "~/lib/utils";
import {Format} from '@ark-ui/solid/format'
import {imagePath} from "~/app";
import {UserPen} from "lucide-solid";


const ShirtDecorator = lazy(() => import('~/components/shirt-decorator'));

type STYLE_PRODUCT = {
    product_id: string;
    product_title: string;
    product_description?: string;
    style: string;
    available_sizes?: string;
    brand_logo_image?: string;
    thumbnail_image?: string;
    color_swatch_image?: string;
    product_image?: string;
    spec_sheet?: string;
    price_text?: string;
    suggested_price?: string;
    category_name?: string;
    subcategory_name?: string;
    color_name: string;
    color_square_image?: string;
    color_product_image?: string;
    color_product_image_thumbnail?: string;
    size?: string;
    qty?: number;
    piece_weight?: string;
    piece_price?: string;
    dozens_price?: string;
    case_price?: string;
    price_group?: string;
    case_size?: string;
    inventory_key?: string;
    size_index?: string;
    sanmar_mainframe_color?: string;
    mill: string;
    product_status: "Coming Soon" | "New" | "Regular" | "Discontinued" | "Disabled" ;
    companion_style?: string;
    msrp?: string;
    map_pricing?: string;
    front_model_image_url?: string;
    back_model_image_url?: string;
    front_flat_image_url?: string;
    back_flat_image_url?: string;
    product_measurements?: string;
    pms_color?: string;
    gtin?: string;
    decoration_spec_sheet?: string;
}

type PROPS = {
    style: STYLE_PRODUCT;
    products: SM_PRODUCT[] | STYLE_PRODUCT[];
}


const StyleSmView: Component<PROPS> = props => {

    const style = () => props.style;
    const products = () => props.products as STYLE_PRODUCT[];

    console.log(style(), "style viewer")
    const [getSelected, setSelected] = createSignal<STYLE_PRODUCT>(products()?.[0] as STYLE_PRODUCT)

    const [getSelectedId, setSelectedId] = createSignal<string>(getSelected()?.product_id)

    const [getShowDecorator, setShowDecorator] = createSignal(false)

    const [getImages, setImages] = createSignal(
        [getSelected()?.front_model_image_url, getSelected()?.back_model_image_url, getSelected()?.front_flat_image_url, getSelected()?.back_flat_image_url].filter((image): image is string => !!image)
    )

    const [getSrc, setSrc] = createSignal(style()?.front_model_image_url)

    const isSrc = createSelector<string | undefined>(getSrc)

    function handleSize(data: STYLE_PRODUCT) {

        setSelectedId(data.product_id)
        setSelected(data)

        console.log(getSelected())
    }

    const isSelected = createSelector(getSelectedId)

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


    //  const orderedProducts = createMemo(() => products()?.sort((a, b) => parseFloat(a.color_name) - parseFloat(b.color_name)))

    const groupedByColor = createMemo(() => products()?.reduce((groups: Record<string, STYLE_PRODUCT[]>, product) => {
        const key = product?.color_name ?? ''; // Grouping criterion (e.g., 'color')
        if (!groups[key]) {
            groups[key] = []; // Initialize an array for this group
        }

        groups[key].push(product); // Add the current product to the group
        return groups;
    }, {}));


    const name = () => {
        let a = getSelected().product_title.replace(getSelected().mill, "")
        let id = getSelected().product_id;
        let t = a.replace(id, "")
        return t.replace(`.`, "")
    }

    const [getColor, setColor] = createSignal(style()?.color_name)
    const handleColor = (m: string) => {
        setColor(() => m)

        setSrc(groupedByColor()?.[m]?.[0]?.front_model_image_url)
        setImages(
            [groupedByColor()?.[m]?.[0]?.front_model_image_url, groupedByColor()?.[m]?.[0]?.back_model_image_url, groupedByColor()?.[m]?.[0]?.front_flat_image_url, groupedByColor()?.[m]?.[0]?.back_flat_image_url].filter((image): image is string => !!image)
        )

    }
    const isColored = createSelector(getColor)

    const handleShowDecorator = () => {
        setShowDecorator((p) => !p)
        console.log(getShowDecorator())
    }

    createEffect(() => {
        console.log("isSelected", getSelected(), "getColor", getColor())
        console.log("groupedByColor", groupedByColor(), "getColor", getColor())
    })

    onMount(() => {
        setColor(products()?.[0]?.color_name)
        setSelectedId(products()?.[0]?.product_id)
        setSelected(products()?.[0])
        setSrc(products()?.[0]?.front_model_image_url)
        setImages(
            [products()?.[0]?.front_model_image_url, products()?.[0]?.back_model_image_url, products()?.[0]?.front_flat_image_url, products()?.[0]?.back_flat_image_url].filter((image): image is string => !!image)
        )
        isSrc(products()?.[0]?.front_model_image_url)
    })

    return (
        <div
            class="mx-auto max-w-7xl sm:px-6 sm:pt-8 lg:px-8 relative bg-white rounded-xl overflow-y-auto scrollbar-hide">
            <div class="mx-auto max-w-2xl lg:max-w-none">
                <div class="px-4 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                    <div class="flex flex-col-reverse">
                        <div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                            <div class="grid grid-cols-5 h-24 gap-6" aria-orientation="horizontal" role="tablist">
                                <For each={images()}>
                                    {(image) => (
                                        <Show when={image !== ' '}>
                                            <button
                                                onClick={() => imageHandler(image)}
                                                type="button"
                                                id="tabs-2-tab-1"
                                                class="relative flex h-20 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-blue-500/50 focus:ring-offset-4"
                                                aria-controls="tabs-2-panel-1" role="tab">
                                                <span class="sr-only">Angled view</span>
                                                <span class="absolute inset-0 overflow-hidden rounded-md  border border-amber-100">
                                         <img src={`${image}`}
                                              alt="" class="size-full object-contain object-top"/>
                                       </span>
                                                <span
                                                    class="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2"
                                                    aria-hidden="true"></span>
                                            </button>
                                        </Show>
                                    )}
                                </For>
                                <button
                                    onClick={handleShowDecorator}
                                    type="button"
                                    id="tabs-2-tab-1"
                                    class="relative flex h-20 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-blue-500/50 focus:ring-offset-4"
                                    aria-controls="tabs-2-panel-1" role="tab">
                                    <span class="sr-only">Angled view</span>
                                    <span class="absolute inset-0 overflow-hidden rounded-md border border-amber-100">
                                         <UserPen class="size-full p-6 object-contain object-top"/>
                                       </span>
                                    <span
                                        class="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2"
                                        aria-hidden="true"></span>
                                </button>
                            </div>
                        </div>

                        <div>
                            <div id="tabs-2-panel-1" aria-labelledby="tabs-2-tab-1" class={'h-95 sm:h-full'}
                                 role="tabpanel" tabindex="0">

                                <Show
                                    fallback={<ShirtDecorator image_url={src()}/>}
                                    when={!getShowDecorator()}>
                                    <img
                                        src={`${src()}`}
                                        alt=""
                                        class="sm:aspect-square w-full object-cover sm:object-contain sm:rounded-lg"/>
                                </Show>
                            </div>

                        </div>
                    </div>

                    <div class="sm:mt-10  mt:mt-16 sm:px-0 lg:mt-0">

                        <div class={'w-full flex justify-end mb-2'}>
                            <img src={`${imagePath}/${style()?.brand_logo_image}/brand`}
                                 class={'absolute top-0 sm:static  w-[100px] h-[25px] sm:w-[200px] sm:h-[50px]  rounded-xl object-contain'}
                                 alt={''}/>
                        </div>

                        <h1 class="text-xl font-medium tracking-tight text-right text-gray-900 text-balance">{name()}</h1>
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
                                        <p class="ml-2 mt-1 truncate text-sm text-gray-500">{style()?.product_id}</p>
                                    </div>
                                    <div class="-ml-2 -mt-2 flex flex-wrap items-baseline">
                                        <h3 class="ml-2 mt-2 text-sm font-semibold text-gray-900">Color</h3>
                                        <p class="ml-2 mt-1 truncate text-sm text-gray-500">{getColor()}</p>
                                    </div>

                                    <div class="-ml-2 -mt-2 flex flex-wrap items-baseline">
                                        <h3 class="ml-2 mt-2 text-sm font-semibold text-gray-900">{availableSizes()?.[0]}</h3>
                                        {/*
                                        <p class="ml-2 mt-1 truncate text-sm text-gray-500">{availableSizes()?.[1]?.replace('Sizes available vary by color.', '')}</p>
                                        */}
                                    </div>
                                </div>
                                <Show when={groupedByColor()}>
                                    <fieldset aria-label="Choose a color"
                                              class="w-full border-gray-200 border-b border-t py-2">
                                        <Grid cols={8} colsSm={10} class={'gap-x-2 gap-y-4 p-1 w-full object-fill'}>
                                            <For each={Object.keys(groupedByColor())}>
                                                {(key) => (
                                                    <>
                                                        <button
                                                            onClick={() => handleColor(key)}
                                                            class="w-full items-center  justify-center"
                                                            type="button">
                                                            <img
                                                                class={classNames(
                                                                    'relative -m-0.5 flex cursor-pointer  rounded-full p-0.5  focus:outline-none object-center',
                                                                    isColored(key) ? 'ring-2 ring-amber-400 bg-amber-200 ' : 'ring-2 ring-gray-200'
                                                                )}
                                                                src={`/colors/${groupedByColor()?.[key]?.[0]?.color_square_image}`}
                                                                alt={`/colors/${groupedByColor()?.[key]?.[0]?.color_name}`}/>
                                                        </button>
                                                    </>
                                                )}
                                            </For>
                                        </Grid>
                                    </fieldset>
                                </Show>

                                <fieldset aria-label="Choose a color"
                                          class="w-full border-gray-200 border-b py-2">

                                    <Grid cols={8} class={'gap-2 w-full items-center'}>
                                        <For each={groupedByColor()?.[getColor()]}>
                                            {(product) => (
                                                <button
                                                    onClick={() => handleSize(product)}
                                                    class={classNames(
                                                        isSelected(product.product_id) ? 'ring-2 ring-amber-400 bg-amber-200 ' : 'ring-2 ring-gray-200',
                                                        "w-full items-center  justify-center border border-gray-400 rounded-md h-7"
                                                        )}
                                                    type="button">
                                                    {product.size}
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
                                            <li class="pl-2"><span
                                                class="text-[10px] uppercase font-semibold">Style</span> {style()?.product_id}
                                            </li>
                                            <li class="pl-2"><span
                                                class="text-[10px] uppercase font-semibold">GTIN</span> {getSelected()?.gtin}
                                            </li>

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
