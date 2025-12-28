import CollectionCard from "@/components/CollectionCard";
import Footer from "@/components/Footer";
import Timer from "@/components/timer";

export default function HomeView() {
  return (
    <>
      <section className="Banner">
        <img src="promotion.webp" alt="banner" className="w-full" />
      </section>
      <section className="Limited-Time relative w-full h-120 bg-neutral-800 rounded-sm">
        <img
          src="promo.webp"
          alt="Collection"
          className="absolute inset-0 w-full h-full object-cover -ml-[30%]"
        />
        <div
          className="
          absolute right-0 bottom-0 h-130 w-[65%]
          bg-primary
          before:content-['']
          before:absolute before:inset-y-0 before:-left-32
          before:w-64 before:bg-primary
          before:-skew-x-12
        "
        />
        <div className="relative z-10 ml-auto h-full w-[60%] flex flex-col justify-center items-end px-12 text-white text-right">
          <h2 className="text-5xl font-bold leading-tight mb-6">
            {" "}
            Special Limited
            <br />
            Collection{" "}
          </h2>
          <Timer />
          <p className="mt-22 mb-16 text-xl font-medium">
            xxxxxxx Collection
            <br />
            <span>3/2 – 12/12 only</span>
          </p>

          <button className=" absolute bottom-5 right-0 mt-4 w-60 ml-20 bg-white text-primary px-6 py-3 font-semibold shadow-md ">
            → See it first
          </button>
        </div>
      </section>
      <section className="New-collection w-full h-fit px-16  flex flex-col justify-start items-center py-8 gap-6">
        <h1 className="text-4xl font-bold">New Collection</h1>
        <div className="item-container w-full flex justify-center gap-4">
          <CollectionCard className="md:h-100" />
          <CollectionCard className="md:h-100" />
          <CollectionCard className="md:h-100" />
        </div>
      </section>
      <section className="Collection h-full bg-gray-100 flex flex-col items-center p-12">
        <h1 className="text-5xl font-bold pb-4">Other Collection</h1>
        <div className="grid md:grid-cols-2 m-4 gap-16">
          <div className="Item w-64 h-auto">
            <img src="other-collection.webp" alt="dog" class="w-full" />
            <h2 className="mt-2 font-semibold">Collection One</h2>
          </div>
          <div className="Item w-64 h-auto">
            <img src="other-collection.webp" alt="dog" class="w-full" />
            <h2 className="mt-2 font-semibold">Collection Two</h2>
          </div>
          <div className="Item w-64 h-auto">
            <img src="other-collection.webp" alt="dog" class="w-full" />
            <h2 className="mt-2 font-semibold">Collection Three</h2>
          </div>
          <div className="Item w-64 h-auto">
            <img src="other-collection.webp" alt="dog" class="w-full" />
            <h2 className="mt-2 font-semibold">Collection Four</h2>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
