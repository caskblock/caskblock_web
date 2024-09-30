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
import CookieConsent from "@/components/CookieConsent"; // Add this import
import ChatBot from "@/components/ChatBot"; // Add this import

import { mbjs } from "@mintbase-js/sdk";

import Script from 'next/script'; // Add this import

const inter = Inter({ subsets: ["latin"] });

// export const isDev = process.env.NEXT_PUBLIC_ENV === 'dev'

export const getCallbackUrl = () => {
  let callbackUrl = ''

  if (typeof window !== 'undefined') {
    callbackUrl = window.location.origin + window.location.pathname
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
    // contractAddress: "hellovirtualworld.mintspace2.testnet",
    network: mbjs.config().network,
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

            {/* Google Analytics Script */}
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />

            {/* Facebook Pixel */}
            <Script
              id="facebook-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
                  fbq('track', 'PageView');
                `,
              }}
            />
          </head>
          <body>
            {/* Facebook Pixel noscript */}
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
              />
            </noscript>
            <AgeGate>
              <Header />
              <div className="min-h-screen">{children}</div>
              <Footer />
            </AgeGate>
            <ChatBot />
            <CookieConsent />
          </body>
        </html>
      </MintbaseWalletContextProvider>
    </QueryClientProvider>
  );
}
