import Cloudflare from 'cloudflare';




export const fetchImage = async ( id: string) =>
    (await fetch(`https://api.cloudflare.com/client/v4/accounts/${import.meta.env.VITE_CLOUDFLARE_IMAGES_ACCOUNT}/images/v1/${id}`, {
            method: "GET",
        })
    ).json()



