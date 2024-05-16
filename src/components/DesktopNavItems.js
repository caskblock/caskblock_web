import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import Link from "next/link";

const DesktopNavItems = ({
  buttonAction,
  buttonLabel,
  activeAccountId,
  handleRedirect,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [secondAnchorEl, setSecondAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const secondOpen = Boolean(secondAnchorEl);

  const handleOpen = (event, target) => {
    if (target === "second") {
      setSecondAnchorEl(event.currentTarget);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSecondAnchorEl(null);
  };

  const handleClick = () => {
    handleRedirect();
    handleClose();
  };

  return (
    <>
      <div className="hidden lg:flex px-6">
        <ul className="nc-Navigation flex h-full gap-6">
          <li className="menu-item flex items-center menu-dropdown relative ">
            <button
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between text-sm xl:text-base font-normal text-neutral-700 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-100 min-w-36"
              onClick={handleOpen}
            >
              Discover
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="ml-1 -mr-1 h-4 w-4 text-neutral-400"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          {/* <li className="menu-item flex items-center">
            <button
              className="inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-100 min-w-36 justify-center"
              onClick={handleRedirect}
            >
              Wallet
            </button>
          </li> */}
          <div className="self-center hidden sm:block h-6 border-l border-neutral-300" />
          <li className="menu-item flex items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="cursor-pointer"
              onClick={(e) => handleOpen(e, "second")}
            >
              <path
                d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H6.26C4.19 22 2.5 20.31 2.5 18.24V11.51C2.5 9.44001 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M2.5 12.4101V7.8401C2.5 6.6501 3.23 5.59006 4.34 5.17006L12.28 2.17006C13.52 1.70006 14.85 2.62009 14.85 3.95009V7.75008"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M22.5588 13.9702V16.0302C22.5588 16.5802 22.1188 17.0302 21.5588 17.0502H19.5988C18.5188 17.0502 17.5288 16.2602 17.4388 15.1802C17.3788 14.5502 17.6188 13.9602 18.0388 13.5502C18.4088 13.1702 18.9188 12.9502 19.4788 12.9502H21.5588C22.1188 12.9702 22.5588 13.4202 22.5588 13.9702Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M7 12H14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </li>
        </ul>
      </div>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link
          className="flex w-full justify-center items-center py-2.5 px-4 text-sm font-normal tracking-wide hover:bg-neutral-100 rounded-lg text-neutral-700 min-w-36"
          href="/"
          onClick={handleClose}
        >
          Home
        </Link>
        <Link
          className="flex w-full justify-center items-center py-2.5 px-4 text-sm font-normal tracking-wide hover:bg-neutral-100 rounded-lg text-neutral-700 min-w-36"
          href="/products"
          onClick={handleClose}
        >
          Products
        </Link>
        <Link
          className="flex w-full justify-center items-center py-2.5 px-4 text-sm font-normal tracking-wide hover:bg-neutral-100 rounded-lg text-neutral-700 min-w-36"
          href="/distilleries"
          onClick={handleClose}
        >
          Distilleries
        </Link>
      </Menu>

      <Menu
        anchorEl={secondAnchorEl}
        open={secondOpen}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div className="relative grid grid-cols-1 gap-6 bg-white py-7 px-6">
          {activeAccountId && (
            <>
              <p className="text-xs mt-0.5">{activeAccountId}</p>
              <div className="w-full border-b border-neutral-200" />

              <button
                className="flex items-center gap-2 p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 min-w-36"
                onClick={handleClick}
              >
                <div className="flex items-center justify-center flex-shrink-0 text-neutral-500">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                My Items
              </button>
              <div className="w-full border-b border-neutral-200" />
            </>
          )}

          <button
            className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6 border bg-primary border-neutral-200 text-neutral-50 primary-button flex-1 min-w-36"
            onClick={() => {
              buttonAction();
              handleClose();
            }}
          >
            {buttonLabel}
          </button>
        </div>
      </Menu>
    </>
  );
};

export default DesktopNavItems;
