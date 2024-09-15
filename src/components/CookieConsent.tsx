import { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center">
      <p>This website uses cookies to enhance the user experience.</p>
      <button
        onClick={acceptCookies}
        className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-200"
      >
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;
