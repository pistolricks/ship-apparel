import {Component} from "solid-js";
import {registerUserHandler} from "~/lib/users";
import {TextField, TextFieldInput} from "~/components/ui/field/text-field";
import {Button} from "~/components/ui/button";
import {IconMapPin} from "~/components/svg";
import {A} from "@solidjs/router";


type PROPS = {}

const RegisterUserForm: Component<PROPS> = props => {

    return (
        <>
            <form class={'space-y-4'} action={registerUserHandler} method="post">
                <TextField>
                    <TextFieldInput
                        required
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        class={'capitalize'}
                    />
                </TextField>
                <TextField>
                    <TextFieldInput
                        required
                        name="email"
                        type="email"
                        placeholder="Email"
                        class={'lowercase'}
                    />
                </TextField>
                <TextField>
                    <TextFieldInput
                        required
                        name="password"
                        type="password"
                        placeholder="********"
                        autocomplete={'none'}
                    />
                </TextField>
                <TextField>
                    <TextFieldInput
                        required
                        name="password_confirmation"
                        type="password"
                        placeholder="Confirm Password"
                        class={'capitalize'}
                    />
                </TextField>
                <div class={'items-center flex flex-row-reverse space-x-2 space-x-reverse'}>
                    <Button as="button" variant="default" type="submit">Register</Button>
                    <Button<typeof A>
                        as="A"
                        href="/"
                        variant="secondary"
                        size="icon"
                        type="button"
                    >
                        <IconMapPin/>
                    </Button>
                </div>
            </form>


        </>
    );
};

export {RegisterUserForm};
