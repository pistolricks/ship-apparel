
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
    {
        path: "/shop",
        component: lazy(() => import("./routes/shop")),
    },
    {
        path: "/shop/:id",
        component: lazy(() => import("./routes/shop/view")),
    },
    {
        path: "/shop/:id",
        component: lazy(() => import("./routes/shop")),
    },
    {
        path: "/reversible-apparel",
        component: lazy(() => import("./routes/shop")),
    },
    {
        path: "/school-specials",
        component: lazy(() => import("./routes/school-specials")),
    },
    {
        path: "/our-company",
        component: lazy(() => import("./routes/our-company")),
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
