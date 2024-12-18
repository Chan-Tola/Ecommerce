const CardProduct = () => {
  return (
    <>
      {/* CardProduct */}
      {[1, 2, 3, 4].map((_, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 shadow-md bg-white relative"
        >
          {/* Image */}
          <img
            className="w-full h-[150px] object-cover rounded"
            src="https://via.placeholder.com/150"
            alt={`Product ${index + 1}`}
          />
          {/* Price */}
          <p className="text-lg font-bold mt-2">$29.99</p>
          {/* Text */}
          <p className="text-sm text-gray-600 mt-1">
            This is a description of the product.
          </p>
          {/* Button to Choose Color */}
          <button className="mt-2 w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600">
            Choose Color
          </button>
          {/* Save Button */}
          <button className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 cursor-pointer">
            Save
          </button>
        </div>
      ))}
    </>
  );
};

export default CardProduct;
