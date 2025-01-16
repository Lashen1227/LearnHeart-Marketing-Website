import { useState } from "react";
import { Link } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Navlinks from "../data/navlinks";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed inset-x-0 z-50 text-white body-font bg-darkblue">
      <div className="flex flex-row items-center justify-between px-5 py-2 mx-auto lg:justify-around lg:py-3">
        <nav
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="false"
          className="flex-wrap items-center justify-center hidden gap-12 text-lg md:mx-auto lg:flex"
        >
          {Navlinks.map((item) => {
            return (
              <Link
                key={item.title}
                spy={true}
                smooth={true}
                offset={-100}
                duration={750}
                to={item.link}
                className="cursor-pointer hover:text-dark-orange"
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-once="false"
          className="mr-2 lg:hidden"
        >
          <button onClick={toggleMenu} className="p-2 text-white">
            {isMenuOpen ? (
              <MdClose className="w-6 h-6" />
            ) : (
              <BiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="min-h-[calc(100vh-4rem)] absolute inset-x-0 top-16 z-50 transition-all ease-in duration-1000 lg:hidden ">
            <div
              data-aos="zoom-in-down"
              data-aos-duration="500"
              data-aos-once="true"
              className="px-5 pb-4 rounded-b-lg shadow-lg bg-darkblue"
            >
              <nav className="flex flex-col gap-6 text-sm text-center md:text-base hover:text-dark-orange">
                {Navlinks.map((item) => (
                  <Link
                    key={item.title}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={750}
                    to={item.link}
                    onClick={toggleMenu}
                    className="cursor-pointer hover:text-dark-orange"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )} 
      </div>
    </header>
  );
};

export default Navbar;
