import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductView() {
  const [products, setProduct] = useState([]);
  const fetchProduct = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v2/products");
      setProduct(res.data.data);
      console.log(products);
    } catch (error) {}
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  const { id } = useParams();
  return (
    <div>
      <section className="collect-view py-8 md:px-16 flex flex-col items-center gap-4 justify-center pt-12 text-center">
        <h1 className="text-4xl font-semibold">Our Collection {id}</h1>
        <h2>
          Shop now for the trendiest, most-loved dog products in one place.
        </h2>
        <div className="collection-bento w-8/10 md:w-fit grid md:grid-cols-4 gap-4 justify-center pt-8 text-left">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
