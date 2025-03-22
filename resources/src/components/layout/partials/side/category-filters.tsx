import Drawer from "@corvu/drawer";
import {DrawerContent} from "~/components/ui/drawer/drawer";
import {Component, JSXElement} from "solid-js";
import BaseDrawer from "~/components/ui/drawer/drawer";
import {IconChevronRight} from "~/components/svg";

type PROPS = {
    name: string;
}

const CategoryFilters: Component<PROPS> = props => {
    const name = () => props.name;
    return (
        <div class="hidden sm:block relative w-[200px]" role="dialog" aria-modal="true">

            <div class=" bg-white flex  w-[200px]">
                <div
                    class="relative mx-auto flex size-full max-w-xs flex-col overflow-y-auto scrollbar-hide bg-white pb-12 shadow-xl">

                    <form class="">
                        <h3 class="sr-only">{name()}</h3>
                        <div class=" px-4 py-6">
                            <h3 class="-mx-2 -my-3 flow-root">

                                <button type="button"
                                        class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                                        aria-controls="filter-section-mobile-0" aria-expanded="false">
                                    <span class="font-medium text-gray-900">Color</span>
                                    <span class="ml-6 flex items-center">

                                                <svg class="size-5" viewBox="0 0 20 20" fill="currentColor"
                                                     aria-hidden="true" data-slot="icon">
                                                       <path
                                                           d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"/>
                                                     </svg>

                                                                                 <svg class="size-5" viewBox="0 0 20 20"
                                                                                      fill="currentColor"
                                                                                      aria-hidden="true"
                                                                                      data-slot="icon">
                                                       <path fill-rule="evenodd"
                                                             d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                                                             clip-rule="evenodd"/>
                                                     </svg>
                                                   </span>
                                </button>
                            </h3>

                            <div class="pt-6" id="filter-section-mobile-0">
                                <div class="space-y-6">
                                    <div class="flex gap-3">
                                        <div class="flex h-5 shrink-0 items-center">
                                            <div class="group grid size-4 grid-cols-1">
                                                <input id="filter-mobile-color-0" name="color[]"
                                                       value="white"
                                                       type="checkbox"
                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                <svg
                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path
                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                        d="M3 7H11" stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <label for="filter-mobile-color-0"
                                               class="min-w-0 flex-1 text-gray-500">White</label>
                                    </div>
                                    <div class="flex gap-3">
                                        <div class="flex h-5 shrink-0 items-center">
                                            <div class="group grid size-4 grid-cols-1">
                                                <input id="filter-mobile-color-1" name="color[]"
                                                       value="beige"
                                                       type="checkbox"
                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                <svg
                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path
                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                        d="M3 7H11" stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <label for="filter-mobile-color-1"
                                               class="min-w-0 flex-1 text-gray-500">Beige</label>
                                    </div>
                                    <div class="flex gap-3">
                                        <div class="flex h-5 shrink-0 items-center">
                                            <div class="group grid size-4 grid-cols-1">
                                                <input id="filter-mobile-color-2" name="color[]"
                                                       value="blue"
                                                       type="checkbox"
                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                <svg
                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path
                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                        d="M3 7H11" stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <label for="filter-mobile-color-2"
                                               class="min-w-0 flex-1 text-gray-500">Blue</label>
                                    </div>
                                    <div class="flex gap-3">
                                        <div class="flex h-5 shrink-0 items-center">
                                            <div class="group grid size-4 grid-cols-1">
                                                <input id="filter-mobile-color-3" name="color[]"
                                                       value="brown"
                                                       type="checkbox"
                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                <svg
                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path
                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                        d="M3 7H11" stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <label for="filter-mobile-color-3"
                                               class="min-w-0 flex-1 text-gray-500">Brown</label>
                                    </div>
                                    <div class="flex gap-3">
                                        <div class="flex h-5 shrink-0 items-center">
                                            <div class="group grid size-4 grid-cols-1">
                                                <input id="filter-mobile-color-4" name="color[]"
                                                       value="green"
                                                       type="checkbox"
                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                <svg
                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path
                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                        d="M3 7H11" stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <label for="filter-mobile-color-4"
                                               class="min-w-0 flex-1 text-gray-500">Green</label>
                                    </div>
                                    <div class="flex gap-3">
                                        <div class="flex h-5 shrink-0 items-center">
                                            <div class="group grid size-4 grid-cols-1">
                                                <input id="filter-mobile-color-5" name="color[]"
                                                       value="purple"
                                                       type="checkbox"
                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                <svg
                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path
                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                        d="M3 7H11" stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <label for="filter-mobile-color-5"
                                               class="min-w-0 flex-1 text-gray-500">Purple</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border-t border-gray-200 px-4 py-6">
                            <h3 class="-mx-2 -my-3 flow-root">

                                <button type="button"
                                        class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                                        aria-controls="filter-section-mobile-1" aria-expanded="false">
                                    <span class="font-medium text-gray-900">Category</span>
                                    <span class="ml-6 flex items-center">

                                                <svg class="size-5" viewBox="0 0 20 20" fill="currentColor"
                                                     aria-hidden="true" data-slot="icon">
                      <path
                          d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"/>
                    </svg>

                                                <svg class="size-5" viewBox="0 0 20 20" fill="currentColor"
                                                     aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd"
                            d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                            clip-rule="evenodd"/>
                    </svg>
                  </span>
                                </button>
                            </h3>

                            <div class="pt-6" id="filter-section-mobile-1">
                                <div class="space-y-6">
                                    <div class="flex gap-3">
                                        <div class="flex h-5 shrink-0 items-center">
                                            <div class="group grid size-4 grid-cols-1">
                                                <input id="filter-mobile-category-0" name="category[]"
                                                       value="new-arrivals" type="checkbox"
                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                <svg
                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path
                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                        d="M3 7H11" stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <label for="filter-mobile-category-0"
                                               class="min-w-0 flex-1 text-gray-500">{name()}</label>
                                    </div>
                                    <div class="flex gap-3">
                                        <div class="flex h-5 shrink-0 items-center">
                                            <div class="group grid size-4 grid-cols-1">
                                                <input id="filter-mobile-category-1" name="category[]"
                                                       value="sale" type="checkbox"
                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                <svg
                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path
                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                        d="M3 7H11" stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <label for="filter-mobile-category-1"
                                               class="min-w-0 flex-1 text-gray-500">Sale</label>
                                    </div>
                                    <div class="flex gap-3">
                                        <div class="flex h-5 shrink-0 items-center">
                                            <div class="group grid size-4 grid-cols-1">
                                                <input id="filter-mobile-category-2" name="category[]"
                                                       value="travel" type="checkbox"
                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                <svg
                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path
                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                        d="M3 7H11" stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <label for="filter-mobile-category-2"
                                               class="min-w-0 flex-1 text-gray-500">Travel</label>
                                    </div>
                                    <div class="flex gap-3">
                                        <div class="flex h-5 shrink-0 items-center">
                                            <div class="group grid size-4 grid-cols-1">
                                                <input id="filter-mobile-category-3" name="category[]"
                                                       value="organization" type="checkbox"
                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                <svg
                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path
                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                        d="M3 7H11" stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <label for="filter-mobile-category-3"
                                               class="min-w-0 flex-1 text-gray-500">Organization</label>
                                    </div>
                                    <div class="flex gap-3">
                                        <div class="flex h-5 shrink-0 items-center">
                                            <div class="group grid size-4 grid-cols-1">
                                                <input id="filter-mobile-category-4" name="category[]"
                                                       value="accessories" type="checkbox"
                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                <svg
                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path
                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                        d="M3 7H11" stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <label for="filter-mobile-category-4"
                                               class="min-w-0 flex-1 text-gray-500">Accessories</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border-t border-gray-200 px-4 py-6">
                            <h3 class="-mx-2 -my-3 flow-root">

                                <button type="button"
                                        class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                                        aria-controls="filter-section-mobile-2" aria-expanded="false">
                                    <span class="font-medium text-gray-900">Size</span>
                                    <span class="ml-6 flex items-center">

                                                <svg class="size-5" viewBox="0 0 20 20" fill="currentColor"
                                                     aria-hidden="true" data-slot="icon">
                      <path
                          d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"/>
                    </svg>

                                                <svg class="size-5" viewBox="0 0 20 20" fill="currentColor"
                                                     aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd"
                            d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                            clip-rule="evenodd"/>
                    </svg>
                  </span>
                                </button>
                            </h3>

                            <div class="pt-6" id="filter-section-mobile-2">
                                <div class="space-y-6">
                                    <div class="flex gap-3">
                                        <div class="flex h-5 shrink-0 items-center">
                                            <div class="group grid size-4 grid-cols-1">
                                                <input id="filter-mobile-size-0" name="size[]"
                                                       value="2l"
                                                       type="checkbox"
                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                <svg
                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path
                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                        d="M3 7H11" stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <label for="filter-mobile-size-0"
                                               class="min-w-0 flex-1 text-gray-500">2L</label>
                                    </div>
                                    <div class="flex gap-3">
                                        <div class="flex h-5 shrink-0 items-center">
                                            <div class="group grid size-4 grid-cols-1">
                                                <input id="filter-mobile-size-1" name="size[]"
                                                       value="6l"
                                                       type="checkbox"
                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                <svg
                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path
                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                        d="M3 7H11" stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <label for="filter-mobile-size-1"
                                               class="min-w-0 flex-1 text-gray-500">6L</label>
                                    </div>
                                    <div class="flex gap-3">
                                        <div class="flex h-5 shrink-0 items-center">
                                            <div class="group grid size-4 grid-cols-1">
                                                <input id="filter-mobile-size-2" name="size[]"
                                                       value="12l"
                                                       type="checkbox"
                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                <svg
                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path
                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                        d="M3 7H11" stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <label for="filter-mobile-size-2"
                                               class="min-w-0 flex-1 text-gray-500">12L</label>
                                    </div>
                                    <div class="flex gap-3">
                                        <div class="flex h-5 shrink-0 items-center">
                                            <div class="group grid size-4 grid-cols-1">
                                                <input id="filter-mobile-size-3" name="size[]"
                                                       value="18l"
                                                       type="checkbox"
                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                <svg
                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path
                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                        d="M3 7H11" stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <label for="filter-mobile-size-3"
                                               class="min-w-0 flex-1 text-gray-500">18L</label>
                                    </div>
                                    <div class="flex gap-3">
                                        <div class="flex h-5 shrink-0 items-center">
                                            <div class="group grid size-4 grid-cols-1">
                                                <input id="filter-mobile-size-4" name="size[]"
                                                       value="20l"
                                                       type="checkbox"
                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                <svg
                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path
                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                        d="M3 7H11" stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <label for="filter-mobile-size-4"
                                               class="min-w-0 flex-1 text-gray-500">20L</label>
                                    </div>
                                    <div class="flex gap-3">
                                        <div class="flex h-5 shrink-0 items-center">
                                            <div class="group grid size-4 grid-cols-1">
                                                <input id="filter-mobile-size-5" name="size[]"
                                                       value="40l"
                                                       type="checkbox"
                                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                <svg
                                                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                        d="M3 8L6 11L11 3.5" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path
                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                        d="M3 7H11" stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <label for="filter-mobile-size-5"
                                               class="min-w-0 flex-1 text-gray-500">40L</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    )
}

export default CategoryFilters;
