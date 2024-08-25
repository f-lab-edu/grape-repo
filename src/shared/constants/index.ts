export const greetingMessages = [
	{
		id: 0,
		text: "안녕 😚",
	},
	{
		id: 1,
		text: "안녕 😊",
	},
	{
		id: 2,
		text: "만나서 반가워요!👍",
	},
];

export const emailValidation = {
	required: "이메일을 입력해주세요",
	pattern: {
		value: /^[A-Za-z0-9._-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+$/,
		message: "이메일 형식으로 입력해주세요",
	},
};

export const passwordValidation = {
	required: "비밀번호를 입력해주세요",
	pattern: {
		value: /^(?=.*[a-zA-Z])(?=.*\d).{8,16}$/,
		message: "비밀번호는 영문 포함 8자 이상 16자 이하로 입력해주세요",
	},
};
