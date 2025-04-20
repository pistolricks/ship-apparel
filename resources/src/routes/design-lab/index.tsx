import {Component} from "solid-js";
import ShirtDecorator from "~/components/shirt-decorator";

type PROPS = {

}

const DesignLab: Component<PROPS> = props => {

    return (
        <div>
            <ShirtDecorator/>
        </div>
    );
};

export default DesignLab;
