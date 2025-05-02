import {Component, createEffect} from "solid-js";
import {createAsync, RouteDefinition, useParams} from "@solidjs/router";
import {getCategory} from "~/lib/products";
import StyleSection from "~/components/module/styles/style-section";
import WorkwearPane from "~/components/panes/workwear";


type PROPS = {}


export const route = {

    preload({params}) {
        return getCategory("workwear")
    }
} satisfies RouteDefinition

const Workwear: Component<PROPS> = props => {
    const params = useParams();

    const response = createAsync(async () => getCategory("workwear"));


    createEffect(() => console.log(response(), "category_page"))

    return (
        <>
            <div class={"bg-secondary"}>
                <WorkwearPane/>
            </div>
        <StyleSection data={response()?.list} pagination={response()?.list.metadata}/>
            </>
    );
};

export default Workwear;
