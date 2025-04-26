import {query} from "@solidjs/router";

export const getAthletic = query(async (id: string) => {
    "use server";

    const response = await fetch(`/api/shop/v1/athletics/${id}`, {
        headers: {
            "content-Type": "application/json",
        },
    })
    const res: any = await response.json();



    console.log(res, "getAthletic");





    return res;
}, 'athletics-all')

export const getAthletics = query(async () => {
    "use server";

    console.log("Product Api was called")
    const response = await fetch(`/api/shop/v1/athletics`, {
        headers: {
            "content-Type": "application/json",
        },
    })
    const res: any = await response.json();

    console.log(res);
    return res;
}, "athletics")

export const getBrand = query(async (brand: string) => {
    "use server";

    console.log("Brand Api was called")
    const response = await fetch(`/api/shop/v1/athletics/brands/${brand}`, {
        headers: {
            "content-Type": "application/json",
        },
    })
    const res: any = await response.json();

    console.log(res);
    return res;
}, "brands")

export const getCategory = query(async (category: string) => {
    "use server";

    console.log("category Api was called")
    const response = await fetch(`/api/shop/v1/athletics/category/${category}`, {
        headers: {
            "content-Type": "application/json",
        },
    })
    const res: any = await response.json();

    console.log(res);
    return res;
}, "category")

export const getSubCategory = query(async (category: string, subCategory: string) => {
    "use server";

    console.log("category Api was called")
    const response = await fetch(`/api/shop/v1/athletics/category/${category}/${subCategory}`, {
        headers: {
            "content-Type": "application/json",
        },
    })
    const res: any = await response.json();

    console.log(res);
    return res;
}, "subcategory")

export const getAthleticStyles = query(async () => {
    "use server";

    console.log("Product Api was called")
    const response = await fetch(`/api/shop/v1/athletic-styles`, {
        headers: {
            "content-Type": "application/json",
        },
    })
    const res: any = await response.json();

    console.log(res);
    return res;
}, "athletic-styles")

export const getAthleticImages = async (style_color: string) => {
    "use server";

    console.log("Images Api was called")
    const response = await fetch(`/api/shop/v1/athletic-images/${style_color}`, {
        headers: {
            "content-Type": "application/json",
        },
    })
    const res: any = await response.json();

    console.log(res['images'], 'images');
    return res;
}

export const brands: (brand: number) => string = (brand: number) => {
    const brandMap: { [key: number]: string } = {
        10: "ASI",
        17: "Holloway",
        60: "Russell",
        15: "HighFive",
        18: "Pacific Headwear",
    };
    return brandMap[brand] || "";
}
