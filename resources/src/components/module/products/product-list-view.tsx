import {Component} from "solid-js";
import {SM_PRODUCT} from "~/lib/types";
import {A} from "@solidjs/router";

type PROPS = SM_PRODUCT & { onClick: () => void}

const ProductListView: Component<PROPS> = props => {
    return (
        <div class="group relative border-b border-r border-gray-200 p-4 sm:p-6">
            <img
                src={props.front_model_image_url ?? props.front_flat_image_url}
                alt={props.product_title} class="aspect-square rounded-lg bg-gray-200 object-cover group-hover:opacity-75"/>
            <div class="pb-4 pt-10 text-center sm:min-h-[150px]">
                <h3 class="text-sm font-medium text-gray-900">
                    <button onClick={props.onClick} type={'button'}>
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        {props.product_title}
                    </button>
                </h3>

                <p class="mt-4 text-base font-medium text-gray-900">{props.msrp}</p>
            </div>
        </div>
    );
};

export default ProductListView;
