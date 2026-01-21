import CollectionCard from "@/components/CollectionCard";
import Footer from "@/components/Footer";

export default function CollectionView() {
  return (
    <>
      <section className="collect-view py-8 md:px-16 flex flex-col items-center gap-4 justify-center pt-12 text-center">
        <h1 className="text-4xl font-semibold">Our Collection</h1>
        <h2>
          Shop now for the trendiest, most-loved dog products in one place.
        </h2>
        <div className="collection-bento w-8/10 md:w-fit grid md:grid-cols-3 gap-8 pt-8">
          {/* เอาไว้loop คอลเล็คชั่นทั้งหมด */}
          <CollectionCard className={"aspect-square"} id={1} />
          <CollectionCard className={"aspect-square"} id={2} />
          <CollectionCard className={"aspect-square"} id={3} />
          <CollectionCard className={"aspect-square"} id={4} />
          <CollectionCard className={"aspect-square"} id={5} />
          <CollectionCard className={"aspect-square"} id={6} />
        </div>
      </section>
      <Footer />
    </>
  );
}
