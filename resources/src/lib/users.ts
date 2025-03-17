import {action, query, redirect} from "@solidjs/router";

import {capitalizeFirstLetter} from "~/lib/utils";

export const getUserToken = async () =>  {
    return {
        token: "<PASSWORD>",
        expiry: "123456789"
    }

}

import {db} from "~/lib/db";

export const getUser = query(async (email) => {
    "use server";
    try {

        if (email === undefined) throw new Error("User not found");
        const user = await db.user.findUser({ where: { userInput: { email: email} } });
        if (!user) throw new Error("User not found");
        return { user };
    } catch {
        await db.user.logout();
        throw redirect("/login");
    }
}, "user");


export const getUserDetailsHandler = action(async (data: FormData) => {
    "use server";
    let token = await getUserToken();
    if (!token) throw redirect("/")

    const userInput = {
        email: String(data.get("email")),
        token: token.token,
    }
    try {
        const res = await db.user.findUser({where: {userInput}});
        console.log("getUserDetailsHandler", res)
        return res;
    } catch (err) {
        throw redirect("/register")
    }

})


export const registerUserHandler = action(async (data: FormData) => {
    "use server";


    let email = String(data.get("email"));

    const userInput = {
        name:  String(data.get("name")),
        email: email.toLowerCase(),
        password: String(data.get("password")),
        confirm_password: String(data.get("confirm_password"))
    }

    try {
     return await db.user.register({where: {userInput}});
    } catch (err) {
        throw redirect("/register")
    }

})

export const activateUserHandler = async (token: string) => {
    "use server";
    const activateInput = {
        token: token,
    }
    try {
        await db.user.activate({where: {activateInput}});
    } catch (err) {
        throw redirect("/")
    }

}

export const resendActivateEmailHandler = action(async (data: FormData) => {
    "use server";
    const resendInput = {
        email: String(data.get("email")),
    }
    try {
        const res = await db.user.resendActivateEmail({where: {resendInput}});
        console.log("resendActivateEmailHandler", res)
    } catch (err) {
        throw redirect("/activate")
    }
    throw redirect("/activate")
}, 'resendActivateEmail')

export const loginUserHandler = action(async (data: FormData) => {
    'use server'
    const userInput = {
        email: String(data.get("email")),
        password: String(data.get("password")),
    }
    try {
        const user = await db.user.login({where: {userInput}});
        if (!user) throw Error("Invalid user")
    } catch (err) {
        return err as Error
    }
    throw redirect('/')
}, 'login')





export const logoutUserHandler = action(async () => {
    "use server";
    await db.user.logout();

}, 'logout')
