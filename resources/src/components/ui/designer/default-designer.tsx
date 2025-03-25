

import { CanvasProvider } from '~/context/CanvasContext';
import  Canvas  from './canvas';
import { Details } from '~/components/ui/designer/details';
import { Objects } from './objects';
import { SerializedObject } from '~/components/ui/designer/serialized-object';
import './style.css'
function DefaultDesigner() {
    return (
        <CanvasProvider>
            <h2>Fabric Test</h2>
            <div className="flex-row">
                <Objects />
                <Canvas />
                <Details />
            </div>
            <SerializedObject />
        </CanvasProvider>
    );
}

export default DefaultDesigner;
