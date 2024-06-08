import React from "react";

const section1 = () => {
  return (
    <div className="px-4 md:px-6 lg:px-20 pt-20 gap-20 flex flex-col lg:flex-row w-full h-full">
      <div className="w-full lg:w-[40%] lg:pr-6 flex flex-col justify-between items-center lg:items-start">
        <div className="w-full flex flex-col items-center lg:items-start">
          <h1 className="font-utendo text-[40px] lg:text-[50px] text-[#0C3506] font-[500] w-full lg:w-3/4 leading-[1] pb-4 text-center lg:text-start">
            Digital wallet made for Digital users.
          </h1>
          <p className="font-sofia text-[16px] text-[#0C3506] font-[400] pb-6 text-center lg:text-start">
            VOVO Pay all in one mobile wallet solution, where you can add ,
            withdraw , send and receive money instantly, all within a single,
            user-friendly app interface.
          </p>
          <button className="w-44 rounded-lg bg-[#0C3506] text-[#9FE870] font-utendo py-2 h-[50px]">
            Send money now
          </button>
        </div>
        <div className="flex flex-col gap-6 pb-8 items-center lg:items-start pt-8 lg:pt-0">
          <span className="font-sofia text-[#999999] text-[20px]">
            50K Users already Joined
          </span>
          <img
            src="/images/people.svg"
            alt="people"
            className="w-[160px] h-full"
          />
          <span className="font-utendo text-[#0C3506] text-[24px] font-[600] text-center lg:hidden">
            Download our VOVOPAY App
          </span>
          <div className="flex justify-between w-full gap-2 lg:hidden">
            <button className="w-36 gap-2 rounded-lg bg-[#0C3506] text-[#9FE870] font-utendo py-2 h-[50px] flex justify-center items-center">
              <img src="/images/google-play.svg" alt="" className="" />
              Play Store
            </button>
            <button className="w-36 gap-2 rounded-lg bg-[#0C3506] text-[#9FE870] font-utendo py-2 h-[50px] flex justify-center items-center">
              <img src="/images/apple.svg" alt="" className="" />
              App Store
            </button>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[60%] flex gap-10 relative flex-col lg:flex-row">
        <div className="order-2 lg:order-1">
          <img src="/images/hero-img.svg" alt="screen" className="" />
        </div>
        <div className="flex flex-col gap-10 order-1 lg:order-2 items-center lg:items-start w-full lg:w-fit">
          <img src="/images/vp-logo.svg" alt="logo" className="w-16" />
          <div className="flex lg:flex-col gap-4 lg:gap-10">
            <div className="text-[#0C3506] flex flex-col items-center lg:items-start">
              <span className="font-utendo text-[40px] lg:text-[48px] font-[600] leading-[1]">
                2.7M
              </span>
              <p className="font-sofia text-[16px]">Daily Transactions</p>
            </div>
            <div className="text-[#0C3506] flex flex-col items-center lg:items-start">
              <span className="font-utendo text-[40px] lg:text-[48px] font-[600] leading-[1]">
                $100M
              </span>
              <p className="font-sofia text-[16px]">Daily transfers</p>
            </div>
          </div>
          <div className="p-8 rounded-full flex items-center justify-center bg-[#0C350633] h-fit w-fit lg">
            <img src="/images/play.svg" alt="play" className="h-24" />
          </div>
        </div>
        <div className="-z-[99] bg-[#F1FCE9] w-full rounded-t-full h-[68%] w-[620px] absolute -left-[110px] bottom-0 hidden lg:flex flex-shrink-0"></div>
      </div>
    </div>
  );
};

export default section1;
