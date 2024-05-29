import Modal from "@/components/common/modal";

const WalletError = () => {
	return (
		<div className="w-full h-full flex flex-col">
			<div className="w-full">
				<Modal modalTitle="Warning!" fixed={false} hideClose isOpen>
					<div className="flex flex-col w-full">
						<p className="text-GGx-dark">
							Please install any wallets plugin: Keplr, Polkadot.{"{"}js{"}"},
							SubWallet
						</p>
					</div>
				</Modal>
			</div>
		</div>
	);
};

export default WalletError;
