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

    createEffect(() => {
        console.log("getResponse", getData())
        setData(() => response()?.data)
    })

    return (
        <Show when={getData()?.style}>
             <StyleSmView style={getData()?.style} products={getData()?.products} />
        </Show>
    );
};

export default View;
