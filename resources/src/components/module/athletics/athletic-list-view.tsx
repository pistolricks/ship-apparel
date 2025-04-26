import {Component} from "solid-js";
import {ATHLETIC_PRODUCT} from "~/lib/types";
import {Format} from '@ark-ui/solid/format'
import Drawer from "@corvu/drawer";
import {IconTablet} from "~/components/svg";
import {A} from "@solidjs/router";
import {imagePath, img} from "~/app";
import {classNames} from "~/lib/utils";
import { brands } from "~/lib/athletics";

type PROPS = ATHLETIC_PRODUCT & {  href: string }

const AthleticListView: Component<PROPS> = props => {

    const href = () => props.href;
    const NumberWithCurrency = () => {
        return <Format.Number value={Number(props.msrp)} style="currency" currency="USD"/>
    }

    const name = () => {
        let a = props.item_name
        let id = props.item_sku;
        let t = a?.replace(id, "")
        return t?.replace(`.`, "")
    }

    return (
        <div class="group relative border-b border-r border-gray-200 p-4 sm:p-6">

            <A href={href()} class="flex flex-col w-full justify-center">
                <div class="sm:h-full sm:w-full mx-auto flex items-start">
                    <img
                        src={`${img}${props.main_image_url}`}
                        alt={props.item_name}
                        class={classNames(
                            "rounded-lg w-full  max-h-[150px] bg-white object-bottom object-contain sm:object-contain group-hover:opacity-75")}/>
                </div>
                <div class=" pt-7 text-center h-[170px] sm:h-[140px]">
                    <h3 class="text-xs font-light  text-gray-900">
                        <div class={'flex flex-col w-full justify-center capitalize'}>
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            <span class={'mb-4 font-semibold text-xs'}><span
                                class={''}>{brands(props.brand)}</span> - {props.parent_sku}</span>
                            <span class={'min-h-[40px]'}>{name()}</span>

                        </div>
                    </h3>

                    <p class="mt-4 text-sm font-medium text-gray-900">{NumberWithCurrency()}+</p>
                </div>
            </A>

        </div>
    )
};

export {AthleticListView};
