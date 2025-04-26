import {Component, createEffect, createMemo, createSignal} from "solid-js";
import {createAsync, useParams} from "@solidjs/router";
import {getAthleticStyles} from "~/lib/athletics";
import {ATHLETIC_PRODUCT} from "~/lib/types";
import AthleticSecton from "~/components/module/athletics/athletic-section";

type PROPS = {

}

const Sports: Component<PROPS> = props => {
    const params = useParams();

    const query: [string, string] = ["category", "Adult | Baseball"]

    const response = createAsync(async () => getAthleticStyles());

    const [getCategories, setCategories] = createSignal<ATHLETIC_PRODUCT[]>([])


    const cats: Record<string, string> = {
        'adult-baseball': "Adult | BASEBALL",
        'adult-football': "Adult | FOOTBALL",
        'youth-football': "YOUTH | FOOTBALL",
    }

    createEffect(() => {




        console.log(response(), "category_page")
    })

    const categories = createMemo(() => {
        let arr = response()?.list?.filter((item: ATHLETIC_PRODUCT) =>
            params.category in cats ? item.category.includes(cats[params.category]) : false
        )
        console.log("arr", arr)
        return arr;
    })

    return (
        <>
            <AthleticSecton data={categories()} pagination={response()?.metadata}/>

        </>
    )
};

export default Sports;
