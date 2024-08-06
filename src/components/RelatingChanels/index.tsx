"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import style from "./slider.style.module.scss";
import SlideItem from "./SlideItem";
import { ArrowNarrowRight, CheckBlue, CheckOrange } from "../ui/icons";
import Image from "next/image";

const TRAFFICSSEO = [
  "1 tài khoản trafficsseo",
  "Treo tool tự động trên máy tính",
  "Mỗi nhiệm vụ hoàn thành được + 800 đồng",
  "Mức rút tối thiểu chỉ từ 100K",
  "Lượng nhiệm vụ không giới hạn",
  "Thu nhập không giới hạn",
  "Giới thiệu bạn bè tham gia nhận thêm hoa hồng 5%",
];

const TRAFFIC90 = [
  "1 tài khoản traffic90",
  "Ưu tiên làm nhiệm vụ trên điện thoại di động",
  "Mỗi nhiệm vụ hoàn thành được + 800 đồng",
  "Mức rút tối thiểu chỉ từ 100K",
  "Lượng nhiệm vụ không giới hạn",
  "Thu nhập không giới hạn",
  "Giới thiệu bạn bè tham gia nhận thêm hoa hồng 5%",
];

const OKVIP_MONEY = [
  "1 tài khoản trafficsseo",
  "Treo tool tự động trên máy tính",
  "Mỗi nhiệm vụ hoàn thành được + 700 đồng",
  "Mức rút tối thiểu chỉ từ 100K",
  "Lượng nhiệm vụ không giới hạn",
  "Thu nhập không giới hạn",
];

const RelatingChanels = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div
      className={`${style.container} mt-8 md:bg-[url(/images/relating-chanels/line-through.png)] bg-bottom bg-no-repeat 2xl:mt-10`}
    >
      <div className="mb-12.5 flex flex-col items-center 2xl:mb-8">
        <h2 className="bg-gradient-to-r from-[#00AAFF] to-[#8636F8] bg-clip-text text-center text-3.25xl font-bold leading-10 text-transparent 2xl:text-5xl 2xl:leading-[80px]">
          Các kênh kiếm tiền
        </h2>
        <p className="mb-8 mt-2 text-center text-[28px] font-bold leading-10 text-gray-black 2xl:mb-10 2xl:text-5.5xl">
          Cùng cộng đồng traffic
        </p>
        <button className="2xl:text-2.75xl 2xl:px-4.5 shadow-xs relative flex items-center rounded-lg border border-white bg-primary px-4 py-3 text-xl font-medium leading-6 -tracking-[0.2px] text-white 2xl:py-3 2xl:font-bold">
          Tham gia ngay&nbsp;
          <ArrowNarrowRight />
          <div className="shadow-inset absolute -bottom-[2px] left-0 right-0 top-0 rounded-lg"></div>
        </button>
      </div>
      <div className="slider-container relative bg-[url(/images/relating-chanels/bg-1920.png)] bg-no-repeat bg-center pb-[200px]">
        <Slider
          {...settings}
          arrows={false}
          accessibility={false}
          responsive={[
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          <SlideItem items={TRAFFICSSEO} title="TRAFFICSSEO" />

          <SlideItem
            items={TRAFFIC90}
            title="TRAFFIC90"
            bgFrom={"#20B4FF"}
            bgTo={"#95E4FF"}
            itemFrom={"#03BBE4"}
            itemTo={"#0114E5"}
            titleFrom="#0185FF"
            titleTo="#0634EA"
            topBgName="traffic90"
            buttonFrom="#0335EA"
            buttonTo="#01CBFD"
          />

          <SlideItem
            items={OKVIP_MONEY}
            title="OKVIP.MONEY"
            bgFrom={"#FFBB3A"}
            bgTo={"#FFDC84"}
            itemFrom={"#F7C800"}
            itemTo={"#FF5E07"}
            topBgName="okvip"
            buttonFrom="#FF6107"
            buttonTo="#FFD735"
            titleFrom="#FFDC44"
            titleTo="#FF7400"
          />
        </Slider>

        <Image
          alt=""
          src={"/images/relating-chanels/decore-1.png"}
          width={198}
          height={150}
          className="absolute -top-15 left-1/2 -translate-x-[940px]"
        />
        <Image
          alt=""
          src={"/images/relating-chanels/decore-2.png"}
          width={100}
          height={152}
          className="absolute -top-[72px] left-1/2 translate-x-[848px]"
        />
        <Image
          alt=""
          src={"/images/relating-chanels/decore-3.png"}
          width={194}
          height={144}
          className="absolute -bottom-14 left-1/2 -translate-x-[940px]"
        />
        <Image
          alt=""
          src={"/images/relating-chanels/decore-4.png"}
          width={126}
          height={94}
          className="absolute bottom-10 left-1/2 translate-x-[800px] scale-125"
        />
      </div>
    </div>
  );
};

export default RelatingChanels;
