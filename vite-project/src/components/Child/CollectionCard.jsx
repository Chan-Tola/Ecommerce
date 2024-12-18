const CollectionCard = () => {
  return (
    <>
      {/* Men or Women Collection Card */}
      <section className="grid grid-cols-2 gap-6 m-10 mt-2">
        {[1, 2].map((_, index) => (
          <section
            key={index}
            className="shadow-md flex flex-col justify-center items-center"
          >
            {/* Image */}
            <img
              className="object-cover rounded"
              src="https://placehold.co/738x1108"
              alt={`Product ${index + 1}`}
            />
            {/* Button to Choose Color */}
            <button className="mt-5 w-[90%] py-1 rounded-sm border">
              Men Collection
            </button>
          </section>
        ))}
      </section>
    </>
  );
};

export default CollectionCard;
