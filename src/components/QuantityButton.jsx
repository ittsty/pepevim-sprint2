import { useState } from "react";

export default function QuantityButton({ quantity, setQuantity }) {

  return (
    <div className="inline-flex overflow-hidden rounded-full">
      <button
        onClick={() => setQuantity((c) => Math.max(1, c - 1))}
        className="w-9 h-10  bg-primary text-white text-xl flex items-center justify-center"
      >
        −
      </button>

      <div className="w-12 h-10 bg-pink-200 text-primary font-semibold flex items-center justify-center">
        {quantity}
      </div>
      <button
        onClick={() => setQuantity((c) => c + 1)}
        className="w-9 h-10 bg-primary text-white text-xl flex items-center justify-center"
      >
        +
      </button>
    </div>
  );
}
