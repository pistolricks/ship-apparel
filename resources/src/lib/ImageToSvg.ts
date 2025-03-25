import {svgToTinyDataUri} from "../dataUrl";

import {ImageTracer}          from "../imageTracer";
import {createSignal, Setter} from "solid-js";
import {optionPresets}        from "../../view/resources/svgTracer.data.ts";
import axios                  from "axios";
import {PutObjectCommand}     from "@aws-sdk/client-s3";
import {v4 as uuidV4}                     from "uuid";
import useUploadContent, {handleResponse} from "../../components/media/UploadContent.ts";


export async function imageToSvg(
    authorized_id: string,
    srcContentType: string,
    name: string,
    src: string,
    content_type: string,
    preset: string,
    setIsLoading: Setter<boolean>,
    setShowLightBox: Setter<boolean>,
    setSelected: Setter<string | null>,
    setOpen: Setter<boolean>,
    accountId: string,
    featureId?: string,
) {

    const ImageTrace = new ImageTracer();
    const [getPresets] = createSignal<any>(optionPresets);
    const [getPreset, setPreset] = createSignal<any>(getPresets()[preset] ?? optionPresets.default);

    let response = await fetch(src);
    let data = await response.blob();
    let metadata = {
        type: content_type
    };

    let file = new File([data], `${name}.${srcContentType}`, metadata);
    let reader = new FileReader();
    reader.onloadend = async function () {
        ImageTrace.loadImage(
            reader.result,
            async function (canvas: any) {
                const imageT = await ImageTrace.getImgdata(canvas);
                const svgStr = ImageTrace.imagedataToSVG(imageT, getPreset());
                const dataUri = svgToTinyDataUri(svgStr);

                let uuid = uuidV4();

                let res = await axios.post('/api/contents', {
                    id: uuid,
                    uuid: uuid,
                    key: `tmp/${uuid}`,
                    Bucket: `ollivr-${accountId}`,
                    src: dataUri,
                    name: name,
                    label: name,
                    content_type: 'image/svg+xml',
                    feature_id: featureId,
                    authorized_id: authorized_id,
                    model_type: 'Content'
                });

                let returnData = await handleResponse(res, setIsLoading, setShowLightBox);

                // console.log('imageData', dataUri);
            }
        );
    }
    reader.onerror = function () {
        alert('There was an error reading the file!');
    }
    reader.readAsDataURL(file);
}


