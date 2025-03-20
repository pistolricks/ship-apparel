import {Component} from "solid-js";
import FormLayout from "~/components/form/form-layout";
import {loginUserHandler} from "~/lib/users";
import LoginUserForm from "~/components/module/users/login-user-form";


type PROPS = {

}

const Login: Component<PROPS> = props => {
    return (
        <FormLayout action={loginUserHandler}>
            <LoginUserForm />
        </FormLayout>
    );
};

export default Login;
