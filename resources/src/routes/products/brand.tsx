import {Component, createEffect, createSelector, createSignal, For} from "solid-js";
import {createAsync, RouteDefinition, useParams} from "@solidjs/router";
import {getBrand, getProducts} from "~/lib/products";
import {Grid} from "~/components/ui/grid";
import ProductListView from "~/components/module/products/product-list-view";
import {SM_PRODUCT} from "~/lib/types";
import BaseDrawer, {DrawerContent} from "~/components/ui/drawer/drawer";
import Drawer from "@corvu/drawer";
import {IconX} from "~/components/svg";
import ProductView from "~/components/module/products/product-view";

type PROPS = {}




const Shop: Component<PROPS> = props => {
    const params = useParams();

    const brand = createAsync(async () => getBrand(params.brand));


    createEffect(() => console.log(brand()))


    const [getSelectedId, setSelectedId] = createSignal<string>()
    const [getSelected, setSelected] = createSignal<SM_PRODUCT>(brand()?.data?.data?.[0])
    const isSelected = createSelector(getSelectedId)

    function handler(data: SM_PRODUCT) {
        setSelectedId(data.id)
        if (isSelected(data.id)) {
            setSelected(data)
        }

    }


    return (
        <BaseDrawer side={'bottom'} contextId={'product-preview-1'}>
            <div class="bg-white">
                <Grid class={'h-full w-full'} cols={1} colsSm={2} colsMd={3} colsLg={4}>
                    <For each={brand()?.products?.data}>
                        {(product: SM_PRODUCT) => (
                            <Drawer.Trigger
                                contextId={'product-preview-1'}>
                                <ProductListView onClick={() => handler(product)} {...product} />
                            </Drawer.Trigger>

                        )}
                    </For>
                </Grid>

                <DrawerContent side={"bottom"} contextId={'product-preview-1'}
                               class={'px-2 bg-white overflow-y-hidden'}>
                    <>
                        <Drawer.Trigger
                            contextId={'product-preview-1'}
                            class="absolute p-1 top-1 right-1 z-50 border border-gray-400 rounded-full hover:border-accent/80 backdrop-blur-2xl">
                            <IconX class={'size-8 hover:stroke-accent/50'}/>
                        </Drawer.Trigger>

                        <ProductView product={getSelected()}/>

                    </>
                </DrawerContent>

            </div>

        </BaseDrawer>
    );
};

export default Shop;
