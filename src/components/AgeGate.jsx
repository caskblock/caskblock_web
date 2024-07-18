"use client";
import React, { useState, useEffect } from 'react';

const AgeGate = ({ children }) => {
  const [skipGate, setSkipGate] = useState(false);
  const [transactionHashes, setTransactionHashes] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setSkipGate(params.get('skg'));
      setTransactionHashes(params.get('transactionHashes'));
    }
  }, []);

  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const ageVerified = localStorage.getItem('ageVerified');

    if (ageVerified) {
      setIsVerified(true);
    }
  }, []);

  const handleSubmit = () => {
    localStorage.setItem('ageVerified', true);
    setIsVerified(true);
  };

  if (skipGate || transactionHashes || isVerified) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <img src="/logo.png" alt="logo" className="max-w-sm mb-12 mx-auto w-full" />

        <p className="text-lg mt-8 mb-4">You must confirm that you are legal to drink in your country</p>

        <div className="mt-8 mb-8">
          <button onClick={() => setIsVerified(false)} className="cb-secondary-button px-4 py-2 rounded">
            No
          </button>

          <button onClick={() => handleSubmit()} className="cb-primary-button px-4 py-2 rounded  ml-2">
            Yes
          </button>
        </div>

        <p className="text-sm mb-4">
          CaskBlock encourages responsible drinking. Alcohol should be consumed in moderation. <br />
          By entering this website, you are agreeing to our
          <a className="underline pl-1" href='/pages/terms-and-conditions?skg=1' target='_blank' rel='noreferrer'>Terms and Conditions</a>, and
          <a className="underline pl-1" href='/pages/terms-and-conditions?skg=1' target='_blank' rel='noreferrer'>Cookie Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default AgeGate;
