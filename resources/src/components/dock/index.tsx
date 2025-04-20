import {Dock} from "~/components/ui/dock";
import {Component, JSXElement} from "solid-js";

const BaseDock: Component<{
    children?: JSXElement;
}> = props => {

    const children = () => props.children;


    return (
        <Dock>
            <>{children()}</>
        </Dock>
    );
}
export {BaseDock};
