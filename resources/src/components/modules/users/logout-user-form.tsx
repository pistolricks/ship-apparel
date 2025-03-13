import {Component} from "solid-js";
import {logoutUserHandler} from "~/lib/users";
import {Button} from "../../ui/button";
import Drawer from "@corvu/drawer";


type PROPS = {}

const LogoutUserForm: Component<PROPS> = props => {

    return (
        <>
            <form class={''} action={logoutUserHandler} method="post">
                <Drawer.Trigger contextId={'sd1'} as={"div"}>
                    <Button as={"button"} variant={"link"} size={"sm"} type={"submit"}>LOGOUT</Button>
                </Drawer.Trigger>
            </form>
        </>
    );
};

export default LogoutUserForm;
