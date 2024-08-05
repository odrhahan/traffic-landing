import Image from "next/image";
import React from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const EasyMoneySection = () => {
  return (
    <div className="h-screen bg-[url(/images/easy-money/bg-mobile.png)] max-h-[1281px] bg-cover pt-8 sm:overflow-hidden sm:bg-[url(/images/easy-money/bg-1920.png)]">
      <h2 className="bg-gradient-to-r from-[#00AAFF] to-[#8636F8] bg-clip-text text-center text-3.25xl font-bold leading-10 text-transparent 2xl:text-5xl 2xl:leading-[80px]">
        Kiếm tiền online <br className="2xl:hidden" /> dễ dàng và an toàn
      </h2>
      <p className="text-gray-black 2xl:text-5.5xl mb-6 mt-2 text-center text-[28px] font-bold leading-10">
        Cùng cộng đồng traffic
      </p>

      {/* use for temp */}
      <Mobile />
      <Desktop />
      {/*  */}
    </div>
  );
};

export default EasyMoneySection;
