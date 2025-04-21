import Popover from '@corvu/popover'
import type {Component, JSXElement} from 'solid-js'
import Icon from '../icon';
import {icons} from "lucide-solid";

const BasePopover: Component<{
    title?: string;
    icon?: keyof typeof icons;
    children?: JSXElement;
}> = props => {

    const icon = () => props.icon ?? "Cog";
    const children = () => props.children;
    return (
        <Popover
            placement="top"
            floatingOptions={{
                offset: 13,
                flip: false,
                shift: true,
            }}
        >
            <Popover.Trigger class="my-auto rounded-full bg-corvu-100 p-3 transition-all duration-100 hover:bg-corvu-200 active:translate-y-0.5">
                <Icon name={icon()}  class="h-4 w-4" />
                <span class="sr-only">{props.title}</span>
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content class="z-50 rounded-lg bg-corvu-100 px-3 py-2 shadow-md data-open:animate-in data-open:fade-in-50% data-open:slide-in-from-top-1 data-closed:animate-out data-closed:fade-out-50% data-closed:slide-out-to-top-1">
                    <Popover.Label class="font-light">{props.title}</Popover.Label>
                    <div class="flex justify-center items-center space-x-4">
                        {children()}
                    </div>
                    <Popover.Arrow class="text-corvu-100" />
                </Popover.Content>
            </Popover.Portal>
        </Popover>
    )
}

export default BasePopover;
