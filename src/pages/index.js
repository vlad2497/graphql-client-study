import React from "react";
import Pet from "../apollo/entities/pet";
import Customer from "../apollo/entities/customer";

const App = () => {
  return (
    <div>
      <p>App</p>
      <Pet />
      <br />
      <hr />
      <Customer />
    </div>
  );
};

export default App;
