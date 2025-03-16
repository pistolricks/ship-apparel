import {Component} from "solid-js";
import {IconProps, IconSvg} from "~/components/svg";

type PROPS = {
    name: string
}

const LocationProfile: Component<PROPS> = props => {
    return (
        <div>

            <div
                class="flex flex-col rounded p-0 m-0 w-full font-sans leading-6 border-0 border-current border-solid pointer-events-auto text-zinc-900"
                style="pointer-events: auto; outline: none;"
            >
                <div
                    data-testid="wire-container"
                    class="flex relative justify-center p-0 mx-0 mt-4 mb-0 w-full leading-6 bg-white border-0 border-current border-solid opacity-100 duration-100 ease-in-out isolate bg-opacity-[0]"
                    style="outline: none; transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;"
                >
                    <div
                        class="flex relative z-10 flex-col p-0 m-0 w-full min-w-full border-0 border-current border-solid"
                        style="outline: none;"
                    >
                        <div
                            class="p-0 m-0 border-0 border-current border-solid"
                            style="outline: none;"
                        >
                            <div
                                id="nav-bar-portal--8884e7c2cbe71cd6f736abcbcca088fa-top-breadcrumbs"
                                class="hidden px-0 pt-0 pb-3 m-0 border-0 border-current border-solid"
                                style="outline: none;"
                            ></div>
                            <div
                                class="flex gap-x-4 p-0 m-0 border-0 border-current border-solid"
                                style="outline: none;"
                            >
                                <img
                                    src="https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?cs=tinysrgb&amp;auto=compress&amp;w=1400"
                                    class="block object-cover p-0 m-0 max-w-full h-32 align-middle bg-transparent rounded-xl border-0 border-current border-solid"
                                    style="display: block; background-color: transparent; outline: none; width: 114px;"
                                />
                                <div
                                    class="flex flex-col flex-1 gap-y-3 justify-between p-0 m-0 min-w-0 border-0 border-current border-solid"
                                    style="outline: none;"
                                >
                                    <div
                                        class="p-0 m-0 min-w-0 max-w-full break-words border-0 border-current border-solid"
                                        style="outline: none;"
                                    >
                                        <h2
                                            class="p-0 mx-0 mt-0 mb-1 text-2xl font-semibold tracking-normal border-0 border-current border-solid text-neutral-900"
                                            style="outline: none; line-height: 1.2;"
                                        >
                                            Headquarters
                                        </h2>
                                        <p
                                            class="p-0 m-0 text-base whitespace-pre-wrap border-0 border-current border-solid text-neutral-500"
                                            style="outline: none; line-height: 1.4;"
                                        >
                                            Employees: 6
                                        </p>
                                    </div>
                                    <div
                                        class="flex flex-shrink-0 gap-x-1.5 p-0 m-0 min-w-0 border-0 border-current border-solid"
                                        style="outline: none;"
                                    >

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div
                class="flex flex-col flex-grow p-0 m-0 font-sans leading-6 border-0 border-current border-solid text-zinc-900"
                style="outline: none;"
            >
                <div
                    data-testid="wire-container"
                    class="flex relative justify-center p-0 mx-0 mt-4 mb-0 w-full leading-6 bg-white border-0 border-current border-solid opacity-100 duration-100 ease-in-out isolate bg-opacity-[0]"
                    style="outline: none; transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;"
                >
                    <div
                        class="flex relative z-10 flex-col py-0 px-4 m-0 w-full min-w-full border-0 border-current border-solid"
                        style="outline: none;"
                    >
                        <div
                            id="must-start-with-a-letter064ed30519d87941321d07727e8a739e"
                            class="flex p-0 m-0 w-full border-0 border-current border-solid"
                            style="outline: none;"
                        >
                            <div
                                class="flex flex-col p-0 m-0 w-full border-0 border-current border-solid pointer-events-auto"
                                style="pointer-events: auto; outline: none;"
                            >
                                <div
                                    class="flex flex-col p-0 m-0 border-0 border-current border-solid"
                                    style="outline: none;"
                                >
                                    <div
                                        class="grid items-center p-0 mx-0 mt-0 mb-4 border-0 border-current border-solid"
                                        style='outline: none; gap: 0.75rem 8px; grid-template-columns: 1fr auto; grid-template-areas: "t a" "s s";'
                                    >
                                        <div
                                            class="flex overflow-hidden items-center p-0 m-0 text-xl font-semibold border-0 border-current border-solid"
                                            style="outline: none; grid-area: t; line-height: 120%; min-height: 32px;"
                                        >
                                            <h2
                                                class="p-0 m-0 text-2xl tracking-normal border-0 border-current border-solid truncate text-neutral-900"
                                                title="Employees in this location"
                                                style="outline: none; line-height: 1.2;"
                                            >
                                                Employees in this location
                                            </h2>
                                        </div>
                                        <div
                                            class="flex justify-end p-0 m-0 border-0 border-current border-solid"
                                            style="outline: none; grid-area: s;"
                                        >
                                            <label
                                                class="flex relative flex-grow items-center py-0 pr-0 pl-2 m-0 h-8 rounded-lg border border-transparent border-solid duration-75 ease-in-out cursor-text bg-zinc-100 text-neutral-400 bg-opacity-[0.08]"
                                                style="outline: none; transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; min-width: 156px;"
                                            ><IconSvg
                                                id="stroke"
                                                class="flex relative flex-shrink-0 p-0 my-0 mr-1 ml-0 w-5 h-5 border-0 border-current border-solid duration-150 ease-in-out"
                                                style="outline: none; transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;"
                                            >
                                                <IconSvg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    class="block p-0 m-0 w-full h-full align-middle rounded-none border-0 border-current border-solid"
                                                    style="outline: none; stroke-width: 1.5px; fill: currentcolor; stroke: currentcolor; transform: rotate(0deg); transition: transform 0.15s;"
                                                >
                                                    <IconSvg
                                                        xlink:href="/svg/stroke/st-search.svg#icon-import"
                                                        class="p-0 m-0 border-0 border-current border-solid"
                                                        style="outline: none;"
                                                    ></IconSvg>
                                                </IconSvg>
                                            </IconSvg>
                                                <input
                                                    placeholder="Search"
                                                    class="flex-shrink p-0 m-0 w-full text-base leading-none bg-none appearance-none text-neutral-900"
                                                    value=""
                                                    style="outline: none;" /><button
                                                    class="invisible p-1 my-0 mx-1 text-center normal-case bg-none rounded-full border-0 border-current border-solid opacity-0 transition-all cursor-pointer text-neutral-500"
                                                    style="outline: none; font-size: 128%;"
                                                >
                                                    <IconSvg
                                                        kind="stroke"
                                                        class="flex relative flex-shrink-0 p-0 m-0 w-4 h-4 border-0 border-current border-solid"
                                                        style="outline: none;"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                                            class="block p-0 m-0 w-full h-full align-middle rounded-none border-0 border-current border-solid"
                                                            style="outline: none; stroke-width: 1.5px; fill: currentcolor; stroke: currentcolor; transform: rotate(0deg); transition: transform 0.15s;"
                                                        >
                                                            <IconSvg
                                                                xlink:href="/svg/stroke/st-close.svg#icon-import"
                                                                class="p-0 m-0 border-0 border-current border-solid"
                                                                style="outline: none;"
                                                            ></IconSvg>
                                                        </svg>
                                                    </IconSvg></button
                                                ></label>
                                        </div>
                                        <div
                                            class="flex justify-end items-stretch p-0 m-0 w-full min-w-0 border-0 border-current border-solid"
                                            style="outline: none; grid-area: a;"
                                        >

                                        </div>
                                    </div>
                                    <div
                                        class="p-0 m-0 border-0 border-current border-solid"
                                        style="outline: none;"
                                    >
                                        <div
                                            class="flex flex-col items-center p-0 m-0 border-0 border-current border-solid"
                                            style="outline: none;"
                                        >
                                            <div
                                                data-testid="vertical-collection-container"
                                                class="grid grid-cols-2 gap-2 p-0 m-0 w-full text-lg leading-7 border-0 border-current border-solid"
                                                style="outline: none;"
                                            >
                                                <div
                                                    data-testid="cc-card"
                                                    aria-pressed="false"
                                                    role="button"
                                                    tabindex="0"
                                                    class="grid overflow-hidden relative p-0 m-0 w-full rounded-xl border-0 border-current border-solid duration-75 ease-in-out cursor-pointer bg-zinc-100 text-neutral-900 bg-opacity-[0.05]"
                                                    style="outline: none; transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; grid-template-columns: minmax(0px, auto);"
                                                >
                                                    <div
                                                        class="col-start-1 row-start-1 p-0 m-0 border-0 border-current border-solid duration-75 ease-in-out"
                                                        style="outline: none; transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;"
                                                    ></div>
                                                    <div
                                                        class="flex flex-col col-start-1 row-start-1 gap-1 p-1 m-0 border-0 border-current border-solid"
                                                        style="outline: none;"
                                                    >
                                                        <div
                                                            data-testid="card-image"
                                                            class="relative px-0 pb-0 m-0 w-full border-0 border-current border-solid"
                                                            style="outline: none; min-height: 72px; padding-top: 64%;"
                                                        >
                                                            <div
                                                                class="flex absolute top-0 justify-center py-2 px-0 m-0 w-full h-full border-0 border-current border-solid"
                                                                style="outline: none;"
                                                            >
                                                                <div
                                                                    class="flex relative justify-center p-0 m-0 w-full border-0 border-current border-solid"
                                                                    style="outline: none;"
                                                                >
                                                                    <img
                                                                        src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FDNX6oI4TCIFtY5Jz9Dq0-template-builder%2Fpub%2F6X8BtwzdLHicevUfOTKh.png"
                                                                        class="block object-cover relative p-0 m-0 max-w-full h-full text-2xl leading-9 align-middle bg-transparent rounded-full border-0 border-current border-solid transition-shadow"
                                                                        style="display: block; background-color: transparent; outline: none; inset: 0px;"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="flex flex-col flex-grow items-center px-2 pt-0 pb-2 m-0 text-center border-0 border-current border-solid"
                                                            style="outline: none;"
                                                        >
                                                            <button
                                                                aria-label="Menu"
                                                                data-testid="menu-button"
                                                                class="flex absolute top-2 right-2 z-0 gap-x-1.5 justify-center items-center p-2 m-0 w-8 h-6 text-base font-semibold normal-case bg-transparent bg-none rounded-lg border-0 border-current border-solid opacity-100 duration-150 ease-in-out pointer-events-none text-neutral-500"
                                                                style="outline: none; line-height: 1.4; min-width: unset; transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; content: normal; inset: 0px; transform: matrix(1, 0, 0, 1, 0, 0);"
                                                            >
                                                                <IconSvg
                                                                    class="inline-flex justify-center items-center p-0 m-0 w-5 h-5 border-0 border-current border-solid"
                                                                    size="20"
                                                                    color="currentColor"
                                                                    style="outline: none;"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        class="block p-0 m-0 w-5 h-5 align-middle border-0 border-current border-solid"
                                                                        style="outline: none; fill: currentcolor;"
                                                                    >
                                                                        <IconSvg
                                                                            xlink:href="/svg/stroke/st-more.svg#icon-import"
                                                                            class="p-0 m-0 border-0 border-current border-solid"
                                                                            style="outline: none;"
                                                                        ></IconSvg>
                                                                    </svg>
                                                                </IconSvg>
                                                                <div
                                                                    class="border-current border-solid sr-only"
                                                                    style="outline: none;"
                                                                >
                                                                    Menu
                                                                </div>
                                                            </button>
                                                            <h3
                                                                class="p-0 mx-0 mt-0 mb-px text-base font-semibold whitespace-pre-wrap break-words border-0 border-current border-solid"
                                                                style="outline: none; line-height: 1.2;"
                                                            >
                                                                Alma Malmberg
                                                            </h3>
                                                            <p
                                                                class="p-0 m-0 text-base leading-5 whitespace-pre-wrap break-words border-0 border-current border-solid text-neutral-500"
                                                                style="outline: none;"
                                                            >
                                                                CEO
                                                            </p>
                                                            <div
                                                                class="flex-grow p-0 m-0 border-0 border-current border-solid"
                                                                style="outline: none;"
                                                            ></div>
                                                        </div>
                                                        <div
                                                            class="hidden flex-col gap-1 px-2 pt-0 pb-2 m-0 w-full border-0 border-current border-solid"
                                                            style="outline: none;"
                                                        ></div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-testid="cc-card"
                                                    aria-pressed="false"
                                                    role="button"
                                                    tabindex="0"
                                                    class="grid overflow-hidden relative p-0 m-0 w-full rounded-xl border-0 border-current border-solid duration-75 ease-in-out cursor-pointer bg-zinc-100 text-neutral-900 bg-opacity-[0.05]"
                                                    style="outline: none; transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; grid-template-columns: minmax(0px, auto);"
                                                >
                                                    <div
                                                        class="col-start-1 row-start-1 p-0 m-0 border-0 border-current border-solid duration-75 ease-in-out"
                                                        style="outline: none; transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;"
                                                    ></div>
                                                    <div
                                                        class="flex flex-col col-start-1 row-start-1 gap-1 p-1 m-0 border-0 border-current border-solid"
                                                        style="outline: none;"
                                                    >
                                                        <div
                                                            data-testid="card-image"
                                                            class="relative px-0 pb-0 m-0 w-full border-0 border-current border-solid"
                                                            style="outline: none; min-height: 72px; padding-top: 64%;"
                                                        >
                                                            <div
                                                                class="flex absolute top-0 justify-center py-2 px-0 m-0 w-full h-full border-0 border-current border-solid"
                                                                style="outline: none;"
                                                            >
                                                                <div
                                                                    class="flex relative justify-center p-0 m-0 w-full border-0 border-current border-solid"
                                                                    style="outline: none;"
                                                                >
                                                                    <img
                                                                        src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FDNX6oI4TCIFtY5Jz9Dq0-template-builder%2Fpub%2FOC1oJeoEtQxBDM6t5dWl.png"
                                                                        class="block object-cover relative p-0 m-0 max-w-full h-full text-2xl leading-9 align-middle bg-transparent rounded-full border-0 border-current border-solid transition-shadow"
                                                                        style="display: block; background-color: transparent; outline: none; inset: 0px;"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="flex flex-col flex-grow items-center px-2 pt-0 pb-2 m-0 text-center border-0 border-current border-solid"
                                                            style="outline: none;"
                                                        >
                                                            <button
                                                                aria-label="Menu"
                                                                data-testid="menu-button"
                                                                class="flex absolute top-2 right-2 z-0 gap-x-1.5 justify-center items-center p-2 m-0 w-8 h-6 text-base font-semibold normal-case bg-transparent bg-none rounded-lg border-0 border-current border-solid opacity-100 duration-150 ease-in-out pointer-events-none text-neutral-500"
                                                                style="outline: none; line-height: 1.4; min-width: unset; transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; content: normal; inset: 0px; transform: matrix(1, 0, 0, 1, 0, 0);"
                                                            >
                                                                <IconSvg
                                                                    class="inline-flex justify-center items-center p-0 m-0 w-5 h-5 border-0 border-current border-solid"
                                                                    size="20"
                                                                    color="currentColor"
                                                                    style="outline: none;"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        class="block p-0 m-0 w-5 h-5 align-middle border-0 border-current border-solid"
                                                                        style="outline: none; fill: currentcolor;"
                                                                    >
                                                                        <IconSvg
                                                                            xlink:href="/svg/stroke/st-more.svg#icon-import"
                                                                            class="p-0 m-0 border-0 border-current border-solid"
                                                                            style="outline: none;"
                                                                        ></IconSvg>
                                                                    </svg>
                                                                </IconSvg>
                                                                <div
                                                                    class="border-current border-solid sr-only"
                                                                    style="outline: none;"
                                                                >
                                                                    Menu
                                                                </div>
                                                            </button>
                                                            <h3
                                                                class="p-0 mx-0 mt-0 mb-px text-base font-semibold whitespace-pre-wrap break-words border-0 border-current border-solid"
                                                                style="outline: none; line-height: 1.2;"
                                                            >
                                                                Gopichand Sana
                                                            </h3>
                                                            <p
                                                                class="p-0 m-0 text-base leading-5 whitespace-pre-wrap break-words border-0 border-current border-solid text-neutral-500"
                                                                style="outline: none;"
                                                            >
                                                                Brand Manager
                                                            </p>
                                                            <div
                                                                class="flex-grow p-0 m-0 border-0 border-current border-solid"
                                                                style="outline: none;"
                                                            ></div>
                                                        </div>
                                                        <div
                                                            class="hidden flex-col gap-1 px-2 pt-0 pb-2 m-0 w-full border-0 border-current border-solid"
                                                            style="outline: none;"
                                                        ></div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-testid="cc-card"
                                                    aria-pressed="false"
                                                    role="button"
                                                    tabindex="0"
                                                    class="grid overflow-hidden relative p-0 m-0 w-full rounded-xl border-0 border-current border-solid duration-75 ease-in-out cursor-pointer bg-zinc-100 text-neutral-900 bg-opacity-[0.05]"
                                                    style="outline: none; transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; grid-template-columns: minmax(0px, auto);"
                                                >
                                                    <div
                                                        class="col-start-1 row-start-1 p-0 m-0 border-0 border-current border-solid duration-75 ease-in-out"
                                                        style="outline: none; transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;"
                                                    ></div>
                                                    <div
                                                        class="flex flex-col col-start-1 row-start-1 gap-1 p-1 m-0 border-0 border-current border-solid"
                                                        style="outline: none;"
                                                    >
                                                        <div
                                                            data-testid="card-image"
                                                            class="relative px-0 pb-0 m-0 w-full border-0 border-current border-solid"
                                                            style="outline: none; min-height: 72px; padding-top: 64%;"
                                                        >
                                                            <div
                                                                class="flex absolute top-0 justify-center py-2 px-0 m-0 w-full h-full border-0 border-current border-solid"
                                                                style="outline: none;"
                                                            >
                                                                <div
                                                                    class="flex relative justify-center p-0 m-0 w-full border-0 border-current border-solid"
                                                                    style="outline: none;"
                                                                >
                                                                    <img
                                                                        src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FDNX6oI4TCIFtY5Jz9Dq0-template-builder%2Fpub%2FKVfIypuBN8pqB0RTCwZz.png"
                                                                        class="block object-cover relative p-0 m-0 max-w-full h-full text-2xl leading-9 align-middle bg-transparent rounded-full border-0 border-current border-solid transition-shadow"
                                                                        style="display: block; background-color: transparent; outline: none; inset: 0px;"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="flex flex-col flex-grow items-center px-2 pt-0 pb-2 m-0 text-center border-0 border-current border-solid"
                                                            style="outline: none;"
                                                        >
                                                            <button
                                                                aria-label="Menu"
                                                                data-testid="menu-button"
                                                                class="flex absolute top-2 right-2 z-0 gap-x-1.5 justify-center items-center p-2 m-0 w-8 h-6 text-base font-semibold normal-case bg-transparent bg-none rounded-lg border-0 border-current border-solid opacity-100 duration-150 ease-in-out pointer-events-none text-neutral-500"
                                                                style="outline: none; line-height: 1.4; min-width: unset; transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; content: normal; inset: 0px; transform: matrix(1, 0, 0, 1, 0, 0);"
                                                            >
                                                                <IconSvg
                                                                    class="inline-flex justify-center items-center p-0 m-0 w-5 h-5 border-0 border-current border-solid"
                                                                    size="20"
                                                                    color="currentColor"
                                                                    style="outline: none;"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        class="block p-0 m-0 w-5 h-5 align-middle border-0 border-current border-solid"
                                                                        style="outline: none; fill: currentcolor;"
                                                                    >
                                                                        <IconSvg
                                                                            xlink:href="/svg/stroke/st-more.svg#icon-import"
                                                                            class="p-0 m-0 border-0 border-current border-solid"
                                                                            style="outline: none;"
                                                                        ></IconSvg>
                                                                    </svg>
                                                                </IconSvg>
                                                                <div
                                                                    class="border-current border-solid sr-only"
                                                                    style="outline: none;"
                                                                >
                                                                    Menu
                                                                </div>
                                                            </button>
                                                            <h3
                                                                class="p-0 mx-0 mt-0 mb-px text-base font-semibold whitespace-pre-wrap break-words border-0 border-current border-solid"
                                                                style="outline: none; line-height: 1.2;"
                                                            >
                                                                Aiden Foster
                                                            </h3>
                                                            <p
                                                                class="p-0 m-0 text-base leading-5 whitespace-pre-wrap break-words border-0 border-current border-solid text-neutral-500"
                                                                style="outline: none;"
                                                            >
                                                                Full-stack Developer
                                                            </p>
                                                            <div
                                                                class="flex-grow p-0 m-0 border-0 border-current border-solid"
                                                                style="outline: none;"
                                                            ></div>
                                                        </div>
                                                        <div
                                                            class="hidden flex-col gap-1 px-2 pt-0 pb-2 m-0 w-full border-0 border-current border-solid"
                                                            style="outline: none;"
                                                        ></div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-testid="cc-card"
                                                    aria-pressed="false"
                                                    role="button"
                                                    tabindex="0"
                                                    class="grid overflow-hidden relative p-0 m-0 w-full rounded-xl border-0 border-current border-solid duration-75 ease-in-out cursor-pointer bg-zinc-100 text-neutral-900 bg-opacity-[0.05]"
                                                    style="outline: none; transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; grid-template-columns: minmax(0px, auto);"
                                                >
                                                    <div
                                                        class="col-start-1 row-start-1 p-0 m-0 border-0 border-current border-solid duration-75 ease-in-out"
                                                        style="outline: none; transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;"
                                                    ></div>
                                                    <div
                                                        class="flex flex-col col-start-1 row-start-1 gap-1 p-1 m-0 border-0 border-current border-solid"
                                                        style="outline: none;"
                                                    >
                                                        <div
                                                            data-testid="card-image"
                                                            class="relative px-0 pb-0 m-0 w-full border-0 border-current border-solid"
                                                            style="outline: none; min-height: 72px; padding-top: 64%;"
                                                        >
                                                            <div
                                                                class="flex absolute top-0 justify-center py-2 px-0 m-0 w-full h-full border-0 border-current border-solid"
                                                                style="outline: none;"
                                                            >
                                                                <div
                                                                    class="flex relative justify-center p-0 m-0 w-full border-0 border-current border-solid"
                                                                    style="outline: none;"
                                                                >
                                                                    <img
                                                                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww&amp;auto=format&amp;fit=crop&amp;w=1400&amp;q=60&amp;utm_source=Glide&amp;utm_medium=referral"
                                                                        class="block object-cover relative p-0 m-0 max-w-full h-full text-2xl leading-9 align-middle bg-transparent rounded-full border-0 border-current border-solid transition-shadow"
                                                                        style="display: block; background-color: transparent; outline: none; inset: 0px;"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="flex flex-col flex-grow items-center px-2 pt-0 pb-2 m-0 text-center border-0 border-current border-solid"
                                                            style="outline: none;"
                                                        >
                                                            <button
                                                                aria-label="Menu"
                                                                data-testid="menu-button"
                                                                class="flex absolute top-2 right-2 z-0 gap-x-1.5 justify-center items-center p-2 m-0 w-8 h-6 text-base font-semibold normal-case bg-transparent bg-none rounded-lg border-0 border-current border-solid opacity-100 duration-150 ease-in-out pointer-events-none text-neutral-500"
                                                                style="outline: none; line-height: 1.4; min-width: unset; transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; content: normal; inset: 0px; transform: matrix(1, 0, 0, 1, 0, 0);"
                                                            >
                                                                <IconSvg
                                                                    class="inline-flex justify-center items-center p-0 m-0 w-5 h-5 border-0 border-current border-solid"
                                                                    size="20"
                                                                    color="currentColor"
                                                                    style="outline: none;"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        class="block p-0 m-0 w-5 h-5 align-middle border-0 border-current border-solid"
                                                                        style="outline: none; fill: currentcolor;"
                                                                    >
                                                                        <IconSvg
                                                                            xlink:href="/svg/stroke/st-more.svg#icon-import"
                                                                            class="p-0 m-0 border-0 border-current border-solid"
                                                                            style="outline: none;"
                                                                        ></IconSvg>
                                                                    </svg>
                                                                </IconSvg>
                                                                <div
                                                                    class="border-current border-solid sr-only"
                                                                    style="outline: none;"
                                                                >
                                                                    Menu
                                                                </div>
                                                            </button>
                                                            <h3
                                                                class="p-0 mx-0 mt-0 mb-px text-base font-semibold whitespace-pre-wrap break-words border-0 border-current border-solid"
                                                                style="outline: none; line-height: 1.2;"
                                                            >
                                                                Fiona Patel
                                                            </h3>
                                                            <p
                                                                class="p-0 m-0 text-base leading-5 whitespace-pre-wrap break-words border-0 border-current border-solid text-neutral-500"
                                                                style="outline: none;"
                                                            >
                                                                Full-stack Developer
                                                            </p>
                                                            <div
                                                                class="flex-grow p-0 m-0 border-0 border-current border-solid"
                                                                style="outline: none;"
                                                            ></div>
                                                        </div>
                                                        <div
                                                            class="hidden flex-col gap-1 px-2 pt-0 pb-2 m-0 w-full border-0 border-current border-solid"
                                                            style="outline: none;"
                                                        ></div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-testid="cc-card"
                                                    aria-pressed="false"
                                                    role="button"
                                                    tabindex="0"
                                                    class="grid overflow-hidden relative p-0 m-0 w-full rounded-xl border-0 border-current border-solid duration-75 ease-in-out cursor-pointer bg-zinc-100 text-neutral-900 bg-opacity-[0.05]"
                                                    style="outline: none; transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; grid-template-columns: minmax(0px, auto);"
                                                >
                                                    <div
                                                        class="col-start-1 row-start-1 p-0 m-0 border-0 border-current border-solid duration-75 ease-in-out"
                                                        style="outline: none; transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;"
                                                    ></div>
                                                    <div
                                                        class="flex flex-col col-start-1 row-start-1 gap-1 p-1 m-0 border-0 border-current border-solid"
                                                        style="outline: none;"
                                                    >
                                                        <div
                                                            data-testid="card-image"
                                                            class="relative px-0 pb-0 m-0 w-full border-0 border-current border-solid"
                                                            style="outline: none; min-height: 72px; padding-top: 64%;"
                                                        >
                                                            <div
                                                                class="flex absolute top-0 justify-center py-2 px-0 m-0 w-full h-full border-0 border-current border-solid"
                                                                style="outline: none;"
                                                            >
                                                                <div
                                                                    class="flex relative justify-center p-0 m-0 w-full border-0 border-current border-solid"
                                                                    style="outline: none;"
                                                                >
                                                                    <img
                                                                        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0fGVufDB8fDB8fHww&amp;auto=format&amp;fit=crop&amp;w=1400&amp;q=60&amp;utm_source=Glide&amp;utm_medium=referral"
                                                                        class="block object-cover relative p-0 m-0 max-w-full h-full text-2xl leading-9 align-middle bg-transparent rounded-full border-0 border-current border-solid transition-shadow"
                                                                        style="display: block; background-color: transparent; outline: none; inset: 0px;"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="flex flex-col flex-grow items-center px-2 pt-0 pb-2 m-0 text-center border-0 border-current border-solid"
                                                            style="outline: none;"
                                                        >
                                                            <button
                                                                aria-label="Menu"
                                                                data-testid="menu-button"
                                                                class="flex absolute top-2 right-2 z-0 gap-x-1.5 justify-center items-center p-2 m-0 w-8 h-6 text-base font-semibold normal-case bg-transparent bg-none rounded-lg border-0 border-current border-solid opacity-100 duration-150 ease-in-out pointer-events-none text-neutral-500"
                                                                style="outline: none; line-height: 1.4; min-width: unset; transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; content: normal; inset: 0px; transform: matrix(1, 0, 0, 1, 0, 0);"
                                                            >
                                                                <IconSvg
                                                                    class="inline-flex justify-center items-center p-0 m-0 w-5 h-5 border-0 border-current border-solid"
                                                                    size="20"
                                                                    color="currentColor"
                                                                    style="outline: none;"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        class="block p-0 m-0 w-5 h-5 align-middle border-0 border-current border-solid"
                                                                        style="outline: none; fill: currentcolor;"
                                                                    >
                                                                        <IconSvg
                                                                            xlink:href="/svg/stroke/st-more.svg#icon-import"
                                                                            class="p-0 m-0 border-0 border-current border-solid"
                                                                            style="outline: none;"
                                                                        ></IconSvg>
                                                                    </svg>
                                                                </IconSvg>
                                                                <div
                                                                    class="border-current border-solid sr-only"
                                                                    style="outline: none;"
                                                                >
                                                                    Menu
                                                                </div>
                                                            </button>
                                                            <h3
                                                                class="p-0 mx-0 mt-0 mb-px text-base font-semibold whitespace-pre-wrap break-words border-0 border-current border-solid"
                                                                style="outline: none; line-height: 1.2;"
                                                            >
                                                                Kaitlyn Johnson
                                                            </h3>
                                                            <p
                                                                class="p-0 m-0 text-base leading-5 whitespace-pre-wrap break-words border-0 border-current border-solid text-neutral-500"
                                                                style="outline: none;"
                                                            >
                                                                Sales Director
                                                            </p>
                                                            <div
                                                                class="flex-grow p-0 m-0 border-0 border-current border-solid"
                                                                style="outline: none;"
                                                            ></div>
                                                        </div>
                                                        <div
                                                            class="hidden flex-col gap-1 px-2 pt-0 pb-2 m-0 w-full border-0 border-current border-solid"
                                                            style="outline: none;"
                                                        ></div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-testid="cc-card"
                                                    aria-pressed="false"
                                                    role="button"
                                                    tabindex="0"
                                                    class="grid overflow-hidden relative p-0 m-0 w-full rounded-xl border-0 border-current border-solid duration-75 ease-in-out cursor-pointer bg-zinc-100 text-neutral-900 bg-opacity-[0.05]"
                                                    style="outline: none; transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; grid-template-columns: minmax(0px, auto);"
                                                >
                                                    <div
                                                        class="col-start-1 row-start-1 p-0 m-0 border-0 border-current border-solid duration-75 ease-in-out"
                                                        style="outline: none; transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;"
                                                    ></div>
                                                    <div
                                                        class="flex flex-col col-start-1 row-start-1 gap-1 p-1 m-0 border-0 border-current border-solid"
                                                        style="outline: none;"
                                                    >
                                                        <div
                                                            data-testid="card-image"
                                                            class="relative px-0 pb-0 m-0 w-full border-0 border-current border-solid"
                                                            style="outline: none; min-height: 72px; padding-top: 64%;"
                                                        >
                                                            <div
                                                                class="flex absolute top-0 justify-center py-2 px-0 m-0 w-full h-full border-0 border-current border-solid"
                                                                style="outline: none;"
                                                            >
                                                                <div
                                                                    class="flex relative justify-center p-0 m-0 w-full border-0 border-current border-solid"
                                                                    style="outline: none;"
                                                                >
                                                                    <img
                                                                        src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBvcnRyYWl0fGVufDB8fDB8fHww&amp;auto=format&amp;fit=crop&amp;w=1400&amp;q=60&amp;utm_source=Glide&amp;utm_medium=referral"
                                                                        class="block object-cover relative p-0 m-0 max-w-full h-full text-2xl leading-9 align-middle bg-transparent rounded-full border-0 border-current border-solid transition-shadow"
                                                                        style="display: block; background-color: transparent; outline: none; inset: 0px;"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="flex flex-col flex-grow items-center px-2 pt-0 pb-2 m-0 text-center border-0 border-current border-solid"
                                                            style="outline: none;"
                                                        >
                                                            <button
                                                                aria-label="Menu"
                                                                data-testid="menu-button"
                                                                class="flex absolute top-2 right-2 z-0 gap-x-1.5 justify-center items-center p-2 m-0 w-8 h-6 text-base font-semibold normal-case bg-transparent bg-none rounded-lg border-0 border-current border-solid opacity-100 duration-150 ease-in-out pointer-events-none text-neutral-500"
                                                                style="outline: none; line-height: 1.4; min-width: unset; transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; content: normal; inset: 0px; transform: matrix(1, 0, 0, 1, 0, 0);"
                                                            >
                                                                <IconSvg
                                                                    class="inline-flex justify-center items-center p-0 m-0 w-5 h-5 border-0 border-current border-solid"
                                                                    size="20"
                                                                    color="currentColor"
                                                                    style="outline: none;"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        class="block p-0 m-0 w-5 h-5 align-middle border-0 border-current border-solid"
                                                                        style="outline: none; fill: currentcolor;"
                                                                    >
                                                                        <IconSvg
                                                                            xlink:href="/svg/stroke/st-more.svg#icon-import"
                                                                            class="p-0 m-0 border-0 border-current border-solid"
                                                                            style="outline: none;"
                                                                        ></IconSvg>
                                                                    </svg>
                                                                </IconSvg>
                                                                <div
                                                                    class="border-current border-solid sr-only"
                                                                    style="outline: none;"
                                                                >
                                                                    Menu
                                                                </div>
                                                            </button>
                                                            <h3
                                                                class="p-0 mx-0 mt-0 mb-px text-base font-semibold whitespace-pre-wrap break-words border-0 border-current border-solid"
                                                                style="outline: none; line-height: 1.2;"
                                                            >
                                                                Penelope Thompson
                                                            </h3>
                                                            <p
                                                                class="p-0 m-0 text-base leading-5 whitespace-pre-wrap break-words border-0 border-current border-solid text-neutral-500"
                                                                style="outline: none;"
                                                            >
                                                                Brand Designer
                                                            </p>
                                                            <div
                                                                class="flex-grow p-0 m-0 border-0 border-current border-solid"
                                                                style="outline: none;"
                                                            ></div>
                                                        </div>
                                                        <div
                                                            class="hidden flex-col gap-1 px-2 pt-0 pb-2 m-0 w-full border-0 border-current border-solid"
                                                            style="outline: none;"
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LocationProfile;
