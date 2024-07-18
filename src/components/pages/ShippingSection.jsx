import { useState } from 'react';

const ShippingSection = ({ title, shipsTo, open=false }) => {
  const [isOpen, setIsOpen] = useState(open);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="page-section mb-8">
      <h3 className="text-xl mb-4 font-bold"
        onClick={toggleOpen}
        style={{ cursor: 'pointer' }}
      >
        {title} {isOpen ? '-' : '+'}
      </h3>
      {isOpen && (
        <ul>
          {shipsTo.map((location, index) => (
            <li key={index}>{location}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShippingSection;
