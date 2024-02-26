"use client";

import { useFormState } from "react-dom";

import { create } from "@/lib/customers/actions";
import { FormState } from "@/types/response.model";
import Input from "@/ui/inputs/textInput";

const CreateForm = () => {
  const initialState: FormState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(create, initialState);

  return (
    <form action={dispatch} className="">
      <div className="flex flex-wrap justify-between gap-5 mb-4">
        <Input
          name="name"
          label="Nome"
          required={true}
          errors={state.errors}
          placeholder="Inserisci nome"
        />
        <Input
          name="surname"
          label="Cognome"
          required={true}
          errors={state.errors}
          placeholder="Inserisci cognome"
        />
        <Input
          name="email"
          label="Email"
          type="email"
          required={true}
          errors={state.errors}
          placeholder="Inserisci email"
        />
      </div>
      <button
        type="submit"
        className="p-2 rounded text-text border-none bg-button-primary"
      >
        Create
      </button>
    </form>
  );
};

export default CreateForm;
