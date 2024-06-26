"use client";
import type React from "react";
import { useEffect, useState } from "react";

import GGXWallet from "@/services/ggx";

import GgxContext from "@/components/providers/ggx";

export default function GgxContainer({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [ggx, setGgx] = useState<GGXWallet>(new GGXWallet());
	const [_walletsError, setWalletsError] = useState<boolean>(false);
	useEffect(() => {
		if (ggx) {
			connectWallet();
		}
	}, [ggx]);

	const connectWallet = async () => {
		const accounts = await ggx.getAccounts();
		if (accounts === undefined || accounts.length === 0) {
			setWalletsError(true);
		}
	};

	return (
		<GgxContext.Provider value={{ ggx, setGgx }}>
			{children}
		</GgxContext.Provider>
	);
}
