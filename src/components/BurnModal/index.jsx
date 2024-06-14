import { useState } from 'react';
import ModalTemplate from '../ModalTemplate';
import Burner from './Burner';
import KYCForm from './KYCForm';
import { useMbWallet } from "@mintbase-js/react";

const emptyUser = {email: '', name: ''};

const BurnModal = ({closeModal, tokenId, success}) => {
  const [step, setStep] = useState(success ? 2 : 0);
  const [user, setUser] = useState(emptyUser);
  const [error, setError] = useState('');

  const { activeAccountId } = useMbWallet();

  const {name, surname, email, idCard, vat, propertyName, propertyVat, address, country} = user;

  const handleChange = (event) => {
    const {name, value} = event.target;
    let newUser = {...user, [name]: value};
    setUser(newUser);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const walletAddress = activeAccountId;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({tokenId, walletAddress, name, surname, email, idCard, vat, propertyName, propertyVat, address, country}),
    });

    const parsedResponse = await response.json();
    const { orderId } = parsedResponse;
    if (orderId) {
      localStorage.setItem('orderId', orderId);
      console.log("setting step 1")
      setStep(1)
    } else {
      console.log("setting step 2")
      setError('Please fill all fields');
    }
  };

  return (
    <ModalTemplate closeModal={closeModal} title="Redeem" >

      { step == 0 &&
          <KYCForm user={user} onChange={handleChange} onSubmit={(e) => handleSubmit(e)} error={error} />
      }

      { step == 1 &&
          <Burner tokenId={tokenId} />
      }

      { step == 2 &&
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <p>Your order has been created. We will contact you shortly.</p>
          </div>
      }

    </ModalTemplate>
  );
};

export default BurnModal;
