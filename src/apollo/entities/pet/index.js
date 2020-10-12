import React from "react";
import Counter from "./counter";
import List from "./list";
import SpecialList from "./specialList";
import Detail from "./detail";
import Subscription from "./subscription";

const Pet = () => {
  return (
    <div>
      <p>Pets</p>
      <Counter />
      <List />
      <SpecialList />
      <Detail />
      <Subscription />
    </div>
  );
};

export default Pet;
