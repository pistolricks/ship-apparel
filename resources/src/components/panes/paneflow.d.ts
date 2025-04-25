export interface CSSSelector extends String {
}
export interface EventParameters {
    slideChangeStart?: (paneFlow: PaneFlow, data: {
        direction: 'prev' | 'next';
        currentPaneIndex: number;
        newPaneIndex: number;
    }) => void;
    slideChangeEnd?: (paneFlow: PaneFlow, data: {
        direction: 'prev' | 'next';
        currentPaneIndex: number;
        newPaneIndex: number;
    }) => void;
}
export interface ChildParameters {
    el: Element | HTMLElement | CSSSelector | null;
    id?: string;
    translateX?: number | string;
    translateY?: number | string;
    translateZ?: number | string;
    rotate?: number | string;
    scale?: number | string;
    transformOrigin?: string;
    opacity?: number;
    parallax?: number;
    width?: number | string;
    height?: number | string;
    textColor?: string;
    bgColor?: string;
}
export interface BlockParameters {
    id?: string;
    el: Element | HTMLElement | CSSSelector;
    col: number;
    row: number;
    widthCols: number;
    heightRows: number;
    enterFrom?: 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left' | 'top-left' | 'center';
    exitTo?: 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left' | 'top-left' | 'center';
    children?: ChildParameters[];
}
export interface PaneParameters {
    id?: string;
    cols: number;
    rows: number;
    blocks: BlockParameters[];
    autoplayInternal?: number;
}
export type ColorValue = [r: number, g: number, b: number, a: number];
export interface PaginationParameters {
    enabled?: boolean;
    clickable?: boolean;
    type?: 'bullets' | 'thumbs';
}
export interface AutoplayParameters {
    enabled?: boolean;
    interval?: number;
}
export interface NavigationParameters {
    enabled?: boolean;
}
export interface KeyboardControlParameters {
    enabled?: boolean;
}
export interface PaneFlowParameters {
    el: Element | HTMLElement | CSSSelector | null;
    document?: Document;
    panes: PaneParameters[];
    intro?: boolean;
    blockDelay?: number;
    blockBorderRadius?: number | string;
    transitionDuration?: number;
    gap?: number | string;
    padding?: number | string;
    initialPaneIndex?: number;
    pagination?: PaginationParameters;
    on?: EventParameters;
    autoplay?: AutoplayParameters;
    navigation?: NavigationParameters;
    keyboardControl?: KeyboardControlParameters;
}
//# sourceMappingURL=types.d.ts.map
declare class PaneFlow {
    params: PaneFlowParameters;
    el: HTMLElement | null;
    currentPaneIndex: number;
    keyboardControl: {
        initialized: boolean;
        onKeyDown: (e: KeyboardEvent) => void;
    };
    pagination: {
        el: HTMLElement | null;
        bulletEls: HTMLElement[];
        thumbEls: HTMLElement[];
        onClick: (e: any) => void;
    };
    navigation: {
        prevEl: HTMLElement | null;
        nextEl: HTMLElement | null;
        onClick: (e: any) => void;
    };
    _expectedSlideChangeEndIndexes: number[];
    _autoplayInterval: number | null;
    _transitionEndTimeout: number | null;
    _document: Document;
    constructor(params: PaneFlowParameters);
    emit(event: keyof EventParameters, ...data: any[]): void;
    getBlockEl(el: HTMLElement | CSSSelector | Element): HTMLElement;
    getBlockParamsByEl(paneParams: PaneParameters, blockEl: Element): BlockParameters;
    setBlockCSSVars(paneParams: PaneParameters, blockParamsOrEl: BlockParameters | HTMLElement): void;
    setBlockChildren(paneParams: PaneParameters, blockParamsOrEl: BlockParameters | HTMLElement, { setParallax, stage, direction }?: {
        setParallax?: boolean;
        stage?: string;
        direction?: string;
    }): void;
    getChildParallaxOffset(blockParams: BlockParameters, stage: string, parallax: number, direction: string): number[];
    setBlockOutTransform(paneParams: PaneParameters, blockParams: BlockParameters, position: string): void;
    getBlockDirection(blockParams: BlockParameters, direction: string, stage: string): "top" | "top-right" | "right" | "bottom-right" | "bottom" | "bottom-left" | "left" | "top-left" | "center";
    blockEnter(paneParams: PaneParameters, blockParams: BlockParameters, direction: string): void;
    blockExit(paneParams: PaneParameters, blockParams: BlockParameters, direction: string): void;
    withBlockChildren(blockParamsOrBlockEl: BlockParameters | HTMLElement, cb: (subEl: HTMLElement) => void): void;
    getTransitionEndTargetEl({ blocksToEnter, blocksToChange, blocksToExit, direction, currentPaneParams, newPaneParams, }: {
        blocksToEnter: HTMLElement[];
        blocksToChange: HTMLElement[];
        blocksToExit: HTMLElement[];
        direction: string;
        currentPaneParams: PaneParameters;
        newPaneParams: PaneParameters;
    }): HTMLElement;
    prevPane(): void;
    nextPane(): void;
    setPane(newPaneIndex: number, direction?: string): void;
    updatePagination(): void;
    initPaginationThumbs(): void;
    initPaginationBullets(): void;
    initPagination(): void;
    initNavigation(): void;
    initKeyboardControl(): void;
    startAutoplay(): void;
    stopAutoplay(): void;
    playVideo(blockEl: HTMLElement): void;
    destroy(): void;
    init(): void;
}
export default PaneFlow;
//# sourceMappingURL=paneflow.d.ts.map