import Image from "next/image";
import Link from "next/link";
import { DownArrowCircle } from "../ui/icons/components/DownArrowCircle";
import MobileNavigation from "./MobileNavigation";
import { APP_ROUTES } from "@/constants";

const Header = () => {
  return (
    <header className="flex h-15 items-center justify-between px-4 md:px-10 xl:h-25 3xl:px-62">
      <Link href={"/"}>
        <Image
          src={"/images/traffic-logo.png"}
          alt="Traffic-logo"
          width={243}
          height={88}
          className="w-[123px] xl:w-[243px]"
        />
      </Link>

      <div className="hidden items-center gap-7 xl:flex">
        {APP_ROUTES.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center text-xl font-medium leading-5"
          >
            {item.label}
            {item.icon && (
              <>
                &nbsp;
                <DownArrowCircle className="text-base" />
              </>
            )}
          </Link>
        ))}
      </div>

      <div className="hidden items-center gap-7 text-xl leading-5 xl:flex">
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
