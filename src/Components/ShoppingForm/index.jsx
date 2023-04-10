import React from "react";
import { useState } from "react";

export const ShoppingForm = () => {
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
  };
  return (
    <form
      className="flex flex-col items-center w-[400px] pt-20"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Shopping item"
        className="px-2 py-1 w-full"
        onChange={handleChange}
        value={title}
      />
      <button className="bg-green-500 mt-4 w-1/2 px-2 py-1">Add</button>
    </form>
  );
};
