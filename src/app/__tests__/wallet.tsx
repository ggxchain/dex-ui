import "@/__utils__/localstore.mock";
import mockedTokens from "@/mock";
import Contract from "@/services/api";
import { BN_MILLION } from "@polkadot/util";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Wallet from "../wallet/page";

jest.mock("../../services/cex", () => ({
	__esModule: true,
	default: class CexService {
		async tokenPrices(tokens: string[]): Promise<Map<string, number>> {
			return new Map<string, number>(tokens.map((token) => [token, 1]));
		}
	},
}));

const selectFn = jest.fn();

jest.mock("../../services/ggx", () => ({
	__esModule: true,
	default: class GGXService {
		// biome-ignore lint: TODO: get rid of async
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

describe("Wallet", () => {
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
		await act(() => render(<Wallet />));
		const balance = 1000 * mockedTokens().length + 1; // 1 token = $1, we have 1000 tokens on chain per token + 1 USDT

		expect(screen.getByText(`$${balance.toFixed(2)}`)).toBeInTheDocument();
		expect(screen.getByTestId("deposit")).toBeInTheDocument();
		expect(screen.getByTestId("withdraw")).toBeInTheDocument();
		expect(screen.getByText("1 USDT")).toBeInTheDocument();

		expect(screen.getAllByRole("row").length).toBe(mockedTokens().length + 1); // 1 header + tokens
		expect(screen.getByText("Account 1"));
	});

	test("deposit opens modal", async () => {
		await act(() => render(<Wallet />));

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
		await act(() => render(<Wallet />));

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
		await act(() => render(<Wallet />));
		const select = screen.getByTestId("userSelect").lastChild!;
		expect(select).toBeInTheDocument();
		fireEvent.keyDown(select, { key: "ArrowDown" });
		const option = screen.getByText("Account 2");
		await act(() => fireEvent.click(option));
		expect(selectFn).toHaveBeenCalledTimes(1);
	});

	test("click on table replaces selected token", async () => {
		await act(() => render(<Wallet />));
		const deposit = screen.getByTestId("deposit");
		expect(deposit.textContent).toBe("Deposit USDT");
		const withdraw = screen.getByTestId("withdraw");
		expect(withdraw.textContent).toBe("Withdraw USDT");

		const rows = screen.getAllByRole("row");
		act(() => fireEvent.click(rows[2]));

		expect(deposit.textContent).toBe("Deposit BTC");
		expect(withdraw.textContent).toBe("Withdraw BTC");
	});

	test("withdraw doesn't open on balance < 0", async () => {
		await act(() => render(<Wallet />));
		const withdraw = screen.getByTestId("withdraw");
		expect(withdraw).toBeEnabled();

		const rows = screen.getAllByRole("row");
		act(() => fireEvent.click(rows[2]));
		expect(screen.getByTestId("modal")).not.toBeVisible();

		await act(() => fireEvent.click(withdraw));
		expect(screen.getByTestId("modal")).not.toBeVisible();
		expect(withdraw).toBeDisabled();
	});
});
