import {Component, createEffect, createSignal, ParentProps, Show} from "solid-js";
import {createAsync, RouteDefinition, useParams} from "@solidjs/router";
import {getStyle} from "~/lib/products";
import StyleSmView from "~/components/module/styles/style-sm-view";
import {SM_PRODUCT, StyleType} from "~/lib/types";




const View: Component<ParentProps> = props => {
    const params = useParams();

    console.log(params)

    const response = createAsync(async () => getStyle(params.id));

    const [getData, setData] = createSignal(response()?.data)
    const [getProducts, setProducts] = createSignal<SM_PRODUCT[]>([])
    createEffect(() => {
        console.log("getResponse", getData())
        setData(() => response()?.data)
        if(getData()?.style?.data) {
           setProducts(getData()?.style?.data)
        }
    })

    return (

        <Show when={getData()?.style}>
             <StyleSmView style={getData()?.[0]} products={getData()} />
        </Show>
    );
};

export default View;
