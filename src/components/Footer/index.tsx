import Image from "next/image";
import React from "react";
import { Email, Phone } from "../ui/icons";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-[1440px] px-4 md:px-10">
      <div className="flex flex-col gap-12 pb-12 pt-16 md:flex-row md:gap-8">
        <div className="flex-1">
          <Image
            alt=""
            src={"/images/traffic-logo.png"}
            width={243}
            height={80}
            className="mb-6 md:mb-4"
          />
          <p className="text-tertiary mb-6 leading-6 md:mb-8">
            Hệ thống kiếm tiền online uy tín nhất hiện nay - <br />
            Cộng đồng traffic OKVIP
          </p>
          <div className="gap grid grid-cols-2 gap-x-8 gap-y-3 md:flex md:gap-8">
            <p className="text-tertiary font-semibold">Về chúng tôi</p>
            <p className="text-tertiary font-semibold">Hướng dẫn</p>
            <p className="text-tertiary font-semibold">Cộng đồng</p>
            <p className="text-tertiary font-semibold">Blog</p>
          </div>
        </div>

        <div className="md:basis-[294px]">
          <div className="flex justify-between md:block">
            <div className="mb-6 flex gap-2">
              <Email className="text-2xl font-bold" />
              <div>
                <p className="font-semibold leading-7 text-gray-black">Email</p>
                <p className="text-tertiary leading-7">royap@abc.com</p>
              </div>
            </div>

            <div className="mb-12 flex gap-2 md:mb-6">
              <Phone className="text-2xl font-bold" />
              <div>
                <p className="font-semibold leading-7 text-gray-black">
                  Số điện thoại
                </p>
                <p className="text-tertiary leading-7">+84 899 239 000</p>
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <Image
              alt=""
              src={"/images/app-store.png"}
              width={135}
              height={40}
              className="cursor-pointer"
            />
            <Image
              alt=""
              src={"/images/google-play.png"}
              width={135}
              height={40}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="border-gray-6 border-t pb-12 pt-8">
        <p className="text-quarterary-500">
          © 2077 Untitled UI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
