import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import HeaderWithNavbar from "@/components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ['latin'] }) 

const metadata: Metadata = {
	title: "RfQ by GGX",
	description: "Request for quote service powered by GGX",
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} relative min-h-dvh`}>
				<main className="h-dvh flex flex-col">
					<ToastContainer position="top-right" closeOnClick theme="colored" />

					<HeaderWithNavbar />
					<div className="flex h-dvh flex-col items-center justify-between lg:ml-80">
						<div className="text-GGx-light flex lg:h-[80vh] w-[90%] p-5 lg:mt-10">
							{children}
						</div>
					</div>
				</main>
			</body>
		</html>
	);
}
