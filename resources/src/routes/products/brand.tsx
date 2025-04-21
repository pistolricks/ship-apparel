import {Component, createEffect, Show} from "solid-js";
import {createAsync, useParams} from "@solidjs/router";
import {getBrand} from "~/lib/products";
import StyleSection from "~/components/module/styles/style-section";
import {imagePath} from "~/app";
import CategoryFilters from "~/components/layout/partials/side/category-filters";

type PROPS = {}


const Brand: Component<PROPS> = props => {
    const params = useParams();

    const response = createAsync(async () => getBrand(params.brand));

    createEffect(() => console.log(response(), "brand"))


    return (
        <>
            <Show when={response()?.banner}>
                <img class={'w-full'} src={`${imagePath}/${response()?.banner}/banner`} alt={""} />
            </Show>

            <StyleSection data={response()?.list.styles} pagination={response()?.list.metadata}/>
        </>
    );
};

export default Brand;
