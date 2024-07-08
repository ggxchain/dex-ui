"use client";

import type React from "react";
import { useState } from "react";
import { isMobile } from "react-device-detect";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import HeaderWithNavbar from "@/components/header";
import { ParachainProviderProvider } from "@/parachain_provider";

import MobileInfo from "@/components/common/mobileInfo";
import GgxContext from "@/components/providers/ggx";
import { MetaMaskProvider } from "@/components/providers/metamask";
import GGXWallet from "@/services/ggx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import ChainPicker from "./chain_picker";
const inter = Inter({ subsets: ["latin"] });

const _metadata: Metadata = {
	title: "RfQ by GGX",
	description: "Request for quote service powered by GGX",
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [ggx, setGgx] = useState<GGXWallet>(new GGXWallet());
	const [_selectedWallet, _setSelectedWallet] = useState<string>("");

	return (
		<html lang="en">
			<body className={`${inter.className} relative min-h-dvh`}>
				<ParachainProviderProvider>
					<MetaMaskProvider>
						<GgxContext.Provider value={{ ggx, setGgx }}>
							<ChainPicker>
								<div className={"sun"} />
								<main className="h-dvh flex flex-col">
									<ToastContainer
										position="top-right"
										closeOnClick
										theme="colored"
									/>
									<HeaderWithNavbar />
									<div className="flex h-dvh flex-col items-center justify-between lg:ml-80">
										<div className="text-GGx-light flex lg:h-[80vh] w-[90%] p-5 lg:mt-10">
											{(isMobile && <MobileInfo />) || children}
										</div>
									</div>
								</main>
							</ChainPicker>
						</GgxContext.Provider>
					</MetaMaskProvider>
				</ParachainProviderProvider>
			</body>
		</html>
	);
}
