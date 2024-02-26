import Link from "next/link";

import { getDataFiltered } from "@/lib/customers/data";
import { Pagination, Search } from "@/ui";
import Table from "@/ui/dashboard/customers/table";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { dashboard } from "@/assets/constants/navigation";

type Props = {
  searchParams?: {
    q?: string;
    p?: string;
  };
};
const Page = async ({ searchParams }: Props) => {
  const query = searchParams?.q || "";
  const currentPage = Number(searchParams?.p) || 1;
  const { totalPages = 0, data = [] } = await getDataFiltered(
    query,
    currentPage
  );

  return (
    <div className="bg-gray-light p-5 rounded">
      <div className="p-5 rounded font-bold test-test-light w-full">
        Customers
      </div>
      <div className="flex flex-wrap justify-between mb-4">
        <Search placeholder="Cerca utente per nome" />
        <Link href={`${dashboard.customers.href}/new`}>
          <button className="flex gap-2 items-center p-2 bg-button-primary text-text border-none rounded pointer">
            <PlusCircleIcon height={20} /> New
          </button>
        </Link>
      </div>
      <Table data={data} />
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default Page;
