"use client";

const labels = {
  step1: "Discover & Choose",
  text1: "Discover our options and choose your favorite.",
  step2: "Connect Wallet",
  text2: "Connect your wallet, there is more than one option.",
  step3: "Pay & Execute",
  text3: "Pay the item you choose before and execute the operation.",
  step4: "Receive Item",
  text4: "Receive the item in your wallet",
}


const HowTo = () => {

  return (
    <div id="how-to" className="mt-24 mx-auto">
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16 xl:gap-20">

        <div className="relative flex flex-col items-center max-w-xs mx-auto">
          <div className="mb-4 sm:mb-10 max-w-[260px] mx-auto">
            <img alt="HIW" loading="lazy" width="260" decoding="async" data-nimg="1" className="rounded-3xl" sizes="150px" src="/steps/step1.png" />
          </div>

          <div className="text-center mt-auto space-y-5">
            <h3 className="text-base font-semibold">{ labels.step1 }</h3>
            <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6">{ labels.text1 }</span>
          </div>
        </div>

        <div className="relative flex flex-col items-center max-w-xs mx-auto">
          <div className="mb-4 sm:mb-10 max-w-[260px] mx-auto">
            <img alt="HIW" loading="lazy" width="260" decoding="async" data-nimg="1" className="rounded-3xl" sizes="150px" src="/steps/step2.png" />
          </div>

          <div className="text-center mt-auto space-y-5">
            <h3 className="text-base font-semibold">{ labels.step2 }</h3>
            <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6">{ labels.text2 }</span>
          </div>
        </div>

        <div className="relative flex flex-col items-center max-w-xs mx-auto">
          <div className="mb-4 sm:mb-10 max-w-[260px] mx-auto">
            <img alt="HIW" loading="lazy" width="260" decoding="async" data-nimg="1" className="rounded-3xl" sizes="150px" src="/steps/step3.png" />
          </div>

          <div className="text-center mt-auto space-y-5">
            <h3 className="text-base font-semibold">{ labels.step3 }</h3>
            <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6">{ labels.text3 }</span>
          </div>
        </div>

        <div className="relative flex flex-col items-center max-w-xs mx-auto">
          <div className="mb-4 sm:mb-10 max-w-[260px] mx-auto">
            <img alt="HIW" loading="lazy" width="260" decoding="async" data-nimg="1" className="rounded-3xl" sizes="150px" src="/steps/step4.png" />
          </div>

          <div className="text-center mt-auto space-y-5">
            <h3 className="text-base font-semibold">{ labels.step4 }</h3>
            <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6">{ labels.text4 }</span>
          </div>
        </div>
      </div>
    </div>

  );
};

export default HowTo;
