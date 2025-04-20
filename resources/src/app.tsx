import { MetaProvider } from "@solidjs/meta";
import {Component, ParentProps, Suspense} from 'solid-js';
import CentralLayout from "~/components/layout/central-layout";
import {Toaster} from "~/components/ui/toast";
import {LayoutProvider} from "~/context/layout-provider";
import { StyleRegistry, css } from "solid-styled";

export const imagePath = 'https://ink-and-thread.com/cdn-cgi/imagedelivery/jYAILuSxmZBHJW3H5LQP5g';

function GlobalStyles() {
    css`
    @global {
      body {
        font-family:  Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
      }

        h1 {
            font-weight: 400;
        }

  `;
    return null;
}

const App: Component<ParentProps> = props => {
    return (
        <MetaProvider>
        <StyleRegistry auto>
            <GlobalStyles />
    <LayoutProvider>
        <CentralLayout name={'Home'}>
            <Suspense>{props.children}</Suspense>
            <Toaster/>
        </CentralLayout>
    </LayoutProvider>
        </StyleRegistry>
    </MetaProvider>
    );
};

export default App;
