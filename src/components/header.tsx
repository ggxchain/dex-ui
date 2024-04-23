"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThreeDotsImage from "./common/threeDots";

export default function HeaderWithNavbar() {
	const pathname = usePathname();

	const menus = [
		{
			name: "Wallet",
			path: "/wallet",
		},
		{
			name: "Transfers",
			path: "/transfer",
		},
		{
			name: "DEX",
			path: "/dex",
		},
		{
			name: "Bridge-BTC",
			path: "/bridge-btc",
		},
	];

	return (
		<>
			<header className="peer flex justify-between items-center secondary-gradient w-full sticky top-0 z-50 p-safe-or-4 ">
				<button
					type="button"
					className="inline-flex items-center p-2 rounded-lg lg:hidden"
				>
					<ThreeDotsImage />
				</button>

				<div className="w-full flex justify-end">
					<div className="w-[50%] text-GGx-gray text-base flex justify-end mr-[5%]">
						<Link
							className="mx-auto grow-on-hover"
							href="https://ggxchain.io/wp-content/uploads/2023/10/GGx-Whitepaper.pdf"
						>
							Whitepaper
						</Link>
						<Link
							className="mx-auto grow-on-hover"
							href="https://ggxchain.io/#roadmap"
						>
							Roadmap
						</Link>
						<Link
							className="mx-auto grow-on-hover"
							href="https://ggxchain.io/developers/"
						>
							Developers
						</Link>
						<Link
							className="mx-auto grow-on-hover"
							href="https://ggxchain.io/news/"
						>
							News
						</Link>
						<Link
							className="mx-auto grow-on-hover"
							href="https://ggxchain.io/careers/"
						>
							Careeers
						</Link>
						<Link
							className="mx-auto grow-on-hover"
							href="https://docs.ggxchain.io"
						>
							Docs
						</Link>
						<Link
							className="mx-auto grow-on-hover"
							href="https://ggxchain.io/contacts"
						>
							Contact us
						</Link>
					</div>
				</div>
			</header>

			<aside className="text-GGx-light fixed top-0 left-0 z-40 w-80 h-screen transition-transform transparent p-safe-or-4 menu -translate-x-full peer-has-[button:focus]:translate-x-0 peer-has-[button:focus]:primary-gradient  lg:translate-x-0">
				<Image
					src="/GGx.svg"
					alt="GGX"
					width={100}
					height={100}
					className="mx-auto"
				/>
				<div className="pt-20 px-3 py-10 overflow-y-auto h-full text-xl">
					<ul className="space-y-10 font-medium flex flex-col items-center w-full">
						{menus.map((menu, index) => (
							<Link
								key={JSON.stringify(menu)}
								href={menu.path}
								className={`w-full text-center p-2 rounded-lg hover:bg-gray-800 
									${pathname === menu.path ? "secondary-gradient" : ""}`}
							>
								<li>{menu.name}</li>
							</Link>
						))}
					</ul>
				</div>
			</aside>
		</>
	);
}
