import React from "react";
import { useState } from "react";

export const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
  };
  return (
    <form
      className="flex flex-col items-center w-[400px] pt-20 gap-4"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        placeholder="Email"
        className="px-2 py-1 w-full"
        value={loginData.email}
        name="email"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        className="px-2 py-1 w-full"
        value={loginData.password}
        name="password"
        onChange={handleChange}
      />
      <button className="bg-green-500 mt-4 w-1/2 px-2 py-1">Login</button>
    </form>
  );
};
