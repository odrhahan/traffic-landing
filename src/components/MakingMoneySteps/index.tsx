import React from "react";
import { ArrowNarrowRight } from "../ui/icons";
import Image from "next/image";

const MakingMoneySteps = () => {
  return (
    <div
      id="huongdan"
      className="bg-[url(/images/making-money-steps/bg-mobile.png)] bg-cover sm:bg-[url(/images/making-money-steps/bg-1920.png)] md:bg-contain"
    >
      <div className="mb-16 flex flex-col items-center 2xl:mb-8">
        <h2 className="bg-gradient-to-r from-[#00AAFF] to-[#8636F8] bg-clip-text text-center text-3.25xl font-bold leading-10 text-transparent 2xl:text-5xl 2xl:leading-[80px]">
          3 Bước để bắt đầu kiếm tiền
        </h2>
        <p className="mb-8 mt-2 text-center text-[28px] font-bold leading-10 text-gray-black 2xl:mb-10 2xl:text-5.5xl">
          Cùng cộng đồng traffic
        </p>
        <button className="relative flex items-center rounded-lg bg-primary px-4 py-3 text-xl font-medium leading-6 -tracking-[0.2px] text-white shadow-xs 2xl:px-4.5 2xl:py-3 2xl:text-2.75xl 2xl:font-bold">
          Trải nghiệm ngay&nbsp;
          <ArrowNarrowRight />
          <div className="absolute -bottom-[2px] left-0 right-0 top-0 rounded-lg shadow-inset"></div>
        </button>
      </div>

      <div className="flex flex-col gap-6 md:flex-row 2xl:justify-center 2xl:gap-0">
        <div className="relative flex flex-col items-center 2xl:translate-x-24">
          <Image
            alt=""
            src={"/images/making-money-steps/step-1-top.png"}
            width={152}
            height={154}
            className="relative z-[2] 2xl:h-[211px] 2xl:w-[211px]"
          />
          <div className="absolute top-20 z-[1] h-[221px] w-[210px] rounded-xl border-b-[18px] border-[#3DBBE6] bg-white py-[50px] pb-[50px] pt-20 text-center shadow-box-step 2xl:top-32 2xl:h-[322px] 2xl:w-[286px]">
            <p className="bg-gradient-to-r from-[#ADFF00] to-[#0767F7] bg-clip-text text-[32px] font-bold leading-8 text-transparent 2xl:mt-5 2xl:text-[43px]">
              Bước 1
            </p>
            <p className="mt-5 text-[20px] leading-8 2xl:mt-6 2xl:text-3xl">
              Lựa chọn website
            </p>
          </div>
          <Image
            alt=""
            src={"/images/making-money-steps/step-1-bottom.png"}
            width={430}
            height={438}
            className="translate-x-2.5 2xl:h-[598px] 2xl:w-[632px] 2xl:translate-x-[17px]"
          />
        </div>
        <div className="relative flex flex-col items-center">
          <Image
            src={"/images/making-money-steps/arrow.png"}
            alt=""
            width={48}
            height={83}
            className="absolute -top-[78px] rotate-90 md:left-[-13%] md:top-1/2 md:h-[120px] md:w-[70px] md:-translate-y-1/2 md:rotate-0 1.5xl:left-6 1.5xl:-translate-y-35"
          />
          <Image
            alt=""
            src={"/images/making-money-steps/step-2-top.png"}
            width={152}
            height={154}
            className="relative z-[2] 2xl:h-[211px] 2xl:w-[211px]"
          />
          <div className="absolute top-20 z-[1] h-[221px] w-[210px] rounded-xl border-b-[18px] border-[#3DBBE6] bg-white py-[50px] pb-[50px] pt-20 text-center shadow-box-step 2xl:top-32 2xl:h-[322px] 2xl:w-[286px]">
            <p className="bg-gradient-to-r from-[#ADFF00] to-[#0767F7] bg-clip-text text-[32px] font-bold leading-8 text-transparent 2xl:mt-5 2xl:text-[43px]">
              Bước 2
            </p>
            <p className="mt-5 text-[20px] leading-8 2xl:mt-6 2xl:text-[28px]">
              Xem hướng dẫn
            </p>
            <p className="text-[20px] leading-8 2xl:mt-5 2xl:text-[28px]">
              Đăng ký tài khoản
            </p>
          </div>
          <Image
            alt=""
            src={"/images/making-money-steps/step-2-bottom.png"}
            width={430}
            height={438}
            className="translate-x-2.5 2xl:h-[598px] 2xl:w-[632px] 2xl:translate-x-[17px]"
          />

          <Image
            src={"/images/making-money-steps/arrow.png"}
            alt=""
            width={48}
            height={83}
            className="absolute -bottom-7 rotate-90 md:right-[-19%] md:top-1/2 md:h-[120px] md:w-[70px] md:-translate-y-1/2 md:rotate-0 1.5xl:right-3 1.5xl:top-1/2 1.5xl:-translate-y-35"
          />
        </div>
        <div className="relative flex flex-col items-center 2xl:-translate-x-24">
          <Image
            alt=""
            src={"/images/making-money-steps/step-3-top.png"}
            width={152}
            height={154}
            className="relative z-[2] 2xl:h-[211px] 2xl:w-[211px]"
          />
          <div className="absolute top-20 z-[1] h-[221px] w-[210px] rounded-xl border-b-[18px] border-[#3DBBE6] bg-white py-[50px] pb-[50px] pt-20 text-center shadow-box-step 2xl:top-32 2xl:h-[322px] 2xl:w-[286px]">
            <p className="bg-gradient-to-r from-[#ADFF00] to-[#0767F7] bg-clip-text text-[32px] font-bold leading-8 text-transparent 2xl:mt-5 2xl:text-[43px]">
              Bước 3
            </p>
            <p className="mt-5 text-[20px] leading-8 2xl:mt-6 2xl:text-[28px]">
              Làm nhiệm vụ
            </p>
            <p className="text-[20px] leading-8 2xl:mt-5 2xl:text-[28px]">
              Nhận tiền
            </p>
          </div>
          <Image
            alt=""
            src={"/images/making-money-steps/step-3-bottom.png"}
            width={430}
            height={438}
            className="translate-x-2.5 2xl:h-[598px] 2xl:w-[632px] 2xl:translate-x-[17px]"
          />
        </div>
      </div>
    </div>
  );
};

export default MakingMoneySteps;
