import Image from "next/image";
import React from "react";
import {
  ArrowNarrowRight,
  CheckBlue,
  CheckOrange,
  CheckPurple,
  RectangleShadow,
} from "../ui/icons";

const SlideItem = ({
  items,
  title,
  bgFrom = "#FEE8FF",
  bgTo = "#DE9EFF",
  itemFrom = "#EE95F8",
  itemTo = "#8435E0",
  titleFrom = "#D485FF",
  titleTo = "#7112D8",
  topBgName = "trafficsseo",
  buttonFrom = "#7314D8",
  buttonTo = "#F162FC",
}: {
  title: "TRAFFICSSEO" | "TRAFFIC90" | "OKVIP.MONEY";
  items: string[];
  bgFrom?: string;
  bgTo?: string;
  itemFrom?: string;
  itemTo?: string;
  titleFrom?: string;
  titleTo?: string;
  topBgName?: string;
  buttonFrom?: string;
  buttonTo?: string;
}) => {
  const renderCheckIcion = () => {
    if (title === "OKVIP.MONEY")
      return (
        <Image
          alt=""
          src={"/images/relating-chanels/check-orange.png"}
          width={38}
          height={38}
          className="h-[38px] w-[38px]"
        />
      );
    if (title === "TRAFFIC90")
      return (
        <Image
          alt=""
          src={"/images/relating-chanels/check-blue.png"}
          width={38}
          height={38}
          className="h-[38px] w-[38px]"
        />
      );
    if (title === "TRAFFICSSEO")
      return (
        <Image
          alt=""
          src={"/images/relating-chanels/check-purple.png"}
          width={38}
          height={38}
          className="h-[38px] w-[38px]"
        />
      );
  };

  return (
    <div
      style={{
        background: `linear-gradient(to bottom, ${bgFrom}, ${bgTo})`,
      }}
      className="relative mx-auto md:mx-0 h-[745px] w-[336px] rounded-[94px] 2xl:h-[849px] 2xl:w-[432px]"
    >
      <div className="relative w-full pt-[33.928%] 2xl:pt-[45.958%]">
        <Image
          alt=""
          src={`/images/relating-chanels/${topBgName}-header.png`}
          fill
        />
        <p
          style={{
            backgroundImage: `linear-gradient(0deg, ${titleFrom}, ${titleTo})`,
          }}
          className="trafficsseo-bg absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-[42px] font-bold leading-[42px] 2xl:text-5.5xl 2xl:leading-[52px]"
        >
          {title}
        </p>
      </div>
      <div className="px-4.5 pt-9">
        {items.map((title) => (
          <>
            <div
              style={{
                background: `linear-gradient(to right, ${itemFrom}, ${itemTo})`,
              }}
              className="mb-2.5 flex h-13.5 items-center gap-2.5 rounded-[94px] px-2 py-2 last:mb-0"
            >
              {renderCheckIcion()}
              <p className="text-[17px] leading-5 tracking-[-0.169px] text-white">
                {title}
              </p>
            </div>
          </>
        ))}
      </div>

      <button
        style={{
          background: `linear-gradient(to bottom, ${buttonFrom}, ${buttonTo})`,
        }}
        className="absolute bottom-12 left-1/2 flex w-[216px] -translate-x-1/2 items-center rounded-[100px] px-9 py-3 text-[17px] leading-6 -tracking-[0.2px] text-white 2xl:py-5"
      >
        Tìm hiểu thêm&nbsp;
        <ArrowNarrowRight />
        <RectangleShadow className="absolute top-full" />
      </button>
    </div>
  );
};

export default SlideItem;
