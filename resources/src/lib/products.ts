import {query} from "@solidjs/router";

export const getStyle = query(async (id: string) => {
    "use server";

    const response = await fetch(`api/shop/v1/styles/${id}`, {
        headers: {
            "content-Type": "application/json",
        },
    })
    const res: any = await response.json();

    console.log(res);
    return res;
}, 'style')

export const getProducts = query(async () => {
    "use server";

    console.log("Product Api was called")
    const response = await fetch(`/api/shop/v1/products`, {
        headers: {
            "content-Type": "application/json",
        },
    })
    const res: any = await response.json();

    console.log(res);
    return res;
}, "products")

export const getBrand = query(async (brand: string) => {
    "use server";

    console.log("Brand Api was called")
    const response = await fetch(`/api/shop/v1/products/brands/${brand}`, {
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
    const response = await fetch(`/api/shop/v1/products/category/${category}`, {
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
    const response = await fetch(`/api/shop/v1/products/category/${category}/${subCategory}`, {
        headers: {
            "content-Type": "application/json",
        },
    })
    const res: any = await response.json();

    console.log(res);
    return res;
}, "subcategory")



