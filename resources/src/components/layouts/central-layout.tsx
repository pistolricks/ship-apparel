import {Component, ParentProps} from "solid-js";
import Header from "~/components/layouts/partials/header";

type PROPS = ParentProps & {
    name: string
}

const CentralLayout: Component<PROPS> = props => {
    const children = () => props.children;
    return (
        <div class="min-h-screen h-screen flex flex-col">
            <Header/>
            <div class={'flex-1 flex flex-row overflow-y-hidden'}>
            <main
                class={'scrollbar-hide flex-1 bg-background border-l border-r border-gray-200/50 text-xs p-2 overflow-y-auto'}
            >
                {children()}
            </main>
            </div>
            <footer class={'bg-gray-200/50'}>
                <div class="">
                    <div class="flex  items-center px-4">

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CentralLayout;
