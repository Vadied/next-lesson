"use client";

import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import {
  Cog6ToothIcon,
  UserIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import noProfile from "@/assets/images/no_profile.png";

import SideElement from "../sideElement";
import { dashboard, login } from "@/assets/constants/navigation";

const menuItems = [
  {
    title: dashboard.name,
    path: dashboard.href,
    icon: <Cog6ToothIcon width={20} />,
  },
  {
    title: dashboard.customers.name,
    path: dashboard.customers.href,
    icon: <UserIcon width={20} />,
  },
  {
    title: dashboard.invoices.name,
    path: dashboard.invoices.href,
    icon: <Cog6ToothIcon width={20} />,
  },
];

const Sidebar = () => {
  const { data: session } = useSession();

  console.log(session?.user);

  const handleSignOut = () => {
    signOut({ callbackUrl: login.href });
  };

  return (
    <div className="flex flex-col gap-4 bg-gray-light p-5 sticky">
      <div className="flex items-center gap-5">
        <Image src="/logo.png" alt="logo" width={200} height={64} />
      </div>
      <div className="h-full flex flex-col justify-between gap-4">
        <ul className="list-none">
          {menuItems.map((item) => (
            <li key={item.title} className="">
              <SideElement item={item} />
            </li>
          ))}
        </ul>

        <div>
          <div className="flex items-center gap-5">
            <Image
              src={session?.user?.image || noProfile}
              width={50}
              height={50}
              alt="profile image"
              className="rounded-full object-cover"
            />
            <div className="flex flex-col">
              <div className="text-bold">{session?.user?.name}</div>
            </div>
          </div>
          <button
            className="w-full p-5 flex gap-2 items-center rounded hover:bg-gray-lighter"
            onClick={handleSignOut}
          >
            <ArrowLeftOnRectangleIcon width={20} /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
