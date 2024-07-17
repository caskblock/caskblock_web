"use client";

import "@near-wallet-selector/modal-ui/styles.css";
import { Inter } from "next/font/google";
import "../styles.css";
import "./globals.css";

import { MintbaseWalletContextProvider } from "@mintbase-js/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "@/components/header.jsx";
import Footer from "@/components/footer.jsx";
import AgeGate from "@/components/AgeGate";

import { mbjs } from "@mintbase-js/sdk";

const inter = Inter({ subsets: ["latin"] });

export const isDev = process.env.NEXT_PUBLIC_ENV === 'dev'

export const getCallbackUrl = () => {
  let callbackUrl = ''

  if (typeof window !== 'undefined') {
    callbackUrl =
      isDev || window?.location?.host.includes('localhost')
        ? window.location.origin + window.location.pathname
        : `}`
  }
  return callbackUrl
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  mbjs.config({
    network: process.env.NEXT_PUBLIC_NETWORK || 'testnet'
  })

  const MintbaseWalletSetup = {
    contractAddress: "hellovirtualworld.mintspace2.testnet",
    network: "testnet",
    callbackUrl: getCallbackUrl(),
  };

  return (
    <QueryClientProvider client={queryClient}>
      <MintbaseWalletContextProvider {...MintbaseWalletSetup}>
        <html lang="en">
          <head>
            <title>CaskBlock</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Where Tangibility Meets Technology" />
            <link rel="icon" href="/favicon.png" />
          </head>
          <body className={inter.className}>
            <AgeGate>
              <Header />
              <div className="min-h-screen">{children}</div>
              <Footer />
            </AgeGate>
          </body>
        </html>
      </MintbaseWalletContextProvider>
    </QueryClientProvider>
  );
}
