import {Component} from "solid-js";
import CarouselTimePicker from "~/components/ui/carousel-time-picker";

type PROPS = {}

const ContactUsForm: Component<PROPS> = props => {

    return (
        <form action="#"  class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-28">
            <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div class="sm:col-span-2">
                        <label for="organization" class="block text-sm/6 font-semibold text-gray-900">Organization</label>
                        <div class="mt-2.5">
                            <input type="text" name="organization" id="organization" autocomplete="organization"
                                   class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600"/>
                        </div>
                    </div>
                    <div>
                        <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">First
                            name</label>
                        <div class="mt-2.5">
                            <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                                   class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600"/>
                        </div>
                    </div>
                    <div>
                        <label for="last-name" class="block text-sm/6 font-semibold text-gray-900">Last
                            name</label>
                        <div class="mt-2.5">
                            <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                                   class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600"/>
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="email" class="block text-sm/6 font-semibold text-gray-900">Email</label>
                        <div class="mt-2.5">
                            <input type="email" name="email" id="email" autocomplete="email"
                                   class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600"/>
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="phone-number" class="block text-sm/6 font-semibold text-gray-900">Mobile Phone</label>
                        <div class="mt-2.5">
                            <input type="tel" name="phone-number" id="phone-number" autocomplete="tel"
                                   class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600"/>
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block text-sm/6 font-semibold text-gray-900">Message</label>
                        <div class="mt-2.5">
                                    <textarea name="message" id="message" rows="4"
                                              class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600"></textarea>
                        </div>
                    </div>
                </div>


                <div class="mt-8 flex justify-end">
                    <button type="submit"
                            class="rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">Send
                        message
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ContactUsForm;
