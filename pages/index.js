import { Inter } from 'next/font/google'
import React, { useEffect, useState } from "react";
//import { ConnectButton } from '@rainbow-me/rainbowkit'
//import { Button } from "@/components/ui/button"
import LandingPageContents from '@/components/ui/LandingPageContents';
import TwoButtonsLayout from '@/components/ui/TwoButtonsLayout';
import { useAccount, useBalance, useEnsName } from "wagmi";
import { add } from 'date-fns';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [userWallet, setUserWallet] = useState(null); 
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const { balanceData, isError, isLoading } = useBalance({
    address: address,
  })
  console.log("address: ", address);
  
  return (
    <main>
      { address ? <TwoButtonsLayout /> : <LandingPageContents /> }
    </main>
  );
}
