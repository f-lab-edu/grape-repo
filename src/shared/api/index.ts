import { createClient } from "@supabase/supabase-js";
import { QueryClient } from '@tanstack/react-query';
import { handleError } from '../utils';

export const queryClient = new QueryClient();


const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

export const selectEmail = async (email: string | undefined):Promise<{user_name: string}[] |null > => 
	await supabase
		.from("users")
		.select("*")
		.eq("email", email)
		.then(handleError)

