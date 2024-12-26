import Carousel from "../components/Child/Carousel";
import CollectionCard from "../components/Child/CollectionCard";
import CardProduct from "./../components/Child/CardProduct";
const HomePage = () => {
  return (
    <>
      <main className="w-full overflow-hidden">
        {/* Carousel */}
        <Carousel />
        {/* Main section */}
        <section className="w-[1050px] m-auto">
          {/* Men or Women Collection Card */}
          <CollectionCard />
          {/* Cards */}
          {/* Heading Text */}
          <h1 className="capitalize text-xl my-3">this is weeks highlights</h1>
          <section className="grid grid-cols-4 gap-2">
            {/* CardProduct */}
            <CardProduct />
          </section>
        </section>
      </main>
    </>
  );
};

export default HomePage;
