import {Component, ParentProps, Suspense} from 'solid-js';
import CentralLayout from "~/components/layout/central-layout";
import {Toaster} from "~/components/ui/toast";

export const logo = () => "/logo.svg"
const App: Component<ParentProps> = props => {

    return <CentralLayout name={'Home'}><Suspense>{props.children}</Suspense><Toaster/></CentralLayout>
};

export default App;
