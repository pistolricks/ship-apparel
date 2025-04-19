import {Component, createEffect, lazy, Show} from "solid-js";
import {RouteSectionProps, useNavigate} from "@solidjs/router";
import {useLayoutContext} from "~/context/layout-provider";

const ResendActivateEmailForm = lazy(() => import( "~/components/module/users/resend-activate-email-form"));
const LoginUserForm = lazy(() => import('~/components/module/users/login-user-form'));
import {FormLayout} from "~/components/form/form-layout";


const Resend: Component<RouteSectionProps> = props => {

    const {currentUser} = useLayoutContext();
    const navigate = useNavigate();

    createEffect(() => {

        if (currentUser?.activated) {
            navigate('/', {replace: true});
        }
    })

    return (
        <FormLayout>
            <Show
                fallback={<LoginUserForm/>}
                when={!currentUser?.name}>
                <Show when={!currentUser?.activated}>
                    <ResendActivateEmailForm/>
                </Show>
            </Show>

        </FormLayout>
    );
};

export default Resend;
