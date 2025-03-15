import {Accessor, createContext, createSignal, JSX, onMount, Setter, useContext} from "solid-js";
import {Feature, FeatureCollection, MenuItemType} from "~/lib/types";

import {createStore, SetStoreFunction, Store} from "solid-js/store";


import {SessionUser} from "~/lib/session";
import {Extent} from "ol/extent";
import {IconVendors} from "~/components/svg";
import PromoWithTileOverlap from "~/components/section/promo/promo-with-tile-overlap";
import PromoWithBackgroundImage from "~/components/section/promo/promo-with-background-image";
import PromoTextImage from "~/components/section/promo/promo-text-image";


type POSITION = [number, number] | undefined

type LayoutType = {
    currentUser: Store<SessionUser>
    setCurrentUser: SetStoreFunction<SessionUser>
    getStoreCollection: Store<FeatureCollection>
    setStoreCollection: SetStoreFunction<FeatureCollection>
    getMyLocation: Accessor<Feature | undefined>
    setMyLocation: Setter<Feature | undefined>
    getViewbox: Accessor<Extent | undefined>
    setViewbox: Setter<Extent | undefined>
    getPosition: Accessor<POSITION>
    setPosition: Setter<POSITION>
    getHeight: Accessor<number>
    getIsDesktop: Accessor<boolean>
    getQuery: Accessor<string>
    setQuery: Setter<string>
    menu: MenuItemType[]
    apps: MenuItemType[]
    category1: MenuItemType[]
    category2: MenuItemType[]
    category3: MenuItemType[]
    brand1: MenuItemType[]
    brand2: MenuItemType[]
    brand3: MenuItemType[]
    brand4: MenuItemType[]
}

let headerHeight = import.meta.env.VITE_HEADER_HEIGHT
let footerHeight = import.meta.env.VITE_FOOTER_HEIGHT


export const LayoutContext = createContext<LayoutType>();

