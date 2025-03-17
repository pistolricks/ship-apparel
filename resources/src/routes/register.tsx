import {Component, createEffect, lazy} from "solid-js";
import {RouteSectionProps, useNavigate} from "@solidjs/router";
import {useLayoutContext} from "~/context/layout-provider";
import {registerUserHandler} from "~/lib/users";

const RegisterUserForm = lazy(() => import('~/components/module/users/register-user-form'));
const FormLayout = lazy(() => import("~/components/form/form-layout"));

type PROPS = {}

const Register: Component<RouteSectionProps> = props => {

    return (
        <FormLayout action={registerUserHandler} title={'Register'}>
            <RegisterUserForm/>
        </FormLayout>
    );
};

export default Register;
