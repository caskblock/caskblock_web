"use client";
import { useMbWallet } from "@mintbase-js/react";
import { useState } from "react";
import SideBar from "./SideBar";
import DesktopNavItems from "./DesktopNavItems";

const Header = () => {
  const { isConnected, connect, activeAccountId, disconnect } = useMbWallet();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = () => {
    disconnect();
    if (window.location.pathname === "/wallet")
      setTimeout(() => (window.location.href = "/"), 10000);
  };

  const buttonAction = isConnected ? handleLogout : connect;

  const buttonLabel = isConnected
    ? `Sign Out`
    : " Connect NEAR Wallet";

  const handleRedirect = () => {
    if (!isConnected) {
      connect();
    } else {
      window.location.href = "/wallet";
    }
  };

  return (
    <div className="relative z-10 onTop">
      <div className="flex justify-between items-center px-6">
        <div className="flex justify-start py-5 flex-grow items-center space-x-3 sm:space-x-8 lg:space-x-10">
          <img className="max-h-12 block" src={"/logo.png"} alt="logo" />
        </div>

        {/* mobile */}
        <button
          className="lg:hidden p-2.5 rounded-lg text-neutral-700 focus:outline-none flex items-center justify-center"
          onClick={() => setDrawerOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        {/* desktop */}
        <DesktopNavItems 
          activeAccountId={activeAccountId}
          buttonAction={buttonAction}
          buttonLabel={buttonLabel}
          handleRedirect={handleRedirect}
          />
      </div>

      {drawerOpen && (
        <SideBar
          onDrawerChange={setDrawerOpen}
          onRedirect={handleRedirect}
          buttonAction={buttonAction}
          buttonLabel={buttonLabel}
          activeAccountId={activeAccountId}
        />
      )}
    </div>
  );
};

export default Header;
