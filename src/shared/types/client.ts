import type { Session, User } from "@supabase/supabase-js";
import type { Dispatch, SetStateAction } from "react";

export type SessionType = Session | null;

export type UserInfo = {
	email: string;
	password: string;
};

export type ResponseUserData = {
	user: User | null;
	session: SessionType;
};

export type AuthContextType = {
	session: SessionType;
	userName: string | null;
	setUserName: Dispatch<SetStateAction<string | null>>;
	setSession: Dispatch<SetStateAction<SessionType | null>>;
};

export type UserName = {
	userName: string;
};
