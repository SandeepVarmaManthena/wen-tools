import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ConnectionState {
  accounts: string[];
  setAccounts: (accounts: string[]) => void;
  walletAddress: string;
  setWalletAddress: (walletAddress: string) => void;
  nfdomain: string;
  setNfdomain: (nfdomain: string) => void;
  networkType: "mainnet" | "testnet";
  setNetworkType: (networkType: "mainnet" | "testnet") => void;
  walletType: "pera" | "defly" | "daffi" | "lute" | null;
  setWalletType: (
    walletType: "pera" | "defly" | "daffi" | "lute" | null
  ) => void;
  disconnect: () => void;
}

const useConnectionStore = create<ConnectionState>()(
  persist(
    (set) => ({
      accounts: [],
      setAccounts: (accounts: string[]) => set({ accounts }),
      walletAddress: "",
      setWalletAddress: (walletAddress) => set({ walletAddress }),
      networkType: "mainnet",
      setNetworkType: (networkType) => {
        set({ networkType });
        window.location.reload();
      },
      nfdomain: "",
      setNfdomain: (nfdomain) => set({ nfdomain }),
      walletType: null,
      setWalletType: (walletType) => set({ walletType }),
      disconnect: () =>
        set({ accounts: [], walletAddress: "", walletType: null }),
    }),
    {
      name: "wallet",
    }
  )
);

export default useConnectionStore;
