import React from "react";

const TickerBanner = () => {
  const tickers = [
    { text: "Wallet" },
    { text: "Add money" },
    { text: "Withdraw money" },
    { text: "Send money" },
    { text: "Request Money" },
    { text: "Debit card" },
  ];

  return (
    <div className="w-full overflow-x-hidden mb-24 py-4 bg-[#0C3506]">
      <ul className="ticker flex items-center">
        {tickers.concat(tickers).map((ticker, index) => (
          <li className="mr-8 flex items-center text-[24px] gap-2" key={index}>
            <img src="/images/star.svg" alt="" className="" />
            <div className="text-white font-sofia">{ticker.text}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TickerBanner;
