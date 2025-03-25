import { createSignal } from 'solid-js';
import { useCanvas } from '~/context/CanvasContext';

export function SerializedObject() {
    const [rawdata, setRawdata] = createSignal('');
    const { canvasToSvg, canvasToJson } = useCanvas();
    console.log('SerializedObject render');
    return (
        <div style={{ padding: '12px' }}>
            <button
                type="button"
                onClick={async () => {
                    const data = await canvasToSvg();
                    setRawdata(data);
                }}
            >
                TO SVG
            </button>
            <button
                type="button"
                onClick={async () => {
                    const data = await canvasToJson();
                    setRawdata(data);
                }}
            >
                TO JSON
            </button>
            <br />
            <pre>{rawdata()}</pre>
        </div>
    );
}
