import {Component, createMemo, For, Show} from "solid-js";
import {createAsync, RouteDefinition, useParams} from "@solidjs/router";
import {getAthletics, getAthleticStyles} from "~/lib/athletics";
import {ATHLETIC_PRODUCT} from "~/lib/types";
import {Grid} from "~/components/ui/grid";
import {AthleticListView} from "~/components/module/athletics/athletic-list-view";
import TeamAthleticsPane from "~/components/panes/team-athletics";

type PROPS = {}


export const route = {

    preload({params}) {
        return getAthletics()
    }
} satisfies RouteDefinition

const TeamUniforms: Component<PROPS> = props => {
    const params = useParams();

    const response = createAsync(async () => getAthleticStyles());


    const items = createMemo(() => {
        return response()?.list;
    })


    return (
        <>
            <div class={"bg-secondary"}>
            <TeamAthleticsPane/>
            </div>

            <div class={'h-16 bg-secondary w-full'}/>

            <Grid class={'w-full border-l border-gray-200'} cols={2} colsSm={2} colsMd={3} colsLg={5} colsXl={6}>
                <For each={items()}>
                    {(item: ATHLETIC_PRODUCT) => (

                        <Show when={item.category.includes("TOPS")}>
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
                            <Show when={item.category.includes("BOTTOMS")}>
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

export default TeamUniforms;
