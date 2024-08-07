"use client";

import React, { useState } from "react";
import { ArrowNarrowRight, Menu } from "../ui/icons";
import { APP_ROUTES } from "@/constants";
import Link from "next/link";

const MobileNavigation = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <div className="relative xl:hidden">
      <div
        onClick={() => {
          setIsShowMenu((prev) => !prev);
        }}
        className="cursor-pointer rounded-lg border border-gray-1 p-2"
      >
        <Menu className="text-2xl" />
      </div>
      <div
        onClick={() => setIsShowMenu(false)}
        className={`absolute right-0 top-full z-50 mt-1 w-60 rounded-lg border bg-white shadow-box ${isShowMenu ? "block" : "hidden"}`}
      >
        <div className="border-b border-gray-1 border-gray-2/10">
          <Link href={"#"} className="flex items-center justify-between p-4">
            <p className="text-sm font-medium leading-5">Đăng ký/ Đăng nhập</p>
            <ArrowNarrowRight className="text-xl text-gray-2" />
          </Link>
        </div>

        <div>
          {APP_ROUTES.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="flex items-center justify-between px-4 py-3"
            >
              <p className="text-sm font-medium leading-5">{item.label}</p>
              <ArrowNarrowRight className="text-xl text-gray-2" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
