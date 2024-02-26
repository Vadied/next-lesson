import { unstable_noStore as noStore } from "next/cache";

import connect from "@/lib/database";
import { Customers } from "./Customers";
import { ITEMS_PER_PAGE } from "@/assets/constants";
import { TCustomer } from "@/types/customer.model";

export const getData = async (_id: string) => {
  noStore();
  try {
    await connect();
    const data: TCustomer | null = await Customers.findOne({ _id }).lean();
    if (!data) return null;

    return {
      ...data,
      _id: data._id.toString(),
    } as TCustomer;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return null;
  }
};

export const getAllData = async () => {
  noStore();
  try {
    await connect();

    const getData: Promise<TCustomer[]> = Customers.find({})
      .sort({ updatedAt: -1 })
      .lean();

    const [data] = await Promise.all([getData]);

    return data.map((d) => ({
      ...d,
      _id: d._id.toString(),
    })) as TCustomer[];
  } catch (error) {
    console.error("Database Error:", error);
    return {};
  }
};

export const getDataFiltered = async (query: string, currentPage: number) => {
  if (currentPage < 1) return {};

  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    await connect();
    const condition = {
      name: { $regex: new RegExp(query, "i") },
    };

    const getData: Promise<TCustomer[]> = Customers.find(condition)
      .skip(offset)
      .limit(ITEMS_PER_PAGE)
      .sort({ updatedAt: -1 })
      .lean();

    const getCount = Customers.countDocuments(condition);

    const [data, count] = await Promise.all([getData, getCount]);

    return {
      data: data.map((d) => ({
        ...d,
        _id: d._id.toString(),
      })) as TCustomer[],
      totalPages: Math.ceil(Number(count) / ITEMS_PER_PAGE),
    };
  } catch (error) {
    console.error("Database Error:", error);
    return {};
  }
};
