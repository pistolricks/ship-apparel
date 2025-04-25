// CSS Variable Types
interface CSSVariables {
    value: string;
    unit?: string;
}

interface TransformProperties {
    translate?: { x?: number; y?: number; z?: number };
    scale?: number;
    rotate?: number;
    origin?: string;
    unit?: string;
}

interface PaneParams {
    cols?: number;
    rows?: number;
}

interface BlockConfiguration {
    position: {
        column: number;
        row: number;
        widthInColumns: number;
        heightInRows: number;
    };
    element: string | HTMLElement;
    transitions?: {
        enterDirection?: string;
        exitDirection?: string;
    };
    styles?: {
        transform?: TransformProperties;
        opacity?: number;
        colors?: {
            text?: string;
            background?: string;
        };
    };
    children?: BlockChildConfig[];
}

interface BlockChildConfig {
    element: string | Element;
    transform?: TransformProperties;
    styles?: {
        opacity?: number;
        dimensions?: {
            width?: string | number;
            height?: string | number;
        };
        colors?: {
            text?: string;
            background?: string;
        };
    };
    parallaxEffect?: number;
}

// Utility functions
function createCSSVariable(value: number | string, unit: string = 'px'): CSSVariables {
    return {
        value: String(value),
        unit
    };
}

function generateTransform(props: TransformProperties): string {
    const transforms: string[] = [];

    if (props.translate) {
        const {x = 0, y = 0, z = 0} = props.translate;
        transforms.push(`translate3d(${x}${props.unit || 'px'},${y}${props.unit || 'px'},${z}${props.unit || 'px'})`);
    }

    if (props.scale !== undefined) {
        transforms.push(`scale(${props.scale})`);
    }

    if (props.rotate !== undefined) {
        transforms.push(`rotate(${props.rotate}deg)`);
    }

    return transforms.join(' ');
}

function applyBlockStyles(element: HTMLElement, config: BlockConfiguration): void {
    if (!config.styles) return;

    const styleObject: Partial<CSSStyleDeclaration> = {};

    if (config.styles.transform) {
        styleObject.transform = generateTransform(config.styles.transform);
    }

    if (config.styles.opacity !== undefined) {
        styleObject.opacity = String(config.styles.opacity);
    }

    if (config.styles.colors) {
        if (config.styles.colors.text) styleObject.color = config.styles.colors.text;
        if (config.styles.colors.background) styleObject.backgroundColor = config.styles.colors.background;
    }

    Object.assign(element.style, styleObject);
}

interface BlockCSSVars {
    '--pf-cols': string;
    '--pf-rows': string;
    '--pf-col': string;
    '--pf-row': string;
    '--pf-width-cols': string;
    '--pf-height-rows': string;
}

function getBlockCSSVars(paneConfig: PaneParams, blockConfig: BlockConfiguration): BlockCSSVars {
    const {column, row, widthInColumns, heightInRows} = blockConfig.position;

    return {
        '--pf-cols': String(paneConfig.cols || 1),
        '--pf-rows': String(paneConfig.rows || 1),
        '--pf-col': String(column),
        '--pf-row': String(row),
        '--pf-width-cols': String(widthInColumns),
        '--pf-height-rows': String(heightInRows)
    };
}