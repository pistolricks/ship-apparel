import {Component, createMemo, createSelector, createSignal, For} from "solid-js";
import {PaginationType, SM_PRODUCT} from "~/lib/types";
import {Grid} from "~/components/ui/grid";
import Drawer from "@corvu/drawer";
import ProductListView from "~/components/module/products/product-list-view";
import BaseDrawer, {DrawerContent} from "~/components/ui/drawer/drawer";
import {IconX} from "~/components/svg";
import ProductView from "~/components/module/products/product-view";


type PROPS = {
    data: SM_PRODUCT[]
    pagination?: PaginationType;
}

const ProductSection: Component<PROPS> = props => {

    const list = () => props.data;

    const pagination = () => props.pagination;

    const [getSelectedId, setSelectedId] = createSignal<string>()
    const [getSelected, setSelected] = createSignal<SM_PRODUCT>(list()?.[0])
    const isSelected = createSelector(getSelectedId)

    function handler(data: SM_PRODUCT) {
        setSelectedId(data.id)
        if (isSelected(data.id)) {
            setSelected(data)
        }

    }

    console?.log(pagination())

    const key = 'style';

    const productData = createMemo(() => {
        const data = list() || [];
        let arr: SM_PRODUCT[] = [...new Map((data as SM_PRODUCT[]).map((item: SM_PRODUCT) =>
            [item[key], item])).values()]
        return arr;
    })


    return (<>
        <BaseDrawer side={'bottom'} contextId={'product-preview-1'}>

            <Grid class={' w-full'} cols={1} colsSm={2} colsMd={3} colsLg={4} colsXl={5}>
                <For each={list()}>
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
                        class="hidden sm:block absolute p-1 top-1 left-1 z-50 border border-gray-400 rounded-full hover:border-accent/80 backdrop-blur-2xl">
                        <IconX class={'size-8 hover:stroke-accent/50'}/>
                    </Drawer.Trigger>

                    <ProductView product={getSelected()}/>

                </>
            </DrawerContent>


        </BaseDrawer>


    </>);
};

export default ProductSection;
