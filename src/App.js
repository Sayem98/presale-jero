import './App.css';
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";
import Nav from './components/Nav';
import { bsc } from "wagmi/chains";
import { useEffect } from 'react';

const chains = [bsc];
const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: "EbWpcrEoNB5gzeDJi_clFzLbpbgTtuRt", // or infuraId
    walletConnectProjectId: "6c145fd143381acdbd5482e31c1d887b",
    chains,
    // Required
    appName: "Jero Staking",
  }),
);


const App = () => {

  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <div className='App font-Poppins bg-black'>   
          <Nav/>
        </div>
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

export default App;
