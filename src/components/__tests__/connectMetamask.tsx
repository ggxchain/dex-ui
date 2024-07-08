import { MetaMaskProvider } from "@/components/providers/metamask";
import { act, render, screen } from "@testing-library/react";
import ConnectMetaMask from "../common/connectMetamask";

const MetaMask = () => {
	return (
		<MetaMaskProvider>
			<ConnectMetaMask />
		</MetaMaskProvider>
	);
};

describe("ConnectMetaMask", () => {
	test("ConnectMetaMask rendered", async () => {
		const { container } = await act(() => render(<MetaMask />));
		expect(container).toBeDefined();

		const connectMetaMask = screen.getByTestId("connectMetaMask");
		expect(connectMetaMask).toBeDefined();
	});
});
