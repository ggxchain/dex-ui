import { env } from "@/env";

export const EXCHANGE_PRICE_TTL = 5 * 60 * 1000; // 5 minutes
export const TOKENS_LIST_TTL = 20 * 60 * 1000; // 20 minutes
export const GGX_WSS_URL = env.NEXT_PUBLIC_PARACHAIN_URL;
//TODO: We need to define it more precisely
export const CONTRACT_MOCKED = false;
export const CALCULATION_PRECISION = 3;
export const NATIVE_TOKEN_ID_RESERVED = 8888;
export const BLOCK_TIME_IN_MILLIS = 2000;
export const MAX_DP = 8; //Max decimal precision
export const maxNumericInput = 10000000;
