import {Component, createEffect, createSignal, For, lazy, ValidComponent} from "solid-js";
import {createAsync, RouteDefinition, RouteSectionProps} from "@solidjs/router";
import {fetchHome} from "~/lib/home";
import {ApparelNavigation} from "~/components/layout/partials/apparel-navigation";
import RowItemsCard from "~/components/section/rows/row-items-card";
import {CarouselCard} from "~/components/section/rows/carousel-card";
import {Dynamic} from "solid-js/web";
import {SectionItemType} from "~/lib/types";

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

    const [getOpen, setOpen] = createSignal(true)


    return (
        <>
        <div class={'w-full flex flex-col space-y-4 mx-auto'}>
            {/*
                <BaseDialog/>
                */}

            <ApparelNavigation menu={res()?.menu} slides={res()?.carousel?.contents} orientation={'vertical'}/>
            <div class={"w-full space-x-6 flex justify-between items-center"}>
            <img class={"w-2/3 h-[450px] p-10 object-contain"} src={"http://ink-and-thread.com/storage/assets/4_21_lp/TEAM-UNIFORM.jpg"}/>
                <div class={"w-1/3 h-[450px] p-10 object-contain"}>
            <img class={"w-full h-full object-contain"} src={"http://ink-and-thread.com/storage/assets/Landing page images/baseball.jpg"}/>
                </div>
            </div>
            <div class={"w-full flex justify-between items-center px-10"}>
                <div class={"p-5 h-[325px]"}>
                <img src={"http://ink-and-thread.com/storage/nova-pending-images/yJgzSbZVUrjFtejce8J6hay4DkoYsvnCJxCA9AUT.388_251_21_14.jpg"} class={"w-full h-full object-cover"}/>
                </div>
                <div class={"p-5 h-[325px]"}>
                <img src={"http://ink-and-thread.com/storage/assets/workwear/1.6c60077d.jpg"} class={"w-full h-full object-cover"}/>
                </div>
                <div class={"p-5 h-[325px]"}>
                    <img src={"http://localhost:8080/insecure/rs:fill:325:400:0/g:sm/plain/https://ink-and-thread.com/storage/assets/4_21_lp/032918_NewEraCaps.tif"} class={"w-full h-full object-cover"}/>
                </div>
            </div>


            {/*

            <img src={"http://ink-and-thread.com/storage/nova-pending-images/oxk9p2QsMCXCusZ5Ie3z58EyXbTZqrjjCp9wPqBG.jpg"} />
                <For each={res()?.sections}>
                    {(item: SectionItemType) => (
                        <>
                            <Dynamic
                                component={components[item.component] as ValidComponent}
                                class={item.class}
                                list={item?.contents}
                                start={item.start}
                                end={item?.end ?? res()?.page?.sections?.length}
                            />
                        </>
                    )}
                </For>
*/}

                <div class={'h-24'}/>

        </div>



</>
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
