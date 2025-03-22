import {Component, createEffect} from "solid-js";
import {createAsync} from "@solidjs/router";
import {getProducts} from "~/lib/products";
import ProductSection from "~/components/module/products/product-section";

type PROPS = {}


const Shop: Component<PROPS> = props => {
    const products = createAsync(async () => getProducts());

    createEffect(() => console.log(products()))

    return (
        <ProductSection list={products()?.products?.data}/>
    );
};

export default Shop;
