import {Component, ParentProps, Suspense} from 'solid-js';
import CentralLayout from "~/components/layouts/central-layout";

const App: Component<ParentProps> = props => {

    return <CentralLayout name={'Home'}><Suspense>{props.children}</Suspense></CentralLayout>
};

export default App;
