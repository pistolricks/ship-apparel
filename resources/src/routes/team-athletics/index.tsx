import {Component, createEffect} from "solid-js";
import {createAsync, RouteDefinition, useParams} from "@solidjs/router";
import {getCategory} from "~/lib/products";
import AthleticSecton from "~/components/module/athletics/athletic-section";
import {getAthletics} from "~/lib/athletics";

type PROPS = {}


export const route = {

    preload({params}) {
        return getAthletics()
    }
} satisfies RouteDefinition

const TeamAthletics: Component<PROPS> = props => {
    const params = useParams();

    const response = createAsync(async () => getAthletics());


    createEffect(() => console.log(response(), "category_page"))

    return (
        <AthleticSecton data={response()?.list} pagination={response()?.metadata}/>
    );
};

export default TeamAthletics;
