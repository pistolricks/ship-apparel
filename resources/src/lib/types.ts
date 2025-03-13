import {GeoJsonObject} from "geojson";

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

