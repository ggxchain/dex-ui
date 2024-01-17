"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThreeDotsImage from "./threeDots";
import { useEffect, useState } from "react";
import { CONTRACT_MOCKED } from "@/consts";
import Contract from "@/services/contract";

export default function HeaderWithNavbar() {
    const [mocked, setMocked] = useState(CONTRACT_MOCKED);
    const pathname = usePathname();

    useEffect(() => {
        setMocked(new Contract().isMocked());
    }, []);

    const changeMocked = () => {
        const contract = new Contract();
        contract.changeContract();
        setMocked(contract.isMocked());

    }

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
                    <h1 className="text-2xl text-slate-100 font-bold md:ml-8">
                        RfQ by <span className="italic">GGx</span>
                    </h1>
                </Link>

                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={!mocked} onChange={changeMocked} className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-bg-gr-2"></div>
                    <span className="ms-3 text-sm font-medium text-slate-100 dark:text-gray-300">Contract</span>
                </label>
            </header>

            <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform transparent -translate-x-full peer-has-[button:focus]:translate-x-0 peer-has-[button:focus]:primary-gradient  md:translate-x-0 text-slate-100">
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
