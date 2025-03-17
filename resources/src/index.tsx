
import {render} from 'solid-js/web';
import App from "~/app";
import {Router} from "@solidjs/router";
import {lazy} from "solid-js";
import "../css/app.css"

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    );
}

const routes = [
    {
        path: "/",
        component: lazy(() => import("./routes/index")),
    },
 //   {
 //       path: "/login",
 //       component: lazy(() => import("./routes/login")),
 //   },
 //   {
 //       path: "/register",
 //       component: lazy(() => import("./routes/register")),
 //   }
]

render(() => <Router root={(props) => <App>{props.children}</App>}>{routes}</Router>, root!);
