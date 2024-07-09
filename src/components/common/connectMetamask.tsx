"use client";
import { Button } from "@/components/common/button";
import Modal from "@/components/common/modal";

import { MetaMaskContext } from "@/components/providers/metamask";
import { Ellipsis } from "@/components/utils/ellipsis";
import GGXWallet from "@/services/ggx";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ConnectMetaMask() {
	const [modal, setModal] = useState<boolean>(false);
	const { account, connectMetaMask, disconnectMetaMask } =
		useContext(MetaMaskContext);

	useEffect(() => {
		if (account) {
			const wallet = new GGXWallet();
			try {
				wallet.selectAccount({ address: account, name: "Metamask" });
			} catch (err) {
				console.warn(err);
				toast.warn(`${err}`);
			}
		}
	}, [account]);

	return (
		<div className="flex justify-between  items-center">
			{(!account && (
				<div className="flex justify-between  mr-4 items-center">
					<Button
						data-testid="connectMetaMask"
						onClick={connectMetaMask}
						className="w-full h-full  "
					>
						Connect Metamask
					</Button>
					<Image
						width={0}
						height={0}
						src={"/info.svg"}
						className="ml-2 cursor-pointer md:w-6 md:h-6 w-5 h-5 my-1 mr-2"
						alt={"Metamask info"}
						onClick={() => setModal(true)}
					/>
				</div>
			)) || (
				<div className={"flex justify-between  items-center text-GGx-light"}>
					<div className={"flex justify-between content-center text-GGx-light"}>
						<div className={"flex text-nowrap items-stretch "}>
							Metamask address:
						</div>
						{Ellipsis(account as unknown as string)}
					</div>
					<Button onClick={disconnectMetaMask} className="w-full h-full ">
						Disconnect
					</Button>
				</div>
			)}
			<Modal
				modalTitle={"Connect Metamask"}
				isOpen={modal}
				onClose={() => setModal(false)}
			>
				<div className="flex flex-col w-full">
					<p className="text-GGx-dark">
						Please use Metamask to connect wallet info.
					</p>
				</div>
			</Modal>
		</div>
	);
}
