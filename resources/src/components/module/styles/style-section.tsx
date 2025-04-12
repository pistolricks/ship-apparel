import {Component, createSelector, createSignal, For} from "solid-js";
import {PaginationType, StyleType} from "~/lib/types";
import {Grid} from "~/components/ui/grid";
import Drawer from "@corvu/drawer";
import {StyleListView} from "~/components/module/styles/style-list-view";
import BaseDrawer, {DrawerContent} from "~/components/ui/drawer/drawer";
import {IconX} from "~/components/svg";
import StyleView from "~/components/module/styles/style-view";
import {useNavigate} from "@solidjs/router";


type PROPS = {
    data: StyleType[]
    pagination?: PaginationType;
}

const StyleSection: Component<PROPS> = props => {

    const navigate = useNavigate();
    const data = () => props.data;

    const pagination = () => props.pagination;

    const [getSelectedId, setSelectedId] = createSignal<string>()
    const [getSelected, setSelected] = createSignal<StyleType>(data()?.[0] as StyleType)
    const isSelected = createSelector(getSelectedId)

    function handler(data: StyleType) {
        setSelectedId(data.id)
        if (isSelected(data.id)) {
            setSelected(data)
           // navigate(`/products/view/${data.id}`, { replace: true });

        }

    }

    console.log(pagination(), data())


    return (<>
        <BaseDrawer side={'bottom'} contextId={'product-preview-1'}>

            <Grid class={'h-full w-full'} cols={2} colsSm={2} colsMd={3} colsLg={4} colsXl={5}>
                <For<StyleType[]> each={data()}>
                    {(style: StyleType) => (

                        <StyleListView href={`/products/style/${style.id}`} onClick={() => handler(style)} {...style} />

                    )}
                </For>

            </Grid>

TEST
            <DrawerContent side={"bottom"} contextId={'product-preview-1'} class={'px-2 bg-white overflow-y-hidden'}>
                <>
                    <Drawer.Trigger
                        contextId={'product-preview-1'}
                        class="hidden sm:block absolute p-1 top-1 left-1 z-50 border border-gray-400 rounded-full hover:border-accent/80 backdrop-blur-2xl">
                        <IconX class={'size-8 hover:stroke-accent/50'}/>
                    </Drawer.Trigger>

                    <StyleView product={getSelected()}/>

                </>
            </DrawerContent>


        </BaseDrawer>


    </>);
};

export default StyleSection;
