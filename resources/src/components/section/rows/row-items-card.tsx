import {Component, createMemo, For} from "solid-js";
import {MenuItemType} from "~/lib/types";
import {A} from "@solidjs/router";
import {Grid} from "~/components/ui/grid";

type PROPS = {
    list: MenuItemType[]
    start?: number
    end?: number
    class?: string
}

const RowItemsCard: Component<PROPS> = props => {

    const list = () => props.list;
    const start = () => props.start ?? 0;
    const end = () => props.end ?? list()?.length;

    const className = () => props.class;

    const menu = createMemo(() => list()?.slice(start(), end()))

    console.log('contents' , list())

    return (
        <div class={`relative`}>

            <div class="bg-gray-900">


                <div class="relative inset-x-0 top-full text-sm text-gray-500">
                    <div class="relative  px-4 bg-white">
                        <div class="mx-auto max-w-7xl">

                            <Grid class={className()} cols={menu()?.length}>
                                <For each={menu()}>
                                    {(item) => (
                                        <div class={`group relative rounded-md  ${item.class}`}>
                                            <img
                                                src={item.src}
                                                alt={item.description}
                                                class={`h-full w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75 `}/>
                                        </div>
                                    )}
                                </For>
                            </Grid>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default RowItemsCard;
