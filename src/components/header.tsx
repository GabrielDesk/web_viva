"use client";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";

interface IDrawer {
  shouldOpen: boolean;
}

const Header: React.FC = () => {
  const [shouldOpenDrawer, setShouldOpenDrawer] = useState(false);

  function scrollIntoSection(section: string) {
    console.log(section);
    const element = document.getElementById(section);

    return element?.scrollIntoView({ behavior: "smooth" });
  }

  const Drawer = ({ shouldOpen = false }: IDrawer) => {
    return shouldOpen ? (
      <div className="md:hidden bg-white/30 fixed z-50 right-0 h-screen animate-slide-in-right delay-700 backdrop-blur-sm border-x-2 border-black transform translate-x-full">
        <div className="flex flex-col p-5 gap-5 items-start justify-center">
          <button onClick={() => scrollIntoSection("page_one")}>
            <h6 className="text-xl font-clash font-medium cursor-pointer hover:font-normal text-black ">
              <u>Plataform</u>
            </h6>
          </button>
          <button onClick={() => scrollIntoSection("page_two")}>
            <h6 className="text-xl font-clash font-medium cursor-pointer hover:font-normal text-black">
              <u>Pricing</u>
            </h6>
          </button>
          <button onClick={() => scrollIntoSection("page_three")}>
            <h6 className="text-xl font-clash font-medium cursor-pointer hover:font-normal text-black">
              <u>Events</u>
            </h6>
          </button>
          <button onClick={() => scrollIntoSection("page_four")}>
            <h6 className="text-xl font-clash font-medium cursor-pointer hover:font-normal text-black">
              <u>About Us</u>
            </h6>
          </button>
          <h6 className="text-[1rem] font-clash font-medium cursor-pointer text-gray-500">
            <u>Viva!</u>
          </h6>
        </div>
      </div>
    ) : (
      <></>
    );
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-white/30 backdrop-blur-sm border-y-2 border-black
      p-[15px] flex flex-row justify-between`}
      >
        <div className="flex items-center justify-start ">
          {/* <Image
          src={logo_viva}
          alt="logo"
          className="h-[70px] w-[70px] md:h-[50px] md:w-[50px] rounded-xl"
        /> */}
          <h1 className="text-xl font-clash text-black font-medium">
            Viva boa vista
          </h1>
        </div>

        <div className="md:hidden cursor-pointer flex items-center justify-center ">
          <button
            className=""
            onClick={() => setShouldOpenDrawer((prev) => !prev)}
          >
            <HiBars3 className="text-black text-xl h-full w-full" />
          </button>
        </div>

        <div className="hidden md:flex row px-5 gap-10 items-center justify-center">
          <button onClick={() => scrollIntoSection("page_one")}>
            <h6 className="text-xl font-clash cursor-pointer hover:font-medium text-black ">
              Plataform
            </h6>
          </button>
          <button onClick={() => scrollIntoSection("page_two")}>
            <h6 className="text-xl font-clash cursor-pointer hover:font-medium text-black">
              Pricing
            </h6>
          </button>
          <button onClick={() => scrollIntoSection("page_three")}>
            <h6 className="text-xl font-clash cursor-pointer hover:font-medium text-black">
              Events
            </h6>
          </button>
          <button onClick={() => scrollIntoSection("page_four")}>
            <h6 className="text-xl font-clash cursor-pointer hover:font-medium text-black">
              About Us
            </h6>
          </button>
        </div>
        <div className="hidden md:flex row  items-center justify-center">
          <button className="hidden md:flex row items-center justify-center border-2 px-6 py-2 rounded-3xl border-cyan-900">
            <p className="text-xl font-clash text-black">Login</p>
          </button>
        </div>
      </header>
      <Drawer shouldOpen={shouldOpenDrawer} />
    </>
  );
};
export default Header;
