import React from "react";

const section3 = () => {
  return (
    <div className="px-4 md:px-6 lg:px-20 py-24">
      <div className="flex font-utendo justify-between items-center gap-6 lg:pb-12 lg:flex-row flex-col">
        <p className="text-[#0C3506] font-[600] lg:text-[42px] leading-[1] w-full lg:w-2/3 text-center lg:text-start text-[20px] md:text-[32px]">
          Instantly pay merchants by scanning QR codes, making transactions
          faster than ever.
        </p>
        <img src="/images/qr.svg" alt="" className="lg:hidden flex" />
        <button className="flex bg-[#0C3506] h-[50px] text-[#9FE870] rounded-xl gap-6 w-40 flex-shrink-0 justify-center items-center">
          Scan Now <img src="/images/scan.svg" alt="" className="" />
        </button>
      </div>
      <div className="w-full hidden lg:flex">
        <img src="/images/hero-img-2.svg" alt="hero" className="w-full" />
      </div>
    </div>
  );
};

export default section3;
