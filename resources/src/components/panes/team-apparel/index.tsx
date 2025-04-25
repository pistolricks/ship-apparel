import {Component, onCleanup, onMount} from "solid-js";
import PaneFlow from "../paneflow.mjs";
import "../paneflow.css";
import "./style.css";

const TeamApparel: Component = () => {
    let paneFlowEl: HTMLDivElement | undefined;
    let paneFlowInstance: PaneFlow | undefined;

    const paneFlowOnClick0 = (e: MouseEvent): void => {
        e.stopPropagation();
        window.open(`/team-athletics`, "_self");
    };

    const paneFlowOnClick1 = (e: MouseEvent): void => {
        e.stopPropagation();
        window.open(`/`, "_self");
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
                autoplay: { enabled: true, interval: 3000 },
               // pagination: { enabled: true, clickable: true, type: "bullets" },
                panes: [
                    {
                        cols: 4,
                        rows: 2,
                        blocks: [
                            {
                                el: ".paneflow-block-benINp",
                                col: 0,
                                row: 0,
                                widthCols: 4,
                                heightRows: 2,
                                children: [
                                    {
                                        el: ".paneflow-item-qVqUQz",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                    {
                                        el: ".paneflow-item-lc4v5e",
                                        translateX: "17.4000000000cqw",
                                        translateY: "20.5000000000cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 1,
                                        parallax: 2,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                        ],
                    },
                    {
                        cols: 5,
                        rows: 2,
                        blocks: [
                            {
                                el: ".paneflow-block-benINp",
                                col: 0,
                                row: 0,
                                widthCols: 2,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-qVqUQz",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                    {
                                        el: ".paneflow-item-lc4v5e",
                                        translateX: "-6.3000000000cqw",
                                        translateY: "5.3000000000cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 0.43,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "bottom",
                            },
                            {
                                el: ".paneflow-block-grh2X9",
                                col: 2,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-Dok8Ya",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 0.93,
                                        transformOrigin: "center",
                                        opacity: 1,
                                        parallax: 0,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "bottom",
                            },
                            {
                                el: ".paneflow-block-heg4hu",
                                col: 3,
                                row: 0,
                                widthCols: 2,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-mwmpM5",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "bottom",
                            },
                            {
                                el: ".paneflow-block-FJTj9m",
                                col: 1,
                                row: 1,
                                widthCols: 2,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-aHhUOM",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                ],
                                enterFrom: "bottom",
                                exitTo: "bottom",
                            },
                            {
                                el: ".paneflow-block-F9Z8vt",
                                col: 3,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-gs0HIA",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 0.74,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                        ],
                    },
                    {
                        cols: 4,
                        rows: 3,
                        blocks: [
                            {
                                el: ".paneflow-block-2nuIwD",
                                col: 0,
                                row: 0,
                                widthCols: 2,
                                heightRows: 2,
                                children: [
                                    {
                                        el: ".paneflow-item-zCnBSD",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 1,
                                        parallax: 0,
                                    },
                                ],
                                enterFrom: "top",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-Uph1My",
                                col: 2,
                                row: 0,
                                widthCols: 2,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-j7zxUg",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 2.22,
                                        transformOrigin: "center",
                                        opacity: 1,
                                        parallax: 0,
                                    },
                                ],
                                enterFrom: "top",
                                exitTo: "bottom",
                            },
                            {
                                el: ".paneflow-block-V3IFgN",
                                col: 2,
                                row: 1,
                                widthCols: 2,
                                heightRows: 2,
                                children: [
                                    {
                                        el: ".paneflow-item-D9Le4C",
                                        translateX: "-0.5000000000cqw",
                                        translateY: "8.8000000000cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1.66,
                                        transformOrigin: "left",
                                        opacity: 1,
                                    },
                                ],
                                enterFrom: "top",
                                exitTo: "bottom",
                            },
                            {
                                el: ".paneflow-block-FJTj9m",
                                col: 0,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-aHhUOM",
                                        translateX: 0,
                                        translateY: "2.9cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1.5,
                                        transformOrigin: "left",
                                        opacity: 1,
                                    },
                                ],
                                enterFrom: "bottom",
                                exitTo: "bottom",
                            },
                            {
                                el: ".paneflow-block-F9Z8vt",
                                col: 1,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-gs0HIA",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "bottom",
                            },
                        ],
                    },
                    {
                        cols: 5,
                        rows: 4,
                        blocks: [
                            {
                                el: ".paneflow-block-Ak6kXf",
                                col: 1,
                                row: 0,
                                widthCols: 2,
                                heightRows: 4,
                                children: [
                                    {
                                        el: ".paneflow-item-yzKdhw",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 0.66,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-CaHcmK",
                                col: 3,
                                row: 0,
                                widthCols: 2,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-ZfhSwM",
                                        translateX: "2.6000000000cqw",
                                        translateY: "1.8000000000cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 1,
                                        parallax: 2,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-HNyDpw",
                                col: 3,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-cHR1zm",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 1,
                                        parallax: 0,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-b5WF7C",
                                col: 4,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-JnBdL0",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 1,
                                        parallax: 0,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-5f3OR4",
                                col: 3,
                                row: 2,
                                widthCols: 2,
                                heightRows: 2,
                                children: [
                                    {
                                        el: ".paneflow-item-MsZqAY",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                    {
                                        el: ".paneflow-item-QWijAP",
                                        translateX: "15cqw",
                                        translateY: "6.9cqw",
                                        translateZ: 0,
                                        rotate: "-360deg",
                                        scale: 0,
                                        transformOrigin: "center",
                                        opacity: 0,
                                    },
                                    {
                                        el: ".paneflow-item-gcvf5U",
                                        translateX: "10.5000000000cqw",
                                        translateY: "3.2000000000cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                        ],
                    },
                    {
                        cols: 5,
                        rows: 4,
                        blocks: [
                            {
                                el: ".paneflow-block-id107i",
                                col: 0,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-F01TEf",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                ],
                                enterFrom: "top",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-OJoG2O",
                                col: 1,
                                row: 0,
                                widthCols: 4,
                                heightRows: 2,
                                children: [
                                    {
                                        el: ".paneflow-item-ZJKuhs",
                                        translateX: 0,
                                        translateY: "11.6cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 2.01,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                ],
                                enterFrom: "top",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-F9Z8vt",
                                col: 0,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-gs0HIA",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                ],
                                enterFrom: "left",
                                exitTo: "bottom",
                            },
                            {
                                el: ".paneflow-block-CaHcmK",
                                col: 0,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-ZfhSwM",
                                        translateX: "1.1cqw",
                                        translateY: "3.9cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 0.49,
                                        transformOrigin: "top left",
                                        opacity: 1,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-Ak6kXf",
                                col: 1,
                                row: 2,
                                widthCols: 1,
                                heightRows: 2,
                                children: [
                                    {
                                        el: ".paneflow-item-yzKdhw",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 0.92,
                                        transformOrigin: "top center",
                                        opacity: 1,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-5f3OR4",
                                col: 2,
                                row: 2,
                                widthCols: 3,
                                heightRows: 2,
                                children: [
                                    {
                                        el: ".paneflow-item-MsZqAY",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 0,
                                    },
                                    {
                                        el: ".paneflow-item-QWijAP",
                                        translateX: "40cqw",
                                        translateY: "8.5cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                    {
                                        el: ".paneflow-item-gcvf5U",
                                        translateX: "39.6cqw",
                                        translateY: "7.8cqw",
                                        translateZ: 0,
                                        rotate: "360deg",
                                        scale: 0,
                                        transformOrigin: "center",
                                        opacity: 0,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-heg4hu",
                                col: 0,
                                row: 3,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-mwmpM5",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                ],
                                enterFrom: "bottom",
                                exitTo: "bottom",
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
            class="paneflow paneflow-green-christal-84 paneflow-with-pagination"
        >
            <div class="paneflow-content">
                <div class="paneflow-block paneflow-block-benINp">
                    <img
                        src="https://ink-and-thread.com/cdn-cgi/imagedelivery/jYAILuSxmZBHJW3H5LQP5g/slide_1.png/public"
                        class="paneflow-bg-image paneflow-item-qVqUQz"
                    />
                    <div class="paneflow-text paneflow-item-lc4v5e">
                        Team
                        <br />
                        Apparel
                    </div>
                </div>
                <div class="paneflow-block paneflow-block-grh2X9">
                    <img
                        src="http://ink-and-thread.com/storage/assets/panes/sports/nike.png"
                        class="paneflow-bg-image paneflow-item-Dok8Ya"
                    />
                </div>
                <div class="paneflow-block paneflow-block-heg4hu">
                    <img
                        src="https://ink-and-thread.com/cdn-cgi/imagedelivery/jYAILuSxmZBHJW3H5LQP5g/slide_4.png/public"
                        class="paneflow-bg-image paneflow-item-mwmpM5"
                    />
                </div>
                <div class="paneflow-block paneflow-block-FJTj9m">
                    <img
                        src="https://ink-and-thread.com/cdn-cgi/imagedelivery/jYAILuSxmZBHJW3H5LQP5g/model_soccer.png/public"
                        class="paneflow-bg-image paneflow-item-aHhUOM"
                    />
                </div>
                <div class="paneflow-block paneflow-block-2nuIwD">
                    <img
                        src="https://ink-and-thread.com/cdn-cgi/imagedelivery/jYAILuSxmZBHJW3H5LQP5g/slide_3.png/public"
                        class="paneflow-bg-image paneflow-item-zCnBSD"
                    />
                </div>
                <div class="paneflow-block paneflow-block-Uph1My">
                    <img
                        src="http://ink-and-thread.com/storage/assets/panes/sports/ogio.png"
                        class="paneflow-bg-image paneflow-item-j7zxUg"
                    />
                </div>
                <div class="paneflow-block paneflow-block-V3IFgN">
                    <img
                        src="https://ink-and-thread.com/cdn-cgi/imagedelivery/jYAILuSxmZBHJW3H5LQP5g/slide_4.png/public"
                        class="paneflow-image paneflow-item-D9Le4C"
                    />
                </div>
                <div class="paneflow-block paneflow-block-Ak6kXf">
                    <img
                        src="http://ink-and-thread.com/storage/assets/panes/sports/nike.png"
                        class="paneflow-bg-image paneflow-item-yzKdhw"
                    />
                </div>
                <div class="paneflow-block paneflow-block-CaHcmK">
                    <div class="paneflow-text paneflow-item-ZfhSwM">
                        ALL THE
                        <br />
                        TOP BRANDS
                    </div>
                </div>
                <div class="paneflow-block paneflow-block-5f3OR4">
                    <img
                        src="http://ink-and-thread.com/storage/assets/panes/sports/blurred_background.jpg"
                        class="paneflow-bg-image paneflow-item-MsZqAY"
                    />
                    <img
                        src="https://paneflow.com/templates/iphone-16-demo/ee6a9937589054284e0c.svg"
                        class="paneflow-image paneflow-item-QWijAP"
                        onClick={paneFlowOnClick0}
                    />
                    <img
                        src="http://ink-and-thread.com/storage/assets/panes/sports/the_north_face.png"
                        class="paneflow-image paneflow-item-gcvf5U"
                    />
                </div>
                <div
                    class="paneflow-block paneflow-block-OJoG2O"
                    onClick={paneFlowOnClick1}
                >
                    <img
                        src="https://ink-and-thread.com/cdn-cgi/imagedelivery/jYAILuSxmZBHJW3H5LQP5g/models_group_sports.png/public"
                        class="paneflow-bg-image paneflow-item-ZJKuhs"
                    />
                </div>
                <div class="paneflow-block paneflow-block-id107i">
                    <img
                        src="http://ink-and-thread.com/storage/assets/panes/sports/jerzees.png"
                        class="paneflow-bg-image paneflow-item-F01TEf"
                    />
                </div>
                <div class="paneflow-block paneflow-block-F9Z8vt">
                    <img
                        src="http://ink-and-thread.com/storage/assets/panes/sports/carhartt.png"
                        class="paneflow-bg-image paneflow-item-gs0HIA"
                    />
                </div>
                <div class="paneflow-block paneflow-block-HNyDpw">
                    <img
                        src="http://ink-and-thread.com/storage/assets/panes/sports/sport-tek.png"
                        class="paneflow-bg-image paneflow-item-cHR1zm"
                    />
                </div>
                <div class="paneflow-block paneflow-block-b5WF7C">
                    <img
                        src="http://ink-and-thread.com/storage/assets/panes/sports/carhartt.png"
                        class="paneflow-bg-image paneflow-item-JnBdL0"
                    />
                </div>
            </div>
        </div>
    );
};

export default TeamApparel;
