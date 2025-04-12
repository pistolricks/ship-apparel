import {Component, createEffect, lazy} from "solid-js";
import {createAsync, RouteDefinition, RouteSectionProps} from "@solidjs/router";
import {useLayoutContext} from "~/context/layout-provider";
import {fetchHome} from "~/lib/home";
import {ApparelNavigation} from "~/components/layout/partials/apparel-navigation";
import RowItemsCard from "~/components/section/rows/row-items-card";
import {CarouselCard} from "~/components/section/rows/carousel-card";
import {Dynamic} from "solid-js/web";

const BaseCarousel = lazy(() => import('~/components/ui/carousel/carousel'));
type PROPS = RouteSectionProps


export const route = {
    preload() {
        fetchHome()
    }
} satisfies RouteDefinition


const Home: Component<PROPS> = props => {
    const res = createAsync(async () => fetchHome());



    createEffect(() => {
        console.log(res()?.menu?.[0]?.sub)


    })

    const components = {
        carousel_card: CarouselCard,
        row_items_card: RowItemsCard
    }


    return (

        <div class={'w-full flex flex-col space-y-4 mx-auto'}>

            <ApparelNavigation menu={res()?.menu} carousel={res()?.carousel} orientation={'vertical'}/>



            <For each={res()?.page?.sections}>
                {(item) => (
                    <>
                        <Dynamic
                            component={components[item.component]}
                            class={item.class}
                            list={item?.contents}
                            start={item.start}
                            end={item?.end ?? res()?.page?.sections?.length}
                        />
                    </>
                )}
            </For>


            <div class={'h-24'}>

            </div>

        </div>


    )
}

export default Home;
const FeatureCard = (props: {
    title: string;
    description: string;
    onClick: () => void;
    buttonText: string;
}) => {
    const onClick = () => () => props.onClick();
    return (
        <div class="bg-cream rounded-lg shadow-md overflow-hidden">
            <div class="bg-primary p-4">
                <h3 class="text-cream text-lg font-bold">{props.title}</h3>
            </div>
            <div class="p-6">
                <p class="text-charcoal">{props.description}</p>
                <div class="mt-4 flex justify-end">
                    <button
                        onClick={onClick()}
                        class="bg-teal text-white px-4 py-2 rounded hover:bg-teal-dark transition-colors"
                    >
                        {props.buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export {FeatureCard};
