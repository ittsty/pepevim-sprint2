import { AddToCartButton } from "@/components/AddtoCartButton";
import QuantityButton from "@/components/QuantityButton";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetailView() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/v2/products/${id}`,
        );
        setProduct(res.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="py-20 text-center">Loading...</div>;

  if (!product) return <div className="py-20 text-center">Product not found</div>;
  return (
      <section className="py-8 px-16 md:flex justify-center">
        <div className="imgHolder md:w-4/10 py-4 flex flex-col items-center justify-center">
          <img src="/1.png" alt="" className="aspect-square w-full max-w-120" />
          <div className="hoverimg hidden  w-full max-h-32 max-w-120 md:flex justify-between py-4">
            <img src="/1.png" alt="" className="md:h-full aspect-square" />
            <img src="/1.png" alt="" className="md:h-full aspect-square" />
            <img src="/1.png" alt="" className="md:h-full aspect-square" />
            <img src="/1.png" alt="" className="md:h-full aspect-square" />
          </div>
        </div>
        <div className=" md:w-4/10 py-4 md:pl-8 flex flex-col ">
          <h1 className="text-4xl font-bold">{product.productName}</h1>
          <h2 className="text-xl pt-2">★ 5.0</h2>
          <h2 className="text-xl pt-8">From {product.price}$</h2>
          <p className="pt-2">{product.productDesc}</p>
          <h2 className="text-xl pt-8 font-semibold">size</h2>
          <div className="size-selector pt-2 flex gap-2">
            <button className=" border-primary border-2 py-2 px-3  rounded-lg text-primary ">
              S
            </button>
            <button className=" border-primary border-2 py-2 px-3  rounded-lg text-primary ">
              M
            </button>
            <button className=" border-primary border-2 py-2 px-3  rounded-lg text-primary ">
              L
            </button>
            <button className=" border-primary border-2 py-2 px-3  rounded-lg text-primary ">
              XL
            </button>
          </div>
          <h2 className="text-xl pt-8 font-semibold">Quantity</h2>
          <div className="Quantity flex h-10">
            <QuantityButton />
          </div>
          <AddToCartButton product={product}/>
        </div>
      </section>
  );
}
