import React from "react";

const section7 = () => {
  return (
    <div className="px-4 md:px-6 lg:px-20 py-20">
      <div className="bg-[#E1F8CF] w-full p-12 rounded-3xl mb-6">
        <span className="text-[#0C3506] text-[20px] font-[600] leading-[1] font-utendo md:text-[32px] lg:text-[42px]">
          Count on our dedicated support team to assist you with any inquiries
          or concerns, ensuring a smooth and reliable experience for all our
          customers.
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 font-utendo gap-6 ">
        <div className="flex bg-[#E1F8CF] rounded-3xl gap-4 md:gap-8 p-4 md:p-6 items-center">
          <img src="/images/phone.svg" alt="" className="w-16 md:w-20" />
          <p className="md:text-[24px] text-[16px] text-[#0C3506] font-[400]">
            +18825016341
          </p>
        </div>
        <div className="flex bg-[#E1F8CF] rounded-3xl gap-4 md:gap-8 p-4 md:p-6 items-center">
          <img src="/images/msg.svg" alt="" className="w-16 md:w-20" />
          <p className="md:text-[24px] text-[16px] text-[#0C3506] font-[400]">
            support@vovopay.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default section7;
