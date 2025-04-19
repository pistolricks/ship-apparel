import {query} from "@solidjs/router";


export const getStyles = query(async (options = {
    category_name: "",
    mill: ""
}) => {
    "use server";

    console.log("Style Api was called")
    const response = await fetch(`/api/shop/v1/products`, {
        headers: {
            "content-Type": "application/json",
        },
    })
    const res: any = await response.json();

    console.log(res);
    return res;
}, "styles")

export const getBrand = query(async (brand: string) => {
    "use server";

    console.log("Brand Api was called")
    const response = await fetch(`/api/shop/v1/styles/brands/${brand}`, {
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
    const response = await fetch(`/api/shop/v1/styles/category/${category}`, {
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
    const response = await fetch(`/api/shop/v1/styles/category/${category}/${subCategory}`, {
        headers: {
            "content-Type": "application/json",
        },
    })
    const res: any = await response.json();

    console.log(res);
    return res;
}, "subcategory")



