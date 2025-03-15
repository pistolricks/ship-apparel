import {Component, lazy, onMount} from "solid-js";
import CtaWithImageTiles from "~/components/section/cta/cta-with-image-tiles";
import BaseTabs from "~/components/ui/tab/tabs";
import CtaText from "~/components/section/cta/cta-text";
import {CarouselItemCard, CarouselItemProps} from "~/components/ui/carousel/carousel";
import {Button} from "~/components/ui/button";
import {RouteSectionProps} from "@solidjs/router";
import {useLayoutContext} from "~/context/layout-provider";

const BaseCarousel = lazy(() => import('~/components/ui/carousel/carousel'));

type PROPS = RouteSectionProps

const importProducts = async () =>
    (await fetch(`/v1/products`)).json();

const Home: Component<PROPS> = props => {

    const {apps} = useLayoutContext();


    return (
        <div
            class={''}
            style={{
                'background-image': 'linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)'
            }}
        >

            <div class={'mx-auto max-w-7xl'}>
                <BaseTabs class="" menu={apps}>
                    <BaseCarousel
                        list={apps}
                        children={(
                            item) =>
                            <CarouselItemCard {...item()}/>
                        }/>
                    <BaseCarousel
                        list={apps.reverse()}
                        children={(
                            item) =>
                            <CarouselItemCard {...item()}/>
                        }/>
                </BaseTabs>




                    <CtaWithImageTiles>
                        <CtaText title={"Unite, Identify, Inspire"}
                                 description={"Selecting the perfect canvas for your custom designs"}
                                 information={"With state-of-the-art equipment and skilled artisans, we ensure every product meets the highest standards of quality. From concept development to final production, our team works closely with you to bring your vision to life."}
                                 cta={"Shop"}
                        />
                    </CtaWithImageTiles>



            </div>
            <div class={'mx-auto max-w-7xl sm:px-4 md:px-6 lg:px-8'}>

            </div>
        </div>
    )
}

export default Home;
