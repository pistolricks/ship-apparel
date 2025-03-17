import {Component, lazy} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
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
