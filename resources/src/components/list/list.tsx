import {Accessor, Component, Index, JSX} from "solid-js";
import {MenuItemType} from "~/lib/types";

type PROPS = {
    list?: any[]
    children: (item: Accessor<any>, index: number) => JSX.Element;
}

const List: Component<PROPS> = props => {
    const list = () => props.list;
    return (
        <Index each={list()}>
            {props.children}
        </Index>
    );
};

export default List;
