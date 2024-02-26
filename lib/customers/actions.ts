"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import connect from "@/lib/database";
import { Customers } from "./Customers";
import { FormState } from "@/types/response.model";

const FormSchema = z.object({
  name: z.string({
    invalid_type_error: "Please insert a name.",
  }),
  surname: z.string({
    invalid_type_error: "Please insert an surname.",
  }),
  email: z.string({
    invalid_type_error: "Please insert a email.",
  }),
});

const Create = FormSchema.omit({});

const Update = FormSchema.omit({});

export const create = async (prevState: FormState, formData: FormData) => {
  // Validate form fields using Zod
  const validatedFields = Create.safeParse({
    name: formData.get("name"),
    surname: formData.get("surname"),
    email: formData.get("email"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create.",
    };
  }

  // Prepare data for insertion into the database
  const { name, surname, email } = validatedFields.data;
  try {
    await connect();
    await Customers.create({
      name,
      surname,
      email,
    });
  } catch (error) {
    // If a database error occurs, return a more specific error.
    console.error("Database Error:", error);
    return {
      message: "Database Error: Failed to Create.",
    };
  }

  revalidatePath("/dashboard/customers");
  redirect("/dashboard/customers");
};

export const update = async (
  _id: string,
  prevState: FormState,
  formData: FormData
) => {
  // Validate form fields using Zod
  const validatedFields = Update.safeParse({
    name: formData.get("name"),
    surname: formData.get("surname"),
    email: formData.get("email"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Update.",
    };

  // Prepare data for insertion into the database
  const { email, name, surname } = validatedFields.data;
  try {
    await connect();
    await Customers.updateOne(
      { _id },
      {
        email,
        name,
        surname,
      }
    );
  } catch (error) {
    console.error("Database Error:", error);
    return {
      message: "Database Error: Failed to Update.",
    };
  }

  revalidatePath("/dashboard/customers");
  redirect("/dashboard/customers");
};

export const deleteData = async (formData: FormData) => {
  try {
    await connect();
    await Customers.deleteOne({ _id: formData.get("_id") });
  } catch (error) {
    console.error("Database Error:", error);
    return { message: "Database Error: Failed to Delete." };
  }
  revalidatePath("/dashboard/customers");
};
