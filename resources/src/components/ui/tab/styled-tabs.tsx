import {Component, createEffect, Show} from "solid-js";
import {Tabs} from "@kobalte/core/tabs";
import style from "~/components/ui/tab/tabs.module.css";
import PromoWithTileOverlap from "~/components/section/promo/promo-with-tile-overlap";
import PromoWithBackgroundImage from "~/components/section/promo/promo-with-background-image";
import {createBreakpoints, createMediaQuery} from "@solid-primitives/media";

type PROPS = {
    menu: string[]
    class?: string
}

const StyledTabs: Component<PROPS> = props => {
    const isSmall = createMediaQuery("(max-width: 639px)", true);

    const className = () => props.class;

    const breakpoints = {
        sm: "640px",
        lg: "1024px",
        xl: "1280px",
    };

        const matches = createBreakpoints(breakpoints);

        createEffect(() => {
            console.log(matches.sm); // true when screen width >= 640px
            console.log(matches.lg); // true when screen width >= 1024px
            console.log(matches.xl); // true when screen width >= 1280px
        });


    return (
        <Show when={matches.sm}>

        <Tabs
            aria-label="Main navigation"
            orientation={matches.xl ? "horizontal" : "vertical"}
            class={`${style.tabs} ${className()}`}
        >
            <Show when={!matches.xl}>
            <Tabs.List class={`${style.tabs__list}`}>
                <Tabs.Trigger value="custom"
                              class={`${style.tabs__trigger}  sm:w-[150px] sm:inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide transition duration-300 border-b border-gray-200 hover:border-gray-400 lg:border-none focus:border-gray-100 focus-visible:outline-none justify-self-center whitespace-nowrap   hover:bg-amber-100/50 hover:text-amber-600  focus:bg-white/25 focus:text-amber-700  disabled:cursor-not-allowed disabled:border-amber-300 disabled:bg-amber-100 disabled:text-amber-400 disabled:shadow-none"`}>
                    Custom
                </Tabs.Trigger>

                <Tabs.Trigger value="spirit"
                              class={`${style.tabs__trigger} sm:w-[150px] inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide transition duration-300 border-b border-gray-200 hover:border-gray-400 focus:border-gray-100 focus-visible:outline-none justify-self-center whitespace-nowrap  text-amber-800 shadow-amber-100 hover:bg-amber-100/50 hover:text-amber-600  focus:bg-white/25 focus:text-amber-700  disabled:cursor-not-allowed disabled:border-amber-300 disabled:bg-amber-100 disabled:text-amber-400 disabled:shadow-none"`}>
                    Spirit
                </Tabs.Trigger>
                <Tabs.Trigger value="activewear"
                              class={`${style.tabs__trigger} sm:w-[150px] inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide transition duration-300 border-b border-gray-200 hover:border-gray-400 focus:border-gray-100 focus-visible:outline-none justify-self-center whitespace-nowrap  text-amber-800 shadow-amber-100 hover:bg-amber-100/50 hover:text-amber-600  focus:bg-white/25 focus:text-amber-700  disabled:cursor-not-allowed disabled:border-amber-300 disabled:bg-amber-100 disabled:text-amber-400 disabled:shadow-none"`}>
                    Activewear
                </Tabs.Trigger>
                <Tabs.Trigger value="reversible"
                              class={`${style.tabs__trigger} sm:w-[150px] inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide transition duration-300 border-b border-gray-200 hover:border-gray-400 focus:border-gray-100 focus-visible:outline-none justify-self-center whitespace-nowrap  text-amber-800 shadow-amber-100 hover:bg-amber-100/50 hover:text-amber-600  focus:bg-white/25 focus:text-amber-700  disabled:cursor-not-allowed disabled:border-amber-300 disabled:bg-amber-100 disabled:text-amber-400 disabled:shadow-none"`}>
                    Reversible
                </Tabs.Trigger>

                <Tabs.Indicator class={style.tabs__indicator}/>
            </Tabs.List>

            </Show>
            <Tabs.Content class={style.tabs__content} value="custom">
                <PromoWithTileOverlap title={'custom'} description={'Need description here.'}
                                      cta={'Shop Now'}/>

            </Tabs.Content>
            <Tabs.Content class={style.tabs__content} value="spirit">
                <PromoWithBackgroundImage src={"storage/promo_reversible_3.jpg"} title={"brands"}
                                          description={"Need description here."} cta={"Shop Now"}/>
            </Tabs.Content>
            <Tabs.Content class={style.tabs__content} value="activewear">
                <PromoWithBackgroundImage title={"activewear"} description={"Need description here."}
                                          cta={"Shop Now"}/>
            </Tabs.Content>
            <Tabs.Content class={style.tabs__content} value="reversible">
                <PromoWithBackgroundImage src={"storage/promo_reversible_1.jpg"} title={"reversible"}
                                          description={"Need description here."} cta={"Shop Now"}/>
            </Tabs.Content>

            <Show when={matches.xl}>
                <div
                   style={{
                       'background-color': 'rgb(255 255 255 / 0.2)'
                   }}
                    class={'flex justify-center items-center border-t border-b border-gray-300'}>
                <Tabs.List class={`${style.tabs__list}`}>
                    <Tabs.Trigger value="custom"
                                  class={`${style.tabs__trigger} sm:w-[150px] sm:inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:border-gray-400 focus:border-gray-100 focus-visible:outline-none justify-self-center whitespace-nowrap   hover:bg-amber-100/50 hover:text-amber-600  focus:bg-white/25 focus:text-amber-700  disabled:cursor-not-allowed disabled:border-amber-300 disabled:bg-amber-100 disabled:text-amber-400 disabled:shadow-none"`}>
                        Custom
                    </Tabs.Trigger>

                    <Tabs.Trigger value="spirit"
                                  class={`${style.tabs__trigger} sm:w-[150px] inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:border-gray-400 focus:border-gray-100 focus-visible:outline-none justify-self-center whitespace-nowrap  text-amber-800 shadow-amber-100 hover:bg-amber-100/50 hover:text-amber-600  focus:bg-white/25 focus:text-amber-700  disabled:cursor-not-allowed disabled:border-amber-300 disabled:bg-amber-100 disabled:text-amber-400 disabled:shadow-none"`}>
                        Spirit
                    </Tabs.Trigger>
                    <Tabs.Trigger value="activewear"
                                  class={`${style.tabs__trigger} sm:w-[150px] inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:border-gray-400 focus:border-gray-100 focus-visible:outline-none justify-self-center whitespace-nowrap  text-amber-800 shadow-amber-100 hover:bg-amber-100/50 hover:text-amber-600  focus:bg-white/25 focus:text-amber-700  disabled:cursor-not-allowed disabled:border-amber-300 disabled:bg-amber-100 disabled:text-amber-400 disabled:shadow-none"`}>
                        Activewear
                    </Tabs.Trigger>
                    <Tabs.Trigger value="reversible"
                                  class={`${style.tabs__trigger} sm:w-[150px] inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:border-gray-400 focus:border-gray-100 focus-visible:outline-none justify-self-center whitespace-nowrap  text-amber-800 shadow-amber-100 hover:bg-amber-100/50 hover:text-amber-600  focus:bg-white/25 focus:text-amber-700  disabled:cursor-not-allowed disabled:border-amber-300 disabled:bg-amber-100 disabled:text-amber-400 disabled:shadow-none"`}>
                        Reversible
                    </Tabs.Trigger>

                    <Tabs.Indicator class={style.tabs__indicator}/>
                </Tabs.List>
        </div>
            </Show>
        </Tabs>
        </Show>
    );
};

export default StyledTabs;
