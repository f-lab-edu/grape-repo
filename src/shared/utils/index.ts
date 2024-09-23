export const handleError = <T>({data, error} : {data: T, error:unknown }) => {
	if (error) throw error;
	
	return data
};

export const assert: (
	condition: unknown,
	message: string,
) => asserts condition = (condition: unknown, message: string) => {
	if (!condition) {
		throw new Error(message);
	}
};
