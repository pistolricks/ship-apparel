import {Component} from "solid-js";
import {A} from "@solidjs/router";

type PROPS = {
    title: string;
    description: string;
    information: string;
    cta: string;
    href?: string;
}

const CtaText: Component<PROPS> = props => {
    const title = () => props.title;
    const description = () => props.description;
    const information = () => props.information;
    const cta = () => props.cta;
    const href = () => props.href ?? "#";

    return (
        <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">  {title()}</h2>
            <p class="mt-6 text-xl/8 text-gray-600">
                {description()}
            </p>
            <p class="mt-6 text-base/7 text-gray-600">
                {information()}
            </p>
            <div class="mt-10 flex">
                <A href={href()}
                   class="rounded-md  bg-black/40 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/25 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-black/20">
                    {cta()}
                    <span aria-hidden="true">&rarr;</span></A>
            </div>
        </div>
    );
};

export default CtaText;
