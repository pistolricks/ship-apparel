import {GeoJsonObject} from "geojson";
import {Component, JSXElement, ValidComponent} from "solid-js";
import {IconProps} from "~/components/svg";
import {icons} from "lucide-solid";


export type SessionUser = {
    id: number;
    name: string;
    email: string;
    display_name: string;
    activated: boolean;
    created_at: string;
    token: string;
    expiry: string;
    folder: string;
    current_location?: Feature
}

export type MenuItemType = {
    title: string;
    href: string;
    class?: string;
    description?: string;
    information?: string;
    src?: string;
    vert_src?: string;
    cta?: string;
    value?: string;
    data?: unknown;
    disabled?: boolean;
    side?:  "top" | "bottom" | "both" | "left" | "right"
    onClick?: (e?: Event) => any;
    component?: ValidComponent;
    icon?: keyof typeof icons;
    sub?: MenuItemType[];
    children?: JSXElement
}

export type SectionItemType = {
    id: number;
    name: string;
    component: "carousel_card" | "row_items_card";
    title?: string;
    href: string;
    class?: string;
    data?: any;
    start?: number;
    end?: number;
    active: boolean;
    status: "draft" | "published" | "archived";
    created_at: string;
    updated_at: string;
    pivot?: any;
    contents: MenuItemType[];
}

export type ContentItemType = {
    id: number;
    name: string;
    component: string;
    title?: string;
    href?: string;
    class?: string;
    description?: string;
    information?: string;
    src: string;
    cta?: string;
    value?: string;
    data?: any;
    created_at: string;
    updated_at: string;
    pivot: any;
}

export type AUTHENTICATION_TOKEN = {
    token: string;
    expiry: string;
}

export type Point = {
    coordinates: [number, number]
    type: string
}

export interface FeatureCollection extends GeoJsonObject {
    type: "FeatureCollection";
    features: Array<Feature>;
}

export declare type Properties = {
    [name: string]: any;
} | null;

export interface Feature extends GeoJsonObject {
    type: "Feature";
    geometry?: Point;
    properties?: Properties;
    id?: string;
}

export type SM_PRODUCT = {
    id: string;
    product_title: string;
    product_description?: string;
    style: string;
    available_sizes?: string;
    brand_logo_image?: string;
    thumbnail_image?: string;
    color_swatch_image?: string;
    product_image?: string;
    spec_sheet?: string;
    price_text?: string;
    suggested_price?: string;
    category_name?: string;
    subcategory_name?: string;
    color_name?: string;
    color_square_image?: string;
    color_product_image?: string;
    color_product_image_thumbnail?: string;
    size?: string;
    qty?: number;
    piece_weight?: string;
    piece_price?: string;
    dozens_price?: string;
    case_price?: string;
    price_group?: string;
    case_size?: string;
    inventory_key?: string;
    size_index?: string;
    sanmar_mainframe_color?: string;
    mill: string;
    product_status: "Coming Soon" | "New" | "Regular" | "Discontinued" | "Disabled" ;
    companion_style?: string;
    msrp?: string;
    map_pricing?: string;
    front_model_image_url?: string;
    back_model_image_url?: string;
    front_flat_image_url?: string;
    back_flat_image_url?: string;
    product_measurements?: string;
    pms_color?: string;
    gtin?: string;
    decoration_spec_sheet?: string;
}


export type PaginationType = {
    current_page: number;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: {
        url?: string;
        label: string;
        active: boolean;
        disabled?: boolean;
    }[];
    next_page_url?: string;
    path: string;
    per_page: number;
    prev_page_url?: number;
    to?: number;
    total?: number;
}

export type StyleType = {
    id: string;
    product_title: string;
    product_description?: string;
    available_sizes?: string;
    brand_logo_image?: string;
    thumbnail_image?: string;
    color_swatch_image?: string;
    product_image?: string;
    spec_sheet?: string;
    price_text?: string;
    suggested_price?: string;
    category_name?: string;
    subcategory_name?: string;
    color_name: string;
    color_square_image?: string;
    color_product_image: string;
    color_product_image_thumbnail?: string;
    categories?: any;
    inventory_key?: string;
    size_index?: string;
    sanmar_mainframe_color?: string;
    mill: string;
    product_status: "Coming Soon" | "New" | "Regular" | "Discontinued" | "Disabled" ;
    companion_style?: string;
    msrp?: string;
    map_pricing?: string;
    front_model_image_url?: string;
    back_model_image_url?: string;
    front_flat_image_url?: string;
    back_flat_image_url?: string;
    product_measurements?: string;
    pms_color?: string;
    gtin?: string;
    decoration_spec_sheet?: string;
    products?: any;
    data?: any,
}

export type PRODUCT_BASIC_INFO = {
    availableSizes: string;
    brandName: string;
    caseSize: string;
    catalogColor: string;
    category: string;
    color: string;
    inventoryKey: string;
    keywords: string;
    pieceWeight: string;
    productDescription: string;
    productStatus: string;
    productTitle: string;
    size: string;
    sizeIndex: string;
    style: string;
    uniqueKey: string;
}

export type PRODUCT_IMAGE_INFO = {
    backFlat: string;
    backModel: string;
    brandLogoImage: string;
    colorProductImage: string;
    colorProductImageThumbnail: string;
    colorSquareImage: string;
    colorSwatchImage: string;
    frontFlat: string;
    frontModel: string;
    productImage: string;
    sideModel: string;
    specSheet: string;
    threeQModel: string;
    thumbnailImage: string;
    titleImage: string;
}

export type PRODUCT_PRICE_INFO = {
    casePrice: string;
    dozensPrice: string;
    piecePrice: string;
    priceCode: string;
    priceText: string;
}


export type PRODUCT_INFO = {
    productBasicInfo: PRODUCT_BASIC_INFO;
    productImageInfo: PRODUCT_IMAGE_INFO;
    productPriceInfo: PRODUCT_PRICE_INFO;
}
