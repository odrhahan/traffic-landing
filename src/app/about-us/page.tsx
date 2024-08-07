import ChanelsSlider from "@/components/RelatingChanels/ChanelsSlider";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex h-[132px] flex-col items-center justify-center gap-3 bg-[url(/images/about/bg-mobile.png)] bg-cover bg-no-repeat md:h-[286px] md:gap-6 md:bg-[url(/images/about/bg-1920.png)]">
        <p className="leading-5.5 text-white md:text-lg">
          TRANG CHỦ -{">"} VỀ CHÚNG TÔI
        </p>
        <p className="bg-gradient-to-r from-[#A4FFDE] to-[#B5EDFF] bg-clip-text text-center text-[32px] font-bold text-transparent md:text-[72px]">
          VỀ TRAFFIC SEO
        </p>
      </div>

      <div className="relative mx-auto max-w-[1596px]">
        <div className="relative hidden pt-[95.719947322%] md:block">
          <Image alt="banner" src={"/images/about/banner.png"} fill />
        </div>

        <div className="relative pt-[95.719947322%] md:hidden">
          <Image alt="banner" src={"/images/about/banner-mobile.png"} fill />
        </div>

        <div className="right-0 top-15 mb-15 px-4 md:absolute md:mb-0 md:max-w-[375px] md:px-0 xl:max-w-[575px] 3xl:top-28">
          <p className="mb-2 bg-gradient-to-r from-[#0AF] to-[#8636F8] bg-clip-text text-xl font-bold leading-[1.1] text-transparent xl:text-[32px] 3xl:text-[40px]">
            Lorem ipsum dolor sit amet, consectetu
          </p>
          <p className="text-sm tracking-[-0.2px] text-gray-black md:text-base xl:text-[22px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>

        <div className="px-4 md:px-16 3xl:-mt-20">
          <div className="relative flex items-center gap-15 rounded-[18px] bg-gradient-to-b from-[#26A9E0] to-[#63D1FF] px-2 pb-6 pt-[46px] md:px-[68px] md:pb-[46px] lg:static">
            <Image
              alt=""
              src={"/images/about/icon.png"}
              width={194}
              height={194}
              className="absolute left-1/2 top-0 w-[70px] -translate-x-1/2 -translate-y-1/2 lg:static lg:w-[194px] lg:translate-x-0 lg:translate-y-0"
            />

            <p className="text-sm leading-normal text-white md:text-xl 2xl:text-[28px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="bg-gradient-to-r from-[#00AAFF] to-[#8636F8] bg-clip-text text-center text-3.25xl font-bold leading-10 text-transparent 2xl:text-5xl 2xl:leading-[80px]">
          Các kênh kiếm tiền
        </h2>
        <p className="mb-8 mt-2 text-center text-[28px] font-bold leading-10 text-gray-black 2xl:mb-10 2xl:text-5.5xl">
          Cùng cộng đồng traffic
        </p>
        <div className="slider-container relative bg-[url(/images/about/bg-2.png)] bg-cover bg-center bg-no-repeat pb-35 md:pb-[200px]">
          <ChanelsSlider />
          <Image
            alt=""
            src={"/images/relating-chanels/decore-1.png"}
            width={198}
            height={150}
            className="absolute -top-15 left-0 w-[83px] md:w-[198px] 3xl:left-1/2 3xl:-translate-x-[940px]"
          />
          {/*  */}
          <Image
            alt=""
            src={"/images/relating-chanels/decore-2.png"}
            width={100}
            height={152}
            className="absolute -top-[72px] right-0 hidden md:block 3xl:left-1/2 3xl:translate-x-[848px]"
          />
          <Image
            alt=""
            src={"/images/relating-chanels/decore-2-mobile.png"}
            width={43}
            height={33}
            className="absolute -top-[72px] right-[1%] block md:hidden 3xl:left-1/2 3xl:translate-x-[848px]"
          />
          {/*  */}
          <Image
            alt=""
            src={"/images/relating-chanels/decore-3.png"}
            width={194}
            height={144}
            className="absolute -bottom-0 left-0 w-[118px] md:-bottom-14 md:w-[194px] 3xl:left-1/2 3xl:-translate-x-[940px]"
          />
          <Image
            alt=""
            src={"/images/relating-chanels/decore-4.png"}
            width={126}
            height={94}
            className="absolute bottom-15 right-[2%] w-13.5 scale-125 md:bottom-10 md:w-[126px] 3xl:left-1/2 3xl:translate-x-[800px]"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
