import {Component} from "solid-js";
import {ScrollingCards} from "~/components/section/category/scrolling-cards";

type PROPS = {}

const Hero: Component<PROPS> = props => {

    const categories = '~/lib/custom-apparel-menus.json'

    return (
        <div>
            <ScrollingCards categories={JSON.parse(categories)}/>
        </div>
    );
};

export default Hero;
