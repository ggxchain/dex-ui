"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThreeDotsImage from "./threeDots";

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
    ];

    return (
        <>
            <header className="peer flex justify-between items-center secondary-gradient w-full sticky top-0 z-50 p-safe-or-4 ">
                <button className="inline-flex items-center p-2 rounded-lg md:hidden">
                    <ThreeDotsImage />
                </button>

                <Link className="mx-auto" href="/">
                    <h1 className="text-2xl text-white font-bold md:ml-8">
                        RfQ by <span className="italic">GGx</span>
                    </h1>
                </Link>
            </header>

            <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-24 transition-transform transparent -translate-x-full peer-has-[button:focus]:translate-x-0 peer-has-[button:focus]:primary-gradient  md:translate-x-0 text-white">
                <div className="px-3 py-10 overflow-y-auto h-full text-xl">
                    <ul className="space-y-10 font-medium flex flex-col items-center w-full">
                        {
                            menus.map((menu, index) => (
                                <Link key={index} href={menu.path} className={"w-full text-center p-2 rounded-lg hover:bg-gray-800 " + (pathname === menu.path ? "secondary-gradient" : "")}>
                                    <li>
                                        {menu.name}
                                    </li>
                                </Link>

                            ))
                        }
                    </ul>
                </div>
            </aside >
        </>
    )
}
