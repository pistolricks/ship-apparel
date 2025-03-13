import {Component} from "solid-js";
import FormLayout from "~/components/form/form-layout";
import {loginUserHandler} from "~/lib/users";
import LoginUserForm from "~/components/modules/users/login-user-form";
import {logo} from "~/app";

type PROPS = {

}

const Login: Component<PROPS> = props => {
    return (
        <FormLayout imageSrc={logo()} action={loginUserHandler}>
            <LoginUserForm />
        </FormLayout>
    );
};

export default Login;
