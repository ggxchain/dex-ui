import "@/__utils__/localstore.mock";
import ibcChains from "@/config/chains";
import Contract from "@/services/api";
import { BN_MILLION } from "@polkadot/util";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Transfer from "../transfer/page";
import { formatter } from "@/services/utils";

jest.mock("../../services/cex", () => ({
	__esModule: true,
	default: class CexService {
		async tokenPrices(tokens: string[]): Promise<Map<string, number>> {
			return new Map<string, number>(tokens.map((token) => [token, 1]));
		}
	},
}));

const ibcChange = jest.fn();

const keplrMock = {
	experimentalSuggestChain() {},
	enable(a: any) {
		ibcChange(a);
	},
	// @ts-ignore
	getOfflineSigner() {
		return new (class A {
			async getAccounts() {
				return [{ address: "blahblah" }, { address: "meowmeow" }];
			}
		})();
	},
};

Object.defineProperty(window, "keplr", { value: keplrMock });

jest.mock("@cosmjs/stargate", () => ({
	__esModule: true,
	SigningStargateClient: class SigningStargateClient {
		getAllBalances() {
			return [
				{
					denom: "USDT",
					amount: "10000",
				},
				{
					denom: "USDC",
					amount: "0",
				},
			];
		}
		static connectWithSigner() {
			return new SigningStargateClient();
		}
	},
}));

const selectFn = jest.fn();

jest.mock("../../services/ggx", () => ({
	__esModule: true,
	default: class GGXService {
		async getAccounts(): Promise<any> {
			return [this.pubkey(), { address: "blahblah", name: "Account 2" }];
		}
		selectAccount(a: any) {
			selectFn();
		}
		pubkey(): any {
			return {
				address: "5G4Ug9EPQHqk5iJGjUFHeLHYCvX4JRPVrtxxFPmwuk9wj8GC",
				name: "Account 1",
			};
		}
	},
}));

describe("Transfer", () => {
	beforeEach(() => {
		selectFn.mockClear();
		window.localStorage.clear();
		window.sessionStorage.clear();
		window.localStorage.setItem(
			"ggx-wallet-selected-account",
			JSON.stringify({
				address: "5G4Ug9EPQHqk5iJGjUFHeLHYCvX4JRPVrtxxFPmwuk9wj8GC",
			}),
		);

		Contract.setMocked(true);

		const contract = new Contract();
		contract.deposit(0, BN_MILLION, () => {});
	});

	test("renders default component", async () => {
		await act(() => render(<Transfer />));

		expect(screen.getByText('$1,000.00')).toBeInTheDocument();
		expect(screen.getByTestId("deposit")).toBeInTheDocument();
		expect(screen.getByTestId("withdraw")).toBeInTheDocument();
		expect(screen.getByText("1000 USDT")).toBeInTheDocument();
		expect(screen.getByText("0 USDC")).toBeInTheDocument();

		expect(screen.getAllByRole("row").length).toBe(3); // 1 header + one token
		expect(screen.getByText("Account 1"));
	});

	test("deposit opens modal", async () => {
		await act(() => render(<Transfer />));

		expect(screen.getByTestId("modal")).not.toBeVisible();
		const deposit = screen.getByTestId("deposit");
		expect(deposit).toBeInTheDocument();
		expect(deposit.textContent).toBe("Deposit USDT");
		// Check if active
		expect(deposit.hasAttribute("disabled")).toBe(false);

		await act(() => fireEvent.click(screen.getByTestId("deposit")));
		expect(screen.getByTestId("modal")).toBeVisible();
	});

	test("withdraw opens modal", async () => {
		await act(() => render(<Transfer />));

		expect(screen.getByTestId("modal")).not.toBeVisible();
		const withdraw = screen.getByTestId("withdraw");
		expect(withdraw).toBeInTheDocument();
		expect(withdraw.textContent).toBe("Withdraw USDT");
		// Check if active
		expect(withdraw.hasAttribute("disabled")).toBe(false);

		await act(() => fireEvent.click(screen.getByTestId("withdraw")));
		expect(screen.getByTestId("modal")).toBeVisible();
	});

	test("select account", async () => {
		await act(() => render(<Transfer />));

		expect(screen.getByText(ibcChains[0].chainName)).toBeInTheDocument();

		const select = screen.getByTestId("selectNetwork").lastChild!;
		expect(select).toBeInTheDocument();

		fireEvent.keyDown(select, { key: "ArrowDown" });
		const option = screen.getByText(ibcChains[1].chainName);
		await act(() => fireEvent.click(option));

		ibcChange(ibcChains[1]);
	});

	test("click on table replaces selected token", async () => {
		await act(() => render(<Transfer />));
		const deposit = screen.getByTestId("deposit");
		expect(deposit.textContent).toBe("Deposit USDT");
		const withdraw = screen.getByTestId("withdraw");
		expect(withdraw.textContent).toBe("Withdraw USDT");

		const rows = screen.getAllByRole("row");
		act(() => fireEvent.click(rows[2])); // Header + 2 tokens

		expect(deposit.textContent).toBe("Deposit USDC");
		expect(withdraw.textContent).toBe("Withdraw USDC");
	});

	test("withdraw doesn't open on balance < 0", async () => {
		await act(() => render(<Transfer />));
		const withdraw = screen.getByTestId("withdraw");
		expect(withdraw).toBeEnabled();

		const rows = screen.getAllByRole("row");
		act(() => fireEvent.click(rows[2]));
		expect(screen.getByTestId("modal")).not.toBeVisible();

		await act(() => fireEvent.click(withdraw));
		expect(screen.getByTestId("modal")).not.toBeVisible();
		expect(withdraw).toBeDisabled();
	});

	test("modal loads active ggx account", async () => {
		await act(() => render(<Transfer />));
		await act(() => fireEvent.click(screen.getByTestId("deposit")));
		expect(screen.getByText("Account 1")).toBeInTheDocument();
		expect(screen.queryByText("Account 2")).toBeNull();

		const select = screen.getByTestId("selectGGxAccount").lastChild!;
		expect(select).toBeInTheDocument();
		fireEvent.keyDown(select, { key: "ArrowDown" });
		const option = screen.getByText("Account 2");
		await act(() => fireEvent.click(option));

		expect(screen.getByText("Account 2")).toBeInTheDocument();
		expect(screen.queryByText("Account 1")).toBeNull();
	});
});
