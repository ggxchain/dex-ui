import { YellowButton } from "@/components/common/button";
import { Input } from "@/components/common/input";
import Modal from "@/components/common/modal";
import { SelectDark } from "@/components/common/select";
import GgxContext from "@/components/providers/ggx";
import { errorHandler } from "@/services/api";
import GGXWallet, { type Account } from "@/services/ggx";
import { type ChangeEvent, useContext, useEffect, useState } from "react";
type Radion = "" | "Node" | "Mainnet" | "Testnet";
const NODE_PROVIDERS: Radion[] = ["Node", "Mainnet", "Testnet"];
export default function Settings() {
	const [showModal, setShowModal] = useState(false);
	const [radioNode, setRadioNode] = useState<Radion>("");
	const [customNode, setCustomNode] = useState("");
	const [selectedAccount, setSelectedAccount] = useState<Account | undefined>(
		undefined,
	);
	const [ggxAccounts, setGGXAccounts] = useState<Account[]>([]);

	const { ggx } = useContext(GgxContext);

	useEffect(() => {
		connectWallet();
	}, []);

	const connectWallet = async () => {
		if (ggx) {
			const accounts = await ggx.getAccounts().catch(errorHandler);
			if (accounts === undefined) {
				return;
			}
			setGGXAccounts(accounts);
			setSelectedAccount(ggx.pubkey());
		}
	};

	const handleSelectChange = (e: Account) => {
		if (e === null) {
			return;
		}
		setSelectedAccount(e);
	};
	const onClick = () => {
		setShowModal(!showModal);
	};

	const onClickRadio = (value: Radion) => {
		setRadioNode(value);
	};

	const onChangeCustomNode = (e: ChangeEvent<HTMLInputElement>) => {
		setCustomNode(e.target.value);
		setRadioNode("");
	};

	const onClickSave = () => {
		const wallet = new GGXWallet();
		if (selectedAccount) {
			try {
				wallet.selectAccount(selectedAccount);
			} catch (err) {
				console.warn(err);
			}
		}
		setShowModal(false);
	};

	return (
		<div className={"pt-20 absolute pb-20 px-3 bottom-1 left-2 text-GGx-light"}>
			<div
				data-testid={"settings-panel"}
				className={"cursor-pointer hover:bg-gray-800"}
				onClick={onClick}
			>
				Settings
			</div>
			<Modal
				style={{ width: "1000px" }}
				modalTitle="Settings Node"
				isOpen={showModal}
				onClose={onClick}
			>
				<p className={"text-GGx-dark"}>
					Select a node or provide a custom URL.
				</p>
				{NODE_PROVIDERS.map((node: Radion) => {
					return (
						<div
							onClick={() => onClickRadio(node)}
							key={`${node}-nodes`}
							className="cursor-pointer row-auto flex flex-row justify-items-start items-start"
						>
							<Input
								checked={radioNode === node}
								wrapperClassName={"w-auto"}
								type={"radio"}
								value={node}
							/>
							<div className={"pl-1 text-GGx-dark flex-auto"}>{node}</div>
						</div>
					);
				})}

				<p className={"text-GGx-dark pt-4"}>Custom Custom Node URL</p>
				<div className="flex flex-col w-full">
					<Input
						className="mt-1 rounded-[4px] border p-3 basis-1/4 bg-transparent text-GGx-gray border-GGx-gray w-full"
						value={customNode}
						onChange={onChangeCustomNode}
					/>
					<div className="flex w-full justify-center"></div>
				</div>
				<p className={"text-GGx-dark pt-4"}>
					Account Select an account to manage.
				</p>
				<p className={"text-GGx-dark"}>Account</p>
				<SelectDark<Account>
					onChange={handleSelectChange}
					options={ggxAccounts}
					value={selectedAccount}
					className="w-full h-full"
					childFormatter={(account) => {
						return (
							<div className="w-full p-3 h-full text-GGx-light rounded-2xl md:text-base text-sm grow-on-hover glow-on-hover">
								<span className="text-base">
									{account.name
										? account.name
										: `Account ${ggxAccounts.findIndex(
												(acc) => acc.address === account.address,
											)}`}
								</span>
							</div>
						);
					}}
				/>
				<div className={"pt-4 pb-4"}>
					<YellowButton className={"text-GGx-dark p-1"} onClick={onClickSave}>
						Save
					</YellowButton>
				</div>
			</Modal>
		</div>
	);
}
