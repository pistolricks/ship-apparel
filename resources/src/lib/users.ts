import {action, query, redirect} from "@solidjs/router";

import {capitalizeFirstLetter} from "~/lib/utils";
import {activateUser, getUserDetails, getUserToken, login, logout, register, resendActivateEmail} from "~/lib/server";
// import {getSession} from "~/lib/session";
import {db} from "~/lib/db";

export const getUser = query(async () => {
    "use server";
    try {
        let token = await getUserToken();
   //     if (!token) throw redirect("/")

     //   const session = await getSession();
     //   const email = session.data.email;
      //  if (email === undefined) throw new Error("User not found");
      //  const user = await db.user.findUser({ where: { userInput: { email: email, token: token.token } } });
      //  if (!user) throw new Error("User not found");
      //  return { user };
    } catch {
        await logout();
        throw redirect("/login");
    }
}, "user");


export const getUserDetailsHandler = action(async (data: FormData) => {
    "use server";
 //   let token = await getUserToken();
 //   if (!token) throw redirect("/")

    const userInput = {
        email: String(data.get("email")),
   //     token: token.token,
    }
 //   let res = await getUserDetails(userInput)
 //   console.log("getUserDetailsHandler", res)
 //   return res;
})


export const registerUserHandler = action(async (data: FormData) => {
    "use server";

    let fName = String(data.get("firstName"));
    let lName = String(data.get("lastName"));

    let firstName = fName.toLowerCase();
    let lastName = lName.toLowerCase();

    let name = capitalizeFirstLetter(firstName) + " " + capitalizeFirstLetter(lastName)
    let email = String(data.get("email"));

    const userInput = {
        name: name,
        email: email.toLowerCase(),
        password: String(data.get("password")),
    }
    let res = await register(userInput)
    if (res.user?.id) throw redirect("/activate")
    else return res;
})

export const activateUserHandler = async (token: string) => {
    "use server";
    const activateInput = {
        token: token,
    }
    return activateUser(activateInput)
}

export const resendActivateEmailHandler = action(async (data: FormData) => {
    "use server";
    const resendInput = {
        email: String(data.get("email")),
    }
    return resendActivateEmail(resendInput)
})

export const loginUserHandler = action(async (data: FormData) => {
    "use server";
    const userInput = {
        email: String(data.get("email")),
        password: String(data.get("password")),
    }

    console.log("loginUserHandler", userInput)
    return await login(userInput)
})

export const logoutUserHandler = action(async () => {
    "use server";
    return await logout()
})
