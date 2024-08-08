import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

export const selectEmail = async (email: string) => {
	const { data, error } = await supabase
		.from("users")
		.select("*")
		.eq("email", email);

	return { data, error };
};
