import React from "react";

export const ShoppingForm = () => {
  return (
    <form className="flex flex-col items-center w-[400px] pt-20">
      <input
        type="text"
        placeholder="Shopping item"
        className="px-2 py-1 w-full"
      />
      <button className="bg-green-500 mt-4 w-1/2 px-2 py-1">Add</button>
    </form>
  );
};
