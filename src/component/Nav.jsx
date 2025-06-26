import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import logimage from "../assets/imges/logo ghuman chale.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isNationalOpen, setIsNationalOpen] = useState(false);
  const [isInternationalOpen, setIsInternationalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-red-700 text-white">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="h-14 w-14 rounded-full overflow-hidden">
          <img
            src={logimage}
            alt="Logo"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center">
          <li>
            <Link to={"/"} className="hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="hover:text-yellow-300">
              About
            </Link>
          </li>

          <li className="relative group">
            <button
              onClick={() => setIsNationalOpen(!isNationalOpen)}
              className="flex items-center gap-1 hover:text-yellow-300"
            >
              National <IoIosArrowDown />
            </button>
            {isNationalOpen && (
              <div className="absolute top-full mt-2 bg-white text-black rounded shadow-lg p-4 w-40 z-10">
                <p><Link to={"/india"} className="hover:text-yellow-300">
              India
            </Link></p>
                <p><Link to={"*"} className="hover:text-yellow-300">States</Link></p>
              </div>
            )}
          </li>

          <li className="relative group">
            <button
              onClick={() => setIsInternationalOpen(!isInternationalOpen)}
              className="flex items-center gap-1 hover:text-yellow-300"
            >
              International <IoIosArrowDown />
            </button>
            {isInternationalOpen && (
              <div className="absolute top-full mt-2 bg-white text-black rounded shadow-lg p-4 w-40 z-10">
               <p><Link to={"/europe"} className="hover:text-yellow-300">
              Europe
            </Link></p>
                <p><Link to={"*"} className="hover:text-yellow-300">Asia</Link></p>
              </div>
            )}
          </li>

          <li>
            <Link to={"/booknow"} className="hover:text-yellow-300">
              Book Now
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <RiMenu3Fill
            className="text-3xl cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-red-800 text-white p-4 space-y-3">
          <a href="#" className="block">
            Home
          </a>

          <div>
            <button
              onClick={() => setIsNationalOpen(!isNationalOpen)}
              className="flex items-center gap-1"
            >
              National <IoIosArrowDown />
            </button>
            {isNationalOpen && (
              <div className="ml-4 mt-2 text-sm">
                <p>India</p>
                <p>States</p>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setIsInternationalOpen(!isInternationalOpen)}
              className="flex items-center gap-1"
            >
              International <IoIosArrowDown />
            </button>
            {isInternationalOpen && (
              <div className="ml-4 mt-2 text-sm">
                <p>Europe</p>
                <p>Asia</p>
              </div>
            )}
          </div>

          <a href="#" className="block">
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
