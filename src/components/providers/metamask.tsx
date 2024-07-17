import type React from "react";
import { type ReactNode, createContext, useState } from "react";

interface MetaMaskContextProps {
	account: string | null;
	connectMetaMask: () => void;
	disconnectMetaMask: () => void;
}

declare global {
	interface Window {
		ethereum: any;
	}
}

export const MetaMaskContext = createContext<MetaMaskContextProps>({
	account: null,
	connectMetaMask: () => {},
	disconnectMetaMask: () => {},
});

export const MetaMaskProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [account, setAccount] = useState<string | null>(null);
	const _checkMetaMaskConnection = async () => {
		if (window.ethereum) {
			try {
				const accounts = await window.ethereum.request({
					method: "eth_accounts",
				});
				// @ts-ignore
				if (accounts?.length > 0) {
					setAccount((accounts as unknown as string[])[0]);
				}
			} catch (error) {
				console.error(error);
			}
			// @ts-ignore
			window.ethereum.on("accountsChanged", (accounts: string[]) => {
				if (accounts?.length) {
					setAccount((accounts as unknown as string[])[0] || null);
				}
			});
		}
	};

	/*useEffect(() => {
		checkMetaMaskConnection();
	}, [checkMetaMaskConnection]);*/

	const connectMetaMask = async () => {
		if (window.ethereum) {
			try {
				const accounts = await window.ethereum.request({
					method: "eth_requestAccounts",
				});
				setAccount((accounts as unknown as string[])[0]);
			} catch (error) {
				console.error(error);
			}
		} else {
			alert("MetaMask is not installed");
		}
	};

	const disconnectMetaMask = () => {
		setAccount(null);
	};

	return (
		<MetaMaskContext.Provider
			value={{ account, connectMetaMask, disconnectMetaMask }}
		>
			{children}
		</MetaMaskContext.Provider>
	);
};
