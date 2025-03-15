import {Component} from "solid-js";
import {A} from "@solidjs/router";

type PROPS = {
    title: string;
    description?: string;
    information?: string;
    cta?: string;
    href?: string;
    class?: string;
}

const CtaText: Component<PROPS> = props => {
    const title = () => props.title;
    const description = () => props.description;
    const information = () => props.information;
    const cta = () => props.cta;
    const href = () => props.href ?? "#";
    const className = () => props.class;

    return (
        <div class={`lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8  p-4 rounded-xl ${className()}`}>
            <div class="flex justify-between items-center w-full pb-2 lg:pb-0">
            <h2 class=" text-3xl lg:text-4xl uppercase font-semibold tracking-tight text-gray-900">  {title()}</h2>

                <A href={href()}
                   class="rounded-md h-10 lg:hidden  bg-black/40 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/25 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-black/20">
                    {cta()}
                    <span aria-hidden="true">&rarr;</span></A>
            </div>
            <p class=" lg:mt-2  text-xl/8 text-gray-600 hidden lg:block">
                {description()}
            </p>
            <p class="lg:mt-6 text-base/7 text-gray-600 line-clamp-3">
                {information()}
            </p>
            <div class={'hidden lg:block  mt-6'}>
            <A href={href()}
               class="rounded-md h-10 bg-black/40 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/25 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-black/20">
                {cta()}
                <span aria-hidden="true">&rarr;</span></A>
            </div>
        </div>
    );
};

export default CtaText;
