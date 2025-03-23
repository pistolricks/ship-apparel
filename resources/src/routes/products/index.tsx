import {Component, createEffect} from "solid-js";
import {createAsync} from "@solidjs/router";
import {getProducts} from "~/lib/products";
import StyleSection from "~/components/module/styles/style-section";

type PROPS = {}


const Shop: Component<PROPS> = props => {
    const products = createAsync(async () => getProducts());

    createEffect(() => console.log(products()))

    return (
        <>
            <StyleSection
                {...products()?.products}
            />

        </>
    );
};

export default Shop;
