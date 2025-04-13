import {GeoJsonObject} from "geojson";
import {Component, JSXElement, ValidComponent} from "solid-js";
import {IconProps} from "~/components/svg";

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
    side?:  "top" | "bottom" | "both" | "left" | "right"
    component?: ValidComponent;
    icon?: Component<IconProps>;
    sub?: MenuItemType[];
    children?: JSXElement
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
    product_title?: string;
    product_description?: string;
    style?: string;
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
    mill?: string;
    product_status?: string;
    companion_styles?: string;
    msrp?: string;
    map_pricing?: string;
    front_model_image_url?: string;
    back_model_image?: string;
    front_flat_image?: string;
    back_flat_image?: string;
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
    id?: string;
    product_title?: string;
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
    color_name?: string;
    color_square_image?: string;
    color_product_image: string;
    color_product_image_thumbnail?: string;
    sizes?: string;
    inventory_key?: string;
    size_index?: string;
    sanmar_mainframe_color?: string;
    mill?: string;
    product_status?: string;
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
