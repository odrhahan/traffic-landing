import Image from "next/image";
import React from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const EasyMoneySection = () => {
  return (
    <div className="overflow-hidden bg-[url(/images/easy-money/bg-mobile.png)] bg-cover pt-8 md:bg-[url(/images/easy-money/bg-1920.png)] lg:h-[1000px] 1.5xl:h-screen 2xl:mt-12 2xl:max-h-[1281px]">
      <h2 className="bg-gradient-to-r from-[#00AAFF] to-[#8636F8] bg-clip-text text-center text-3.25xl font-bold leading-10 text-transparent 2xl:text-5xl 2xl:leading-[80px]">
        Kiếm tiền online <br className="2xl:hidden" /> dễ dàng và an toàn
      </h2>
      <p className="mb-6 mt-2 text-center text-[28px] font-bold leading-10 text-gray-black 2xl:text-5.5xl">
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
