import { Inter } from 'next/font/google'
import React, { useEffect, useState } from "react";
//import { ConnectButton } from '@rainbow-me/rainbowkit'
//import { Button } from "@/components/ui/button"
import RootLayout from "@/components/ui/Layout"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <RootLayout>
      <div>
        <h1>Home Page</h1>
        <p>Welcome to our website!</p>
      </div>
    </RootLayout>
  );
}
