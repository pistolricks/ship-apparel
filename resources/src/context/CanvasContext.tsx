import { createSignal, createContext, createEffect, onCleanup, useContext, JSX } from 'solid-js';

import * as fabric from 'fabric';
import { initializeHistory } from '~/lib/fabric-history';

const FABRIC_CUSTOM_PROPERTIES = ['selectable', 'editable', 'id', 'title'];

// Make sure these properties are (de)serialized
fabric.FabricObject.customProperties = FABRIC_CUSTOM_PROPERTIES;
const originalGetSvgCommons = fabric.FabricObject.prototype.getSvgCommons;
fabric.FabricObject.prototype.getSvgCommons = function () {
    // Save title in SVG
    const title = (this as any).title;
    const extra = title ? ` title="${title}"` : '';
    return originalGetSvgCommons.call(this) + extra;
};

// This is extreme hack to have `text-align` output in SVG
const originalAddPaintOrder = (fabric.FabricObject.prototype as any).addPaintOrder;
(fabric.FabricObject.prototype as any).addPaintOrder = function () {
    const textAlign = (this as any).textAlign;
    const extra = textAlign ? ` text-align="${textAlign}"` : '';

    // This will be inserted inside the `<text ... >` tag.
    return originalAddPaintOrder.call(this) + extra;
};

type ModifyFunction = (_: fabric.FabricObject) => void;

type SerializedObject = fabric.FabricObject & {
    [key: string]: string | number;
};

// Create context with default values
const initialContext = {
    fabric,
    ready: false,
    canvas: {} as fabric.Canvas,
    initializeCanvas: (_: HTMLCanvasElement) => {},
    disposeCanvas: () => {},
    obj: undefined as SerializedObject | undefined,
    updateActiveObject: (() => {}) as (_: ModifyFunction) => void,
    layers: [] as fabric.FabricObject[],
    canUndo: false,
    canRedo: false,
    undo: async () => {},
    redo: async () => {},
    loadSvg: (svgString: string, onSuccess?: () => void) => {},
    canvasToSvg: async () => '',
    canvasToJson: async () => '',
};

// SolidJS context creation
const CanvasContext = createContext(initialContext);

const initializeEvents = ({
                              canvas,
                              setActiveObject,
                              setLayers,
                          }: {
    canvas: fabric.Canvas;
    setActiveObject: (_: SerializedObject | null) => void;
    setLayers: (_: fabric.FabricObject[]) => void;
}) => {
    const handleSelection = async (_?: Partial<fabric.TEvent<fabric.TPointerEvent>>) => {
        const activeObject = canvas.getActiveObject();
        if (!activeObject || activeObject.isType('activeselection')) {
            setActiveObject(null);
            return;
        }
        setActiveObject(activeObject.toDatalessObject(FABRIC_CUSTOM_PROPERTIES));
    };

    const handleObjectChanges = (_?: { target: fabric.FabricObject } | undefined) => {
        const { objects } = canvas.toDatalessJSON(FABRIC_CUSTOM_PROPERTIES);
        setLayers(objects as fabric.FabricObject[]);
    };

    // Add event listeners
    canvas.on({
        'selection:updated': handleSelection,
        'selection:created': handleSelection,
        'selection:cleared': handleSelection,
    });

    canvas.on({
        'object:added': handleObjectChanges,
        'object:modified': handleObjectChanges,
        'object:removed': handleObjectChanges,
        'object:skewing': handleObjectChanges,
    });

    // Call on initialization to set the initial state
    handleSelection();
    handleObjectChanges();
};

export const setTextObjectTitle = (obj: fabric.FabricText, element: Element): fabric.FabricText => {
    const parentNode: Element = element.parentNode as Element; // Raw SVG parent group <g> node
    const title = parentNode?.getAttribute('title') ?? element.getAttribute('title') ?? '';
    console.log('setTextObjectTitle', title);
    obj.set({ title });
    return obj;
};

const loadSvg = async (canvas: fabric.Canvas, svg: string, onSuccess?: () => void) => {
    const { objects, allElements } = await fabric.loadSVGFromString(svg);
    const objectsToRender = objects
        .map((item, index) => {
            console.log('loading', item?.type);
            if (item?.isType('text')) {
                // Assuming this is how the function was supposed to end
                return setTextObjectTitle(item as fabric.FabricText, allElements[index]);
            }
            return item;
        });

    // Rest of the function would go here
    // ...
};

// Provider component implementation in SolidJS
export function CanvasProvider(props: { children: JSX.Element }) {
    const [ready, setReady] = createSignal(false);
    const [canvas, setCanvas] = createSignal({} as fabric.Canvas);
    const [activeObject, setActiveObject] = createSignal<SerializedObject | null>(null);
    const [layers, setLayers] = createSignal<fabric.FabricObject[]>([]);
    const [canUndo, setCanUndo] = createSignal(false);
    const [canRedo, setCanRedo] = createSignal(false);

    // Initialize canvas
    const initializeCanvas = (canvasElement: HTMLCanvasElement) => {
        if (!canvasElement) return;

        const newCanvas = new fabric.Canvas(canvasElement);
        setCanvas(newCanvas);

        const history = initializeHistory({
            canvas: newCanvas,
            setCanUndo,
            setCanRedo,
        });

        // The initializeHistory function doesn't return canUndo/canRedo methods
        // Instead it sets the values through the provided setters and returns undo/redo functions

        // No need for an event listener as the initializeHistory function
        // already calls setCanUndo/setCanRedo internally on history changes

        initializeEvents({
            canvas: newCanvas,
            setActiveObject,
            setLayers,
        });

        setReady(true);
    };

    const disposeCanvas = () => {
        const currentCanvas = canvas();
        if (currentCanvas && currentCanvas.dispose) {
            currentCanvas.dispose();
            setReady(false);
        }
    };

    // Clean up on component unmount
    onCleanup(() => {
        disposeCanvas();
    });

    const updateActiveObject = (modifyFn: ModifyFunction) => {
        const currentCanvas = canvas();
        const obj = currentCanvas.getActiveObject();
        if (!obj) return;

        modifyFn(obj);
        currentCanvas.renderAll();
        setActiveObject(obj.toDatalessObject(FABRIC_CUSTOM_PROPERTIES));
    };

    const canvasToSvg = async () => {
        const currentCanvas = canvas();
        return currentCanvas.toSVG();
    };

    const canvasToJson = async () => {
        const currentCanvas = canvas();
        return JSON.stringify(currentCanvas.toDatalessJSON(FABRIC_CUSTOM_PROPERTIES));
    };

    const loadSvgToCanvas = (svgString: string, onSuccess?: () => void) => {
        const currentCanvas = canvas();
        loadSvg(currentCanvas, svgString, onSuccess);
    };

    const undo = async () => {
        // Implementation for undo functionality
    };

    const redo = async () => {
        // Implementation for redo functionality
    };

    const contextValue: any = {
        fabric,
        ready: ready(),
        canvas: canvas(),
        initializeCanvas,
        disposeCanvas,
        obj: activeObject(),
        updateActiveObject,
        layers: layers(),
        canUndo: canUndo(),
        canRedo: canRedo(),
        undo,
        redo,
        history,
        loadSvg: loadSvgToCanvas,
        canvasToSvg,
        canvasToJson,
    };

    return (
        <CanvasContext.Provider value={contextValue}>
            {props.children}
        </CanvasContext.Provider>
    );
}

// Custom hook to use canvas context
export function useCanvas() {
    return useContext(CanvasContext)!;
}
