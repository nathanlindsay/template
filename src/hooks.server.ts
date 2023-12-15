import {
	PUBLIC_SUPABASE_URL,
	PUBLIC_SUPABASE_ANON_KEY,
} from "$env/static/public";
import { createServerClient } from "@supabase/ssr";

export const handle = async ({ event, resolve }) => {
	event.locals.supabase = createServerClient(
		PUBLIC_SUPABASE_URL,
		PUBLIC_SUPABASE_ANON_KEY,
		{
			cookies: {
				get: (key) => event.cookies.get(key),
				set: (key, value, options) => {
					event.cookies.set(key, value, options);
				},
				remove: (key, options) => {
					event.cookies.delete(key, options);
				},
			},
		},
	);

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === "content-range";
		},
	});
};
