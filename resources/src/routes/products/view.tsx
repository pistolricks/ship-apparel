import {Component, createEffect, ParentProps} from "solid-js";
import {createAsync, RouteDefinition, useParams} from "@solidjs/router";
import {getStyle} from "~/lib/products";
import StyleSmView from "~/components/module/styles/style-sm-view";


export const route = {

    preload({params}) {
        return getStyle(params.id)
    }
} satisfies RouteDefinition


const View: Component<ParentProps> = props => {
    const params = useParams();

    console.log(params)

    const response = createAsync(async () => getStyle(params.id));


    createEffect(() => {
        console.log(response())
    })

    return (
        <div>

        </div>
    );
};

export default View;
