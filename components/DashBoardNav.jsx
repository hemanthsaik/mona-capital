import Link from "next/link";
import React from "react";

import ProfileIcon from "./ProfileIcon";
import NavItems from "./NavItems";
import NavitemsFooter from "./NavitemsFooter";

const DashBordNav = () => {
  const data = {
    name: "Name",
    value: "XYZ",
  };
  return (
    <section className="w-1/5 h-screen border-r-2 dark:border-gray-700">
      <div className="p-5 h-full flex flex-col justify-between">
        <div className="p-3">
          <Link href="/dashboard" className="flex gap-2">
            <ProfileIcon
              name={data.name}
              className="w-[30px] h-[28px] text-sm"
            />
            <p className="font-bold text-2xl">{data.name}</p>
          </Link>
          <div className="mt-8">
            <NavItems />
          </div>
        </div>
        <div>
          <NavitemsFooter data={data} />
        </div>
      </div>
    </section>
  );
};

export default DashBordNav;
