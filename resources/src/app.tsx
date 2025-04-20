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
        font-family: Gordita, Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
      }

      a {
        margin-right: 1rem;
      }

      main {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
      }

      h1 {
        color: #335d92;
        text-transform: uppercase;
        font-size: 4rem;
        font-weight: 100;
        line-height: 1.1;
        margin: 4rem auto;
        max-width: 14rem;
      }

      p {
        max-width: 14rem;
        margin: 2rem auto;
        line-height: 1.35;
      }

      @media (min-width: 480px) {
        h1 {
          max-width: none;
        }

        p {
          max-width: none;
        }
      }
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
