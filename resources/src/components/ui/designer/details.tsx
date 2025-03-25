import { createEffect } from 'solid-js';
import { useCanvas } from '~/context/CanvasContext';

export function Details() {
    const { canvas, obj, updateActiveObject } = useCanvas();

    createEffect(() => {

        console.log('Details render', { canvas,  obj });
    });

    return (
        <div style={{ width: '33%' }}>
            {!obj ? (
                <div>No object selected</div>
            ) : (
                <>
                    Details page ID={obj?.id} | TITLE={obj?.title}
                    <br />
                    Actions:{' '}
                    <button
                        type="button"
                        onClick={() => {
                            updateActiveObject(fabricObj => fabricObj.set({ title: 'NEW TITLE' }));
                        }}
                    >
                        SET TITLE
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            updateActiveObject(fabricObj => fabricObj.set({ left: fabricObj.get('left') + 5 }));
                        }}
                    >
                        SLIDE RIGHT
                    </button>
                    <br />
                    <div>SELECTED OBJ: {JSON.stringify(obj, undefined, 1)}</div>
                </>
            )}
        </div>
    );
}
