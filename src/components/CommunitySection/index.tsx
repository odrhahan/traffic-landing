import Image from "next/image";
import React from "react";
import { ArrowNarrowRight } from "../ui/icons";

const CommunitySection = () => {
  return (
    <div className="flex min-h-[710px] items-center justify-center bg-[url(/images/community/bg-1920.png)] bg-cover px-4">
      <div className="relative flex min-h-[332px] max-w-[1440px] flex-col items-center rounded-[40px] bg-[url(/images/community/bg-inner-1920.png)] bg-cover bg-no-repeat px-[2px] pb-10 pt-8 2xl:min-h-[400px] md:w-[75%]">
        <Image
          alt=""
          src={"/images/community/avatar.png"}
          width={155}
          height={72}
          className="mb-2 w-[86px] 2xl:mb-8 md:w-[155px]"
        />
        <p className="text-center text-[32px] font-bold leading-[72px] tracking-[-0.64px] text-white 2xl:mb-4 md:text-[48px]">
          Cộng đồng traffic OKVIP
        </p>
        <p className="mb-6 max-w-[620px] text-center text-sm leading-8 tracking-[-0.3px] text-white md:text-xl">
          Chỉ cần có thiết bị kết nối internet, bạn sẽ dễ dàng kiếm được tiền mà
          không cần tốn bất kỳ chi phí nào
        </p>
        <button className="px-4.5 flex items-center rounded-lg bg-white py-3 font-semibold text-gray-black">
          Tham gia ngay &nbsp;
          <ArrowNarrowRight />
        </button>

        <Image
          alt=""
          src={"/images/community/clound.png"}
          width={279}
          height={178}
          className="absolute bottom-1/2 right-3.5 w-[86px]"
        />
        <Image
          alt=""
          src={"/images/community/people.png"}
          width={279}
          height={358}
          className="absolute bottom-6 left-2 h-[116px] w-auto 2xl:left-16 2xl:top-1/2 2xl:h-[358px] 2xl:-translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default CommunitySection;
