import {onCleanup, onMount} from "solid-js";
import PaneFlow from "../paneflow.mjs";
import "../paneflow.css";
import "./style.css";


export default function BrandWall() {
    let paneFlowEl: HTMLDivElement | undefined;
    let paneFlowInstance: PaneFlow | undefined;

    const paneFlowOnClick0 = (e: MouseEvent) => {
        e.stopPropagation();
        window.open(`http://ink-and-thread.com/apparel/brands`, "_self");
    };

    const paneFlowOnClick1 = (e: MouseEvent) => {
        e.stopPropagation();
        window.open(`http://ink-and-thread.com/apparel/brands`, "_self");
    };

    const paneFlowOnClick2 = (e: MouseEvent) => {
        e.stopPropagation();
        window.open(`http://ink-and-thread.com/apparel/brands`, "_self");
    };

    onMount(() => {
        if (paneFlowEl) {
            paneFlowInstance = new PaneFlow({
                el: paneFlowEl,
                padding: "1cqw",
                gap: "1cqw",
                transitionDuration: 1000,
                blockDelay: 50,
                blockBorderRadius: "3cqw",
                initialPaneIndex: 0,
                autoplay: {enabled: true, interval: 3000},
                panes: [
                    {
                        cols: 8,
                        rows: 1,
                        blocks: [
                            {
                                el: ".paneflow-block-UGGRlT",
                                col: 0,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-i30rwR",
                                        translateX: "3.2cqw",
                                        translateY: "-1cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 2.33,
                                        transformOrigin: "center",
                                        opacity: 1,
                                        parallax: 0,
                                    },
                                ],
                                enterFrom: "center",
                                exitTo: "center",
                            },
                            {
                                el: ".paneflow-block-5l3NGw",
                                col: 1,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-rTyEns",
                                        translateX: "3.2cqw",
                                        translateY: "-1cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 2.33,
                                        transformOrigin: "center",
                                        opacity: 1,
                                        parallax: 0,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-qImMzS",
                                col: 2,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-eXDhbZ",
                                        translateX: "3.2cqw",
                                        translateY: "-1cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 2.33,
                                        transformOrigin: "center",
                                        opacity: 1,
                                        parallax: 0,
                                    },
                                ],
                                enterFrom: "center",
                                exitTo: "center",
                            },
                            {
                                el: ".paneflow-block-kmR2dG",
                                col: 3,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-Q2EHyO",
                                        translateX: "3.2cqw",
                                        translateY: "-1cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 2.33,
                                        transformOrigin: "center",
                                        opacity: 1,
                                        parallax: 0,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-ye9O8q",
                                col: 4,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-3ibBje",
                                        translateX: "3.2cqw",
                                        translateY: "-1cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 2.33,
                                        transformOrigin: "center",
                                        opacity: 1,
                                        parallax: 0,
                                    },
                                ],
                                enterFrom: "center",
                                exitTo: "center",
                            },
                            {
                                el: ".paneflow-block-ma1Ors",
                                col: 5,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-RiRdrZ",
                                        translateX: "3.2cqw",
                                        translateY: "-1cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 2.33,
                                        transformOrigin: "center",
                                        opacity: 1,
                                        parallax: 0,
                                    },
                                ],
                                enterFrom: "center",
                                exitTo: "center",
                            },
                            {
                                el: ".paneflow-block-i7MJ0K",
                                col: 6,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-EhJqUz",
                                        translateX: "3.2cqw",
                                        translateY: "-1cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 2.33,
                                        transformOrigin: "center",
                                        opacity: 1,
                                        parallax: 0,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-u988NC",
                                col: 7,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-ZLrsBH",
                                        translateX: "3.2cqw",
                                        translateY: "-1cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 2.33,
                                        transformOrigin: "center",
                                        opacity: 1,
                                        parallax: 0,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                        ],
                    },
                ],
            });
        }
        onCleanup(() => {
            if (paneFlowInstance) {
                paneFlowInstance.destroy();
            }
        });
    });

    const handleRef = (el: HTMLDivElement) => {
        paneFlowEl = el;
    };

    return (
        <div
            ref={handleRef}
            class="paneflow paneflow-violent-nien-nunb-853"
        >
            <div class="paneflow-content">
                <div class="paneflow-block paneflow-block-UGGRlT">
                    <img
                        src="https://ink-and-thread.com/brands/Allmadeheader.jpg"
                        class="paneflow-image paneflow-item-i30rwR"
                        onClick={paneFlowOnClick0}
                    />
                </div>
                <div class="paneflow-block paneflow-block-kmR2dG">
                    <img
                        src="https://ink-and-thread.com/brands/anvilheader.jpg"
                        class="paneflow-image paneflow-item-Q2EHyO"
                    />
                </div>
                <div class="paneflow-block paneflow-block-5l3NGw">
                    <img
                        src="https://ink-and-thread.com/brands/alternativeheader.jpg"
                        class="paneflow-image paneflow-item-rTyEns"
                        onClick={paneFlowOnClick1}
                    />
                </div>
                <div class="paneflow-block paneflow-block-qImMzS">
                    <img
                        src="https://ink-and-thread.com/brands/AmericanApparelheader.jpg"
                        class="paneflow-image paneflow-item-eXDhbZ"
                        onClick={paneFlowOnClick2}
                    />
                </div>
                <div class="paneflow-block paneflow-block-ye9O8q">
                    <img
                        src="https://ink-and-thread.com/brands/BBHeader.jpg"
                        class="paneflow-image paneflow-item-3ibBje"
                    />
                </div>
                <div class="paneflow-block paneflow-block-i7MJ0K">
                    <img
                        src="https://ink-and-thread.com/brands/bulwarkheader.jpg"
                        class="paneflow-image paneflow-item-EhJqUz"
                    />
                </div>
                <div class="paneflow-block paneflow-block-ma1Ors">
                    <img
                        src="https://ink-and-thread.com/brands/Bella Logo 2000.jpg"
                        class="paneflow-image paneflow-item-RiRdrZ"
                    />
                </div>
                <div class="paneflow-block paneflow-block-u988NC">
                    <img
                        src="https://ink-and-thread.com/brands/Carharttheader.jpg"
                        class="paneflow-image paneflow-item-ZLrsBH"
                    />
                </div>
            </div>
        </div>
    );
}
