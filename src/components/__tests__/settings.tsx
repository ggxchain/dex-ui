import "@/__utils__/localstore.mock";
import Settings from "@/components/common/settings";
import GgxContainer from "@/components/providers/ggx_container";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

const WalletPage = () => (
	<GgxContainer>
		<Settings />
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

describe("Settings", () => {
	test("renders default component", async () => {
		await act(() => render(<WalletPage />));
		expect(screen.getByTestId("settings-panel")).toBeInTheDocument();
		fireEvent.click(screen.getByTestId("settings-panel"));
		expect(screen.getByTestId("modal")).toBeInTheDocument();
	});
});
