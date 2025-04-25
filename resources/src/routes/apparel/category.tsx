import {Component, createEffect} from "solid-js";
import {createAsync, RouteDefinition, useParams} from "@solidjs/router";
import {getCategory} from "~/lib/products";
import StyleSection from "~/components/module/styles/style-section";

type PROPS = {}


export const route = {

    preload({ params }) {
        return getCategory(params.category)
    }
} satisfies RouteDefinition

const Category: Component<PROPS> = props => {
    const params = useParams();

    const response = createAsync(async () => getCategory(params.category));


    createEffect(() => console.log(response(), "category_page"))

    return (
        <StyleSection data={response()?.list} pagination={response()?.list.metadata} />
    );
};

export default Category;
