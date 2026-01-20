import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({product}) => {
  const navigate = useNavigate();
  const handleProductDetail = () => {
    // if(!id) return;
    navigate(`/products/${product._id}`);
  };
  return (
    <div onClick={handleProductDetail} className="Item w-72 h-auto hover:shadow-md p-4 hover:bg-gray-100 transition-all duration-500">
      <img src="/other-collection.webp" alt="dog" className="w-full" />
      <h2 className="mt-2 font-semibold">{product.productName}</h2>
      <h2 className="text-sm">★ 5.0</h2>
      <h2 className="text-sm font-semibold">From {product.price} $</h2>
    </div>
  );
};

export default ProductCard;
