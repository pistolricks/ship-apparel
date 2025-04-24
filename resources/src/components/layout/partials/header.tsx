import {Component} from "solid-js";
import {useLocation} from "@solidjs/router";
import Drawer from "@corvu/drawer";
import Navigation from "~/components/layout/partials/navigation";


const Header: Component<{
    contextId: string;
}> = props => {

    const location = useLocation();
    const contextId = () => props.contextId;

    let path = 'shop'

    const navigation = [
        {name: "Custom Apparel", href: "/custom-apparel"},
        {name: "Work Apparel", href: "/work-apparel"},
        {name: "School Spirit", href: "/school-spirit"},
        {name: "Team Athletics", href: "/team-athletics"},
        {name: "Design Lab", href: "/design-lab"},
        {name: "Popup Shops", href: "/popup-shops"},
    ]

    return (<Navigation contextId={contextId()}/>)
};

export default Header;
