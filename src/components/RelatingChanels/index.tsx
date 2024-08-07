import Image from "next/image";
import { ArrowNarrowRight } from "../ui/icons";
import ChanelsSlider from "./ChanelsSlider";

const RelatingChanels = () => {
  return (
    <div
      className={`mt-8 bg-bottom bg-no-repeat md:bg-[url(/images/relating-chanels/line-through.png)] 2xl:mt-10`}
    >
      <div className="mb-12.5 flex flex-col items-center 2xl:mb-8">
        <h2 className="bg-gradient-to-r from-[#00AAFF] to-[#8636F8] bg-clip-text text-center text-3.25xl font-bold leading-10 text-transparent 2xl:text-5xl 2xl:leading-[80px]">
          Các kênh kiếm tiền
        </h2>
        <p className="mb-8 mt-2 text-center text-[28px] font-bold leading-10 text-gray-black 2xl:mb-10 2xl:text-5.5xl">
          Cùng cộng đồng traffic
        </p>
        <button className="relative flex items-center rounded-lg border border-white bg-primary px-4 py-3 text-xl font-medium leading-6 -tracking-[0.2px] text-white shadow-xs 2xl:px-4.5 2xl:py-3 2xl:text-2.75xl 2xl:font-bold">
          Tham gia ngay&nbsp;
          <ArrowNarrowRight />
          <div className="absolute -bottom-[2px] left-0 right-0 top-0 rounded-lg shadow-inset"></div>
        </button>
      </div>
      <div className="slider-container relative bg-[url(/images/relating-chanels/bg-1920.png)] bg-center bg-no-repeat pb-35 md:pb-[200px]">
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
  );
};

export default RelatingChanels;
