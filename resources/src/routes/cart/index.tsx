import {Component, For} from "solid-js";
import {ChevronDown, CircleCheck, CircleX, Clock, MessageCircleQuestion, XIcon} from "lucide-solid";
import Drawer from "@corvu/drawer";

const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        price: '$32.00',
        color: 'Sienna',
        inStock: true,
        size: 'Large',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in sienna.",
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        price: '$32.00',
        color: 'Black',
        inStock: false,
        leadTime: '3–4 weeks',
        size: 'Large',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
    },
    {
        id: 3,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35.00',
        color: 'White',
        inStock: true,
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
        imageAlt: 'Insulated bottle with white base and black snap lid.',
    },
]

const Cart: Component<{}> = props => {
    return (
        <div class="bg-white">
            <div
                class="flex flex-col gap-0 min-h-[2rem] items-start justify-start min-w-0 text-center border-b border-t border-gray-200 ">
                <div class={"flex justify-start items-center p-2"}>
                    <Drawer.Close contextId={'right-menu-01'} as={"div"} class=""><XIcon class={"stroke-red-400"}/></Drawer.Close>
                    <h2 class="w-full text-base truncate text-slate-700 uppercase">
                        Shopping Cart
                    </h2>
                </div>
            </div>
            <div class="mx-auto max-w-2xl px-4 pb-24 pt-4 sm:px-6 lg:max-w-7xl lg:px-8">

                <form class="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                    <section aria-labelledby="cart-heading" class="lg:col-span-7">


                        <ul role="list" class="divide-y divide-gray-200">
                            <For each={products}>
                                {(product, index) => (
                                    <li class="flex py-6 sm:py-10 relative">
                                        <div class="shrink-0">
                                            <img
                                                alt={product.imageAlt}
                                                src={product.imageSrc}
                                                class="size-24 rounded-md object-cover sm:size-48"
                                            />
                                        </div>

                                        <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                            <h3 class="text-sm">
                                                <a href={product.href}
                                                   class="font-medium text-gray-700 hover:text-gray-800">
                                                    {product.name}
                                                </a>
                                            </h3>
                                            <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                <div>
                                                    <div class="mt-1 flex text-sm">
                                                        <p class="text-gray-500">{product.color}</p>
                                                        {product.size ? (
                                                            <p class="ml-4 border-l border-gray-200 pl-4 text-gray-500">{product.size}</p>
                                                        ) : null}
                                                    </div>
                                                    <p class="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                                                </div>


                                            </div>
                                            <div class="mt-4 sm:mt-0 sm:pr-9">
                                                <div class="grid w-full max-w-16 grid-cols-1">
                                                    <select
                                                        name={`quantity-${index()}`}
                                                        aria-label={`Quantity, ${product.name}`}
                                                        class="col-start-1 row-start-1 appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                    >
                                                        <option value={1}>1</option>
                                                        <option value={2}>2</option>
                                                        <option value={3}>3</option>
                                                        <option value={4}>4</option>
                                                        <option value={5}>5</option>
                                                        <option value={6}>6</option>
                                                        <option value={7}>7</option>
                                                        <option value={8}>8</option>
                                                    </select>
                                                    <ChevronDown
                                                        aria-hidden="true"
                                                        class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                                    />
                                                </div>

                                                <div class="absolute right-0 top-1">
                                                    <button type="button"
                                                            class="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                                                        <span class="sr-only">Remove</span>
                                                        <CircleX aria-hidden="true" class="size-5"/>
                                                    </button>
                                                </div>
                                            </div>
                                            <p class="mt-4 flex space-x-2 text-sm text-gray-700">
                                                {product.inStock ? (
                                                    <CircleCheck aria-hidden="true"
                                                                 class="size-5 shrink-0 text-green-500"/>
                                                ) : (
                                                    <Clock aria-hidden="true" class="size-5 shrink-0 text-gray-300"/>
                                                )}

                                                <span>{product.inStock ? 'In stock' : `Ships in ${product.leadTime}`}</span>
                                            </p>
                                        </div>
                                    </li>
                                )}
                            </For>
                        </ul>
                    </section>

                    {/* Order summary */}
                    <section
                        aria-labelledby="summary-heading"
                        class="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
                    >
                        <h2 id="summary-heading" class="text-lg font-medium text-gray-900">
                            Order summary
                        </h2>

                        <dl class="mt-6 space-y-4">
                            <div class="flex items-center justify-between">
                                <dt class="text-sm text-gray-600">Subtotal</dt>
                                <dd class="text-sm font-medium text-gray-900">$99.00</dd>
                            </div>
                            <div class="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt class="flex items-center text-sm text-gray-600">
                                    <span>Shipping estimate</span>
                                    <a href="#" class="ml-2 shrink-0 text-gray-400 hover:text-gray-500">
                                        <span class="sr-only">Learn more about how shipping is calculated</span>
                                        <MessageCircleQuestion aria-hidden="true" class="size-5"/>
                                    </a>
                                </dt>
                                <dd class="text-sm font-medium text-gray-900">$5.00</dd>
                            </div>
                            <div class="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt class="flex text-sm text-gray-600">
                                    <span>Tax estimate</span>
                                    <a href="#" class="ml-2 shrink-0 text-gray-400 hover:text-gray-500">
                                        <span class="sr-only">Learn more about how tax is calculated</span>
                                        <MessageCircleQuestion aria-hidden="true" class="size-5"/>
                                    </a>
                                </dt>
                                <dd class="text-sm font-medium text-gray-900">$8.32</dd>
                            </div>
                            <div class="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt class="text-base font-medium text-gray-900">Order total</dt>
                                <dd class="text-base font-medium text-gray-900">$112.32</dd>
                            </div>
                        </dl>

                        <div class="mt-6">
                            <button
                                type="submit"
                                class="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                            >
                                Checkout
                            </button>
                        </div>
                    </section>
                </form>
            </div>
        </div>
    )
}

export default Cart;
