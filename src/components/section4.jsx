import React from "react";

const section4 = () => {
  return (
    <div className="flex px-4 md:px-6 lg:px-20 bg-[#F1FCE9] py-12 flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-[50%] flex flex-col justify-center gap-6">
        <img src="/images/clock.svg" alt="" className="w-16 md:w-24" />
        <span className="font-utendo text-[20px] md:text-[32px] lg:text-[46px] font-[600] text-[#0C3506] leading-[1] lg:pr-14">
          Stay informed with comprehensive activity logs tracking all your
          transactions.
        </span>
      </div>
      <div className="w-full lg:w-[50%] flex justify-center ">
        <img src="/images/short-hero-3.svg" alt="" className="lg:hidden flex" />
        <img
          src="/images/hero-img-3.svg"
          alt=""
          className=" h-[80vh] hidden lg:flex"
        />
      </div>
    </div>
  );
};

export default section4;
