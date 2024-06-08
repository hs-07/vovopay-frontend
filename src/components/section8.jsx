import React from "react";
import TickerBanner from "./ticker-banner";

const section8 = () => {
  return (
    <div className="px-4 md:px-6 lg:px-20 py-20">
      <div className="bg-[#0C3506] rounded-[20px] md:rounded-[34px] lg:rounded-[50px] md:px-6 pt-6">
        <TickerBanner />
        <div className="md:mx-12 lg:mx-20 border-t-[4px] border-[#9FE870] flex flex-col md:flex-row gap-8 px-4">
          <div className="w-full md:w-[50%] py-6 flex flex-col items-center md:items-start gap-6 ">
            <img src="/images/qr-2.svg" alt="" className="w-16 md:w-24" />
            <span className="text-[30px] md:text-[36px] font-[600] lg:text-[40px] font-utendo text-white w-full text-center md:text-start md:w-2/3 leading-[1.2]">
              Download our VOVOPAY App
            </span>

            <div className="flex w-full gap-4 md:flex-row flex-col items-center">
              <button className="px-4 w-fit gap-2 rounded-lg bg-[#0C3506] text-[#9FE870] border-2 border-[#9FE870] font-utendo py-2 h-[50px] flex justify-center items-center">
                <img src="/images/google-play.svg" alt="" className="" />
                Google Play Store
              </button>
              <button className="px-4 w-fit gap-2 rounded-lg bg-[#0C3506] text-[#9FE870] border-2 border-[#9FE870] font-utendo py-2 h-[50px] flex justify-center items-center">
                <img src="/images/apple.svg" alt="" className="" />
                App Store
              </button>
            </div>
            <span className="font-utendo text-white text-[20px] font-[400]">
              hello@vovopay.com
            </span>
            <div className="flex gap-4">
              <img
                src="/images/lin.svg"
                alt=""
                className="cursor-pointer hover:scale-105 transition-all ease-in-out"
              />
              <img
                src="/images/insta.svg"
                alt=""
                className="cursor-pointer hover:scale-105 transition-all ease-in-out"
              />
              <img
                src="/images/fb.svg"
                alt=""
                className="cursor-pointer hover:scale-105 transition-all ease-in-out"
              />
              <img
                src="/images/x.svg"
                alt=""
                className="cursor-pointer hover:scale-105 transition-all ease-in-out"
              />
            </div>
          </div>
          <div className="w-full md:w-[50%] flex items-end">
            <img src="/images/hero-img-5.svg" alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default section8;
