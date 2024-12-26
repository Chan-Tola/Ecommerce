import { FaBars, FaRegBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "../../src/assets/images/logo/TEN11.png";
const Header = () => {
  return (
    <>
      <main className="w-full grid place-items-center bg-[#333333]">
        {/* Main section */}
        <section className="w-[1450px] place-items-center grid grid-cols-3 p-[10px]">
          {/* Bars */}
          <section className="flex justify-self-start cursor-pointer">
            <FaBars className="w-[25px] h-[25px]" />
          </section>
          {/* logo */}
          <section>
            <Link to="/">
              <img
                className="w-[180px] cursor-pointer"
                src={logo}
                alt="logo-ten11"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
          </section>
          {/* search, notification,setting, login */}
          <section className="flex gap-3 items-center justify-self-end cursor-pointer">
            {/* search */}
            <form className="border-b-[1px] flex items-center bg-[#333333]">
              <IoIosSearch className="w-[25px] h-[25px]" />
              <input
                className="w-[120px] text-[15px] outline-none bg-[#333333]"
                type="text"
                placeholder="Search"
              />
            </form>
            {/* bell */}
            <FaRegBell className="w-[25px] h-[25px]" />
            {/* setting */}
            <CiSettings className="w-[35px] h-[35px]" />
            {/* login */}
            <div className="capitalize text-2xl">
              <Link to="login">login</Link>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Header;
