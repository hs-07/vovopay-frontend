import React from "react";

const section5 = () => {
  return (
    <div className="flex px-4 md:px-6 lg:px-20 w-full py-20 gap-12 md:flex-row flex-col">
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 md:gap-12 md:pr-12 order-1 md:order-2">
        <span className="text-[#0C3506] text-[24px] md:text-[34px] lg:text-[46px] font-[600] font-utendo leading-[1]">
          Experience a user-friendly interface
        </span>
        <p className="font-sofia text-[16px] lg:text-[24px]">
          Designed for smooth navigation and hassle-free transactions.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center md:pl-12  gap-4 md:gap-8 order-2 md:order-1">
        <img
          src="/images/hero-img-4.svg"
          alt=""
          className="h-[70vh] hidden md:flex"
        />
        <img
          src="/images/short-hero-4.svg"
          alt=""
          className="md:hidden flex w-4/5"
        />
      </div>
    </div>
  );
};

export default section5;
