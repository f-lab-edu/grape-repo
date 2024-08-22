import type { Session, User } from "@supabase/supabase-js";

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
	handleUserName: (username: string) => void;
	handleSession: (data: SessionType) => void;
};

export type UserName = {
	userName: string;
};
