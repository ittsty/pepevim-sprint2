import CollectionCard from "@/components/CollectionCard";
import Footer from "@/components/Footer";
import { useCollection } from "@/Hooks/useCollection";

export default function CollectionView() {
  const { collection, loading } = useCollection();
  return (
    <>
      <section className="collect-view py-8 md:px-16 flex flex-col items-center gap-4 justify-center pt-12 text-center">
        <h1 className="text-4xl font-semibold">Our Collection</h1>
        <h2>
          Shop now for the trendiest, most-loved dog products in one place.
        </h2>
        <div className="collection-bento w-8/10 md:w-fit grid md:grid-cols-3 gap-8 pt-8">
          {collection.map((collection) => (
            <CollectionCard
              key={collection._id}
              product={collection}
              className={"aspect-square"}
              id={collection._id}
              image={collection.image}
              collectionName={collection.collectionName}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
