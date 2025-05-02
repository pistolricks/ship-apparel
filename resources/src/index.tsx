
import {render} from 'solid-js/web';
import App from "~/app";
import {RouteDefinition, Router} from "@solidjs/router";
import {lazy} from "solid-js";
import "../css/app.css"
import {getStyle, getBrand, getCategory, getProducts, getSubCategory} from "~/lib/products";
import {getAthletic} from "~/lib/athletics";

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    );
}

function preloadStyle({ params  }: { params: any }) {
    void getStyle(params.id)
}

function preloadAthletic({ params  }: { params: any }) {
    void getAthletic(params.id)
}


function preloadProducts() {
   void getProducts()
}

function preloadBrand({ params,  }: { params: any }) {
        void getBrand(params.brand)
}

function preloadCategory({ params }: { params: any }) {
    void getCategory(params.category)
}

function preloadSubCategory({ params }: { params: any }) {
    void getSubCategory(params.category, params.subCategory)
}


const routes = [
    {
        path: "/",
        component: lazy(() => import("./routes/index")),
    },
    {
        path: "/apparel",
        component: lazy(() => import("./routes/apparel")),
    },
    {
        path: "/workwear",
        component: lazy(() => import("./routes/workwear")),
    },
    {
        path: "/team-uniforms",
        component: lazy(() => import("./routes/team-uniforms")),
    },
    {
        path: "/design-lab",
        component: lazy(() => import("./routes/design-lab")),
    },
    {
        path: "/popups",
        component: lazy(() => import("./routes/popups")),
    },
    {
        path: "/reversible-apparel",
        component: lazy(() => import("./routes/reversible-apparel")),
    },
    {
        path: "/school-specials",
        component: lazy(() => import("./routes/school-specials")),
    },
    {
        path: "/cart",
        component: lazy(() => import("./routes/cart")),
    },
    {
        path: "/checkout",
        component: lazy(() => import("./routes/checkout")),
    },
    {
        path: "/our-company",
        component: lazy(() => import("./routes/our-company")),
    },
    {
        path: "/contact-us",
        component: lazy(() => import("./routes/contact-us")),
    },


    {
        path: "/apparel/style/:id",
        component: lazy(() => import("~/routes/apparel/view")),
        preload: preloadStyle,
    },

    {
        path: "/apparel",
        component: lazy(() => import("./routes/apparel")),
        preload: preloadProducts,
    },
    {
        path: "/apparel/brands/:brand",
        component: lazy(() => import("~/routes/apparel/brand")),
        preload: preloadBrand,
    },
    {
        path: "/apparel/:category",
        component: lazy(() => import("~/routes/apparel/category")),
        preload: preloadCategory,
    },
    {
        path: "/apparel/:category/:subCategory",
        component: lazy(() => import("~/routes/apparel/sub-category")),
        preload: preloadSubCategory,
    },

    {
        path: "/team-uniforms/:id",
        component: lazy(() => import("~/routes/team-uniforms/view")),
        preload: preloadAthletic,
    },
    {
        path: "/team-uniforms/sports/baseball",
        component: lazy(() => import("~/routes/team-uniforms/sports/baseball")),
        preload: preloadAthletic,
    },
    {
        path: "/team-uniforms/sports/basketball",
        component: lazy(() => import("~/routes/team-uniforms/sports/basketball")),
        preload: preloadAthletic,
    },
    {
        path: "/team-uniforms/sports/football",
        component: lazy(() => import("~/routes/team-uniforms/sports/football")),
        preload: preloadAthletic,
    },
    {
        path: "/team-uniforms/sports/cheer",
        component: lazy(() => import("~/routes/team-uniforms/sports/cheer")),
        preload: preloadAthletic,
    },
    {
        path: "/team-uniforms/sports/volleyball",
        component: lazy(() => import("~/routes/team-uniforms/sports/volleyball")),
        preload: preloadAthletic,
    },
    {
        path: "/team-uniforms/sports/softball",
        component: lazy(() => import("~/routes/team-uniforms/sports/softball")),
        preload: preloadAthletic,
    },
    {
        path: "/team-uniforms/sports/tennis",
        component: lazy(() => import("~/routes/team-uniforms/sports/tennis")),
        preload: preloadAthletic,
    },
    {
        path: "/team-uniforms/sports/soccer",
        component: lazy(() => import("~/routes/team-uniforms/sports/soccer")),
        preload: preloadAthletic,
    },

    {
        path: "/sign-in",
        component: lazy(() => import("./routes/login")),
    },
    {
        path: "/create-account",
        component: lazy(() => import("./routes/register")),
    }
]

render(() => <Router root={(props) => <App>{props.children}</App>}>{routes}</Router>, root!);
