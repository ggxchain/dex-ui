import { z } from "zod";

// NOTE(Bohdan): I tried to use https://github.com/t3-oss/t3-env but jest does not work with that... To replicate similar behavior
// use zod to validate required env vars.
// NEXT_PUBLIC_* env vars will be bundled in the frontend code.
export const env = {
	NODE_ENV: (() => {
		return z
			.enum(["development", "production", "test"], {
				required_error: "Must provide a NODE_ENV env var",
			})
			.parse(process.env.NODE_ENV);
	})(),

	NEXT_PUBLIC_PARACHAIN_URL: (() => {
		return z
			.string()
			.url({ message: "Must provide a URL to parachain node" })
			.parse(process.env.NEXT_PUBLIC_PARACHAIN_URL);
	})(),

	NEXT_PUBLIC_GGX_NETWORK: (() => {
		return z
			.enum(["brooklyn", "sydney"], {
				required_error: "Must provide a NEXT_PUBLIC_GGX_NETWORK env var",
			})
			.parse(process.env.NEXT_PUBLIC_GGX_NETWORK);
	})(),
};
