import type GGXWallet from "@/services/ggx";
import { createContext } from "react";

const GgxContext = createContext<GGXWallet | null>(null);

export default GgxContext;
