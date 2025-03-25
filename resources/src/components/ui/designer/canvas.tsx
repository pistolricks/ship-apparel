import { createEffect, onCleanup } from 'solid-js';
import { useCanvas } from '~/context/CanvasContext';

function Canvas() {
    const { initializeCanvas, disposeCanvas } = useCanvas();
    let canvasRef: HTMLCanvasElement | undefined;

    console.log('Canvas render');

    createEffect(() => {
        if (!canvasRef) return;

        initializeCanvas(canvasRef);
        onCleanup(() => disposeCanvas());
    });

    return <canvas ref={() => canvasRef} width="800" height="400" />;
}

export default Canvas;
