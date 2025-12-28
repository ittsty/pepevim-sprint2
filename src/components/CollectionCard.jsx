export default function CollectionCard({className}) {
  return (
    <>
      <div className={`md:w-90 flex flex-col justify-end items-center p-4 bg-[url(bg-collection.webp)] bg-size-[115%] bg-center transition-[background-size] duration-500 ease-in-out hover:bg-size-[130%] hover:shadow-2xl ${className}`}>
        <button class="py-4 px-6 w-fit m-4 bg-white border border-main text-primary hover:bg-gray-200">
          SEE IT MORE
        </button>
      </div>
    </>
  );
}
