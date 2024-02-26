import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8">
      Naviga verso la tua destinazione
      <div className="p-4 flex flex-col gap-4">
        <Link href="/bitrock">Home</Link>
        <Link href="/bitrock/about-us">Chi siamo</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
}
