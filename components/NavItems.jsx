import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavItems = () => {
  const navItems = [
    { id: 1, name: "Home", link: "/dashboard", icon: "/assets/icons/home.svg" },
    {
      id: 2,
      name: "Section 1",
      link: "/dashbord/section-1",
      icon: "/assets/icons/bars.svg",
    },
    {
      id: 3,
      name: "Section 2",
      link: "/dashbord/section-2",
      icon: "/assets/icons/section.svg",
    },
    {
      id: 4,
      name: "Section 8",
      link: "/dashbord/section-3",
      icon: "/assets/icons/share_gray.svg",
    },
  ];
  return (
    <div className="p-1 flex flex-col gap-6">
      {navItems.map((nav) => (
        <Link key={nav.id} href={nav.link} className="flex gap-6">
          <Image
            src={nav.icon}
            width={20}
            height={20}
            alt="nav icon"
            className="w-auto "
          />
          <p className="text-gray-500">{nav.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
