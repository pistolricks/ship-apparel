import {Component, createEffect, For, JSXElement, Show} from "solid-js";
import {Tabs} from "@kobalte/core/tabs";
import style from "~/components/ui/tab/tabs.module.css";
import {createBreakpoints} from "@solid-primitives/media";
import {TabsContent, TabsList, TabsTrigger} from "~/components/ui/tabs";
import {MenuItemType} from "~/lib/types";
import {Dynamic} from "solid-js/web";
import CtaText from "~/components/section/cta/cta-text";


type PROPS = {
    menu: MenuItemType[]
    class?: string
    children?: JSXElement;
}

const BaseTabs: Component<PROPS> = props => {

    const className = () => props.class;

    const children = () => props.children;

    const breakpoints = {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
    };

    const matches = createBreakpoints(breakpoints);

    createEffect(() => {
        console.log(matches.sm); // true when screen width >= 640px
        console.log(matches.lg); // true when screen width >= 1024px
        console.log(matches.xl); // true when screen width >= 1280px
    });

    const menu = () => props.menu;

    return (
        <Show
            fallback={children()}
            when={matches.sm}>

            <Tabs
                aria-label="Main navigation"
                orientation={matches.xl ? "horizontal" : "vertical"}
                class={`${style.tabs} ${className()}`}
            >
                <Show when={!matches.xl}>
                    <TabsList>
                        <For each={menu()}>
                            {(item, index) => (
                                <TabsTrigger value={item.value ?? item.title}>
                                    {item?.title}
                                </TabsTrigger>
                            )}
                        </For>
                        <Tabs.Indicator class={style.tabs__indicator}/>
                    </TabsList>

                </Show>
                <For each={menu()}>
                    {(item, index) => (
                        <TabsContent value={item?.value ?? item.title}>
                            <Dynamic
                                component={item.component}
                                title={item.title}
                                information={item.information}
                                description={item.description}
                                cta={item.cta}
                                src={item.src}

                            >
                                <CtaText
                                    class={"hidden lg:block"}
                                    title={item.title}
                                    description={item.description}
                                    information={item.information}
                                    cta={item.cta}
                                />
                            </Dynamic>

                        </TabsContent>
                    )}
                </For>


                <Show when={matches.xl}>
                    <div
                        style={{
                            'background-color': 'rgb(255 255 255 / 0.2)'
                        }}
                        class={'flex justify-center items-center border-t border-b border-gray-300'}>

                        <Tabs.List class={`${style.tabs__list}`}>


                            <For each={menu()}>
                                {(item, index) => (

                            <Tabs.Trigger value={item?.value ?? item.title}
                                          class={`${style.tabs__trigger} sm:w-[150px] sm:inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:border-gray-400 focus:border-gray-100 focus-visible:outline-none justify-self-center whitespace-nowrap   hover:bg-amber-100/50 hover:text-amber-600  focus:bg-white/25 focus:text-amber-700  disabled:cursor-not-allowed disabled:border-amber-300 disabled:bg-amber-100 disabled:text-amber-400 disabled:shadow-none"`}>
                                {item.title}
                            </Tabs.Trigger>

                                    )}
                            </For>


                            <Tabs.Indicator class={style.tabs__indicator}/>
                        </Tabs.List>
                    </div>
                </Show>
            </Tabs>
        </Show>
    );
};

export default BaseTabs;
