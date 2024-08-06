import Image from "next/image";
import React from "react";

const Desktop = () => {
  return (
    <div className="relative hidden sm:block">
      <div className="absolute left-1/2 top-[122px] -translate-x-[717px]">
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

      <div className="absolute left-1/2 -translate-x-[135px]">
        <Image
          src={"/images/easy-money/awesome-phone.png"}
          alt="Awesome phone"
          width={892}
          height={885}
          className="z-10 relative"
        />

        <Image
          src={"/images/easy-money/coin-1.png"}
          alt="coin"
          width={127}
          height={112}
          className="absolute top-[27%] right-2"
        />

        <Image
          src={"/images/easy-money/coin-1.png"}
          alt="coin"
          width={68}
          height={62}
          className="absolute bottom-[33%] left-[74%] z-20"
        />

        <Image
          src={"/images/easy-money/coin-2.png"}
          alt="coin"
          width={162}
          height={153}
          className="absolute left-[7%] top-[77%] z-20"
        />

        <Image
          src={"/images/easy-money/coin-3.png"}
          alt="coin"
          width={78}
          height={71}
          className="absolute top-[21%] left-[48%]"
        />
      </div>
    </div>
  );
};

export default Desktop;
