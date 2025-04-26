import { MetaProvider } from "@solidjs/meta";
import {Component, ParentProps, Suspense} from 'solid-js';
import CentralLayout from "~/components/layout/central-layout";
import {Toaster} from "~/components/ui/toast";
import {LayoutProvider} from "~/context/layout-provider";
import { StyleRegistry, css } from "solid-styled";

export const imagePath = 'https://ink-and-thread.com/cdn-cgi/imagedelivery/jYAILuSxmZBHJW3H5LQP5g';
export const img = 'http://localhost:8080/insecure/rs:fill:500:500:0/resizing_type:fit/g:sm/plain/'

function GlobalStyles() {
    css`
    @global {
      body {
        font-family:  Metropolis-Regular, Inter, Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
      }

        h1 {
            font-family: Metropolis-Bold, sans-serif;
            color: var(--ink-color-text-primary);
            font-weight: var(--ink-font-weight-bold);
        }
        p {
            font-family: Metropolis-Regular, sans-serif;
            font-size: var(--ink-font-size-s);
            line-height: 24px;
            font-weight: var(--ink-font-weight-regular);
        }
        a {
            font-family: Metropolis-Medium, sans-serif;
            color: var(--ink-color-text-primary);
            font-size: var(--ink-font-size-s);
            line-height: 24px;
            font-weight: 500;
        }
        a:hover {
            color: var(--ink-color-text-hover)
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
