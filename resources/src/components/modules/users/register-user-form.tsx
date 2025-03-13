import {Component, createEffect, createMemo, Show} from "solid-js";
import {useSubmission} from "@solidjs/router";
import {registerUserHandler} from "~/lib/users";
import {TextField, TextFieldErrorMessage, TextFieldInput} from "~/components/ui/field/text-field";
import {Button} from "~/components/ui/button";
import {showToast} from "~/components/ui/toast";
import {IconMapPin} from "~/components/svg";


type PROPS = {}

const RegisterUserForm: Component<PROPS> = props => {

    return (
        <>
            <form class={'space-y-4'} action={registerUserHandler} method="post">
                <TextField>
                    <TextFieldInput class={'capitalize'} type="text" required name="firstName"
                                    placeholder="First Name"/>
                </TextField>
                <TextField>
                    <TextFieldInput class={'capitalize'} type="text" required name="lastName" placeholder="Last Name"/>
                </TextField>
                <TextField>
                    <TextFieldInput class={'lowercase'} type="email" required name="email" placeholder="email"/>
                </TextField>
                <TextField>
                    <TextFieldInput type="password" autocomplete={'none'} required name="password"
                                    placeholder="********"/>
                </TextField>
                <div class={'items-center flex flex-row-reverse space-x-2 space-x-reverse'}>
                    <Button as={"button"} variant={'default'} type={"submit"}>Register</Button>
                    <Button
                        as={"A"}
                        href={'/'}
                        variant={'secondary'}
                        size={"icon"}
                        type={"button"}
                    >
                        <IconMapPin/>
                    </Button>
                </div>
            </form>


        </>
    );
};

export default RegisterUserForm;
