import { useCart } from "@/contexts/CartContext";

export function AddToCartButton({ product, quantity, size }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() =>
        addToCart(product, quantity, size)
      }
      className="mt-4 border-primary border-2 p-4 w-8/10 mx-auto text-primary hover:bg-amber-50"
    >
      Add to cart
    </button>
  );
}
