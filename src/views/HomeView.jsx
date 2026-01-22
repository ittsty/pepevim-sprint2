import CollectionCard from "@/components/CollectionCard";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Timer from "@/components/Timer";
import { useCollection } from "@/Hooks/useCollection";
import { useProducts } from "@/Hooks/useProducts";
import { useNavigate } from "react-router-dom";

export default function HomeView() {
  const { products } = useProducts();
  const { collection } = useCollection();
  const navigate = useNavigate();
  return (
    <>
      <section className="Banner">
        <img src="promotion.webp" alt="banner" className="w-full" />
      </section>
      <section className="relative w-full min-h-100 md:min-h-130 lg:min-h-150 overflow-hidden">
        <img
          src="promo.webp"
          alt="Collection"
          className="
      absolute inset-0 w-full h-full object-cover
      md:object-right md:-ml-[20%]"
        />
        <div
          className="
      hidden md:block
      absolute right-0 bottom-0
      h-full w-[55%]
      bg-primary
      before:content-['']
      before:absolute before:inset-y-0 before:-left-32
      before:w-64 before:bg-primary
      before:-skew-x-12"
        />
        <div
          className="relative z-10 ml-auto h-fullw-full md:w-[60%] flex flex-col justify-center items-start md:items-end px-6 sm:px-10 md:px-12 lg:pr-28 text-white text-left md:text-right"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6 pt-8 md:mt-16">
            Special Limited
            <br />
            Collection
          </h2>
          <Timer endDate="2026-02-01T23:59:59" />
          <p className="mt-6 md:mt-10 mb-8 md:mb-16 text-base sm:text-lg lg:text-xl font-medium">
            Holiday Collection
            <br />
            <span>Only for limited Time</span>
          </p>
          <button
            className=" self-start md:self-end bg-white text-primary px-6 py-3 font-semibold shadow-lg w-fit"
            onClick={() => navigate("/collection")}
          >
            → See it first
          </button>
        </div>
      </section>

      <section className="New-collection w-full h-fit px-16  flex flex-col justify-start items-center py-8 gap-6">
        <h1 className="text-5xl font-bold">New Collection</h1>
        <div className="item-container w-full flex flex-col md:flex-row justify-center gap-4">
          {collection.slice(0, 3).map((collection) => (
            <CollectionCard
              key={collection._id}
              product={collection}
              className="h-60 md:h-100"
              id={collection._id}
              image={collection.image}
            />
          ))}
        </div>
      </section>
      <section className="Collection h-full flex flex-col items-center p-6 md:p-20 bg-[#faf8f9]">
        <h1 className="text-5xl font-bold pb-4 md:pb-16 tracking-wide">
          Other Products
        </h1>

        <div className="grid md:grid-cols-2 gap-16">
          {products.slice(0, 4).map((product) => (
            <div
              key={product._id}
              className="
          group
          transition-all duration-700 ease-out
          hover:-translate-y-2
          hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)]
        "
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
