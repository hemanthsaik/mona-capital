import React from "react";

const ProfileIcon = ({ name, className }) => {
  const firstLetter = name.charAt(0).toUpperCase();
  return (
    <div className={`${className}`}>
      <p className="flex bg-[#3772FF] w-full h-full items-center justify-center text-white  rounded-full uppercase font-bold">
        {firstLetter}
      </p>
    </div>
  );
};

export default ProfileIcon;
