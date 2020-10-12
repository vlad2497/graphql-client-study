import React from "react";
import { useQueryAllPets } from "./hooks/useQueryAllPets/index";

const List = () => {
  const { loading, error, allPets } = useQueryAllPets();

  if (loading) return <div>loading...</div>;
  if (error) return <div>error - {error.message}</div>;

  const petsJSX = allPets.map((pet) => {
    return (
      <p key={pet.id}>
        <span>Имя: {pet.name}</span>
        <span>Вес: {pet.weight}</span>
      </p>
    );
  });

  return (
    <div>
      <p>List:</p>
      {petsJSX}
    </div>
  );
};

export default List;
