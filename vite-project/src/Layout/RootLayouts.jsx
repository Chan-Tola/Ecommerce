import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
const RootLayouts = () => {
  return (
    <>
      <main className="text-white text-sm font-roboto">
        <Header />
        {/* Outlet for rendering child components */}
        <section className="bg-[#191919] ">
          <Outlet />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default RootLayouts;
