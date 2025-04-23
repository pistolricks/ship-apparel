import {Component, createEffect} from "solid-js";
import {createAsync} from "@solidjs/router";
import {getProducts} from "~/lib/products";
import StyleSection from "~/components/module/styles/style-section";
import {getStyles} from "~/lib/styles";

type PROPS = {}


const Shop: Component<PROPS> = props => {
    const response = createAsync(async () => getStyles());

    createEffect(() => console.log(response(), "response"))

    return (
        <>
            <StyleSection data={response()?.list} pagination={response()?.list.metadata} />

        </>
    );
};

export default Shop;
