"use client";

import Logo from "@/components/common/logo";
import Spinner from "@/components/common/spinner";
import { useParachain } from "@/parachain_provider";
import type React from "react";

export default function ChainPicker({
	children,
}: { children: React.ReactNode }) {
	const { isConnected, error, api } = useParachain();

	if (isConnected) {
		// render page as is
		return <>{children}</>;
	}

	if (error) {
		// render error page
		return (
			<div className="flex items-center justify-center h-screen">
				<h1 className="text-center text-white">{error}</h1>
			</div>
		);
	}

	// render "in progress"
	return (
		// here we can ask user to select a parachain from pre-hardcoded, or enter their own url...
		<div className="flex items-center justify-center flex-col h-screen">
			<Logo alt="GGX" className="mx-auto" width={100} height={100} />
			<div className="justify-center w-1/12 h-1/12">
				<Spinner />
			</div>
		</div>
	);
}
