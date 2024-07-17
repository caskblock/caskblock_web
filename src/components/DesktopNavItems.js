import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import Link from "next/link";
import { menuItems } from "@/utils/menuItems";

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
        <ul className="flex h-full gap-6">
          <li className="menu-item flex items-center scale-80">
            <a className="social" href="https://x.com/caskblock" target="_blank" rel="noreferrer" >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#600060" class="bi bi-twitter-x" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
            </svg>
            </a>
          </li>

          <li className="menu-item flex items-center scale-80">
            <a className="social" href="https://www.facebook.com/caskblock" target="_blank" rel="noreferrer" >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#600060" class="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
              </svg>
            </a>
          </li>

          <li className="menu-item flex items-center scale-80">
            <a className="social" href="https://www.instagram.com/caskblock/" target="_blank" rel="noreferrer" >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#600060" class="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path>
            </svg>
            </a>
          </li>

          <li className="menu-item flex items-center scale-80">
            <a className="social" href="https://www.linkedin.com/company/caskblock" target="_blank" rel="noreferrer" >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#600060" class="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg>
            </a>
          </li>

          <li className="menu-item flex items-center menu-dropdown relative ">
            <button
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between text-sm xl:text-base font-normal text-purple py-2 px-4 xl:px-5 rounded-full min-w-36"
              onClick={handleOpen}
            >
              Discover
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#600060"
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
              className="inline-flex items-center text-sm xl:text-base font-normal text-purple py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-100 min-w-36 justify-center"
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
                stroke="#600060"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M2.5 12.4101V7.8401C2.5 6.6501 3.23 5.59006 4.34 5.17006L12.28 2.17006C13.52 1.70006 14.85 2.62009 14.85 3.95009V7.75008"
                stroke="#600060"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M22.5588 13.9702V16.0302C22.5588 16.5802 22.1188 17.0302 21.5588 17.0502H19.5988C18.5188 17.0502 17.5288 16.2602 17.4388 15.1802C17.3788 14.5502 17.6188 13.9602 18.0388 13.5502C18.4088 13.1702 18.9188 12.9502 19.4788 12.9502H21.5588C22.1188 12.9702 22.5588 13.4202 22.5588 13.9702Z"
                stroke="#600060"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M7 12H14"
                stroke="#600060"
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
        {menuItems.map((item) => (
          <Link
            key={item.name}
            className="flex w-full justify-center items-center py-2.5 px-4 text-sm font-normal tracking-wide bg-beige-hover rounded-lg text-purple min-w-36"
            href={item.link}
            onClick={handleClose}
          >
            {item.label}
          </Link>
        ))}
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
                className="flex items-center gap-2 p-2 -m-3 transition duration-150 ease-in-out rounded-lg text-purple bg-beige-hover min-w-36 justify-center"
                onClick={handleClick}
              >
                My Orders
              </button>
              <div className="w-full border-b border-neutral-200" />
            </>
          )}

          <button
            className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6 cb-primary-button flex-1 min-w-36"
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
