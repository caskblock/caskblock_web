"use client";
import { useMbWallet } from "@mintbase-js/react";
import { useState } from "react";
import Link from 'next/link'


const Header = () => {
  const { isConnected, connect, activeAccountId, disconnect } = useMbWallet();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const buttonLabel = isConnected
    ? `Sign Out ${activeAccountId}`
    : " Connect NEAR Wallet";

  const buttonAction = isConnected ? disconnect : connect;

  return (
    <div className="relative z-10 onTop">
      <div className="container relative flex justify-between items-center space-x-4 xl:space-x-8 px-6">
        <div className="flex justify-start py-5 flex-grow items-center space-x-3 sm:space-x-8 lg:space-x-10">
          <img className="hidden max-h-12 dark:block" src="" alt="PWX"/>
        </div>
        <button className="p-2.5 rounded-lg text-neutral-700 dark:text-neutral-300 focus:outline-none flex items-center justify-center" onClick={() => setDrawerOpen(!drawerOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
          </svg>
        </button>
      </div>

      {drawerOpen &&
        <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
          <div className="fixed right-0 top-0 bottom-0 w-full md:w-auto z-max outline-none focus:outline-none">
            <div className="z-10 relative opacity-100 translate-x-0">
              <div className="overflow-y-auto w-full max-w-sm h-screen py-2 transition transform shadow-lg ring-1 dark:ring-neutral-700 bg-white dark:bg-neutral-900 divide-y-2 divide-neutral-100 dark:divide-neutral-800">
                <div className="py-6 px-5">
                  <div className="flex items-center justify-between">
                    <img className="hidden max-h-12 dark:block" src="" alt="PWX"/>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md hover:border-primary text-gray-400 hover:text-primary transition duration-150 ease-in-out"
                      onClick={() => setDrawerOpen(!drawerOpen)}
                      aria-label="Close"
                    >
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex flex-col mt-5 text-neutral-700 text-sm pb-5 border-b">
                    <span className="text-neutral-900">Backed by real life</span>
                  </div>
                                
                  <ul className="flex flex-col py-6 px-2 space-y-1 pb-5 border-b">  
                    <li className="text-neutral-900 dark:text-white">
                      <Link
                        className="flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-neutral-100 rounded-lg text-neutral-700"
                        href="/">Home</Link>
                    </li>
                    <li className="text-neutral-900 dark:text-white">
                      <Link
                        className="flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-neutral-100 rounded-lg text-neutral-700"
                        href="/wallet">Wallet</Link>

                    </li>
                  </ul>
    
                  <div className="flex items-center justify-between py-6 px-5 space-x-2">
                    <button onClick={buttonAction} className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6 border bg-primary border-neutral-200 text-neutral-50 primary-button flex-1">{buttonLabel}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Header;
