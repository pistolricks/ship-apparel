import {Component, onCleanup, onMount} from "solid-js";
import PaneFlow from "../paneflow.mjs";
import "../paneflow.css";
import "./style.css";

const TeamAthleticsPane: Component = () => {
    let paneFlowEl: HTMLDivElement | undefined;
    let paneFlowInstanceRef: PaneFlow | undefined;


    const  paneHome = (e: MouseEvent) => {
        e.stopPropagation();
        paneFlowInstanceRef?.setPane(0);
    };

    const paneFlowOnClick0 = (e: MouseEvent) => {
        e.stopPropagation();
        paneFlowInstanceRef?.setPane(2);
    };

    const paneFlowOnClick1 = (e: MouseEvent) => {
        e.stopPropagation();
        paneFlowInstanceRef?.setPane(3);
    };

    const paneFlowOnClick2 = (e: MouseEvent) => {
        e.stopPropagation();
        paneFlowInstanceRef?.setPane(4);
    };

    const paneFlowOnClick3 = (e: MouseEvent) => {
        e.stopPropagation();
        paneFlowInstanceRef?.setPane(5);
    };

    const paneFlowOnClick4 = (e: MouseEvent) => {
        e.stopPropagation();
        paneFlowInstanceRef?.setPane(6);
    };

    const paneFlowOnClick5 = (e: MouseEvent) => {
        e.stopPropagation();
        paneFlowInstanceRef?.setPane(7);
    };

    const paneFlowOnClick6 = (e: MouseEvent) => {
        e.stopPropagation();
        paneFlowInstanceRef?.setPane(1);
    };

    onMount(() => {
        if (paneFlowEl) {
            paneFlowInstanceRef = new PaneFlow({
                el: paneFlowEl,
                padding: "1cqw",
                gap: "2cqw",
                transitionDuration: 1000,
                blockDelay: 50,
                blockBorderRadius: "0cqw",
                initialPaneIndex: 0,
                panes: [
                    {
                        cols: 7,
                        rows: 3,
                        blocks: [
                            {
                                el: ".paneflow-block-VPh6uV",
                                col: 1,
                                row: 0,
                                widthCols: 5,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-S7VzJy",
                                        translateX: "24.9cqw",
                                        translateY: "3.2cqw",
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
                            {
                                el: ".paneflow-block-EAIyt0",
                                col: 0,
                                row: 1,
                                widthCols: 1,
                                heightRows: 2,
                                children: [
                                    {
                                        el: ".paneflow-item-XmK2SJ",
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
                                el: ".paneflow-block-kxUvOt",
                                col: 1,
                                row: 1,
                                widthCols: 1,
                                heightRows: 2,
                                children: [
                                    {
                                        el: ".paneflow-item-yPc2tt",
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
                                el: ".paneflow-block-WlzHhC",
                                col: 2,
                                row: 1,
                                widthCols: 1,
                                heightRows: 2,
                                children: [
                                    {
                                        el: ".paneflow-item-sGNaYn",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1.05,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "bottom",
                            },
                            {
                                el: ".paneflow-block-bnscRC",
                                col: 3,
                                row: 1,
                                widthCols: 1,
                                heightRows: 2,
                                children: [
                                    {
                                        el: ".paneflow-item-5XQhrj",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                    {
                                        el: ".paneflow-item-3PhC8O",
                                        translateX: "-3.3000000000cqw",
                                        translateY: "-22.4000000000cqw",
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
                                el: ".paneflow-block-H8fiJk",
                                col: 4,
                                row: 1,
                                widthCols: 1,
                                heightRows: 2,
                                children: [
                                    {
                                        el: ".paneflow-item-6dkPiI",
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
                                el: ".paneflow-block-Z1PFhE",
                                col: 5,
                                row: 1,
                                widthCols: 1,
                                heightRows: 2,
                                children: [
                                    {
                                        el: ".paneflow-item-pB5RXX",
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
                                el: ".paneflow-block-4ICLmf",
                                col: 6,
                                row: 1,
                                widthCols: 1,
                                heightRows: 2,
                                children: [
                                    {
                                        el: ".paneflow-item-pzJC7P",
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
                        ],
                    },
                    {
                        cols: 9,
                        rows: 3,
                        blocks: [
                            {
                                el: ".paneflow-block-EAIyt0",
                                col: 0,
                                row: 0,
                                widthCols: 2,
                                heightRows: 3,
                                children: [
                                    {
                                        el: ".paneflow-item-XmK2SJ",
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
                                el: ".paneflow-block-140TsE",
                                col: 2,
                                row: 0,
                                widthCols: 7,
                                heightRows: 3,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                        ],
                    },
                    {
                        cols: 9,
                        rows: 3,
                        blocks: [
                            {
                                el: ".paneflow-block-kxUvOt",
                                col: 0,
                                row: 0,
                                widthCols: 2,
                                heightRows: 3,
                                children: [
                                    {
                                        el: ".paneflow-item-yPc2tt",
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
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-MJXlZD",
                                col: 2,
                                row: 0,
                                widthCols: 7,
                                heightRows: 3,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                        ],
                    },
                    {
                        cols: 9,
                        rows: 3,
                        blocks: [
                            {
                                el: ".paneflow-block-WlzHhC",
                                col: 0,
                                row: 0,
                                widthCols: 2,
                                heightRows: 3,
                                children: [
                                    {
                                        el: ".paneflow-item-sGNaYn",
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
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-CbWjqU",
                                col: 2,
                                row: 0,
                                widthCols: 7,
                                heightRows: 3,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                        ],
                    },
                    {
                        cols: 9,
                        rows: 3,
                        blocks: [
                            {
                                el: ".paneflow-block-bnscRC",
                                col: 0,
                                row: 0,
                                widthCols: 2,
                                heightRows: 3,
                                children: [
                                    {
                                        el: ".paneflow-item-5XQhrj",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                    {
                                        el: ".paneflow-item-3PhC8O",
                                        translateX: "-3.3000000000cqw",
                                        translateY: "-22.4000000000cqw",
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
                                el: ".paneflow-block-6io05X",
                                col: 2,
                                row: 0,
                                widthCols: 7,
                                heightRows: 3,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                        ],
                    },
                    {
                        cols: 9,
                        rows: 3,
                        blocks: [
                            {
                                el: ".paneflow-block-H8fiJk",
                                col: 0,
                                row: 0,
                                widthCols: 2,
                                heightRows: 3,
                                children: [
                                    {
                                        el: ".paneflow-item-6dkPiI",
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
                                el: ".paneflow-block-19otq9",
                                col: 2,
                                row: 0,
                                widthCols: 7,
                                heightRows: 3,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                        ],
                    },
                    {
                        cols: 9,
                        rows: 3,
                        blocks: [
                            {
                                el: ".paneflow-block-Z1PFhE",
                                col: 0,
                                row: 0,
                                widthCols: 2,
                                heightRows: 3,
                                children: [
                                    {
                                        el: ".paneflow-item-pB5RXX",
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
                                el: ".paneflow-block-LB7rGi",
                                col: 2,
                                row: 0,
                                widthCols: 7,
                                heightRows: 3,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                        ],
                    },
                    {
                        cols: 9,
                        rows: 3,
                        blocks: [
                            {
                                el: ".paneflow-block-4ICLmf",
                                col: 0,
                                row: 0,
                                widthCols: 2,
                                heightRows: 3,
                                children: [
                                    {
                                        el: ".paneflow-item-pzJC7P",
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
                                el: ".paneflow-block-SSB8ja",
                                col: 2,
                                row: 0,
                                widthCols: 7,
                                heightRows: 3,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                        ],
                    },
                ],
            });
        }

        onCleanup(() => {
            if (paneFlowInstanceRef) {
                paneFlowInstanceRef.destroy();
            }
        });
    });

    const handleRef = (el: HTMLDivElement) => {
        paneFlowEl = el;
    };

    return (
        <div ref={handleRef} class="paneflow paneflow-skilled-limpet-250">
            <div class="paneflow-content">
                <div
                    class="paneflow-block paneflow-block-kxUvOt"
                    onClick={paneFlowOnClick0}
                >
                    <img
                        src="https://ink-and-thread.com/storage/assets/TEAM UNIFORMS/BasketBallPlayer.jpg"
                        class="paneflow-bg-image paneflow-item-yPc2tt"
                    />
                </div>
                <div
                    class="paneflow-block paneflow-block-WlzHhC"
                    onClick={paneFlowOnClick1}
                >
                    <img
                        src="https://ink-and-thread.com/storage/assets/TEAM UNIFORMS/_229772_229773_6702_6004_silo1.jpg"
                        class="paneflow-bg-image paneflow-item-sGNaYn"
                    />
                </div>
                <div
                    class="paneflow-block paneflow-block-bnscRC"
                    onClick={paneFlowOnClick2}
                >
                    <img
                        src="https://ink-and-thread.com/storage/assets/TEAM UNIFORMS/TennisPlayer.jpg"
                        class="paneflow-bg-image paneflow-item-5XQhrj"
                    />
                    <div class="paneflow-text paneflow-item-3PhC8O">TENNIS</div>
                </div>
                <div
                    class="paneflow-block paneflow-block-H8fiJk"
                    onClick={paneFlowOnClick3}
                >
                    <img
                        src="https://ink-and-thread.com/storage/assets/TEAM UNIFORMS/_1567_1340_silo3.jpg"
                        class="paneflow-bg-image paneflow-item-6dkPiI"
                    />
                </div>
                <div
                    class="paneflow-block paneflow-block-Z1PFhE"
                    onClick={paneFlowOnClick4}
                >
                    <img
                        src="https://ink-and-thread.com/storage/assets/TEAM UNIFORMS/_9580_silo1.jpg"
                        class="paneflow-bg-image paneflow-item-pB5RXX"
                    />
                </div>
                <div class="paneflow-block paneflow-block-VPh6uV">
                    <div class="paneflow-text paneflow-item-S7VzJy">
                        TEAM UNIFORMS
                    </div>
                </div>
                <div
                    class="paneflow-block paneflow-block-4ICLmf"
                    onClick={paneFlowOnClick5}
                >
                    <img
                        src="https://ink-and-thread.com/storage/assets/TEAM UNIFORMS/_221025_silo2.jpg"
                        class="paneflow-bg-image paneflow-item-pzJC7P"
                    />
                </div>
                <div
                    class="paneflow-block paneflow-block-EAIyt0"
                    onClick={paneFlowOnClick6}
                >
                    <img
                        src="https://ink-and-thread.com/storage/assets/TEAM UNIFORMS/_342202_silo4.jpg"
                        class="paneflow-bg-image paneflow-item-XmK2SJ"
                    />
                </div>
                <div class="paneflow-block paneflow-block-LB7rGi"></div>
                <div class="paneflow-block paneflow-block-MJXlZD"></div>
                <div class="paneflow-block paneflow-block-CbWjqU"></div>
                <div class="paneflow-block paneflow-block-6io05X"></div>
                <div class="paneflow-block paneflow-block-19otq9"></div>
                <div class="paneflow-block paneflow-block-SSB8ja"></div>
                <div class="paneflow-block paneflow-block-140TsE"></div>
            </div>
        </div>
    );
};

export default TeamAthleticsPane;


