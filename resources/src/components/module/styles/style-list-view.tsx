import {Component} from "solid-js";
import {StyleType} from "~/lib/types";
import {Format} from '@ark-ui/solid/format'
import Drawer from "@corvu/drawer";
import {IconTablet} from "~/components/svg";
import {A} from "@solidjs/router";
import {imagePath} from "~/app";

type PROPS = StyleType & { onClick: () => void, href: string }

const StyleListView: Component<PROPS> = props => {

    const href = () => props.href;
    const NumberWithCurrency = () => {
        return <Format.Number value={Number(props.msrp)} style="currency" currency="USD"/>
    }

    return (
        <div class="group relative border-b border-r border-gray-200 p-4 sm:p-6">

            <A href={href()}>
                <img
                    src={`${imagePath}/${props.color_product_image}/gallery`}
                    alt={props.product_title}
                    class="aspect-square sm:aspect-[9/16]  rounded-lg bg-white object-contain sm:object-contain group-hover:opacity-75"/>

                <div class=" pt-7 text-center h-[170px]">
                    <h3 class="text-xs font-light  text-gray-900">
                        <div class={'flex flex-col w-full justify-center'}>
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            <span class={'mb-4 font-semibold text-xs'}><span
                                class={''}>{props.mill}</span> - {props.id}</span>
                            <span class={'min-h-[40px]'}>{props.product_title}</span>

                        </div>
                    </h3>

                    <p class="mt-4 text-sm font-medium text-gray-900">{NumberWithCurrency()}+</p>
                </div>
            </A>
            <Drawer.Trigger
                onClick={props.onClick}
                class="absolute bottom-1 right-1 w-6 h-6"
                contextId={'product-preview-1'}>
                <IconTablet class={'stroke-gray-500 hover:stroke-amber-700 hover:fill-amber-300 size-6'}/>
            </Drawer.Trigger>
        </div>
    )
};

export {StyleListView};
