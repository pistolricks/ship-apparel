import {Component, lazy} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import {registerUserHandler} from "~/lib/users";
import {FormLayout} from "~/components/form/form-layout";
import {RegisterUserForm} from "~/components/module/users/register-user-form";


type PROPS = {}

const Register: Component<RouteSectionProps> = props => {

    return (
        <FormLayout action={registerUserHandler} imageSrc={"/logo.png"} title={'Create an Account'}>
            <RegisterUserForm/>
        </FormLayout>
    );
};

export default Register;
