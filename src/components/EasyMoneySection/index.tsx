import Image from "next/image";
import React from "react";

const EasyMoneySection = () => {
  return (
    <div className="h-screen bg-[url(/images/easy-money/bg-mobile.png)] bg-cover pt-8 2xl:bg-[url(/images/easy-money/bg-1920.png)]">
      <h2 className="bg-gradient-to-r from-[#00AAFF] to-[#8636F8] bg-clip-text text-center text-3.25xl font-bold leading-10 text-transparent 2xl:text-5xl 2xl:leading-[80px]">
        Kiếm tiền online <br className="2xl:hidden" /> dễ dàng và an toàn
      </h2>
      <p className="text-gray-black 2xl:text-5.5xl mb-6 mt-2 text-center text-[28px] font-bold leading-10">
        Cùng cộng đồng traffic
      </p>

      <div className="relative pt-[100%]">
        <Image
          src={"/images/easy-money/quy-trinh.png"}
          alt="Quy trinh"
          fill
          className="z-10 p-5"
        />
        <Image
          src={"/images/easy-money/quy-trinh-bg.png"}
          alt="Quy trinh bg"
          fill
          className="-translate-y-[30%] !top-1/2 !h-[130%]"
        />
      </div>

      <div className="relative mt-[84px] pt-[105.288%]">
        <Image
          src={"/images/easy-money/awesome-phone.png"}
          alt="Awesome phone"
          fill
        />

        <Image
          src={"/images/easy-money/coin-1.png"}
          alt="Awesome phone"
          width={64}
          height={58}
          className="absolute -top-4 right-2"
        />

        <Image
          src={"/images/easy-money/coin-1.png"}
          alt="Awesome phone"
          width={35}
          height={32}
          className="123123 absolute bottom-[64%] left-[72%]"
        />

        <Image
          src={"/images/easy-money/coin-2.png"}
          alt="Awesome phone"
          width={82}
          height={76}
          className="absolute left-[3%] top-1/2"
        />

        <Image
          src={"/images/easy-money/coin-3.png"}
          alt="Awesome phone"
          width={40}
          height={36}
          className="absolute -top-4 left-1/2 -translate-x-1/2"
        />
      </div>
    </div>
  );
};

export default EasyMoneySection;
