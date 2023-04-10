import React from "react";
import { ShoppingItem } from "./ShoppingItem";

export const ShoppingList = () => {
  return (
    <div className="flex flex-col gap-4 w-1/2 mt-4">
      <ShoppingItem text={"Test!"} />
      <ShoppingItem text={"Test!"} />
      <ShoppingItem text={"Test!"} />
      <ShoppingItem text={"Test!"} />
    </div>
  );
};
