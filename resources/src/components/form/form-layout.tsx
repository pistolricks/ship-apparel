import {A, Action, useSubmission} from "@solidjs/router";
import {Component, createEffect, createSignal, JSXElement, Show, splitProps, ValidComponent} from "solid-js";
import {cn} from "~/lib/utils";

const FormLayout: Component<{
    action: Action<[any], any, unknown>;
    title?: string
    imageSrc?: string
    hideLogo?: boolean
    children: JSXElement;
}> = props => {
    const submission = useSubmission(props.action, (formData: FormData) => {
        for (let value of formData.values()) {
            if (value) return true;
        }
        return false;
    });

    const hideLogo = () => props.hideLogo ?? false;
    const title = () => props.title ?? '';
    const imageSrc = () => props.imageSrc ?? import.meta.env.VITE_APP_LOGO;

    const children = () => props.children;

    createEffect(() => console.log(submission))

    return (
        <div>
            <div class="h-full w-full items-center justify-center  bg-gray-50 py-4 sm:p-4">
                <div class="flex h-full min-h-full flex-col justify-center">
                    <div class="sm:mx-auto">
                        <Show when={!hideLogo()}>
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
                                {children()}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormLayout;
