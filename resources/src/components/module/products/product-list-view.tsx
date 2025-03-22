import {Component} from "solid-js";
import {SM_PRODUCT} from "~/lib/types";
import { Format } from '@ark-ui/solid/format'


type PROPS = SM_PRODUCT & { onClick: () => void}

const ProductListView: Component<PROPS> = props => {

    const cleanTitle = () => {
        return props?.product_title?.replace(`${props?.mill}`, '')?.replace(`${props.style}`, '')?.replace(' - ', '')?.replace('.','')
    }

    const NumberWithCurrency = () => {
        return <Format.Number value={Number(props.msrp)} style="currency" currency="USD" />
    }

    return (
        <div class="group relative border-b border-r border-gray-200 p-4 sm:p-6">
            <img
                src={props.front_model_image_url ?? props.front_flat_image_url}
                alt={props.product_title} class="aspect-square sm:aspect-[9/16] rounded-lg bg-white object-contain sm:object-cover group-hover:opacity-75"/>
            <div class="pb-4 pt-10 text-center sm:min-h-[170px]">
                <h3 class="text-sm font-semibold text-gray-900">
                    <button class={'flex flex-col w-full justify-center'} onClick={props.onClick} type={'button'}>
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        <span>{cleanTitle()}</span>
                        <span class={'font-normal text-xs'}>{props.mill} - {props.style}</span>
                    </button>
                </h3>

                <p class="mt-4 text-base font-medium text-gray-900">{NumberWithCurrency()}</p>
            </div>
        </div>
    );
};

export default ProductListView;
