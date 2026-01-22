import CollectionCard from "@/components/CollectionCard";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Timer from "@/components/Timer";
import { useCollection } from "@/Hooks/useCollection";
import { useProducts } from "@/Hooks/useProducts";

export default function HomeView() {
  const { products } = useProducts();
  const { collection } = useCollection();
  return (
    <>
      <section className="Banner">
        <img src="promotion.webp" alt="banner" className="w-full" />
      </section>
      <section className="Limited-Time relative w-full h-120 rounded-sm">
        <img
          src="promo.webp"
          alt="Collection"
          className="absolute inset-0 w-full h-full object-cover -ml-[30%]"
        />
        <div
          className="
          absolute right-0 bottom-0 h-130 w-[55%]
          bg-primary
          before:content-['']
          before:absolute before:inset-y-0 before:-left-32
          before:w-64 before:bg-primary
          before:-skew-x-12
        "
        />
        <div className="relative z-10 ml-auto pr-28 h-full w-[60%] flex flex-col justify-center items-end px-12 text-white text-right">
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Special Limited
            <br />
            Collection
          </h2>
          <Timer />
          <p className="mt-22 mb-16 text-xl font-medium">
            xxxxxxx Collection
            <br />
            <span>3/2 – 12/12 only</span>
          </p>

          <button className=" absolute bottom-5 right-0 mt-4 w-60 ml-20 bg-white text-primary px-6 py-3 font-semibold shadow-lg ">
            → See it first
          </button>
        </div>
      </section>
      <section className="New-collection w-full h-fit px-16  flex flex-col justify-start items-center py-8 gap-6">
        <h1 className="text-5xl font-bold">New Collection</h1>
        <div className="item-container w-full flex justify-center gap-4">
          {collection.slice(0, 3).map((collection) => (
            <CollectionCard
              key={collection._id}
              className="md:h-100"
              id={collection._id}
              image={collection.image}
              collectionName={collection.collectionName}
            />
          ))}
        </div>
      </section>
      <section className="Collection h-full flex flex-col items-center p-20 bg-[#faf8f9]">
        <h1 className="text-5xl font-bold pb-16 tracking-wide">
          Other Collection
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
