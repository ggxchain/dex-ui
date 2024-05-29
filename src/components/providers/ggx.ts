import type GGXWallet from "@/services/ggx";
import { createContext } from "react";
type GGXWalletProviderType = {
	ggx: GGXWallet | null;
	setGgx?: (ggx: GGXWallet) => void;
};

const GgxContext = createContext<GGXWalletProviderType>({
	ggx: null,
});

export default GgxContext;
