import React from "react";

const footer = () => {
  return (
    <div className="flex flex-col">
      <div className="px-4 md:px-6 lg:px-20 bg-[#E1F8CF] flex justify-center items-center pt-12 lg:pt-20 pb-12 lg:pb-40 flex-col gap-8 font-utendo text-center w-full">
        <img src="/images/logo.svg" alt="" className="" />
        <span className=" font-[600] text-[24px] md:text-[32px] lg:text-[42px] text-[#0C3506] leading-[1]">
          At vovopay, we're committed to revolutionizing the way you manage your
          finances. Join us today and discover a new standard of digital wallet
          excellence.
        </span>
        <p className="text-[#0C3506] leading-[1] text-[16px] md:text-[24px] lg:px-20">
          Unauthorized use or reproduction of any content on this platform is
          strictly prohibited and may result in legal action. For inquiries,
          please contact our legal team at legal@vovopay.com.
        </p>
      </div>
      <div className="flex bg-[#0C3506] px-4 md:px-6 lg:px-20 justify-center md:justify-between w-full md:h-[64px] items-center flex-col md:flex-row gap-4 md:gap-0 py-6">
        <span className="font-utendo text-white text-[14px] lg:text-[20px] cursor-pointer">
          Terms and Conditions
        </span>
        <span className="font-utendo text-white text-[14px] lg:text-[20px] cursor-pointer">
          Privacy policy
        </span>
        <span className="font-utendo text-white text-[14px] lg:text-[20px] cursor-pointer">
          Legal Complaints
        </span>
        <span className="font-utendo text-white text-[14px] lg:text-[20px] cursor-pointer">
          © vovopay.com 2024
        </span>
      </div>
    </div>
  );
};

export default footer;
