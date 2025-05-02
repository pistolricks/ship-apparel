import {Component, createEffect, createSignal, ParentProps, Show} from "solid-js";
import {createAsync, useParams} from "@solidjs/router";
import AthleticSmView from "~/components/module/athletics/athletic-sm-view";
import {ATHLETIC_PRODUCT} from "~/lib/types";
import {getAthletic} from "~/lib/athletics";


const View: Component<ParentProps> = props => {
    const params = useParams();

    console.log(params)

    const response = createAsync(async () => getAthletic(params.id));

    const [getData, setData] = createSignal<ATHLETIC_PRODUCT[]>(response()?.data)
    const [getProduct, setProduct] = createSignal<ATHLETIC_PRODUCT>(response()?.product)
    createEffect(() => {
        console.log("getResponse", response())
        setData(() => response()?.data)
        if (response()?.product) {
            setProduct(response()?.product)
        }
    })

    return (

        <Show when={getProduct()}>
            <AthleticSmView product={getProduct()} products={getData()}/>
        </Show>
    );
};

export default View;
