import Image from "next/image";
import React from "react";

export const MoneyIcon = () => {
  return (
    <div className="w-6 h-6 bg-gradient-to-l from-[#BBB5E2] to-[#9C92DF] rounded-full flex justify-center items-center">
      <Image
        src="/assets/icons/money-bag.svg"
        alt="moneybag icon"
        width={13}
        height={13}
        className="w-auto h-auto"
      />
    </div>
  );
};

export const PlusIcon = ({ isLoading }) => {
  return (
    <div
      className={`w-6 h-6 ${
        isLoading ? "bg-gray-400" : "bg-[#353945]"
      } rounded-full flex justify-center items-center`}
    >
      <Image
        src="/assets/icons/plus.svg"
        alt="moneybag icon"
        width={13}
        height={13}
        className="w-auto h-auto"
      />
    </div>
  );
};
export const EditIcon = () => {
  return (
    <div className="w-6 h-6 bg-[#353945] rounded-full flex justify-center items-center">
      <Image
        src="/assets/icons/Edit.svg"
        alt="moneybag icon"
        width={13}
        height={13}
        className="w-auto h-auto"
      />
    </div>
  );
};
export const ArrowLeftIcon = () => {
  return (
    <div className="w-6 h-6 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
        />
      </svg>
    </div>
  );
};
