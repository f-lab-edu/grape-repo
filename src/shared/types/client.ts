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
	userId: string | undefined;
	session: SessionType;
	userName: string | null;
	setUserName: Dispatch<SetStateAction<string | null>>;

};

export type UserName = {
	userName: string;
};

export type Messages = {
	chat_id: string;
	user_id: string;
	id: number;
	body: string;
	created_at: string;
};

export type ChatItemType = {
	friendId: string;
	friendName: string;
	latestMessage: {
		body: string;
		created_at: string;
	};
	isNew: boolean;
	chatId: string;
};

export type TitleType = {
	text: string;
	style?: StyleXArray<boolean | CompiledStyles | null | undefined>;
};

export type FriendType = {
	id: string;
	friendName: string;
};
