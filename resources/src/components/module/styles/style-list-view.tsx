import {Component} from "solid-js";
import {StyleType} from "~/lib/types";
import {Format} from '@ark-ui/solid/format'
import Drawer from "@corvu/drawer";
import {IconTablet} from "~/components/svg";
import {A} from "@solidjs/router";
import {imagePath} from "~/app";
import {classNames} from "~/lib/utils";

type PROPS = StyleType & { onClick: () => void, href: string }

const StyleListView: Component<PROPS> = props => {

    const href = () => props.href;
    const NumberWithCurrency = () => {
        return <Format.Number value={Number(props.msrp)} style="currency" currency="USD"/>
    }

    const name = () => {
        let a = props.product_title.replace(props.mill, "")
        let id = props.id;
        let t = a.replace(id, "")
        return t.replace(`.`, "")
    }

    return (
        <div class="group relative border-b border-r border-gray-200 p-4 sm:p-6">

            <A href={href()} class="flex flex-col w-full justify-center">
                <div class="sm:h-full sm:w-full mx-auto flex items-start">
                <img
                    src={`${imagePath}/${props.color_product_image}/gallery`}
                    alt={props.product_title}
                    class={classNames(
                        "rounded-lg w-full bg-white object-bottom object-contain sm:object-contain group-hover:opacity-75")}/>
                </div>
                <div class=" pt-7 text-center h-[170px] sm:h-[140px]">
                    <h3 class="text-xs font-light  text-gray-900">
                        <div class={'flex flex-col w-full justify-center capitalize'}>
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            <span class={'mb-4 font-semibold text-xs'}><span
                                class={''}>{props.mill}</span> - {props.id}</span>
                            <span class={'min-h-[40px]'}>{name()}</span>

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
