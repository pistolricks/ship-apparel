import {Component, ParentProps, Suspense} from 'solid-js';
import CentralLayout from "~/components/layout/central-layout";
import {Toaster} from "~/components/ui/toast";
import {LayoutProvider} from "~/context/layout-provider";

export const logo = () => "storage/static/icon180x180.png"
const App: Component<ParentProps> = props => {

    return <LayoutProvider><CentralLayout name={'Home'}><Suspense>{props.children}</Suspense><Toaster/></CentralLayout></LayoutProvider>
};

export default App;
