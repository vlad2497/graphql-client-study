import { useState } from "react";

const useValues = () => {
  const [values, setValues] = useState({
    account: {
      name: "",
      username: "",
      password: "",
    },
  });

  const changeValue = (e) => {
    e.persist();
    setValues((prev) => ({
      account: {
        ...prev.account,
        [e.target.name]: e.target.value,
      },
    }));
  };

  return [values, changeValue];
};

export default useValues;
