import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, getDefaultWallets, midnightTheme, RainbowKitProvider} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base, zora, mantleTestnet, taikoTestnetSepolia, optimismGoerli } from 'wagmi/chains';
import RootLayout from "@/components/ui/Layout"

import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [optimismGoerli],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'Ethereum Singapore Hackathon',
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
    <RainbowKitProvider chains={chains}>
      <RootLayout> 
          <Component {...pageProps} />
      </RootLayout>
    </RainbowKitProvider>
  </WagmiConfig>
  )
}
