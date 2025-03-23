import {Component, createEffect, createMemo, createSelector, createSignal, For} from "solid-js";
import {createAsync, RouteDefinition, useParams} from "@solidjs/router";
import {getCategory, getProducts} from "~/lib/products";
import {Grid} from "~/components/ui/grid";
import ProductListView from "~/components/module/products/product-list-view";
import {SM_PRODUCT} from "~/lib/types";
import BaseDrawer, {DrawerContent} from "~/components/ui/drawer/drawer";
import Drawer from "@corvu/drawer";
import {IconX} from "~/components/svg";
import ProductView from "~/components/module/products/product-view";
import StyleSection from "~/components/module/styles/style-section";

type PROPS = {}


export const route = {

    preload({ params }) {
        return getCategory(params.category)
    }
} satisfies RouteDefinition

const Shop: Component<PROPS> = props => {
    const params = useParams();

    const category = createAsync(async () => getCategory(params.category));


    createEffect(() => console.log(category()))

    return (
        <StyleSection {...category()?.products}/>
    );
};

export default Shop;
