import Image from "next/image";
import NavLink from "@/ui/navLink";
import { Cog6ToothIcon, UserIcon } from "@heroicons/react/24/outline";

const menuItems = [
  {
    label: "Customers",
    path: "/dashboard/customers",
    icon: <UserIcon width={20} />,
    title: "customers",
  },
  {
    label: "Invoices",
    path: "/dashboard/invoices",
    icon: <Cog6ToothIcon width={20} />,
    title: "invoices",
  },
];

export default function SideNav() {
  return (
    <div className="flex h-screen flex-col items-center bg-gray-300 md:overflow-hidden p-4 gap-10">
      <Image src="/logo.png" alt="logo" width={200} height={64} />
      <div className="flex flex-col h-full w-full px-4 gap-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            label={item.label}
            path={item.path}
            icon={item.icon}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}
