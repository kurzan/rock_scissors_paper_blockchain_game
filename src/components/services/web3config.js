import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient } from "wagmi";
import { bscTestnet } from 'wagmi/chains';
import { publicProvider } from "wagmi/providers/public";
import { contractAbi } from "./abi";

const CONTRACT_ADDRESS = "0x9F1DEF22Da15ff0cE3fef5cbc331AedCf309c0B0";

export const { chains, provider, webSocketProvider } = configureChains(
  [
    bscTestnet,
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  chains,
});

export const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
  webSocketProvider,
});

export const contract = {
  address: CONTRACT_ADDRESS,
  abi: contractAbi,
};