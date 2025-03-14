import {Component} from "solid-js";
import CtaWithImageTiles from "~/components/section/cta/cta-with-image-tiles";
import StyledTabs from "~/components/ui/tab/styled-tabs";
import CtaText from "~/components/section/cta/cta-text";
import PromoWithMultiOverlap from "~/components/section/promo/promo-with-multi-overlap";

type PROPS = {}

const Home: Component<PROPS> = props => {


    return (
        <div
            style={{
                'background-image': 'linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)'
            }}
        >

            <div

                class={'mx-auto max-w-7xl'}>
                <div class={''}>
                    <StyledTabs class="" menu={[]}/>
                </div>

                <div class={''}>


                        <div class={'hidden md:block'}>
                            <CtaWithImageTiles>
                            <CtaText title={"Browse Our Vast Product Line"}
                                     description={"Find Any Brand/Style From Our Top Catalogs"}
                                     information={"Representing the top 50 brands with over 2,890 styles, including 458 new trending styles."}
                                     cta={"Shop"}
                            />
                            </CtaWithImageTiles>
                        </div>


                    <PromoWithMultiOverlap images={[]}/>
                </div>



            </div>
            <div class={'mx-auto max-w-7xl sm:px-4 md:px-6 lg:px-8'}>

            </div>
        </div>
    )
}

export default Home;
