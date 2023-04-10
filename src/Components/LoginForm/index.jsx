import React from "react";
import { useState } from "react";

export const LoginForm = ({setUser}) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(loginData.email.length && loginData.password.length){
      const res = await fetch('http://localhost:4000/getuser',{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(loginData)
      })
      const data = await res.json()
      if(data.ok){
        setUser(data.user)
      }
    }
   
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
