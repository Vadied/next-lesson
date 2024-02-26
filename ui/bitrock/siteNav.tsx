import Image from "next/image";
import NavLink from "../navLink";

const menuItems = [
  {
    label: "Home",
    path: "/bitrock",
    title: "bitrock",
  },
  {
    label: "About Us",
    path: "/bitrock/about-us",
    title: "about-us",
  },
  {
    label: "Dashboard",
    path: "/dashboard",
    title: "dashboard",
  },
];

export default function SiteNav() {
  return (
    <div className="flex w-full items-center bg-gray-300 md:overflow-hidden py-4 px-8 gap-10">
      <Image src="/logo.png" alt="logo" width={200} height={64} />
      <div className="flex w-full justify-end items-center gap-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            label={item.label}
            path={item.path}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}
