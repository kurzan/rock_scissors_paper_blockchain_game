import React from 'react';
import './App.css';
import Game from './components/Game';
import Header from './components/Header';
import GamesHistory from './components/GamesHistory';

import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { wagmiClient, chains } from './components/services/web3config';


function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Header />
        <Game />
        <GamesHistory />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
