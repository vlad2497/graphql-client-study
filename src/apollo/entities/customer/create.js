import React from "react";
import { useMutationCreateCustomer } from "./hooks/useMutationCreateAccount";
import useValues from "./hooks/useValues";

const Create = () => {
  const { createCustomer, customer } = useMutationCreateCustomer();
  const [values, changeValue] = useValues();

  const buttonHandler = () => {
    const { account } = values;
    createCustomer({
      variables: { account },
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={changeValue}
      />
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={changeValue}
      />
      <input
        type="text"
        name="password"
        placeholder="password"
        onChange={changeValue}
      />
      <button onClick={buttonHandler}>Create</button>
      {customer && <div>Your customer: {customer.name}</div>}
    </div>
  );
};

export default Create;
