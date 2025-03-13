import {Component, ParentProps} from "solid-js";
import Header from "~/components/layout/partials/header";
import BaseDrawer, {DrawerContent} from "~/components/ui/drawer/drawer";

type PROPS = ParentProps & {
    name: string
}

const CentralLayout: Component<PROPS> = props => {

    const contextId = () => "cl-1"
    const side: () => 'top' | 'right' | 'bottom' | 'left' = () => "right"
    const children = () => props.children;
    return (
        <BaseDrawer side={side()} contextId={contextId()}>
        <div class="min-h-screen h-screen flex flex-col">
            <Header contextId={contextId()}/>
            <div class={'flex-1 flex flex-row overflow-y-hidden'}>
            <main
                class={'scrollbar-hide flex-1 bg-background border-l border-r border-gray-200/50 text-xs p-2 overflow-y-auto'}
            >
                {children()}
            </main>
            </div>
            <DrawerContent side={side()} contextId={contextId()} />
            <footer class={'bg-gray-200/50'}>
                <div class="">
                    <div class="flex  items-center px-4">

                    </div>
                </div>
            </footer>
        </div>
        </BaseDrawer>
    );
};

export default CentralLayout;
