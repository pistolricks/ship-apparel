
import {render} from 'solid-js/web';
import App from "~/app";
import {RouteDefinition, Router} from "@solidjs/router";
import {lazy} from "solid-js";
import "../css/app.css"
import {getStyle, getBrand, getCategory, getProducts, getSubCategory} from "~/lib/products";

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    );
}

function preloadStyle({ params  }: { params: any }) {
    void getStyle(params.id)
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
        path: "/reversible-apparel",
        component: lazy(() => import("./routes/reversible-apparel")),
    },
    {
        path: "/school-specials",
        component: lazy(() => import("./routes/school-specials")),
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
        path: "/styles/view/:id",
        component: lazy(() => import("./routes/products/view")),
        preload: preloadStyle,
    },

    {
        path: "/products",
        component: lazy(() => import("./routes/products")),
        preload: preloadProducts,
    },
    {
        path: "/products/brands/:brand",
        component: lazy(() => import("~/routes/products/brand")),
        preload: preloadBrand,
    },
    {
        path: "/products/:category",
        component: lazy(() => import("~/routes/products/category")),
        preload: preloadCategory,
    },
    {
        path: "/products/:category/:subCategory",
        component: lazy(() => import("~/routes/products/sub-category")),
        preload: preloadSubCategory,
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
