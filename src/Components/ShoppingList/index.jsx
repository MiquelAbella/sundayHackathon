import React, { useEffect } from "react";
import { ShoppingItem } from "./ShoppingItem";

export const ShoppingList = ({ user }) => {
  console.log(user);
  const getShoppingList = async () => {
    const res = await fetch("http://localhost:4000/getshoppingitems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user.email),
    });
    const data = await res.json();
    if (data.ok) {
      console.log(data);
    }
  };

  useEffect(() => {
    if (user) {
      getShoppingList();
    }
  }, [user]);

  return (
    <div className="flex flex-col gap-4 w-1/2 mt-4">
      <ShoppingItem text={"Test!"} />
      <ShoppingItem text={"Test!"} />
      <ShoppingItem text={"Test!"} />
      <ShoppingItem text={"Test!"} />
    </div>
  );
};
