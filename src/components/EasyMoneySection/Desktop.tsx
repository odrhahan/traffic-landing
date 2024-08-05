import Image from "next/image";
import React from "react";

const Desktop = () => {
  return (
    <div className="relative hidden sm:block">
      <div className="absolute left-1/2 top-[122px] -translate-x-[635px]">
        <Image
          src={"/images/easy-money/quy-trinh.png"}
          alt="Quy trinh"
          width={665}
          height={657}
          className="relative z-10 max-w-none"
        />
        <Image
          src={"/images/easy-money/quy-trinh-bg-1920.png"}
          alt="Quy trinh bg"
          width={1048}
          height={1275}
          className="absolute top-1/2 h-[1275px] w-[1048px] max-w-none"
          style={{
            transform: "translate(0,-50%) rotate(-3.539deg) scale(1.3)",
          }}
        />
      </div>

      <div className="absolute left-1/2 -translate-x-[50px]">
        <Image
          src={"/images/easy-money/awesome-phone.png"}
          alt="Awesome phone"
          width={892}
          height={885}
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

export default Desktop;
