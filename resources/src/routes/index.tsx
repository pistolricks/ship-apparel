import {Component, createEffect, For, lazy} from "solid-js";
import ApparelTabs from "~/components/layout/partials/apparel-tabs";
import {CarouselItemCard} from "~/components/ui/carousel/carousel";
import {createAsync, RouteDefinition, RouteSectionProps} from "@solidjs/router";
import {useLayoutContext} from "~/context/layout-provider";
import {fetchHome} from "~/lib/home";
import ApparelNavigation from "~/components/layout/partials/apparel-navigation";
import {TabsTrigger} from "~/components/ui/tabs";

const BaseCarousel = lazy(() => import('~/components/ui/carousel/carousel'));

type PROPS = RouteSectionProps


export const route = {
    preload() {
        fetchHome()
    }
} satisfies RouteDefinition


const Home: Component<PROPS> = props => {
    const res = createAsync(async () => fetchHome());

    const {apps} = useLayoutContext();

    createEffect(() => {
        console.log(res()?.menu?.[0]?.sub)
    })


    return (
        <div
            class={''}
            style={{
                'background-image': 'linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)'
            }}
        >

            <div class={'mx-auto'}>



                <ApparelNavigation orientation={'vertical'} menu={res()?.menu?.[0]?.sub}/>


                <ApparelTabs class="" menu={res()?.menu?.[0]?.sub}>
                    <BaseCarousel

                        list={res()?.menu?.[0]?.sub}
                        children={(
                            item) =>
                            <CarouselItemCard side={'bottom'} {...item()}/>
                        }/>


                </ApparelTabs>


            </div>
            <div class={'mx-auto max-w-7xl sm:px-4 md:px-6 lg:px-8'}>


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
