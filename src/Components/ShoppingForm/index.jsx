import React from "react";
import { useState } from "react";

export const ShoppingForm = ({user}) => {
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/additem", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        userId: user._id
      })
    })
    const data = await res.json()
    console.log(data)
    
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