export function LayoutProvider(props: { children: JSX.Element }) {

    const [currentUser, setCurrentUser] = createStore<SessionUser>({
        id: 0,
        name: "",
        email: "",
        display_name: "",
        activated: false,
        created_at: "",
        token: "",
        expiry: "",
        folder: "",
        current_location: undefined,
    })
    const [getMyLocation, setMyLocation] = createSignal<Feature | undefined>()
    const [getStoreCollection, setStoreCollection] = createStore<FeatureCollection>({
        type: "FeatureCollection",
        features: []
    })


    const [getPosition, setPosition] = createSignal<POSITION>(undefined)

    const [getViewbox, setViewbox] = createSignal<Extent | undefined>(undefined)
    const [getHeight, setHeight] = createSignal(0)
    const [getQuery, setQuery] = createSignal("")

    const handleHeight = () => {
        setHeight(() => window.innerHeight - (headerHeight) - (footerHeight))
        setIsDesktop(window.innerWidth >= 726)

        console.log('height', getHeight())
    }

    const [getIsDesktop, setIsDesktop] = createSignal(false)


    const category1: MenuItemType[] = [
        {
            title: "T-Shirts",
            href: "t-shirts",

        },
        {
            title: "Polos/Knits",
            href: "polos_knits",

        },
        {
            title: "Sweatshirts/Fleece",
            href: "sweatshirts_fleece",

        },
        {
            title: "Woven/Dress Shirts",
            href: "woven_dress&shirts",
        },
        {
            title: "Women's",
            href: "womens",
        },
        {
            title: "Tall",
            href: "tall",

        },
        {
            title: "Bottoms",
            href: "bottoms",

        },
    ]

    const category2: MenuItemType[] = [
        {title: "Activewear", href: "activewear"},
        {title: "Workwear", href: "workwear"},
        {title: "Personal Protection", href: "personal&protection"},
        {title: "Young Men", href: "young&men"},
        {title: "Juniors", href: "juniors"},
        {title: "Youth", href: "youth"},
    ]

    const category3: MenuItemType[] = [
        {title: "Caps", href: "caps"},
        {title: "Bags", href: "bags"},
        {title: "Accessories", href: "accessories"},
    ]


    const brand1: MenuItemType[] = [
        {title: "A4", href: "a4"},
        {title: "Allmade", href: "allmade"},
        {title: "American Apparel", href: "american&apparel"},
        {title: "BELLA+CANVAS", href: "bella+canvas"},
        {title: "Brooks Brothers", href: "brooks&brothers"},
        {title: "Bulwark", href: "bulwark"},
        {title: "Carhartt", href: "carhartt"},
        {title: "Champion", href: "champion"},
        //    {title: "Comfort Colors", href: "comfort-colors"},
        //     {title: "CornerStone", href: "cornerstone"},
        //     {title: "Cotopaxi", href: "cotopaxi"},
        //     {title: "District", href: "district"},
        //     {title: "Eddie Bauer", href: "eddie-bauer"},


    ]

    const brand2: MenuItemType[] = [
        {title: "Gildan", href: "gildan"},
        {title: "Hanes", href: "hanes"},
        {title: "Jerzees", href: "jerzees"},
        {title: "Mercer+Mettle", href: "mercer+mettle"},
        {title: "New Era", href: "new era"},
        {title: "Next Level Apparel", href: "next&level&apparel"},
        {title: "Nike", href: "nike"},
        //    {title: "OGIOOutdoor", href: "ogiooutdoor"},
        //    {title: "ResearchPort & CompanyPort", href: "researchport-&-companyport"},
        //    {title: "Authority", href: "authority"},
        //    {title: "Rabbi", href: "rabbi"},
    ]

    const brand3: MenuItemType[] = [
        {title: "Skins", href: "skins"},
        {title: "Re", href: "re"},
        {title: "Kap", href: "kap"},
        {title: "Russel", href: "russel"},
        {title: "Outdoors", href: "outdoors"},
        {title: "Spacecraft", href: "spacecraft"},
        //    {title: "Sport - Tek", href: "sport---tek"},
        //    {title: "Stanley / Stella", href: "stanley-/-stella"},
        //    {title: "tentree", href: "tentree"},
    ]

    const brand4: MenuItemType[] = [
        {title: "The North Face", href: "the&north&face"},
        {title: "Tommy Bahamas", href: "tommy&bahama"},
        {title: "TravisMathew", href: "travismathew"},
        {title: "Volunteer", href: "volunteer"},
        {title: "Knitwear", href: "knitwear"},
        {title: "Wink", href: "wink"},
    ]

    const menu: MenuItemType[] = [
        {title: "New Arrivals", href: "/new-arrivals", icon: IconVendors},
        {title: "apparel", href: "/apparel", icon: IconVendors},
        {title: "Design Lab", href: "/design-lab", icon: IconVendors},

    ]




    const apps: MenuItemType[] = [
        {
            title: "school spirit",
            description: "Show your spirit with our custom clothing!",
            information: "Bring your school's pride to life with custom graphics! From screen printing to embroidery, heat press and DTG printing. We offer endless options.",
            cta: "Shop Now",
            src: "storage/cta_group_1.webp",
            href: "/schools",
            component: PromoTextImage


        },
        {
            title: "custom",
            description: "Custom t-shirts and embroidery services offer a unique way to express individuality, promote businesses, commemorate events, or create team unity. At **CustomInk and Thread**, we specialize in transforming ordinary garments into personalized statements through cutting-edge printing techniques and meticulous embroidery craftsmanship.",
            information: "",
            cta: "Shop Now",
            src: "storage/cta_group_1.webp",
            href: "/activewear",
            component: PromoWithTileOverlap
        },
        {
            title: "outerware",
            href: "/outerware",
            src: "storage/cta_sports_pack_1.png",
            cta: "Shop Now",
            component: PromoTextImage
        },
        {
            title: "workwear",
            href: "/workwear",
            src: "storage/cta_kid_1.jpg",
            cta: "Shop Now",
            component: PromoTextImage
        },
        {
            title: "uniforms",
            href: "/uniform",
            src: "storage/category_sports_1.jpg",
            cta: "Shop Now",
            component: PromoTextImage
        },
        {
            title: "reversibles",
            cta: "Shop Now",
            src: "storage/category_sports_1.jpg",
            href: "/reversibles",
            value: "reversibles",
            component: PromoTextImage
        },
        {
            title: "brands",
            href: "/vendors",
            src: "storage/category_sports_1.jpg",
            cta: "Shop Now",
            component: PromoTextImage,
        },
    ]


    onMount(() => {
        handleHeight();

    })

    return (
        <LayoutContext.Provider value={{
            currentUser,
            setCurrentUser,
            getStoreCollection,
            setStoreCollection,
            getQuery,
            setQuery,
            getViewbox,
            setViewbox,
            getMyLocation,
            setMyLocation,
            getPosition,
            setPosition,
            getHeight,
            getIsDesktop,
            menu,
            apps,
            category1,
            category2,
            category3,
            brand1,
            brand2,
            brand3,
            brand4,
        }}>
            {props.children}
        </LayoutContext.Provider>
    );
}

export function useLayoutContext() {
    return useContext(LayoutContext)!
}
