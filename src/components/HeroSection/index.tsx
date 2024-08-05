import Image from "next/image";
import React from "react";
import { ArrowNarrowRight, Cheers, CustomerReview } from "../ui/icons";

const HeroSection = () => {
  return (
    <div className="h-auto bg-[url(/images/hero-section/background.png)] bg-cover py-6 2xl:relative 2xl:h-[960px] 2xl:py-0">
      <Image
        className="hidden 2xl:block"
        src={"/images/hero-section/overlay-line.png"}
        alt=""
        fill
      />
      <Image
        src={"/images/hero-section/float-image.png"}
        alt=""
        width={852}
        // fill
        height={768}
        className="right-13.5 z-20 mx-auto h-[346px] w-[384px] xl:top-1/2 xl:mt-0 xl:h-[576px] xl:w-[639px] xl:-translate-y-1/2 2xl:absolute 2xl:top-32.5 2xl:mx-0 2xl:h-[768px] 2xl:w-[852px] 2xl:translate-y-0"
      />

      <div className="px-4 2xl:absolute 2xl:left-60 2xl:top-1/2 2xl:-translate-y-1/2 2xl:px-0">
        <div className="flex flex-col gap-6 xl:w-1/2 2xl:w-[70%] 3xl:w-222.5">
          <div className="bg-gradient-to-r from-[#A4FFDE] to-[#B5EDFF] bg-clip-text text-3.25xl font-bold leading-8 tracking-[-0.2px] text-transparent 2xl:text-7xl 2xl:leading-[111.111%]">
            <p>Hệ thống kiếm tiền online</p>
            <p>uy tín nhất hiện nay</p>
          </div>
          <p className="text-xl font-bold leading-6 text-white 2xl:text-3.25xl">
            Cộng đồng traffic OKVIP
          </p>
          <p className="max-w-184 leading-7 text-white 2xl:text-lg 2xl:leading-5.5">
            Chỉ cần có thiết bị kết nối internet, bạn sẽ dễ dàng kiếm được tiền
            mà không cần tốn bất kỳ chi phí nào
          </p>
          <div className="flex gap-6">
            <div className="flex h-10 gap-3 2xl:h-14">
              <div className="rounded-full bg-white p-2 2xl:p-2.5">
                <CustomerReview className="text-2xl leading-6 2xl:text-[36px] 2xl:leading-9" />
              </div>
              <div>
                <p className="leading-6 text-white 2xl:pb-1 2xl:text-xl">
                  1000+
                </p>
                <p className="leading-5.5 text-white 2xl:text-lg">Thành Viên</p>
              </div>
            </div>
            <div className="flex h-10 gap-3 2xl:h-14">
              <div className="rounded-full bg-white p-2 2xl:p-2.5">
                <Cheers className="text-2xl leading-6 2xl:text-[36px] 2xl:leading-9" />
              </div>
              <div>
                <p className="leading-6 text-white 2xl:pb-1 2xl:text-xl">10+</p>
                <p className="leading-5.5 text-white 2xl:text-lg">
                  Nhân sự phát triển
                </p>
              </div>
            </div>
          </div>
        </div>

        <button className="mt-6 flex items-center gap-1.5 rounded-lg bg-secondary px-6 py-3 text-lg leading-5.5 text-white 2xl:mt-12.5 2xl:py-5 2xl:text-2xl 2xl:leading-7">
          Đăng ký ngay
          <ArrowNarrowRight />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
