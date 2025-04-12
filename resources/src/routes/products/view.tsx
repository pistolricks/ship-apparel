import {Component, createEffect, ParentProps} from "solid-js";
import {createAsync, RouteDefinition, useParams} from "@solidjs/router";
import {getStyle} from "~/lib/products";
import StyleSmView from "~/components/module/styles/style-sm-view";




const View: Component<ParentProps> = props => {
    const params = useParams();

    console.log(params)

    const response = createAsync(async () => getStyle(params.id));


    createEffect(() => {

        console.log(response()?.style, response()?.products)

    })

    return (
        <div>
            <StyleSmView style={response()?.style?.style} products={response()?.products?.products}/>
        </div>
    );
};

export default View;
