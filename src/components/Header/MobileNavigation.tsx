"use client";

import React, { useState } from "react";
import { ArrowNarrowRight, Menu } from "../ui/icons";

const MobileNavigation = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => {
          setIsShowMenu((prev) => !prev);
        }}
        className="cursor-pointer rounded-lg border border-gray-1 p-2"
      >
        <Menu className="text-2xl" />
      </div>
      <div
        className={`absolute right-0 top-full z-50 mt-1 w-60 rounded-lg border bg-white shadow-box ${isShowMenu ? "block" : "hidden"}`}
      >
        <div className="border-b border-gray-1 border-gray-2/10 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium leading-5">Đăng ký/ Đăng nhập</p>
            <ArrowNarrowRight className="text-xl text-gray-2" />
          </div>
        </div>

        <div className="flex flex-col gap-3 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium leading-5">Về chúng tôi</p>
            <ArrowNarrowRight className="text-xl text-gray-2" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium leading-5">Hướng dẫn</p>
            <ArrowNarrowRight className="text-xl text-gray-2" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium leading-5">Cộng đồng</p>
            <ArrowNarrowRight className="text-xl text-gray-2" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium leading-5">Blog</p>
            <ArrowNarrowRight className="text-xl text-gray-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
