import React from "react";

const section1 = () => {
  return (
    <div className="px-20 pt-20 gap-20 flex flex-row w-full h-full">
      <div className="w-[40%] pr-6 flex flex-col justify-between">
        <div className="">
          <h1 className="font-utendo text-[50px] text-[#0C3506] font-[500] w-3/4 leading-[1] pb-4">
            Digital wallet made for Digital users.
          </h1>
          <p className="font-sofia text-[16px] text-[#0C3506] font-[400] pb-6">
            VOVO Pay all in one mobile wallet solution, where you can add ,
            withdraw , send and receive money instantly, all within a single,
            user-friendly app interface.
          </p>
          <button className="w-44 rounded-lg bg-[#0C3506] text-[#9FE870] font-utendo py-2 h-[50px]">
            Send money now
          </button>
        </div>
        <div className="flex flex-col gap-6 pb-8">
          <span className="font-sofia text-[#999999] text-[20px]">
            50K Users already Joined
          </span>
          <img src="/images/people.svg" alt="people" className="w-[160px]" />
        </div>
      </div>

      <div className="w-[60%] flex gap-10 relative">
        <div className="">
          <img src="/images/hero-img.svg" alt="screen" className="" />
        </div>
        <div className="flex flex-col gap-10">
          <img src="/images/vp-logo.svg" alt="logo" className="w-16" />
          <div className="text-[#0C3506]">
            <span className="font-utendo text-[48px] font-[600] leading-[1]">
              2.7M
            </span>
            <p className="font-sofia text-[16px]">Daily Transactions</p>
          </div>
          <div className="text-[#0C3506]">
            <span className="font-utendo text-[48px] font-[600] leading-[1]">
              $100M
            </span>
            <p className="font-sofia text-[16px]">Daily transfers</p>
          </div>
          <div className="p-8 rounded-full flex items-center justify-center bg-[#0C350633] h-fit">
            <img src="/images/play.svg" alt="play" className="h-24" />
          </div>
        </div>
        <div className="-z-[99] bg-[#F1FCE9] w-full rounded-t-full h-[68%] w-[650px] absolute -left-[110px] bottom-0 hidden lg:flex flex-shrink-0"></div>
      </div>
    </div>
  );
};

export default section1;
