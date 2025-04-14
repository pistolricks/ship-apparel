import {Component, createEffect, Match, Switch} from "solid-js";
import ActivateUserForm from '~/components/module/users/activate-user-form';
import {FormLayout} from "~/components/form/form-layout";
import {RouteSectionProps, useNavigate} from "@solidjs/router";
import {useLayoutContext} from "~/context/layout-provider";

const Activate: Component<RouteSectionProps> = props => {
    const navigate = useNavigate();
    const {currentUser} = useLayoutContext();

    createEffect(() => {
        if (currentUser?.activated) {
            navigate('/')
        }
    })

    return (
        <FormLayout>
            <Switch>
                <Match<boolean> when={!currentUser?.activated}>
                    <ActivateUserForm/>
                </Match>
                <Match<boolean> when={!currentUser}>
                    <ActivateUserForm/>
                </Match>
            </Switch>
        </FormLayout>
    );
};

export default Activate;
