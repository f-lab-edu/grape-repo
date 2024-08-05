import type { Session, User } from "@supabase/supabase-js";

export type UserInfoProps = {
	[key: string]: string;
};

export type ResponseUserData = {
	user: User | null;
	session: Session | null;
};

export type AuthContextType = {
	user: User | null;
};
