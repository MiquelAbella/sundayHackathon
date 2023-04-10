import React from "react";

export const ShoppingItem = ({ text }) => {
  return (
    <div className="flex bg-white gap-2 px-2 py-1 justify-between items-center">
      <p className="truncate">{text}</p>
      <button className="bg-red-500 px-2 py-1 text-white">Delete</button>
    </div>
  );
};
