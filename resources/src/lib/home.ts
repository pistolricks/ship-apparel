import {query} from "@solidjs/router";



export const fetchHome = query(async () => {
    "use server";

    console.log("Home Api was called")
    const response = await fetch(`/api/home/v1`, {
        headers: {
            "content-Type": "application/json",
        },
    })
    const res: any = await response.json();

    console.log(res);
    return res;
}, "home")


