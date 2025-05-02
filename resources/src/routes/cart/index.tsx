import {Component, For, Show} from "solid-js";
import {ChevronDown, CircleX, MessageCircleQuestion, XIcon} from "lucide-solid";
import Drawer from "@corvu/drawer";
import {useLayoutContext} from "~/context/layout-provider";
import { Format } from "@ark-ui/solid/format";

const products = [
    {
        id: "id",
        name: "product_title",
        image: "color_square_image",
        price: "msrp",
        slug: "slug",
        brand: "brand",
        style: "style",
        gtin: "gtin",
        color: "color",
        size: "size",
        quantity: "quantity",
        inStock: true,
        leadTime: '1-2 days',
    },

]

const Cart: Component<{}> = props => {

    const {cartStore, setCartStore} = useLayoutContext();


    const calculateCartTotal = () => {
        if (!cartStore?.items || cartStore.items.length === 0) {
            return "0.00";
        }

        const total = cartStore.items.reduce((sum: number, item: any) => {
            // Parse price to number, multiply by quantity, and add to sum
            const itemPrice = parseFloat(item.price) * (item.quantity || 1);
            return sum + itemPrice;
        }, 0);

        // Format to 2 decimal places
        return total.toFixed(2);
    };


    return (
        <div class="bg-white h-screen overflow-y-auto">
            <div
                class="flex flex-col gap-0 min-h-[2rem] items-start justify-start min-w-0 text-center border-b border-t border-gray-200 ">
                <div class={"flex justify-between items-center p-2 w-full"}>
                    <div class={'flex justify-start items-center space-x-2'}>
                        <Drawer.Close contextId={'right-menu-01'} as={"div"} class=""><XIcon class={"stroke-red-400"}/></Drawer.Close>
                        <h2 class="w-full text-base truncate text-slate-700 uppercase">
                            Shopping Cart
                        </h2>
                    </div>
                    <Show when={cartStore?.count > 0}>
                        <h1 class="flex text-center text-sm font-medium uppercase lg:flex-none">{cartStore?.count} TOTAL</h1>
                    </Show>
                </div>
            </div>
            <div class="mx-auto max-w-2xl px-4 pb-24 pt-4 sm:px-6 lg:max-w-7xl lg:px-8">

                <form class="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                    <section aria-labelledby="cart-heading" class="lg:col-span-7">


                        <ul role="list" class="divide-y divide-gray-200">
                            <For each={cartStore.items}>
                                {(product, index) => (
                                    <li class="flex py-6 sm:py-10 relative">
                                        <div class="shrink-0">
                                            <img
                                                alt={product.name}
                                                src={product.image}
                                                class="size-24 rounded-md object-contain sm:size-18"
                                            />
                                        </div>

                                        <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                            <h3 class="text-sm">
                                                <a href={product.slug}
                                                   class="font-medium text-gray-700 hover:text-gray-800">
                                                    {product.name}
                                                </a>
                                            </h3>
                                            <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                <div>
                                                    <p class="mt-1 text-sm font-medium text-gray-900">
                                                        <Format.Number
                                                            value={Number(product.price)}
                                                            style="currency"
                                                            currency="USD"
                                                            minimumFractionDigits={2}
                                                            maximumFractionDigits={2}
                                                        />
                                                    </p>

                                            </div>
                                                <div class="mt-1 col-span-2 flex text-sm justify-start items-center w-full text-xs">

                                                    <p class="text-gray-500 uppercase">{product.color}</p>
                                                    <div>
                                                        {product.size ? (
                                                            <p class="ml-4 border-l border-gray-200 pl-4 text-gray-500">{product.size}</p>
                                                        ) : null}
                                                    </div>

                                                </div>
                                                <div class="mt-6 grid w-full max-w-16 grid-cols-1">
                                                    <select
                                                        id={`quantity-${index()}`}
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
                                                        <option value={9}>9</option>
                                                        <option value={10}>10</option>
                                                        <option value={11}>11</option>
                                                        <option value={12}>12</option>
                                                        <option value={13}>13</option>
                                                        <option value={14}>14</option>
                                                        <option value={15}>15</option>
                                                        <option value={16}>16</option>
                                                        <option value={17}>17</option>
                                                        <option value={18}>18</option>
                                                        <option value={19}>19</option>
                                                        <option value={20}>20</option>
                                                    </select>
                                                    <ChevronDown
                                                        aria-hidden="true"
                                                        class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                                    />
                                                </div>
                                            </div>

                                            <div class="mt-4 sm:mt-0 sm:pr-9">


                                                <div class="absolute right-0 top-1">
                                                    <button type="button"
                                                            onClick={() => setCartStore({
                                                                ...cartStore,
                                                                items: cartStore.items.filter((item: any) => item.id !== product.id)
                                                            })}
                                                            class="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                                                        <span class="sr-only">Remove</span>
                                                        <CircleX aria-hidden="true" class="size-5"/>
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </li>
                                )}
                            </For>
                        </ul>
                        <section
                            aria-labelledby="summary-heading"
                            class="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
                        >
                            <h2 id="summary-heading" class="text-lg font-medium text-gray-900">
                                Order summary
                            </h2>

                            <dl class="mt-6 space-y-4">
                                <div class="flex items-center justify-between">
                                    <dt class="text-sm text-gray-600">Quantity</dt>
                                    <dd class="text-sm font-medium text-gray-900">{cartStore.count}</dd>
                                </div>
                                <div class="flex items-center justify-between">
                                    <dt class="text-sm text-gray-600">Subtotal</dt>
                                    <dd class="text-sm font-medium text-gray-900">${calculateCartTotal()}</dd>
                                </div>
                                <div class="flex items-center justify-between border-t border-gray-200 pt-4">
                                    <dt class="flex items-center text-sm text-gray-600">
                                        <span>Shipping estimate</span>
                                        <a href="#" class="ml-2 shrink-0 text-gray-400 hover:text-gray-500">
                                            <span class="sr-only">Learn more about how shipping is calculated</span>
                                            <MessageCircleQuestion aria-hidden="true" class="size-5"/>
                                        </a>
                                    </dt>
                                    <dd class="text-sm font-medium text-gray-900">$0.00</dd>
                                </div>
                                <div class="flex items-center justify-between border-t border-gray-200 pt-4">
                                    <dt class="flex text-sm text-gray-600">
                                        <span>Tax estimate</span>
                                        <a href="#" class="ml-2 shrink-0 text-gray-400 hover:text-gray-500">
                                            <span class="sr-only">Learn more about how tax is calculated</span>
                                            <MessageCircleQuestion aria-hidden="true" class="size-5"/>
                                        </a>
                                    </dt>
                                    <dd class="text-sm font-medium text-gray-900">$0.00</dd>
                                </div>
                                <div class="flex items-center justify-between border-t border-gray-200 pt-4">
                                    <dt class="text-base font-medium text-gray-900">Order total</dt>
                                    <dd class="text-base font-medium text-gray-900">${calculateCartTotal()}</dd>
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
                    </section>

                    {/* Order summary */}

                </form>
            </div>
        </div>
    )
}

export default Cart;
