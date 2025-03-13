import {Component} from "solid-js";
import CentralLayout from "~/components/layout/central-layout";
import {DrawerContent} from "~/components/ui/drawer/drawer";
import PromoWithTileOverlap from "~/components/section/promo/promo-with-tile-overlap";
import {Tabs} from "@kobalte/core/tabs";
import style from "~/components/ui/tab/tabs.module.css"
import PromoWithBackgroundImage from "~/components/section/promo/promo-with-background-image";
import Category1c2c from "~/components/section/category/category-1c-2c";
type PROPS = {}

const Home: Component<PROPS> = props => {
    return (
        <div class={'mx-auto max-w-7xl sm:px-4 md:px-6 lg:px-8'}>
            <Tabs
                aria-label="Main navigation"
                orientation="vertical"
                class={style.tabs}
            >
                <Tabs.List class={style.tabs__list}>
                    <Tabs.Trigger  value="custom" class={style.tabs__trigger + "inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide transition duration-300 shadow focus-visible:outline-none justify-self-center whitespace-nowrap bg-corvu-100 text-sky-500 shadow-sky-100 hover:bg-sky-100 hover:text-sky-600 hover:shadow-md hover:shadow-sky-100 focus:bg-sky-200 focus:text-sky-700 focus:shadow-md focus:shadow-sky-100 disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-100 disabled:text-sky-400 disabled:shadow-none"}>
                       Custom

                    </Tabs.Trigger>

                    <Tabs.Trigger value="spirit" class={style.tabs__trigger + "inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide transition duration-300 shadow focus-visible:outline-none justify-self-center whitespace-nowrap bg-corvu-100 text-sky-500 shadow-sky-100 hover:bg-sky-100 hover:text-sky-600 hover:shadow-md hover:shadow-sky-100 focus:bg-sky-200 focus:text-sky-700 focus:shadow-md focus:shadow-sky-100 disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-100 disabled:text-sky-400 disabled:shadow-none"}>
                        Spirit
                    </Tabs.Trigger>
                    <Tabs.Trigger  value="activewear" class={style.tabs__trigger + "inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide transition duration-300 shadow focus-visible:outline-none justify-self-center whitespace-nowrap bg-corvu-100 text-sky-500 shadow-sky-100 hover:bg-sky-100 hover:text-sky-600 hover:shadow-md hover:shadow-sky-100 focus:bg-sky-200 focus:text-sky-700 focus:shadow-md focus:shadow-sky-100 disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-100 disabled:text-sky-400 disabled:shadow-none"}>
                        Activewear
                    </Tabs.Trigger>
                    <Tabs.Trigger  value="reversible" class={style.tabs__trigger + "inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide transition duration-300 shadow focus-visible:outline-none justify-self-center whitespace-nowrap bg-corvu-100 text-sky-500 shadow-sky-100 hover:bg-sky-100 hover:text-sky-600 hover:shadow-md hover:shadow-sky-100 focus:bg-sky-200 focus:text-sky-700 focus:shadow-md focus:shadow-sky-100 disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-100 disabled:text-sky-400 disabled:shadow-none"}>
                        Reversible
                    </Tabs.Trigger>

                    <Tabs.Indicator class={style.tabs__indicator} />
                </Tabs.List>
                <Tabs.Content class={style.tabs__content} value="custom">
                    <PromoWithTileOverlap title={'custom'} description={'Need description here.'} cta={'Shop Now'}/>
                </Tabs.Content>
                <Tabs.Content class={style.tabs__content} value="spirit">
                    <PromoWithBackgroundImage src={"storage/promo_reversible_3.jpg"} title={"brands"} description={"Need description here."} cta={"Shop Now"}/>
                </Tabs.Content>
                <Tabs.Content class={style.tabs__content} value="activewear">
                    <PromoWithBackgroundImage title={"activewear"} description={"Need description here."} cta={"Shop Now"}/>
                </Tabs.Content>
                <Tabs.Content class={style.tabs__content} value="reversible">
                    <PromoWithBackgroundImage src={"storage/promo_reversible_1.jpg"} title={"reversible"} description={"Need description here."} cta={"Shop Now"}/>
                </Tabs.Content>
            </Tabs>
            
            <Category1c2c/>








        </div>
    );
};

export default Home;
