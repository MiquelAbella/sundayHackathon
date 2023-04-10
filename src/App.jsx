import React from "react";
import { ShoppingForm } from "./Components/ShoppingForm";
import { ShoppingList } from "./Components/ShoppingList";
import { useState } from "react";
import { LoginForm } from "./Components/LoginForm";
import { RegisterForm } from "./Components/RegisterForm";
import { useEffect } from "react";

export const App = () => {
  const [user, setUser] = useState(null);
  const [shoppingItems, setShoppingItems] = useState([])

  const getShoppingList = async () => {
    const res = await fetch("http://localhost:4000/getitems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: user.email}),
    });
    const data = await res.json();
    setShoppingItems(data.items.shoppingItems)
  };

  useEffect(() => {
    if (user) {
      getShoppingList();
    }
  }, [user]);

  return (
    <div className="min-h-screen w-full bg-slate-500 flex flex-col items-center">
      {user ? (
        <>
          <ShoppingForm user={user} />
          <ShoppingList user={user} shoppingItems={shoppingItems}/>
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
