import Image from "next/image";
import React from "react";
import { ArrowNarrowRight } from "../ui/icons";

const CommunitySection = () => {
  return (
    <div className="flex min-h-[710px] items-center justify-center bg-[url(/images/community/bg-1920.png)] bg-cover">
      <div className="relative flex min-h-[400px] w-[75%] max-w-[1440px] flex-col items-center rounded-[40px] bg-[url(/images/community/bg-inner-1920.png)] bg-cover bg-no-repeat pb-10 pt-8">
        <Image
          alt=""
          src={"/images/community/avatar.png"}
          width={155}
          height={72}
          className="mb-8"
        />
        <p className="mb-4 text-center text-[48px] font-bold leading-[72px] text-white">
          Cộng đồng traffic OKVIP
        </p>
        <p className="mb-6 max-w-[620px] text-xl leading-8 text-white text-center tracking-[-0.3px]">
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
          className="absolute bottom-1/2 right-3.5"
        />
        <Image
          alt=""
          src={"/images/community/people.png"}
          width={279}
          height={358}
          className="absolute left-16 top-1/2 h-[358px] w-auto -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default CommunitySection;
