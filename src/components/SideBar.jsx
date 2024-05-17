import React from "react";
import Link from "next/link";

const SideBar = ({
  onDrawerChange,
  buttonLabel,
  buttonAction,
  onRedirect,
  activeAccountId,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed right-0 top-0 bottom-0 w-full md:w-auto z-max outline-none focus:outline-none">
        <div
          className="z-10 relative opacity-100 translate-x-0"
          onClick={() => onDrawerChange(false)}
        >
          <div className="overflow-y-auto w-full max-w-sm h-screen py-2 transition transform shadow-lg ring-1 bg-white divide-y-2 divide-neutral-100">
            <div className="py-6 px-5">
              <div className="flex items-center justify-between">
                <img className="max-h-12" src={"/logo.png"} alt="PWX" />
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md hover:border-primary text-gray-400 hover:text-primary transition duration-150 ease-in-out"
                  onClick={() => onDrawerChange(false)}
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
                <li className="text-neutral-900">
                  <Link
                    className="flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-neutral-100 rounded-lg text-neutral-700"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-neutral-900">
                  <Link
                    className="flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-neutral-100 rounded-lg text-neutral-700"
                    href="/products"
                  >
                    Products
                  </Link>
                </li>
                <li className="text-neutral-900">
                  <Link
                    className="flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-neutral-100 rounded-lg text-neutral-700"
                    href="/distilleries"
                  >
                    Distilleries
                  </Link>
                </li>
                <li className="text-neutral-900">
                  <Link
                    className="flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-neutral-100 rounded-lg text-neutral-700"
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="text-neutral-900">
                  <button
                    className="flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-neutral-100 rounded-lg text-neutral-700"
                    onClick={onRedirect}
                  >
                    Wallet
                  </button>
                </li>
              </ul>

              {activeAccountId && (
                <div className="flex flex-col mt-5 text-neutral-700 text-sm pb-5 border-b">
                  <span className="text-neutral-900">{activeAccountId}</span>
                </div>
              )}

              <div className="flex items-center justify-between py-6 px-5 space-x-2">
                <button
                  onClick={(e) => buttonAction(e)}
                  className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6 border bg-primary border-neutral-200 text-neutral-50 primary-button flex-1"
                >
                  {buttonLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
