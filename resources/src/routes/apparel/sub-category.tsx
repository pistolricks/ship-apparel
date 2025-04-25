import {Component, createEffect} from "solid-js";
import {createAsync, RouteDefinition, useParams} from "@solidjs/router";
import {getSubCategory} from "~/lib/products";
import StyleSection from "~/components/module/styles/style-section";

type PROPS = {}


export const route = {

    preload({params}) {
        return getSubCategory(params.category, params.subCategory)
    }
} satisfies RouteDefinition

const Shop: Component<PROPS> = props => {
    const params = useParams();

    const response = createAsync(async () => getSubCategory(params.category, params.subCategory));


    createEffect(() => console.log(response()))

    return (
        <StyleSection data={response()?.list} pagination={response()?.list.metadata} />
    );
};

export default Shop;
