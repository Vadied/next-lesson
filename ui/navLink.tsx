"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  path,
  label,
  title,
  icon = "",
}: {
  path: string;
  label: string;
  title: string;
  icon?: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname.endsWith(title);
  const activeClass = isActive ? "font-bold bg-white" : "";

  return (
    <Link
      className={`flex gap-2 rounded p-2 text-lg ${activeClass} hover:bg-white transition-colors duration-200 ease-in-out`}
      href={path}
    >
      {icon} {label}
    </Link>
  );
}
