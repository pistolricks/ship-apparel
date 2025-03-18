import {query} from "@solidjs/router";



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


