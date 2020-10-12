import React from "react";
import { useQueryPetById } from "./hooks/useQueryPetById/index";

const Detail = () => {
  const { getPetById, loading, error, pet } = useQueryPetById();

  const loaderJSX = loading && <div>loading...</div>;
  const errorJSX = error && <div>{error.message}</div>;

  const detailJSX = pet && (
    <p>
      <span>Имя: {pet.name}</span>
      <span>Вес: {pet.weight}</span>
    </p>
  );

  const buttonHandler = () => {
    getPetById({
      variables: {
        id: "C-1",
      },
    });
  };

  return (
    <div>
      <p>Detail:</p>
      <button onClick={buttonHandler}>Get detail !</button>
      {loaderJSX}
      {errorJSX}
      {detailJSX}
    </div>
  );
};

export default Detail;
