import React from "react";
import { useQueryAvailablePets } from "./hooks/useQueryAvailablePets/index";

const Counter = () => {
  const { loading, error, data } = useQueryAvailablePets();
  if (loading) return <div>loading...</div>;
  if (error) return <div>error - {error.message}</div>;
  return <div>counter - {data.availablePets}</div>;
};

export default Counter;
