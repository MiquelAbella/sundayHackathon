import { ShoppingItem } from "./ShoppingItem";

export const ShoppingList = ({ shoppingItems }) => {
  return (
    <div className="flex flex-col gap-4 w-1/2 mt-4">
      {shoppingItems.map((item) => {
        return <ShoppingItem text={item.title} />;
      })}
    </div>
  );
};
