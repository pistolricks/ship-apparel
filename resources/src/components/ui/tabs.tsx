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
                "group/menu flex w-max flex-1 list-none items-center justify-center bg-gray-100 data-[orientation=vertical]:flex-col [&>li]:w-full",
                // style.tabs__list,
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
                "group/trigger inline-flex h-9 w-full items-center justify-start whitespace-nowrap   bg-gray-100 px-4 py-2 text-xs transition-colors hover:text-content focus:bg-bgBase/50 focus:text-content focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-secondary/50 data-[expanded]:bg-bgBase",
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
