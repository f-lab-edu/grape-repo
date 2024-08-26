import type { ChatListItemType, FriendListItemType } from "@/shared";

export const CHAT_ITEM_MOCK: ChatListItemType[] = [
	{
		id: 0,
		name: "박은서",
		title: "최근에 본 좋은 영화 있어요?",
		relativeTime: "30분 전",
		isNew: true,
	},
	{
		id: 1,
		name: "김철수",
		title: "어제 새로운 카페를 발견했다.. 바로가자",
		relativeTime: "30분 전",
		isNew: false,
	},
	{
		id: 2,
		name: "최주원",
		title: "오늘 점심은 뭐 먹을까요? 우동? 돈까스?ㅋㅋㅋ",
		relativeTime: "30분 전",
		isNew: true,
	},
];

export const FRIEND_ITEM_MOCK: FriendListItemType[] = [
	{
		id: 0,
		name: "박은서",
	},
	{
		id: 1,
		name: "김철수",
	},
	{
		id: 2,
		name: "최주원",
	},
];
