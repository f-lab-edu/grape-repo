import type {
	CompiledStyles,
	StyleXArray,
} from "@stylexjs/stylex/lib/StyleXTypes";
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

export type FriendListItemType = {
	id: number;
	name: string;
};

export type ChatListItemType = {
	id: number;
	name: string;
	title: string;
	relativeTime: string;
	isNew: boolean;
};

export type TitleType = {
	text: string;
	style?: StyleXArray<boolean | CompiledStyles | null | undefined>;
};
