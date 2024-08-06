import Image from "next/image";
import React from "react";

const Mobile = () => {
  return (
    <div className="lg:hidden">
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
          className="!top-1/2 !h-[130%] -translate-y-[30%]"
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
          alt="coin"
          width={64}
          height={58}
          className="absolute -top-4 right-2"
        />

        <Image
          src={"/images/easy-money/coin-1.png"}
          alt="coin"
          width={35}
          height={32}
          className="123123 absolute bottom-[64%] left-[72%]"
        />

        <Image
          src={"/images/easy-money/coin-2.png"}
          alt="coin"
          width={82}
          height={76}
          className="absolute left-[3%] top-1/2"
        />

        <Image
          src={"/images/easy-money/coin-3.png"}
          alt="coin"
          width={40}
          height={36}
          className="absolute -top-4 left-1/2 -translate-x-1/2"
        />
      </div>
    </div>
  );
};

export default Mobile;
