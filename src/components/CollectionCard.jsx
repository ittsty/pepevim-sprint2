import { useNavigate } from "react-router-dom";

export default function CollectionCard({
  className = "",
  id,
  collection,
  image,
  collectionName,
}) {
  const navigate = useNavigate();

  const handleProductView = () => {
    if (!id) return;
    navigate(`/collection/${id}`);
  };

  return (
    <div
      className={`
        group
        relative
        md:w-90
        flex flex-col justify-end items-center
        p-6
        rounded-3xl
        overflow-hidden

        transition-all duration-700 ease-out
        hover:shadow-[0_35px_90px_rgba(96,70,110,0.45)]

        ${className}
      `}
    >
      {/* background image layer */}
      <div
        style={{
          backgroundImage: `url(${image || "/bg-collection.webp"})`,
        }}
        className="
          absolute inset-0
          bg-center bg-cover
          transition-transform duration-700 ease-out
          scale-100
          group-hover:scale-[1.12]
        "
      />

      {/* velvet overlay */}
      <div
        className="
          absolute inset-0
         
          to-transparent
          transition-opacity duration-700
          opacity-80
          group-hover:opacity-95
        "
      />

      {/* content */}
      <div className="relative z-10 flex flex-col items-center">
        {collection && (
          <h1
            className="
              text-[#f4e9f7]
              font-medium
              text-[1.6rem]
              tracking-[0.3em]
              px-4 py-2
              mb-6
            "
          >
            {collection}
          </h1>
        )}

        <button
          onClick={handleProductView}
          className="
            py-3.5 px-10
            mb-3
            rounded-full
            text-[0.75rem]
            tracking-[0.35em]
            font-medium

            bg-[#ddd1e2]
            text-[#120815]
            border[#454047]

            transition-all duration-300 ease-out

            hover:bg-[#7a6f7e]
            hover:border-[#7a6f7e]
            

            active:scale-[0.97]
            hover:cursor-pointer
          "
        >
          {collectionName}
        </button>
      </div>
    </div>
  );
}
