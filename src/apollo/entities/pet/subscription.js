import React from "react";
import { useSubscriptionPet } from "./hooks/useSubscriptionPet/index";

const Subscription = () => {
  const { loading, pet } = useSubscriptionPet();

  return (
    <div>
      <p>Subscription:</p>
      {loading ? <div>Loading...</div> : <div>Pet: {pet.name}</div>}
    </div>
  );
};

export default Subscription;
