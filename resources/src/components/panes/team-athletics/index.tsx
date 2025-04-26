import {Component, onCleanup, onMount} from "solid-js";
import PaneFlow from "../paneflow.mjs";
import "../paneflow.css";
import "./style.css";

const TeamAthleticsPane: Component = () => {
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
        window.open(
            `https://ink-and-thread.com/team-athletics/sports/volleyball`,
            "_self",
        );
    };

    const paneFlowOnClick8 = (e: MouseEvent) => {
        e.stopPropagation();
        paneFlowInstanceRef?.setPane(0);
    };


    const paneFlowOnClick9 = (e: MouseEvent) => {
        e.stopPropagation();
        window.open(
            `https://ink-and-thread.com/team-athletics/sports/basketball`,
            "_self",
        );
    };

    const paneFlowOnClick10 = (e: MouseEvent) => {
        e.stopPropagation();
        window.open(
            `https://ink-and-thread.com/team-athletics/sports/cheer`,
            "_self",
        );
    };

    const paneFlowOnClick11 = (e: MouseEvent) => {
        e.stopPropagation();
        window.open(
            `https://ink-and-thread.com/team-athletics/sports/tennis`,
            "_self",
        );
    };

    const paneFlowOnClick12 = (e: MouseEvent) => {
        e.stopPropagation();
        window.open(
            `https://ink-and-thread.com/team-athletics/sports/softball`,
            "_self",
        );
    };

    const paneFlowOnClick13 = (e: MouseEvent) => {
        e.stopPropagation();
        window.open(
            `https://ink-and-thread.com/team-athletics/sports/football`,
            "_self",
        );
    };

    const paneFlowOnClick14 = (e: MouseEvent) => {
        e.stopPropagation();
        window.open(
            `https://ink-and-thread.com/team-athletics/sports/baseball`,
            "_self",
        );
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
                        rows: 2,
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
                                        translateX: "22.6cqw",
                                        translateY: "11.8cqw",
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
                                heightRows: 1,
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
                                heightRows: 1,
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
                                    {
                                        el: ".paneflow-item-axIWfF",
                                        translateX: "3.0000000000cqw",
                                        translateY: "50cqw",
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
                                heightRows: 1,
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
                                    {
                                        el: ".paneflow-item-ekUfR1",
                                        translateX: "3cqw",
                                        translateY: "50cqw",
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
                                el: ".paneflow-block-bnscRC",
                                col: 3,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
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
                                heightRows: 1,
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
                                    {
                                        el: ".paneflow-item-3MA3pp",
                                        translateX: "3cqw",
                                        translateY: "50cqw",
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
                                heightRows: 1,
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
                                    {
                                        el: ".paneflow-item-HdtXDZ",
                                        translateX: "17.7cqw",
                                        translateY: "50cqw",
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
                                heightRows: 1,
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
                        cols: 5,
                        rows: 3,
                        blocks: [
                            {
                                el: ".paneflow-block-EAIyt0",
                                col: 0,
                                row: 0,
                                widthCols: 2,
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
                                el: ".paneflow-block-r0kXoA",
                                col: 2,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-T06xhD",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 0.84,
                                        parallax: 0,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-hcJhTw",
                                col: 3,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-lG1HlN",
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
                                el: ".paneflow-block-sOrwiw",
                                col: 4,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-do4wrh",
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
                                el: ".paneflow-block-UO4hBY",
                                col: 2,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-FNpLlt",
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
                                el: ".paneflow-block-UJFvnu",
                                col: 3,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-AnVB5B",
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
                                el: ".paneflow-block-7xl0Pl",
                                col: 4,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-jti14Z",
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
                                el: ".paneflow-block-NDhgmR",
                                col: 0,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-SIQYke",
                                        translateX: "5cqw",
                                        translateY: "7cqw",
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
                                el: ".paneflow-block-TxjpSx",
                                col: 1,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-LB7rGi",
                                col: 2,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-2JZxye",
                                col: 3,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-4WKVIf",
                                        translateX: "9.2000000000cqw",
                                        translateY: "4.5000000000cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1.71,
                                        transformOrigin: "center",
                                        opacity: 1,
                                        parallax: 0,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-JZhdVY",
                                col: 4,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-nGxgL3",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 1,
                                        parallax: 0,
                                    },
                                    {
                                        el: ".paneflow-item-6luePw",
                                        translateX: "-10.2000000000cqw",
                                        translateY: "4.5000000000cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1.71,
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
                        cols: 5,
                        rows: 3,
                        blocks: [
                            {
                                el: ".paneflow-block-kxUvOt",
                                col: 0,
                                row: 0,
                                widthCols: 2,
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
                                    {
                                        el: ".paneflow-item-axIWfF",
                                        translateX: "3.0000000000cqw",
                                        translateY: "47cqw",
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
                                el: ".paneflow-block-r0kXoA",
                                col: 2,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-T06xhD",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 0.84,
                                        parallax: 0,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-hcJhTw",
                                col: 3,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-lG1HlN",
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
                                el: ".paneflow-block-sOrwiw",
                                col: 4,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-do4wrh",
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
                                el: ".paneflow-block-UO4hBY",
                                col: 2,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-FNpLlt",
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
                                el: ".paneflow-block-UJFvnu",
                                col: 3,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-AnVB5B",
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
                                el: ".paneflow-block-7xl0Pl",
                                col: 4,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-jti14Z",
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
                                el: ".paneflow-block-NDhgmR",
                                col: 0,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-SIQYke",
                                        translateX: "5cqw",
                                        translateY: "7cqw",
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
                                el: ".paneflow-block-TxjpSx",
                                col: 1,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-LB7rGi",
                                col: 2,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-LTg6pY",
                                col: 3,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-WOPbVl",
                                        translateX: "2.3000000000cqw",
                                        translateY: "2.3cqw",
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
                                el: ".paneflow-block-kmhxBc",
                                col: 4,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-cPRLEw",
                                        translateX: "-17.7000000000cqw",
                                        translateY: "2.3000000000cqw",
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
                        cols: 5,
                        rows: 3,
                        blocks: [
                            {
                                el: ".paneflow-block-WlzHhC",
                                col: 0,
                                row: 0,
                                widthCols: 2,
                                heightRows: 2,
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
                                    {
                                        el: ".paneflow-item-ekUfR1",
                                        translateX: "2.8000000000cqw",
                                        translateY: "27.5000000000cqw",
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
                                el: ".paneflow-block-r0kXoA",
                                col: 2,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-T06xhD",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 0.84,
                                        parallax: 0,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-hcJhTw",
                                col: 3,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-lG1HlN",
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
                                el: ".paneflow-block-sOrwiw",
                                col: 4,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-do4wrh",
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
                                el: ".paneflow-block-UO4hBY",
                                col: 2,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-FNpLlt",
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
                                el: ".paneflow-block-UJFvnu",
                                col: 3,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-AnVB5B",
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
                                el: ".paneflow-block-7xl0Pl",
                                col: 4,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-jti14Z",
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
                                el: ".paneflow-block-NDhgmR",
                                col: 0,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-SIQYke",
                                        translateX: "5cqw",
                                        translateY: "7cqw",
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
                                el: ".paneflow-block-TxjpSx",
                                col: 1,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-LB7rGi",
                                col: 2,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-DAycyM",
                                col: 3,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-ctMFXE",
                                col: 4,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-qoFSR1",
                                        translateX: "2cqw",
                                        translateY: "2.3cqw",
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
                        cols: 5,
                        rows: 3,
                        blocks: [
                            {
                                el: ".paneflow-block-bnscRC",
                                col: 0,
                                row: 0,
                                widthCols: 2,
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
                                el: ".paneflow-block-r0kXoA",
                                col: 2,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-T06xhD",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 0.84,
                                        parallax: 0,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-hcJhTw",
                                col: 3,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-lG1HlN",
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
                                el: ".paneflow-block-sOrwiw",
                                col: 4,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-do4wrh",
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
                                el: ".paneflow-block-UO4hBY",
                                col: 2,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-FNpLlt",
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
                                el: ".paneflow-block-UJFvnu",
                                col: 3,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-AnVB5B",
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
                                el: ".paneflow-block-7xl0Pl",
                                col: 4,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-jti14Z",
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
                                el: ".paneflow-block-NDhgmR",
                                col: 0,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-SIQYke",
                                        translateX: "5cqw",
                                        translateY: "7cqw",
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
                                el: ".paneflow-block-TxjpSx",
                                col: 1,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-LB7rGi",
                                col: 2,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-zrX4uv",
                                col: 3,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-7Zdtcf",
                                col: 4,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-v3Gnj1",
                                        translateX: "1.3cqw",
                                        translateY: "2.3cqw",
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
                        cols: 5,
                        rows: 3,
                        blocks: [
                            {
                                el: ".paneflow-block-H8fiJk",
                                col: 0,
                                row: 0,
                                widthCols: 2,
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
                                    {
                                        el: ".paneflow-item-3MA3pp",
                                        translateX: "3cqw",
                                        translateY: "50cqw",
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
                                el: ".paneflow-block-r0kXoA",
                                col: 2,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-T06xhD",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 0.84,
                                        parallax: 0,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-hcJhTw",
                                col: 3,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-lG1HlN",
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
                                el: ".paneflow-block-sOrwiw",
                                col: 4,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-do4wrh",
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
                                el: ".paneflow-block-UO4hBY",
                                col: 2,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-FNpLlt",
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
                                el: ".paneflow-block-UJFvnu",
                                col: 3,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-AnVB5B",
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
                                el: ".paneflow-block-7xl0Pl",
                                col: 4,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-jti14Z",
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
                                el: ".paneflow-block-NDhgmR",
                                col: 0,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-SIQYke",
                                        translateX: "5cqw",
                                        translateY: "7cqw",
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
                                el: ".paneflow-block-TxjpSx",
                                col: 1,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-LB7rGi",
                                col: 2,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-l5l3gh",
                                col: 3,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-dUgwsl",
                                        translateX: "4.3000000000cqw",
                                        translateY: "2.7000000000cqw",
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
                                el: ".paneflow-block-DUDRK8",
                                col: 4,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-LNqoNo",
                                        translateX: "-15.2000000000cqw",
                                        translateY: "2.7000000000cqw",
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
                        cols: 5,
                        rows: 3,
                        blocks: [
                            {
                                el: ".paneflow-block-Z1PFhE",
                                col: 0,
                                row: 0,
                                widthCols: 2,
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
                                    {
                                        el: ".paneflow-item-HdtXDZ",
                                        translateX: "17.7cqw",
                                        translateY: "50cqw",
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
                                el: ".paneflow-block-r0kXoA",
                                col: 2,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-T06xhD",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 0.84,
                                        parallax: 0,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-hcJhTw",
                                col: 3,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-lG1HlN",
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
                                el: ".paneflow-block-sOrwiw",
                                col: 4,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-do4wrh",
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
                                el: ".paneflow-block-UO4hBY",
                                col: 2,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-FNpLlt",
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
                                el: ".paneflow-block-UJFvnu",
                                col: 3,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-AnVB5B",
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
                                el: ".paneflow-block-7xl0Pl",
                                col: 4,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-jti14Z",
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
                                el: ".paneflow-block-NDhgmR",
                                col: 0,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-SIQYke",
                                        translateX: "5cqw",
                                        translateY: "7cqw",
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
                                el: ".paneflow-block-TxjpSx",
                                col: 1,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-LB7rGi",
                                col: 2,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-vGluDt",
                                col: 3,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-LwxSdv",
                                        translateX: "6.3000000000cqw",
                                        translateY: "2.7000000000cqw",
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
                                el: ".paneflow-block-YBjRke",
                                col: 4,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-uR3b9Q",
                                        translateX: "-12.7000000000cqw",
                                        translateY: "2.7000000000cqw",
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
                        cols: 5,
                        rows: 3,
                        blocks: [
                            {
                                el: ".paneflow-block-4ICLmf",
                                col: 0,
                                row: 0,
                                widthCols: 2,
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
                                el: ".paneflow-block-r0kXoA",
                                col: 2,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-T06xhD",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 0.84,
                                        parallax: 0,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-hcJhTw",
                                col: 3,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-lG1HlN",
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
                                el: ".paneflow-block-sOrwiw",
                                col: 4,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-do4wrh",
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
                                el: ".paneflow-block-UO4hBY",
                                col: 2,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-FNpLlt",
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
                                el: ".paneflow-block-UJFvnu",
                                col: 3,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-AnVB5B",
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
                                el: ".paneflow-block-7xl0Pl",
                                col: 4,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-jti14Z",
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
                                el: ".paneflow-block-NDhgmR",
                                col: 0,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-SIQYke",
                                        translateX: "5cqw",
                                        translateY: "7cqw",
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
                                el: ".paneflow-block-TxjpSx",
                                col: 1,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-LB7rGi",
                                col: 2,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-f4nPJ6",
                                col: 3,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-rWkuvq",
                                        translateX: "2.3000000000cqw",
                                        translateY: "2.7000000000cqw",
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
                                el: ".paneflow-block-wyrldH",
                                col: 4,
                                row: 2,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-jkZLQZ",
                                        translateX: "-14.7000000000cqw",
                                        translateY: "2.7000000000cqw",
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
                        cols: 4,
                        rows: 2,
                        blocks: [
                            {
                                el: ".paneflow-block-kxUvOt",
                                col: 0,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
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
                                    {
                                        el: ".paneflow-item-axIWfF",
                                        translateX: "-1.2000000000cqw",
                                        translateY: "21.1000000000cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 0.5,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-bnscRC",
                                col: 1,
                                row: 0,
                                widthCols: 2,
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
                                        translateX: "28.0000000000cqw",
                                        translateY: "2.1000000000cqw",
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
                                el: ".paneflow-block-WlzHhC",
                                col: 0,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
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
                                    {
                                        el: ".paneflow-item-ekUfR1",
                                        translateX: "-2.5000000000cqw",
                                        translateY: "14.3000000000cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 0.5,
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
                        rows: 2,
                        blocks: [
                            {
                                el: ".paneflow-block-kxUvOt",
                                col: 0,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
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
                                    {
                                        el: ".paneflow-item-axIWfF",
                                        translateX: "-0.7000000000cqw",
                                        translateY: "21.4000000000cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 0.5,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-bnscRC",
                                col: 1,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
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
                                        translateX: "9.2000000000cqw",
                                        translateY: "21.1000000000cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 0.5,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-H8fiJk",
                                col: 2,
                                row: 0,
                                widthCols: 2,
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
                                    {
                                        el: ".paneflow-item-3MA3pp",
                                        translateX: "3.0000000000cqw",
                                        translateY: "47.0000000000cqw",
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
                                el: ".paneflow-block-WlzHhC",
                                col: 0,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
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
                                    {
                                        el: ".paneflow-item-ekUfR1",
                                        translateX: "-2.8000000000cqw",
                                        translateY: "-0.1000000000cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 0.5,
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
                        rows: 2,
                        blocks: [
                            {
                                el: ".paneflow-block-kxUvOt",
                                col: 0,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
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
                                    {
                                        el: ".paneflow-item-axIWfF",
                                        translateX: "-3.9cqw",
                                        translateY: "22.4cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 0.5,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-bnscRC",
                                col: 1,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
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
                                        translateX: "2.8cqw",
                                        translateY: "22.4cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 0.5,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-Z1PFhE",
                                col: 2,
                                row: 0,
                                widthCols: 2,
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
                                    {
                                        el: ".paneflow-item-HdtXDZ",
                                        translateX: "17.7000000000cqw",
                                        translateY: "47.0000000000cqw",
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
                                col: 0,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
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
                                    {
                                        el: ".paneflow-item-ekUfR1",
                                        translateX: "3.6cqw",
                                        translateY: "22.4cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 0.5,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-H8fiJk",
                                col: 1,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
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
                                    {
                                        el: ".paneflow-item-3MA3pp",
                                        translateX: "-0.6cqw",
                                        translateY: "22.4cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 0.5,
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
                        cols: 4,
                        rows: 2,
                        blocks: [
                            {
                                el: ".paneflow-block-kxUvOt",
                                col: 0,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
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
                                    {
                                        el: ".paneflow-item-axIWfF",
                                        translateX: "-3.9cqw",
                                        translateY: "22.4cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 0.5,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-bnscRC",
                                col: 1,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
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
                                        translateX: "2.8cqw",
                                        translateY: "22.4cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 0.5,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-Z1PFhE",
                                col: 2,
                                row: 0,
                                widthCols: 1,
                                heightRows: 1,
                                children: [
                                    {
                                        el: ".paneflow-item-pB5RXX",
                                        translateX: 0,
                                        translateY: 0,
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1.05,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                    {
                                        el: ".paneflow-item-HdtXDZ",
                                        translateX: "17.7000000000cqw",
                                        translateY: "47.0000000000cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 1,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "top-left",
                            },
                            {
                                el: ".paneflow-block-WlzHhC",
                                col: 0,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
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
                                    {
                                        el: ".paneflow-item-ekUfR1",
                                        translateX: "3.6cqw",
                                        translateY: "22.4cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 0.5,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                            {
                                el: ".paneflow-block-H8fiJk",
                                col: 1,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
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
                                    {
                                        el: ".paneflow-item-3MA3pp",
                                        translateX: "-0.6cqw",
                                        translateY: "22.4cqw",
                                        translateZ: 0,
                                        rotate: 0,
                                        scale: 0.5,
                                        transformOrigin: "center",
                                        opacity: 1,
                                    },
                                ],
                                enterFrom: "right",
                                exitTo: "bottom",
                            },
                            {
                                el: ".paneflow-block-KokXrP",
                                col: 2,
                                row: 1,
                                widthCols: 1,
                                heightRows: 1,
                                children: [],
                                enterFrom: "right",
                                exitTo: "left",
                            },
                        ],
                    },
                    {cols: 4, rows: 2, blocks: []},
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
                        src="http://ink-and-thread.com/storage/assets/TEAM UNIFORMS/BasketBallPlayer.jpg"
                        class="paneflow-bg-image paneflow-item-yPc2tt"
                    />
                    <div class="paneflow-text paneflow-item-axIWfF">
                        BASKETBALL
                        <br/>
                    </div>
                </div>
                <div
                    class="paneflow-block paneflow-block-WlzHhC"
                    onClick={paneFlowOnClick1}
                >
                    <img
                        src="http://ink-and-thread.com/storage/assets/TEAM UNIFORMS/_229772_229773_6702_6004_silo1.jpg"
                        class="paneflow-bg-image paneflow-item-sGNaYn"
                    />
                    <div class="paneflow-text paneflow-item-ekUfR1">CHEER</div>
                </div>
                <div
                    class="paneflow-block paneflow-block-bnscRC"
                    onClick={paneFlowOnClick2}
                >
                    <img
                        src="http://ink-and-thread.com/storage/assets/TEAM UNIFORMS/TennisPlayer.jpg"
                        class="paneflow-bg-image paneflow-item-5XQhrj"
                    />
                    <div class="paneflow-text paneflow-item-3PhC8O">TENNIS</div>
                </div>
                <div
                    class="paneflow-block paneflow-block-H8fiJk"
                    onClick={paneFlowOnClick3}
                >
                    <img
                        src="http://ink-and-thread.com/storage/assets/TEAM UNIFORMS/_1567_1340_silo3.jpg"
                        class="paneflow-bg-image paneflow-item-6dkPiI"
                    />
                    <div class="paneflow-text paneflow-item-3MA3pp">SOFTBALL</div>
                </div>
                <div
                    class="paneflow-block paneflow-block-Z1PFhE"
                    onClick={paneFlowOnClick4}
                >
                    <img
                        src="http://ink-and-thread.com/storage/assets/TEAM UNIFORMS/_9580_silo1.jpg"
                        class="paneflow-bg-image paneflow-item-pB5RXX"
                    />
                    <div class="paneflow-text paneflow-item-HdtXDZ">
                        FOOTBALL
                        <br/>
                    </div>
                </div>
                <div class="paneflow-block paneflow-block-VPh6uV">
                    <div class="paneflow-text paneflow-item-S7VzJy">
                        SELECT A SPORT
                    </div>
                </div>
                <div
                    class="paneflow-block paneflow-block-4ICLmf"
                    onClick={paneFlowOnClick5}
                >
                    <img
                        src="http://ink-and-thread.com/storage/assets/TEAM UNIFORMS/_221025_silo2.jpg"
                        class="paneflow-bg-image paneflow-item-pzJC7P"
                    />
                </div>
                <div
                    class="paneflow-block paneflow-block-EAIyt0"
                    onClick={paneFlowOnClick6}
                >
                    <img
                        src="http://ink-and-thread.com/storage/assets/TEAM UNIFORMS/_342202_silo4.jpg"
                        class="paneflow-bg-image paneflow-item-XmK2SJ"
                    />
                </div>
                <div class="paneflow-block paneflow-block-KokXrP"></div>
                <div class="paneflow-block paneflow-block-r0kXoA">
                    <img
                        src="https://static.augustasportswear.com/product/1661_098.jpg"
                        class="paneflow-bg-image paneflow-item-T06xhD"
                    />
                </div>
                <div class="paneflow-block paneflow-block-hcJhTw">
                    <img
                        src="https://static.augustasportswear.com/product/1661_280.jpg"
                        class="paneflow-bg-image paneflow-item-lG1HlN"
                    />
                </div>
                <div class="paneflow-block paneflow-block-sOrwiw">
                    <img
                        src="https://static.augustasportswear.com/product/1661_321.jpg"
                        class="paneflow-bg-image paneflow-item-do4wrh"
                    />
                </div>
                <div class="paneflow-block paneflow-block-UO4hBY">
                    <img
                        src="https://static.augustasportswear.com/product/1557_110.jpg"
                        class="paneflow-bg-image paneflow-item-FNpLlt"
                    />
                </div>
                <div class="paneflow-block paneflow-block-UJFvnu">
                    <img
                        src="https://static.augustasportswear.com/product/1557_690.jpg"
                        class="paneflow-bg-image paneflow-item-AnVB5B"
                    />
                </div>
                <div
                    class="paneflow-block paneflow-block-2JZxye"
                    onClick={paneFlowOnClick7}
                >
                    <div class="paneflow-text paneflow-item-4WKVIf">
                        SHOP
                        <br/>
                        VOLLEYBALL
                    </div>
                </div>
                <div class="paneflow-block paneflow-block-7xl0Pl">
                    <img
                        src="https://static.augustasportswear.com/product/1557_671.jpg"
                        class="paneflow-bg-image paneflow-item-jti14Z"
                    />
                </div>
                <div
                    class="paneflow-block paneflow-block-NDhgmR"
                    onClick={paneFlowOnClick8}
                >
                    <div class="paneflow-text paneflow-item-SIQYke">BACK</div>
                </div>
                <div class="paneflow-block paneflow-block-TxjpSx"></div>
                <div class="paneflow-block paneflow-block-LB7rGi"></div>
                <div class="paneflow-block paneflow-block-JZhdVY"
                     onClick={paneFlowOnClick7}
                >
                    <div class="paneflow-text paneflow-item-nGxgL3">
                        <br/>
                    </div>
                    <div class="paneflow-text paneflow-item-6luePw">
                        SHOP
                        <br/>
                        VOLLEYBALL
                    </div>
                </div>
                <div class="paneflow-block paneflow-block-LTg6pY"
                     onClick={paneFlowOnClick9}
                >
                    <div class="paneflow-text paneflow-item-WOPbVl">
                        SHOP
                        <br/>
                        BASKETBALL
                    </div>
                </div>
                <div class="paneflow-block paneflow-block-kmhxBc"
                     onClick={paneFlowOnClick10}
                >
                    <div class="paneflow-text paneflow-item-cPRLEw">
                        SHOP
                        <br/>
                        BASKETBALL
                    </div>
                </div>
                <div class="paneflow-block paneflow-block-ctMFXEa"
                     onClick={paneFlowOnClick11}
                >
                    <div class="paneflow-text paneflow-item-qoFSR1">
                        SHOP
                        <br/>
                        CHEER
                    </div>
                </div>
                <div class="paneflow-block paneflow-block-f4nPJ6"
                     onClick={paneFlowOnClick14}
                >
                    <div class="paneflow-text paneflow-item-rWkuvq">
                        SHOP
                        <br/>
                        BASEBALL
                    </div>
                </div>
                <div class="paneflow-block paneflow-block-wyrldH"
                     onClick={paneFlowOnClick14}
                >
                    <div class="paneflow-text paneflow-item-jkZLQZ">
                        SHOP
                        <br/>
                        BASBALL
                    </div>
                </div>
                <div class="paneflow-block paneflow-block-vGluDt"
                     onClick={paneFlowOnClick13}
                >
                    <div class="paneflow-text paneflow-item-LwxSdv">
                        SHOP
                        <br/>
                        FOOTBALL
                    </div>
                </div>
                <div class="paneflow-block paneflow-block-YBjRke"
                     onClick={paneFlowOnClick13}
                >
                    <div class="paneflow-text paneflow-item-uR3b9Q">
                        SHOP
                        <br/>
                        FOOTBALL
                    </div>
                </div>
                <div class="paneflow-block paneflow-block-l5l3gh"
                     onClick={paneFlowOnClick12}
                >
                    <div class="paneflow-text paneflow-item-dUgwsl">
                        SHOP
                        <br/>
                        SOFTBALL
                    </div>
                </div>
                <div class="paneflow-block paneflow-block-DUDRK8"
                     onClick={paneFlowOnClick12}
                >
                    <div class="paneflow-text paneflow-item-LNqoNo">
                        SHOP
                        <br/>
                        SOFTBALL
                    </div>
                </div>
                <div class="paneflow-block paneflow-block-zrX4uv"></div>
                <div class="paneflow-block paneflow-block-7Zdtcf"
                     onClick={paneFlowOnClick11}
                >
                    <div class="paneflow-text paneflow-item-v3Gnj1">
                        SHOP
                        <br/>
                        TENNIS
                    </div>
                </div>
                <div class="paneflow-block paneflow-block-DAycyM"></div>
            </div>
        </div>
    );
};

export default TeamAthleticsPane;


