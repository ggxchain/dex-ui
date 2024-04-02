import type { Keplr, OfflineDirectSigner } from "@keplr-wallet/types";

declare global {
  interface Window {
    keplr: Keplr;
    getOfflineSigner: OfflineDirectSigner;
  }
}
