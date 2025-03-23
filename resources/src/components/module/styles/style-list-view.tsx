import {Component} from "solid-js";
import {SM_PRODUCT, StyleType} from "~/lib/types";
import { Format } from '@ark-ui/solid/format'
import Drawer from "@corvu/drawer";
import {IconTablet, QuickViewIcon} from "~/components/svg";

type PROPS = StyleType & { onClick: () => void}

const ProductListView: Component<PROPS> = props => {


    const NumberWithCurrency = () => {
        return <Format.Number value={Number(props.msrp)} style="currency" currency="USD" />
    }

    return (
        <div class="group relative border-b border-r border-gray-200 p-4 sm:p-6">
            <img
                src={props.front_model_image_url ?? props.front_flat_image_url}
                alt={props.title} class="aspect-square sm:aspect-[9/16] rounded-lg bg-white object-contain sm:object-contain group-hover:opacity-75"/>
            <Drawer.Trigger
                class="absolute top-0 right-0"
                contextId={'product-preview-1'}>
                <IconTablet class={'stroke-gray-500 size-6'}/>
            </Drawer.Trigger>
            <div class="pb-4 pt-7 text-center sm:min-h-[170px]">
                <h3 class="text-sm font-light  text-gray-900">
                    <button class={'flex flex-col w-full justify-center'} onClick={props.onClick} type={'button'}>
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        <span>{props.title}</span>
                        <span class={'font-semibold text-xs'}><span class={''}>{props.miller?.name}</span> - {props.id}</span>
                    </button>
                </h3>

                <p class="mt-4 text-sm font-medium text-gray-900">{NumberWithCurrency()}+</p>
            </div>
        </div>
    );
};

export default ProductListView;
