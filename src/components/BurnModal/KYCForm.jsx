import React from 'react';
import Textfield from './Textfield';
import labels from '@/utils/formLabels';

const KYCForm = ({user, onChange, onSubmit, error}) => {

  const {name, surname, email, idCard, vat, propertyName, propertyVat, address, country} = user;

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <div className='text-center'>In order to redeem your item, you need to provide your email and name.</div>
        <Textfield name="name" value={name} onChange={onChange} form={"kyc"}/>
        <Textfield name="surname" value={surname} onChange={onChange} form={"kyc"}/>
        <div>
            <label className="text-base font-medium " data-nc-id="Label">{labels.kyc.email}</label>
            <div className={`mt-1.5 flex block w-full rounded-2xl text-sm font-normal h-11border`}>
                <span className="inline-flex items-center px-2.5 rounded-l-2xl text-neutral-500 dark:text-neutral-400 text-sm border"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path></svg></span>
                <input type="text" id="email" name="email" placeholder='example@email.com' value={email} className={`w-full rounded-r-2xl text-sm font-normal h-11 px-4 py-3 border`} onChange={onChange}/>
            </div>
        </div>
        <Textfield name="idCard" value={idCard} onChange={onChange} form={"kyc"}/>
        <Textfield name="vat" value={vat} onChange={onChange} form={"kyc"}/>
        <Textfield name="propertyName" value={propertyName} onChange={onChange} form={"kyc"}/>
        <Textfield name="propertyVat" value={propertyVat} onChange={onChange} form={"kyc"}/>
        <Textfield name="address" value={address} onChange={onChange} form={"kyc"}/>
        <Textfield name="country" value={country} onChange={onChange} form={"kyc"}/>

        {error && <div className="text-red-500">{error}</div>}  
        
        <div className="flex items-center justify-between py-6 space-x-2">
            <button className="relative h-11 inline-flex items-center justify-center rounded-2xl transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6 border bg-primary border-neutral-200 text-neutral-50 primary-button flex-1">Submit</button>
        </div>
    </form>
  );
};

export default KYCForm;