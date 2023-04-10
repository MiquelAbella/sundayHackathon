import React from "react";
import { ShoppingForm } from "./Components/ShoppingForm";
import { ShoppingList } from "./Components/ShoppingList";
import { useState } from "react";
import { LoginForm } from "./Components/LoginForm";
import { RegisterForm } from "./Components/RegisterForm";

export const App = () => {
  const [user, setUser] = useState(null);
  console.log(user)
  return (
    <div className="min-h-screen w-full bg-slate-500 flex flex-col items-center">
      {user ? (
        <>
          <ShoppingForm user={user}/>
          <ShoppingList user={user}/>
        </>
      ) : (
        <>
          <LoginForm setUser={setUser} />
          <RegisterForm />
        </>
      )}
    </div>
  );
};
