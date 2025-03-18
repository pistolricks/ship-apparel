import type {ValidComponent} from "solid-js"
import {splitProps} from "solid-js"

import type {PolymorphicProps} from "@kobalte/core/polymorphic"
import * as TabsPrimitive from "@kobalte/core/tabs"
import style from "~/components/ui/tab/tabs.module.css";
import {cn} from "~/lib/utils"

const Tabs = TabsPrimitive.Root

type TabsListProps<T extends ValidComponent = "div"> = TabsPrimitive.TabsListProps<T> & {
    class?: string | undefined
}

const TabsList = <T extends ValidComponent = "div">(
    props: PolymorphicProps<T, TabsListProps<T>>
) => {
    const [local, others] = splitProps(props as TabsListProps, ["class"])
    return (
        <TabsPrimitive.List
            class={cn(
                style.tabs__list,
                local.class
            )}
            {...others}
        />
    )
}

type TabsTriggerProps<T extends ValidComponent = "button"> = TabsPrimitive.TabsTriggerProps<T> & {
    class?: string | undefined
}

const TabsTrigger = <T extends ValidComponent = "button">(
    props: PolymorphicProps<T, TabsTriggerProps<T>>
) => {
    const [local, others] = splitProps(props as TabsTriggerProps, ["class"])
    return (
        <TabsPrimitive.Trigger
            class={cn(
                style.tabs__trigger,
                "sm:w-[200px] sm:inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide transition duration-300 border-b border-gray-200 hover:border-gray-400 lg:border-none focus:border-gray-100 focus-visible:outline-none justify-self-center whitespace-nowrap   hover:bg-amber-100/50 hover:text-amber-600  focus:bg-white/25 focus:text-amber-700  disabled:cursor-not-allowed disabled:border-amber-300 disabled:bg-amber-100 disabled:text-amber-400 disabled:shadow-none",
                local.class
            )}
            {...others}
        />
    )
}

type TabsContentProps<T extends ValidComponent = "div"> = TabsPrimitive.TabsContentProps<T> & {
    class?: string | undefined
}

const TabsContent = <T extends ValidComponent = "div">(
    props: PolymorphicProps<T, TabsContentProps<T>>
) => {
    const [local, others] = splitProps(props as TabsContentProps, ["class"])
    return (
        <TabsPrimitive.Content
            class={cn(
                style.tabs__content,
                local.class
            )}
            {...others}
        />
    )
}

type TabsIndicatorProps<T extends ValidComponent = "div"> = TabsPrimitive.TabsIndicatorProps<T> & {
    class?: string | undefined
}

const TabsIndicator = <T extends ValidComponent = "div">(
    props: PolymorphicProps<T, TabsIndicatorProps<T>>
) => {
    const [local, others] = splitProps(props as TabsIndicatorProps, ["class"])
    return (
        <TabsPrimitive.Indicator
            class={cn(
                style.tabs__indicator,
                local.class
            )}
            {...others}
        />
    )
}

export {Tabs, TabsList, TabsTrigger, TabsContent, TabsIndicator}
