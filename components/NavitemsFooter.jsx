import React from "react";
import ToggleButton from "./DarkModeToggleButton";
import ProfileIcon from "./ProfileIcon";
import Image from "next/image";

const NavitemsFooter = ({ data }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex w-60 h-8 text-sm gap-2">
        <div className="flex h-full items-center gap-2 bg-gray-300 dark:bg-gray-700 rounded-lg px-2 py-1 ">
          <ProfileIcon name="hemanthsai" className="w-4 h-[14px] text-[9px]" />
          <p className="text-gray-600 dark:text-white ">$0.40</p>
        </div>
        <div className="flex h-full items-center gap-2 bg-[#A3E3FF] rounded-lg px-2 py-1">
          <p className="text-[#3772FF]">Buy ${data.value}</p>
        </div>
      </div>
      <div className="flex gap-3">
        <Image
          src="/assets/icons/Language.svg"
          alt="language icon"
          className="w-auto h-auto"
          width={15}
          height={15}
        />
        <ToggleButton />
      </div>
    </div>
  );
};

export default NavitemsFooter;
