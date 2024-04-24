"use client";

import { ApiPromise, WsProvider } from "@polkadot/api";
import { createContext, useEffect, useRef, useState } from "react";
import React from "react";
import { env } from "./env";

type ParachainProviderContextType = {
	api: ApiPromise | undefined;
	error: string | undefined;
	isConnected: boolean;
};

const ParachainProviderContext = createContext<ParachainProviderContextType>({
	isConnected: false,
} as ParachainProviderContextType);

export function ParachainProviderProvider({
	children,
}: { children: React.ReactNode }) {
	const initialized = useRef(false); // needed because this useEffect is called twice for unknown reason

	const [ctx, setCtx] = useState<ParachainProviderContextType>({
		isConnected: false,
	} as ParachainProviderContextType);

	useEffect(() => {
		let ignore = false;

		async function connectParachain() {
			if (ignore) {
				return;
			}

			setCtx({ isConnected: false } as ParachainProviderContextType);

			console.log(`Connecting to ${env.NEXT_PUBLIC_PARACHAIN_URL}`);

			const wsProvider = new WsProvider(
				env.NEXT_PUBLIC_PARACHAIN_URL,
				2000,
				{},
				10000,
			);
			wsProvider.on("error", (error) => {
				console.error("Error connecting to parachain", error);
				setCtx({
					isConnected: false,
					api: undefined,
					error: `Error connecting to parachain at ${env.NEXT_PUBLIC_PARACHAIN_URL}`,
				});
			});

			wsProvider.on("disconnected", () => {
				console.error("Disconnected from parachain");
				setCtx({
					isConnected: false,
					api: undefined,
					error: undefined,
				});
			});

			wsProvider.on("connected", async () => {
				console.log("Connected");
				const api = await ApiPromise.create({
					provider: wsProvider,
				});

				await api.isReadyOrError;

				const [chain, nodeName, nodeVersion] = await Promise.all([
					api.rpc.system.chain(),
					api.rpc.system.name(),
					api.rpc.system.version(),
				]);

				console.log(
					`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`,
				);

				setCtx({
					api,
					isConnected: true,
					error: undefined,
				});
			});

			return wsProvider;
		}

		if (!initialized.current) {
			connectParachain();
			initialized.current = true;
		}

		return () => {
			ignore = true;
		};
	}, []);

	return (
		<ParachainProviderContext.Provider value={ctx}>
			{children}
		</ParachainProviderContext.Provider>
	);
}

export function useParachain() {
	const context = React.useContext(ParachainProviderContext);
	if (context === undefined) {
		throw new Error(
			"useParachain must be used within a ParachainProviderProvider",
		);
	}
	return context;
}
