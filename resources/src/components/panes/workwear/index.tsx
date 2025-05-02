import {Component, onCleanup, onMount} from "solid-js";
import PaneFlow from "../paneflow.mjs";
import "../paneflow.css";
import "./style.css";

const WorkwearPane: Component = () => {
    let paneFlowEl: HTMLDivElement | undefined;
    let paneFlowInstanceRef: PaneFlow | undefined;

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

    const paneFlowOnClick7 = (e: MouseEvent) => {
        e.stopPropagation();
        paneFlowInstanceRef?.setPane(0);
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
                                col: 2,
                                row: 0,
                                widthCols: 3,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-S7VzJy",
                                        translateX: "11.7cqw",
                                        translateY: "6.9cqw",
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
                                el: ".paneflow-block-bnscRC",
                                col: 0,
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
                                el: ".paneflow-block-EAIyt0",
                                col: 1,
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
                                col: 2,
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
                                col: 3,
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
                                el: ".paneflow-block-Z1PFhE",
                                col: 4,
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
                                col: 5,
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
                            {
                                el: ".paneflow-block-H8fiJk",
                                col: 6,
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
                        ],
                    },
                    {
                        cols: 5,
                        rows: 5,
                        blocks: [
                            {
                                el: ".paneflow-block-kT4TNX",
                                col: 0,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-DjP6h1",
                                        translateX: "5cqw",
                                        translateY: "2.7cqw",
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
                                el: ".paneflow-block-ACuDLA",
                                col: 1,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-3DL9cY",
                                col: 2,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-ON7uoe",
                                col: 3,
                                row: 0,
                                widthCols: 2,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-Ti2FfL",
                                        translateX: "10.2cqw",
                                        translateY: "2.7cqw",
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
                                el: ".paneflow-block-bnscRC",
                                col: 0,
                                row: 1,
                                widthCols: 1,
                                heightRows: 4,
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
                                el: ".paneflow-block-wWdZfU",
                                col: 1,
                                row: 1,
                                widthCols: 4,
                                heightRows: 4,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                        ],
                    },
                    {
                        cols: 5,
                        rows: 5,
                        blocks: [
                            {
                                el: ".paneflow-block-kT4TNX",
                                col: 0,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-DjP6h1",
                                        translateX: "5cqw",
                                        translateY: "2.7cqw",
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
                                el: ".paneflow-block-6Kb5cm",
                                col: 1,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-eQKpH9",
                                col: 2,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-C5BCFh",
                                col: 3,
                                row: 0,
                                widthCols: 2,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-WHOC1v",
                                        translateX: "11.8cqw",
                                        translateY: "2.7cqw",
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
                                el: ".paneflow-block-EAIyt0",
                                col: 0,
                                row: 1,
                                widthCols: 1,
                                heightRows: 4,
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
                                el: ".paneflow-block-Gyi2pd",
                                col: 1,
                                row: 1,
                                widthCols: 4,
                                heightRows: 4,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                        ],
                    },
                    {
                        cols: 5,
                        rows: 5,
                        blocks: [
                            {
                                el: ".paneflow-block-kT4TNX",
                                col: 0,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-DjP6h1",
                                        translateX: "5cqw",
                                        translateY: "2.7cqw",
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
                                el: ".paneflow-block-7nwpPp",
                                col: 1,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-Pv3gqF",
                                col: 2,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-nPCXgm",
                                col: 3,
                                row: 0,
                                widthCols: 2,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-7Ym5J9",
                                        translateX: "8.3cqw",
                                        translateY: "2.7cqw",
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
                                col: 0,
                                row: 1,
                                widthCols: 1,
                                heightRows: 4,
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
                                el: ".paneflow-block-3zKtQF",
                                col: 1,
                                row: 1,
                                widthCols: 4,
                                heightRows: 4,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                        ],
                    },
                    {
                        cols: 5,
                        rows: 5,
                        blocks: [
                            {
                                el: ".paneflow-block-kT4TNX",
                                col: 0,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-DjP6h1",
                                        translateX: "5cqw",
                                        translateY: "2.7cqw",
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
                                el: ".paneflow-block-sEmi2a",
                                col: 1,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-7ctZTz",
                                col: 2,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-WNnhSh",
                                col: 3,
                                row: 0,
                                widthCols: 2,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-2sMEgI",
                                        translateX: "13.4cqw",
                                        translateY: "2.7cqw",
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
                                el: ".paneflow-block-WlzHhC",
                                col: 0,
                                row: 1,
                                widthCols: 1,
                                heightRows: 4,
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
                                el: ".paneflow-block-Yzz1Pp",
                                col: 1,
                                row: 1,
                                widthCols: 4,
                                heightRows: 4,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                        ],
                    },
                    {
                        cols: 5,
                        rows: 5,
                        blocks: [
                            {
                                el: ".paneflow-block-kT4TNX",
                                col: 0,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-DjP6h1",
                                        translateX: "5cqw",
                                        translateY: "2.7cqw",
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
                                el: ".paneflow-block-hDASNF",
                                col: 1,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-asUX9S",
                                col: 2,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-98xsQ1",
                                col: 3,
                                row: 0,
                                widthCols: 2,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-aGyVCR",
                                        translateX: "9.5cqw",
                                        translateY: "2.7cqw",
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
                                el: ".paneflow-block-H8fiJk",
                                col: 0,
                                row: 1,
                                widthCols: 1,
                                heightRows: 4,
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
                                el: ".paneflow-block-3sYUuX",
                                col: 1,
                                row: 1,
                                widthCols: 4,
                                heightRows: 4,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                        ],
                    },
                    {
                        cols: 5,
                        rows: 5,
                        blocks: [
                            {
                                el: ".paneflow-block-kT4TNX",
                                col: 0,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-DjP6h1",
                                        translateX: "5cqw",
                                        translateY: "2.7cqw",
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
                                el: ".paneflow-block-0w40z4",
                                col: 1,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-yFG4v9",
                                col: 2,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-Lvi7kD",
                                col: 3,
                                row: 0,
                                widthCols: 2,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-rIgvyB",
                                        translateX: "11.3cqw",
                                        translateY: "2.7cqw",
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
                                el: ".paneflow-block-Z1PFhE",
                                col: 0,
                                row: 1,
                                widthCols: 1,
                                heightRows: 4,
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
                                el: ".paneflow-block-UIZE0j",
                                col: 1,
                                row: 1,
                                widthCols: 4,
                                heightRows: 4,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                        ],
                    },
                    {
                        cols: 5,
                        rows: 5,
                        blocks: [
                            {
                                el: ".paneflow-block-kT4TNX",
                                col: 0,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-DjP6h1",
                                        translateX: "5cqw",
                                        translateY: "2.7cqw",
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
                                el: ".paneflow-block-F8ILRv",
                                col: 1,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-KJWArV",
                                col: 2,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-6A0Wl0",
                                col: 3,
                                row: 0,
                                widthCols: 2,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-agLTsL",
                                        translateX: "6.2cqw",
                                        translateY: "2.7cqw",
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
                                el: ".paneflow-block-4ICLmf",
                                col: 0,
                                row: 1,
                                widthCols: 1,
                                heightRows: 4,
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
                                el: ".paneflow-block-cS79PD",
                                col: 1,
                                row: 1,
                                widthCols: 4,
                                heightRows: 4,
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
        <div
            ref={handleRef}
            class="paneflow paneflow-blush-ki-adi-mundi-657"
        >
            <div class="paneflow-content">
                <div
                    class="paneflow-block paneflow-block-kxUvOt"
                    onClick={paneFlowOnClick0}
                >
                    <img
                        src="https://cdnm.sanmar.com/imglib/mresjpg/2020/f4/CT103828_black_model_front.jpg"
                        class="paneflow-bg-image paneflow-item-yPc2tt"
                    />
                </div>
                <div
                    class="paneflow-block paneflow-block-WlzHhC"
                    onClick={paneFlowOnClick1}
                >
                    <img
                        src="https://cdnm.sanmar.com/imglib/mresjpg/2021/f12/CSJ503_safetyyellow_model_front.jpg"
                        class="paneflow-bg-image paneflow-item-sGNaYn"
                    />
                </div>
                <div
                    class="paneflow-block paneflow-block-bnscRC"
                    onClick={paneFlowOnClick2}
                >
                    <img
                        src="https://cdnm.sanmar.com/imglib/mresjpg/2024/f9/CSW176_echosteel_model_front.jpg"
                        class="paneflow-bg-image paneflow-item-5XQhrj"
                    />
                    <div class="paneflow-text paneflow-item-3PhC8O">TENNIS</div>
                </div>
                <div
                    class="paneflow-block paneflow-block-H8fiJk"
                    onClick={paneFlowOnClick3}
                >
                    <img
                        src="https://cdnm.sanmar.com/imglib/mresjpg/2021/f5/A706_black_model_front.jpg"
                        class="paneflow-bg-image paneflow-item-6dkPiI"
                    />
                </div>
                <div
                    class="paneflow-block paneflow-block-Z1PFhE"
                    onClick={paneFlowOnClick4}
                >
                    <img
                        src="https://cdnm.sanmar.com/imglib/mresjpg/2021/f2/WW4072_white_model_front.jpg"
                        class="paneflow-bg-image paneflow-item-pB5RXX"
                    />
                </div>
                <div class="paneflow-block paneflow-block-VPh6uV">
                    <div class="paneflow-text paneflow-item-S7VzJy">workwear</div>
                </div>
                <div
                    class="paneflow-block paneflow-block-4ICLmf"
                    onClick={paneFlowOnClick5}
                >
                    <img
                        src="https://cdnm.sanmar.com/imglib/mresjpg/2021/f1/WW4268_black_model_front.jpg"
                        class="paneflow-bg-image paneflow-item-pzJC7P"
                    />
                </div>
                <div
                    class="paneflow-block paneflow-block-EAIyt0"
                    onClick={paneFlowOnClick6}
                >
                    <img
                        src="https://cdnm.sanmar.com/imglib/mresjpg/2015/f23/SP14LONG_black_model_front_042015.jpg"
                        class="paneflow-bg-image paneflow-item-XmK2SJ"
                    />
                </div>
                <div class="paneflow-block paneflow-block-kT4TNX">
                    <div
                        class="paneflow-text paneflow-item-DjP6h1"
                        onClick={paneFlowOnClick7}
                    >
                        back
                    </div>
                </div>
                <div class="paneflow-block paneflow-block-C5BCFh">
                    <div class="paneflow-text paneflow-item-WHOC1v">security</div>
                </div>
                <div class="paneflow-block paneflow-block-eQKpH9"></div>
                <div class="paneflow-block paneflow-block-6Kb5cm"></div>
                <div class="paneflow-block paneflow-block-ON7uoe">
                    <div class="paneflow-text paneflow-item-Ti2FfL">industrial</div>
                </div>
                <div class="paneflow-block paneflow-block-nPCXgm">
                    <div class="paneflow-text paneflow-item-7Ym5J9">contractors</div>
                </div>
                <div class="paneflow-block paneflow-block-Pv3gqF"></div>
                <div class="paneflow-block paneflow-block-7nwpPp"></div>
                <div class="paneflow-block paneflow-block-sEmi2a"></div>
                <div class="paneflow-block paneflow-block-WNnhSh">
                    <div class="paneflow-text paneflow-item-2sMEgI">safety</div>
                </div>
                <div class="paneflow-block paneflow-block-7ctZTz"></div>
                <div class="paneflow-block paneflow-block-hDASNF"></div>
                <div class="paneflow-block paneflow-block-asUX9S"></div>
                <div class="paneflow-block paneflow-block-98xsQ1">
                    <div class="paneflow-text paneflow-item-aGyVCR">hospitality</div>
                </div>
                <div class="paneflow-block paneflow-block-0w40z4"></div>
                <div class="paneflow-block paneflow-block-yFG4v9"></div>
                <div class="paneflow-block paneflow-block-Lvi7kD">
                    <div class="paneflow-text paneflow-item-rIgvyB">lab work</div>
                </div>
                <div class="paneflow-block paneflow-block-F8ILRv"></div>
                <div class="paneflow-block paneflow-block-KJWArV"></div>
                <div class="paneflow-block paneflow-block-6A0Wl0">
                    <div class="paneflow-text paneflow-item-agLTsL">
                        medical scrubs
                    </div>
                </div>
                <div class="paneflow-block paneflow-block-3DL9cY"></div>
                <div class="paneflow-block paneflow-block-ACuDLA"></div>
                <div class="paneflow-block paneflow-block-wWdZfU"></div>
                <div class="paneflow-block paneflow-block-Gyi2pd"></div>
                <div class="paneflow-block paneflow-block-3zKtQF"></div>
                <div class="paneflow-block paneflow-block-Yzz1Pp"></div>
                <div class="paneflow-block paneflow-block-3sYUuX"></div>
                <div class="paneflow-block paneflow-block-UIZE0j"></div>
                <div class="paneflow-block paneflow-block-cS79PD"></div>
            </div>
        </div>
    );
};

export default WorkwearPane;


