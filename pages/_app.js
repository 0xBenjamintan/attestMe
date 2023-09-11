import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, getDefaultWallets, RainbowKitProvider} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base, zora } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [
    alchemyProvider({ apiKey: 'ys_3UoP4Kyb-RFPSYs0jR33ZmZOrKXSB'}),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Hackathon Boilerplate',
  projectId: '37321bd7beb025d093a574ad960d4e2b',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

export default function App({ Component, pageProps }) {
  return (
  <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains} theme={darkTheme()}>
        <Component {...pageProps} />
    </RainbowKitProvider>
  </WagmiConfig>
  )
}
