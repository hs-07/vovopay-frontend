import React from "react";

const section2 = () => {
  return (
    <div className="flex flex-col px-4 md:px-6 lg:px-20 mt-24">
      <div className="flex justify-center w-full pb-20">
        <h1 className="font-utendo font-[500] text-[24px] lg:text-[46px] text-center w-full lg:w-2/3 leading-[1] text-[#0C3506]">
          With vovopay, managing your finances has never been easier :
        </h1>
      </div>

      <div className="w-full flex md:flex-row flex-col gap-8">
        <div className="w-full md:w-[50%] bg-[#F1FCE9] px-6 md:px-12 pt-8 rounded-3xl flex flex-col gap-8 justify-between items-center">
          <div className="w-full">
            <img src="/images/wallet.svg" alt="" className="w-16 md:w-24" />
          </div>
          <p className="font-utendo text-[24px] md:text-[28px] lg:text-[32px] font-[600] leading-[1]">
            Seamlessly store and manage your funds with our secure digital
            wallet.
          </p>
          <img src="/images/wallet-tilt.svg" alt="" className="" />
        </div>
        <div className="w-full md:w-[50%] bg-[#E1F8CF] px-6 md:px-12 pt-8 rounded-3xl flex flex-col gap-8 justify-between items-center">
          <div className="w-full">
            <img src="/images/screen.svg" alt="" className="w-16 md:w-24" />
          </div>
          <p className="font-utendo text-[24px] md:text-[28px] lg:text-[32px] font-[600] leading-[1]">
            Enjoy the convenience of a virtual debit card for online and
            in-store purchases.
          </p>
          <img src="/images/card-tilt.svg" alt="" className="" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-8">
        <div className="bg-[#C4F2A4]  rounded-3xl px-6 md:px-10 pt-10 pb-20 gap-6 flex flex-col">
          <img src="/images/light-wallet.svg" alt="" className="w-16 md:w-24" />
          <p className="font-utendo text-[#0C3506] text-[20px] md:text-[28px] lg:text-[32px] leading-[1] font-[600]">
            Add money to your wallet effortlessly, and withdraw funds directly
            to your bank account.
          </p>
        </div>
        <div className="bg-[#9FE870]  rounded-3xl px-6 md:px-10 pt-6 md:pt-10 pb-14 md:pb-20 gap-6 flex flex-col">
          <img src="/images/bank.svg" alt="" className="w-16 md:w-24" />
          <p className="font-utendo text-[#0C3506] text-[20px] md:text-[28px] lg:text-[32px] leading-[1] font-[600]">
            Link any bank account across the USA to your wallet for seamless
            transfers.
          </p>
        </div>
        <div className="bg-[#7BD942]  rounded-3xl px-6 md:px-10 pt-6 md:pt-10 pb-14 md:pb-20 gap-6 flex flex-col">
          <img src="/images/exchange.svg" alt="" className="w-16 md:w-24" />
          <p className="font-utendo text-[#0C3506] text-[20px] md:text-[28px] lg:text-[32px] leading-[1] font-[600]">
            Send and receive money with ease, whether it's to friends, family,
            or businesses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default section2;
