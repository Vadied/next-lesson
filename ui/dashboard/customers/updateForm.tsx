"use client";

import { useFormState } from "react-dom";

import { update } from "@/lib/customers/actions";
import { FormState } from "@/types/response.model";
import Input from "@/ui/inputs/textInput";
import { TCustomer } from "@/types/customer.model";

type Props = {
  data: TCustomer;
};
const UpdateForm = ({ data }: Props) => {
  const initialState: FormState = { message: null, errors: {} };
  const updateWithRef = update.bind(null, data._id);
  const [state, dispatch] = useFormState(updateWithRef, initialState);

  return (
    <form action={dispatch} className="">
      <div className="flex flex-wrap justify-between gap-5 mb-4">
        <Input
          name="name"
          label="Name"
          type="name"
          value={data.name}
          required={true}
          errors={state.errors}
          placeholder="Inserisci nome"
        />
        <Input
          name="surname"
          label="Surname"
          type="surname"
          value={data.surname}
          required={true}
          errors={state.errors}
          placeholder="Inserisci cognome"
        />
        <Input
          name="email"
          label="Email"
          type="email"
          value={data.email}
          required={true}
          errors={state.errors}
          placeholder="Inserisci email"
        />
      </div>
      <button
        type="submit"
        className="p-2 rounded text-text border-none bg-button-primary"
      >
        Modify
      </button>
    </form>
  );
};

export default UpdateForm;
