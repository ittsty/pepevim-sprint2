import { useCart } from "@/contexts/CartContext";
import { FaCartShopping } from "react-icons/fa6";
export function CartIcon() {
  const { totalItems } = useCart();

  return (
    <div className="relative">
       <FaCartShopping className="w-full h-full" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
          {totalItems}
        </span>
      )}
    </div>
  );
}
