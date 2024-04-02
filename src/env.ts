import { z } from "zod";

// NOTE(Bohdan): I tried to use https://github.com/t3-oss/t3-env but jest does not work with that... To replicate similar behavior
// use zod to validate required env vars.
// NEXT_PUBLIC_* env vars will be bundled in the frontend code.
export const env = {
	NEXT_PUBLIC_PARACHAIN_URL: (() => {
		return z
			.string()
			.url({ message: "Must provide a URL to parachain node" })
			.default("ws://127.0.0.1:9944")
			.parse(process.env.NEXT_PUBLIC_PARACHAIN_URL);
	})(),
	NODE_ENV: (() => {
		return z
			.enum(["development", "production"])
			.default("development")
			.parse(process.env.NODE_ENV);
	})(),
	GGX_NETWORK: (() => {
		return z
			.enum(["brooklyn", "sydney"], {
				required_error: "Must select GGX Network",
			})
			.default("brooklyn")
			.parse(process.env.GGX_NETWORK);
	})(),
};
