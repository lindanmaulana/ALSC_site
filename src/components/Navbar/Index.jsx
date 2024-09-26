import { Link } from "react-router-dom";
import useScroll from "../../hooks/useScroll";
import usePropsDriling from "../../hooks/usePropsDriling";
import { useCallback } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scroll = useScroll();
  const { homeRef, empathizeRef, defineRef, prototypeRef } = usePropsDriling();
  const dataNavbar = [
    {
      id: 1,
      title: "Home",
      ref: homeRef,
    },
    {
      id: 2,
      title: "Empathize",
      ref: empathizeRef,
    },
    {
      id: 3,
      title: "Define",
      ref: defineRef,
    },
    {
      id: 4,
      title: "Prototype",
      ref: prototypeRef,
    },
  ];

  const handlePropsDriling = useCallback((params) => {
    if (params && params.current) {
      params.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className={`w-full transition-global ${
        scroll > 0 ? "fixed top-0 right-0 bg-primary" : "absolute top-0 right-0"
      }  z-50`}
    >
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="flex items-center gap-2 text-teal-600" href="#">
              <span className="sr-only">Home</span>
              ALSC
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {dataNavbar?.map((values) => (
                  <li key={values.id}>
                    <Link
                      className="font-semibold text-white transition hover:text-gray-500/75"
                      onClick={() => handlePropsDriling(values.ref)}
                    >
                      {" "}
                      {values.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <HamburgerMenu isOpen={isOpen} handleOpen={handleOpen} />
           
              <nav aria-label="Global" className={`${isOpen ? "opacity-100" : "opacity-0"} fixed bottom-0 right-0 w-full py-4 transition-global bg-primary`}>
                <ul className="flex items-center justify-center gap-6 text-sm">
                  {dataNavbar?.map((values) => (
                    <li key={values.id}>
                      <Link
                        className="font-semibold text-white transition hover:text-gray-500/75"
                        onClick={() => handlePropsDriling(values.ref)}
                      >
                        {" "}
                        {values.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
          
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarComponent;
