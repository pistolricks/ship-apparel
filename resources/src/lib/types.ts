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

