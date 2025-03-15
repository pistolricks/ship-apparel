import {USER} from "~/lib/db";
import {AUTHENTICATION_TOKEN, Feature} from "~/lib/types";
import {handleUserName} from "~/lib/utils";


export type SessionUser = {
    id?: number;
    name?: string;
    email?: string;
    display_name?: string;
    activated?: boolean;
    created_at?: string;
    token?: string;
    expiry?: string;
    folder?: string;
    current_location?: Feature
};


export function getSession() {
    "use server";

  //  return useSession({
  //      password: import.meta.env.VITE_SESSION_SECRET ?? "areallylongsecretthatyoushouldreplace"
  //  });
}

export async function updateSessionUser(user: USER, authentication_token: AUTHENTICATION_TOKEN, folder: string) {
    "use server";
    try {
    //    const session = await getSession();
    //    await session.update((d: SessionUser | undefined) => {
    //        if (!d) return;
    //        d.id = user?.id;
    //        d.name = user?.name;
    //        d.email = user?.email;
    //        d.display_name = handleUserName(user?.name)
    //        d.activated = user?.activated;
    //        d.created_at = user?.created_at;
    //        d.token = authentication_token?.token;
    //        d.expiry = authentication_token?.expiry;
    //        d.folder = folder
    //    });

    } catch (err) {
        return err as Error;
    }
}
