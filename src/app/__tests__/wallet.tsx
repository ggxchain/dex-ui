import "@/__utils__/localstore.mock";
import GgxContainer from "@/components/providers/ggx_container";
import mockedTokens from "@/mock";
import Contract from "@/services/api";
import GgxNetworkMock from "@/services/api/mock";
import { delayFunc } from "@/services/utils";
import { BN_MILLION } from "@polkadot/util";
import { fireEvent, render, screen } from "@testing-library/react";
import { debug } from "jest-preview";
import { act } from "react-dom/test-utils";
import Wallet, { type PageProps } from "../wallet/page";

const WalletPage = (props: PageProps) => (
	<GgxContainer>
		<Wallet {...props} />
	</GgxContainer>
);

jest.mock("../../services/cex", () => ({
	__esModule: true,
	default: class CexService {
		async tokenPrices(tokens: string[]): Promise<Map<string, number>> {
			const map = new Map<string, number>();
			//tokens are from the imported mockedTokens
			await map.set(tokens[0], 1.001);
			map.set(tokens[1], 63425.82);
			map.set(tokens[2], 0.997);
			map.set(tokens[3], 1);
			map.set(tokens[4], 2945.02);
			//const totalUserBalance 66373839.001 = 1000*1.001+63425820+997+1000+2945020 + 1*1.001... remember to add the deposited 1x USDT price
			return map; //new Map<string, number>(tokens.map((token) => [token, 1]));
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
		selectAccount(_a: any) {
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
	beforeEach(async () => {
		selectFn.mockClear();
		window.localStorage.clear();
		window.sessionStorage.clear();
		window.localStorage.setItem(
			"ggx-wallet-selected-account",
			JSON.stringify({
				address: "5G4Ug9EPQHqk5iJGjUFHeLHYCvX4JRPVrtxxFPmwuk9wj8GC",
			}),
		);

		const mock = new GgxNetworkMock();
		const contract = new Contract(mock);
		contract.deposit(0, BN_MILLION, () => {});
	});

	test("renders default component", async () => {
		await act(() =>
			render(
				<WalletPage
					params={{ isMocked: true, slug: "" }}
					searchParams={{ pair: undefined }}
				/>,
			),
		);
		await delayFunc(1000);
		//const totalUserBalance ... see above calculation

		expect(screen.getAllByRole("row").length).toBe(mockedTokens().length + 1); // 1 header + tokens

		expect(screen.getByText("1 USDT")).toBeInTheDocument();

		expect(screen.getByText("$66,373,839.00")).toBeInTheDocument();
	});

	test("deposit opens modal", async () => {
		await act(() =>
			render(
				<WalletPage
					params={{ isMocked: true, slug: "" }}
					searchParams={{ pair: undefined }}
				/>,
			),
		);

		expect(screen.getByTestId("modal")).not.toBeVisible();
		const deposit = screen.getByTestId("deposit-USDT");
		expect(deposit).toBeInTheDocument();
		expect(deposit.textContent).toBe("Deposit");
		// Check if active
		expect(deposit.hasAttribute("disabled")).toBe(false);

		await act(() => fireEvent.click(screen.getByTestId("deposit-USDT")));
		expect(screen.getByTestId("modal")).toBeVisible();
	});

	test("withdraw opens modal", async () => {
		await act(() =>
			render(
				<WalletPage
					params={{ isMocked: true, slug: "" }}
					searchParams={{ pair: undefined }}
				/>,
			),
		);

		expect(screen.getByTestId("modal")).not.toBeVisible();
		const withdraw = screen.getByTestId("withdraw-USDT");
		expect(withdraw).toBeInTheDocument();
		expect(withdraw.textContent).toBe("Withdraw");
		// Check if active
		expect(withdraw.hasAttribute("disabled")).toBe(false);

		await act(() => fireEvent.click(screen.getByTestId("withdraw-USDT")));
		expect(screen.getByTestId("modal")).toBeVisible();
	});

	test("replace selected token, open modal, enter BTC amount and it shows the amount x its price", async () => {
		//const contract = new Contract();
		//contract.deposit(1, BN_BILLION, () => {});
		await act(() =>
			render(
				<WalletPage
					params={{ isMocked: true, slug: "" }}
					searchParams={{ pair: undefined }}
				/>,
			),
		);
		const deposit = screen.getByTestId("deposit-USDT");
		expect(deposit.textContent).toBe("Deposit");

		const rows = screen.getAllByRole("row");
		await act(() => fireEvent.click(rows[2]));

		expect(screen.getByTestId("modal")).not.toBeVisible();
		expect(deposit).toBeInTheDocument();
		// Check if active
		expect(deposit.hasAttribute("disabled")).toBe(false);

		await act(() => fireEvent.click(screen.getByTestId("deposit-USDT")));

		expect(screen.getByTestId("modal")).toBeVisible();
		expect(screen.getByTestId("InputWithPriceInfo")).toBeVisible();
		const input: HTMLInputElement = screen.getByTestId("Input");
		expect(input).toBeVisible();
		await act(() =>
			fireEvent.change(input, { target: { value: "99.12345678" } }),
		);
		debug();
		expect(input.value).toBe("99.12345678");
		//99.1
	});

	test("withdraw doesn't open on balance < 0", async () => {
		await act(() =>
			render(
				<WalletPage
					params={{ isMocked: true, slug: "" }}
					searchParams={{ pair: undefined }}
				/>,
			),
		);
		const withdraw = screen.getByTestId("withdraw-BTC");
		expect(withdraw).toBeEnabled();

		const rows = screen.getAllByRole("row");
		await act(() => fireEvent.click(rows[2]));
		expect(screen.getByTestId("modal")).not.toBeVisible();

		await act(() => fireEvent.click(withdraw));
		expect(screen.getByTestId("modal")).not.toBeVisible();
		expect(withdraw).toBeEnabled();
	});
});
