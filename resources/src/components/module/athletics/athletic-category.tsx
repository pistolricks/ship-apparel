import {Component, createSelector, createSignal, For} from "solid-js";
import {ATHLETIC_PRODUCT, PaginationType} from "~/lib/types";
import {Grid} from "~/components/ui/grid";
import Drawer from "@corvu/drawer";
import BaseDrawer, {DrawerContent} from "~/components/ui/drawer/drawer";
import {IconX} from "~/components/svg";
import {useNavigate} from "@solidjs/router";
import CategoryFilters from "~/components/layout/partials/side/category-filters";
import {AthleticListView} from "~/components/module/athletics/athletic-list-view";


type PROPS = {
    data: ATHLETIC_PRODUCT[]
    pagination?: PaginationType;
}

const AthleticCategory: Component<PROPS> = props => {

    const navigate = useNavigate();
    const data = () => props.data;

    const pagination = () => props.pagination;

    const [getSelectedId, setSelectedId] = createSignal<string>()
    const [getSelected, setSelected] = createSignal<ATHLETIC_PRODUCT>(data()?.[0] as ATHLETIC_PRODUCT)
    const isSelected = createSelector(getSelectedId)

    function handler(data: ATHLETIC_PRODUCT) {
        setSelectedId(data.item_sku)
        if (isSelected(data.item_sku)) {
            setSelected(data)
            // navigate(`/products/view/${data.id}`, { replace: true });

        }

    }

    console.log(pagination(), data())


    return (<>


                <Grid class={'h-full w-full border-l border-gray-200'} cols={2} colsSm={2} colsMd={3} colsLg={5}
                      colsXl={6}>
                    <For each={data()}>
                        {(style: ATHLETIC_PRODUCT) => (

                            <AthleticListView href={`/team-uniforms/${style.parent_sku}`} {...style} />

                        )}
                    </For>

                </Grid>


    </>);
};

export default AthleticCategory;
