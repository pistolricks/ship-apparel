import {Component, createEffect} from "solid-js";
import {createAsync, useParams} from "@solidjs/router";
import {getBrand} from "~/lib/products";
import ProductSection from "~/components/module/products/product-section";

type PROPS = {}


const Brand: Component<PROPS> = props => {
    const params = useParams();

    const brand = createAsync(async () => getBrand(params.brand));

    createEffect(() => console.log(brand()))


    return (
        <ProductSection list={brand()?.products?.data}/>
    );
};

export default Brand;
