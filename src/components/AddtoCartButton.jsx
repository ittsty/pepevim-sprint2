import { useCart } from "@/contexts/CartContext";

export function AddToCartButton({ product, quantity, size }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product, quantity, size)}
      className="
        mt-8
        w-[85%] mx-auto
        py-4
        text-base tracking-wide font-medium
        text-[#2b1a20]
        bg-[#fdfbfc]
        border border-[#2b1a20]
        rounded-2xl

        transition-all duration-300 ease-out

        hover:bg-[#2b1a20]
        hover:text-[#fdfbfc]
        hover:shadow-[0_12px_35px_rgba(43,26,32,0.35)]

        active:scale-[0.97]
        active:shadow-[0_6px_18px_rgba(43,26,32,0.25)]
        hover:cursor-pointer
      "
    >
      ADD TO CART
    </button>
  );
}
