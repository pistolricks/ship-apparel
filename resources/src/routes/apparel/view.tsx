import {Component, createEffect, createSignal, ParentProps, Show} from "solid-js";
import {createAsync, useParams} from "@solidjs/router";
import {getStyle} from "~/lib/products";
import StyleSmView from "~/components/module/styles/style-sm-view";
import {SM_PRODUCT} from "~/lib/types";


const View: Component<ParentProps> = props => {
    const params = useParams();

    console.log(params)

    const response = createAsync(async () => getStyle(params.id));

    const [getData, setData] = createSignal<SM_PRODUCT[]>(response()?.data)
    const [getProduct, setProduct] = createSignal<SM_PRODUCT>(response()?.product)
    createEffect(() => {
        console.log("getResponse", response())
        setData(() => response()?.data)
        if (response()?.product) {
            setProduct(response()?.product)
        }
    })

    return (

        <Show when={getProduct()}>
            <StyleSmView product={getProduct()} products={getData()}/>
        </Show>
    );
};

export default View;
