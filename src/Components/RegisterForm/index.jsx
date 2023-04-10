import React from "react";

export const RegisterForm = () => {
  return (
    <form className="flex flex-col items-center w-[400px] pt-20 gap-4">
      <input type="email" placeholder="Email" className="px-2 py-1 w-full" />
      <input
        type="password"
        placeholder="Password"
        className="px-2 py-1 w-full"
      />
      <button className="bg-green-500 mt-4 w-1/2 px-2 py-1">Register</button>
    </form>
  );
};
