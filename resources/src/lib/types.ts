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
    PRODUCT_TITLE?: string;
    PRODUCT_DESCRIPTION?: string;
    STYLE?: string;
    AVAILABLE_SIZES?: string;
    BRAND_LOGO_IMAGE?: string;
    THUMBNAIL_IMAGE?: string;
    COLOR_SWATCH_IMAGE?: string;
    PRODUCT_IMAGE?: string;
    SPEC_SHEET?: string;
    PRICE_TEXT?: string;
    SUGGESTED_PRICE?: string;
    CATEGORY_NAME?: string;
    SUBCATEGORY_NAME?: string;
    COLOR_NAME?: string;
    COLOR_SQUARE_IMAGE?: string;
    COLOR_PRODUCT_IMAGE?: string;
    COLOR_PRODUCT_IMAGE_THUMBNAIL?: string;
    SIZE?: string;
    PIECE_WEIGHT?: string;
    PIECE_PRICE?: string;
    DOZENS_PRICE?: string;
    CASE_PRICE?: string;
    PRICE_GROUP?: string;
    CASE_SIZE?: string;
    INVENTORY_KEY?: string;
    SIZE_INDEX?: string;
    SANMAR_MAINFRAME_COLOR?: string;
    MILL?: string;
    PRODUCT_STATUS?: string;
    COMPANION_STYLES?: string;
    MSRP?: string;
    MAP_PRICING?: string;
    FRONT_MODEL_IMAGE_URL?: string;
    BACK_MODEL_IMAGE_URL?: string;
    FRONT_FLAT_IMAGE_URL?: string;
    BACK_FLAT_IMAGE_URL?: string;
    PRODUCT_MEASUREMENTS?: string;
    PMS_COLOR?: string;
    GTIN?: string;
    DECORATOR_SPEC_SHEET?: string;
}
