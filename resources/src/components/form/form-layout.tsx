import {A, Action, useNavigate, useSubmission} from "@solidjs/router";
import {Component, createEffect, createSignal, JSXElement, Show, splitProps, ValidComponent} from "solid-js";

import {IconX} from "~/components/svg";

const FormLayout: Component<{
    action?: Action<[any], any, FormData>;
    title?: string
    imageSrc?: string
    hideLogo?: boolean
    children: JSXElement;
}> = props => {
    const sub = useSubmission<[any], any, FormData>(props.action!, (formData: FormData) => {
        for (let value of formData.values()) {
            if (value) return true;
        }
        return false;
    });

    const navigate =  useNavigate();
    const hideLogo = () => props.hideLogo ?? false;
    const title = () => props.title ?? '';
    const imageSrc = () => props.imageSrc;
    const children = () => props.children;




    createEffect(() => console.log(sub))

    return (
        <div>
            <div class="h-full w-full max-w-xl mx-auto items-center justify-center  py-4 sm:p-4">
                <div class="flex h-full min-h-full flex-col justify-center">
                    <div class="sm:mx-auto">
                        <Show<boolean> when={!hideLogo()}>
                            <A href={'/'}>
                                <img class="mx-auto h-24 w-auto rounded"
                                     src={imageSrc()} alt="logo"/>
                            </A>
                        </Show>
                        <h2 class="mt-4 text-center text-2xl/9 tracking-tight text-gray-11 uppercase">
                            {title()}
                        </h2>
                    </div>
                    <div class="w-full space-y-6 text-gray-600">
                        <div class="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
                            <div class="mx-auto max-w-lg container">
                                <Show<boolean> when={sub.error} keyed>
                                    {(error) => (
                                            <div class="rounded-md bg-red-50 p-4 text-sm text-red-500"><b>Error alert</b>  {error.message}
                                                <button onClick={() => sub.clear()}>
                                                <IconX/>
                                                </button>
                                            </div>
                                    )}
                                </Show>

                                {children()}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export {FormLayout};
