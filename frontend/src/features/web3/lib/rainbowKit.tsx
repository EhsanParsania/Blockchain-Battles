import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { sepolia, localhost } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

export const chainConfig = configureChains(
  [sepolia, localhost],
  [publicProvider()],
);
const { chains, publicClient } = chainConfig;
const { connectors } = getDefaultWallets({
  appName: "BlockChainBattles",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!,
  chains,
});
export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});
