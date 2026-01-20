import { useCart } from "@/contexts/cartContext";


export function AddToCartButton({ product }) {
  const { addToCart } = useCart

  return (
    <button
      onClick={() => addToCart(product)}
      className="mt-4 border-primary border-2 p-4 w-8/10 mx-auto text-primary hover:bg-amber-50"
    >
      Add to cart
    </button>
  );
}
