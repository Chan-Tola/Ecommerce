import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router-dom";
import useFetchAPI from "../../api/useFetchAPI";
const url = "https://fakestoreapi.com/products";
const CardProduct = () => {
  const { isLoading, isError, data } = useFetchAPI(url);
  if (isLoading) {
    return <h2>Loading....!</h2>;
  }
  if (isError) {
    return <h2>Somthing is went Wrong</h2>;
  }
  const product = data;
  // Access the movies data
  return (
    <>
      {/* CardProduct */}
      {product.map(({ id, image, price, title }) => (
        <section
          key={id}
          className="shadow-md flex flex-col justify-center items-center relative"
        >
          {/* Image */}
          <img className="object-cover rounded" src={image} alt={id} />
          <section className="flex w-full  justify-around">
            {/* leftSide */}
            <section>
              {/* price */}
              <p className="text-xs mt-2">{price}</p>
              {/* nameProduct */}
              <p className="text-xs mt-1">{title}</p>
              {/* Button to Choose Color */}

              <section className="flex gap-1">
                {[1, 2].map((_, index) => (
                  <button
                    key={index}
                    className="mt-2 w-4 h-4 bg-blue-500 text-white rounded-sm hover:bg-blue-600"
                  ></button>
                ))}
              </section>
            </section>
            {/* RightSide */}
            <section>
              {/* Save Button */}
              <Link to="login">
                <button className="cursor-pointer w-[20px] h-[20px]">
                  <CiBookmark />
                </button>
              </Link>
            </section>
          </section>
        </section>
      ))}
    </>
  );
};
export default CardProduct;
