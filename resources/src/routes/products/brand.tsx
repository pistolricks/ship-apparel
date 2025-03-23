import {Component, createEffect} from "solid-js";
import {createAsync, useParams} from "@solidjs/router";
import {getBrand} from "~/lib/products";
import StyleSection from "~/components/module/styles/style-section";

type PROPS = {}


const Brand: Component<PROPS> = props => {
    const params = useParams();

    const brand = createAsync(async () => getBrand(params.brand));

    createEffect(() => console.log(brand()))


    return (
        <>
            <StyleSection {...brand()?.products}/>
        </>
    );
};

export default Brand;
