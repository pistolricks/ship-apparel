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

    const list: () => CarouselItemProps[] = () => [
        {
            title: "Title",
            description: "description",
            cta: "cta",
            href: "#",
            src: "storage/category_sports_1.jpg",
        },
        {
            title: "Title",
            description: "description",
            cta: "cta",
            href: "#",
            src: "storage/cta_sports_pack_1.png",
        }
    ];


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
                        list={list()}
                        children={(
                            item) =>
                            <CarouselItemCard {...item()}/>
                        }/>
                    <BaseCarousel
                        list={list()}
                        children={(
                            item) =>
                            <CarouselItemCard {...item()}/>
                        }/>
                </BaseTabs>



                <div class={'hidden md:block'}>
                    <CtaWithImageTiles>
                        <CtaText title={"Browse Our Vast Product Line"}
                                 description={"Find Any Brand/Style From Our Top Catalogs"}
                                 information={"Representing the top 50 brands with over 2,890 styles, including 458 new trending styles."}
                                 cta={"Shop"}
                        />
                    </CtaWithImageTiles>
                </div>


            </div>
            <div class={'mx-auto max-w-7xl sm:px-4 md:px-6 lg:px-8'}>

            </div>
        </div>
    )
}

export default Home;
