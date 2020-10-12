import React from "react";
import { useQuerySpecialList } from "./hooks/useQuerySpecialList/index";

const SpecialList = () => {
  const { getSpecialList, loading, error, list } = useQuerySpecialList();

  const loaderJSX = loading && <div>loading...</div>;
  const errorJSX = error && <div>{error.message}</div>;

  const listJSX =
    list &&
    list.map((item) => {
      return (
        <p key={item.id}>
          <span>Имя: {item.name}</span>
          <span>Вес: {item.weight}</span>
        </p>
      );
    });

  return (
    <div>
      <p>Special list:</p>
      <button onClick={getSpecialList}>Fetch !</button>
      {loaderJSX}
      {errorJSX}
      {listJSX}
    </div>
  );
};

export default SpecialList;
