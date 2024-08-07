"use client";

import Slider from "react-slick";
import SlideItem from "./SlideItem";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import style from "./slider.style.module.scss";
import { ReactElement, ReactNode, useRef } from "react";
import { Dot } from "../ui/icons";

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

const ChanelsSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  let sliderRef = useRef<Slider>(null);
  return (
    <div className={`${style.container}`}>
      <Slider
        ref={sliderRef}
        {...settings}
        arrows={false}
        accessibility={false}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
        appendDots={(dots: ReactElement[]) => {
          return (
            <ul>
              {dots.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => sliderRef.current?.slickGoTo(index)}
                  >
                    <Dot
                      className={`${item.props.className.includes("slick-active") ? "text-primary" : "text-[#EAECF0]"}`}
                    />
                  </li>
                );
              })}
            </ul>
          );
        }}
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
    </div>
  );
};

export default ChanelsSlider;
