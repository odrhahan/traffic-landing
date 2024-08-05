import Image from "next/image";
import Link from "next/link";
import { DownArrowCircle } from "../ui/icons/components/DownArrowCircle";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  return (
    <header className="flex h-15 items-center justify-between px-4 2xl:h-25 3xl:px-62">
      <Image
        src={"/images/traffic-logo.png"}
        alt="Traffic-logo"
        width={243}
        height={88}
        className="w-[123px] 2xl:w-[243px]"
      />

      <div className="hidden items-center gap-7 3xl:flex">
        <Link href={"#"} className="text-xl font-medium leading-5">
          Về chúng tôi
        </Link>
        <Link
          href={"#"}
          className="flex items-center text-xl font-medium leading-5"
        >
          Hướng Dẫn&nbsp;
          <DownArrowCircle className="text-base" />
        </Link>
        <Link
          href={"#"}
          className="flex items-center text-xl font-medium leading-5"
        >
          Cộng Đồng&nbsp;
          <DownArrowCircle className="text-base" />
        </Link>
        <Link href={"#"} className="text-xl font-medium leading-5">
          Blog
        </Link>
      </div>

      <div className="hidden items-center gap-7 text-xl leading-5 3xl:flex">
        <button className="h-fit py-4 text-xl leading-5 text-primary">
          Đăng Ký
        </button>
        <button className="h-fit rounded-2xl bg-primary px-15 py-4 text-xl leading-5 text-white">
          Đăng Nhập
        </button>
      </div>

      <MobileNavigation />
    </header>
  );
};

export default Header;
