import type { Session, User } from "@supabase/supabase-js";

export type UserInfo = {
	email: string;
	password: string;
};

export type ResponseUserData = {
	user: User | null;
	session: Session | null;
};

export type AuthContextType = {
	user: User | null;
	isUserNameEmpty: boolean;
	updateUserNameStatus: (bool: boolean) => void;
};

export type UserName = {
	userName: string;
};
