import Image from "next/image";
import React from "react";
import { DownArrowCircle } from "./ui/icons/components/DownArrowCircle";
import Link from "next/link";

const Header = () => {
  return (
    <header className="px-62 h-25 flex justify-between">
      <Image
        src={"/images/traffic-logo.png"}
        alt="Traffic-logo"
        width={243}
        height={88}
      />

      <div className="flex gap-7 items-center">
        <Link href={"#"} className="text-xl leading-5 font-medium">
          Về chúng tôi
        </Link>
        <Link
          href={"#"}
          className="text-xl leading-5 font-medium flex items-center"
        >
          Hướng Dẫn&nbsp;
          <DownArrowCircle className="text-base" />
        </Link>
        <Link
          href={"#"}
          className="text-xl leading-5 font-medium flex items-center"
        >
          Cộng Đồng&nbsp;
          <DownArrowCircle className="text-base" />
        </Link>
        <Link href={"#"} className="text-xl leading-5 font-medium">
          Blog
        </Link>
      </div>

      <div className="flex gap-7 text-xl leading-5 items-center">
        <button className="text-primary py-4 text-xl leading-5 h-fit">
          Đăng Ký
        </button>
        <button className="bg-primary px-15 py-4 text-white text-xl leading-5 h-fit rounded-2xl">
          Đăng Nhập
        </button>
      </div>
    </header>
  );
};

export default Header;
