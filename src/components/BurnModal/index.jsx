import { useState } from 'react';
import ModalTemplate from '../ModalTemplate';
import Burner from './Burner';
import KYCForm from './KYCForm';

const emptyUser = {email: '', name: ''};

const BurnModal = ({closeModal, tokenId}) => {
  const [step, setStep] = useState(0);
  const [user, setUser] = useState(emptyUser);

  const {email, name} = user;

  const handleChange = (event) => {
    const {name, value} = event.target;
    let newUser = {...user, [name]: value};
    setUser(newUser);
  };

  const handleSuccessfulBurn  = async (walletAddress, transactionHx) => {    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({tokenId, name, email, walletAddress, transactionHx}),
    });

    if (response.ok) {
      setStep(2);
      setTimeout(() => window.location.reload(), 5000);
    }
  };

  return (
    <ModalTemplate closeModal={closeModal} title="Burn" >
      
      { step == 0 &&
          <KYCForm email={email} name={name} onChange={handleChange} onSubmit={() => setStep(1)}/>
      }

      { step == 1 &&
          <Burner tokenId={tokenId} done={handleSuccessfulBurn} /> 
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
