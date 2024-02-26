import Image from "next/image";
import Link from "next/link";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

import { deleteData } from "@/lib/customers/actions";
import { TCustomer } from "@/types/customer.model";
import { dashboard } from "@/assets/constants/navigation";

type Props = {
  data: TCustomer[];
};
const Table = ({ data }: Props) => {
  return (
    <table className="w-full mb-5">
      <thead>
        <tr>
          <td className="p-2 font-bold">Nome</td>
          <td className="p-2 font-bold">Cognome</td>
          <td className="p-2 font-bold">Email</td>
          <td className="p-2 font-bold">Azioni</td>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user._id}>
            <td className="p-2">{user.name}</td>
            <td className="p-2">{user.surname}</td>
            <td className="p-2">{user.email}</td>
            <td className="p-2">
              <div className="flex gap-2">
                <Link href={`${dashboard.customers.href}/${user._id}`}>
                  <button className="px-2 py-1 rounded text-text border-none bg-button-primary">
                    <PencilIcon width={20} height={20} />
                  </button>
                </Link>
                <form action={deleteData}>
                  <input type="hidden" name="_id" value={user._id} />
                  <button className="px-2 py-1 rounded text-text border-none bg-button-danger">
                    <TrashIcon width={20} height={20} />
                  </button>
                </form>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
