import type { Metadata } from "next";
import SiteNav from "@/ui/bitrock/siteNav";

export const metadata: Metadata = {
  title: "Bitrock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <SiteNav />
      <div className="p-8">{children}</div>
    </div>
  );
}
