import {Component, createEffect, createMemo, createSignal, For, Match, Show, Switch} from "solid-js";
import {createAsync, RouteDefinition, useParams} from "@solidjs/router";
import AthleticSecton from "~/components/module/athletics/athletic-section";
import {getAthletics, getAthleticStyles} from "~/lib/athletics";
import {ATHLETIC_PRODUCT} from "~/lib/types";
import AthleticCategory from "~/components/module/athletics/athletic-category";
import {Grid} from "~/components/ui/grid";
import {AthleticListView} from "~/components/module/athletics/athletic-list-view";

type PROPS = {}


export const route = {

    preload({params}) {
        return getAthletics()
    }
} satisfies RouteDefinition

const Cheer: Component<PROPS> = props => {
    const params = useParams();

    const response = createAsync(async () => getAthleticStyles());


    const items = createMemo(() => {
        return response()?.list;
    })


    return (
        <>

            <Grid class={'w-full border-l border-gray-200'} cols={2} colsSm={2} colsMd={3} colsLg={5} colsXl={6}>
                <For each={items()}>
                    {(item: ATHLETIC_PRODUCT) => (

                        <Show when={item.category.includes("CHEER | TOPS") || item.category.includes("CHEER | ON-FIELD TOPS") || item.category.includes("CHEER | ACCESSORIES") || item.category.includes("TEES | TOPS")}>
                            <AthleticListView href={`/team-uniforms/${item.parent_sku}`} {...item} />
                        </Show>
                    )}
                </For>

            </Grid>

            <div class={'h-12 bg-secondary w-full'}/>

            <Grid class={'w-full border-l border-gray-200'} cols={2} colsSm={2} colsMd={3} colsLg={5} colsXl={6}>
                <For each={items()}>
                    {(item: ATHLETIC_PRODUCT) => (

                        <>
                            <Show when={item.category.includes("VOLLEYBALL | BOTTOMS")  || item.category.includes("VOLLEYBALL | ON-FLD BOTTOMS") || item.category.includes("BOTTOMS | BOTTOMS") || item.category.includes("CHEER | BOTTOMS") || item.category.includes("CHEER | ON-FLD BOTTOMS")}>
                                <AthleticListView href={`/team-uniforms/${item.parent_sku}`} {...item} />
                            </Show>


                        </>
                    )}
                </For>

            </Grid>

            <div class={'h-12 bg-secondary w-full'}/>

            <Grid class={'w-full border-l border-gray-200'} cols={2} colsSm={2} colsMd={3} colsLg={5} colsXl={6}>
                <For each={items()}>
                    {(item: ATHLETIC_PRODUCT) => (

                        <>
                            <Show when={item.category.includes("OUTERWEAR")}>
                                <AthleticListView href={`/team-uniforms/${item.parent_sku}`} {...item} />
                            </Show>


                        </>
                    )}
                </For>

            </Grid>

            <div class={'h-12 bg-secondary w-full'}/>

            <Grid class={'w-full border-l border-gray-200'} cols={2} colsSm={2} colsMd={3} colsLg={5} colsXl={6}>
                <For each={items()}>
                    {(item: ATHLETIC_PRODUCT) => (

                        <>
                            <Show when={item.category.includes("BAGS")}>
                                <AthleticListView href={`/team-uniforms/${item.parent_sku}`} {...item} />
                            </Show>


                        </>
                    )}
                </For>

            </Grid>

        </>
    );
};

export default Cheer;
