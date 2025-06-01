import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/images/logo.png";

function NavbarMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="px-2 sm:px-4 py-2 bg-white  w-full top-0 left-0 shadow-md">
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <div className="md:w-1/3">
          <NavLink to={"/"} onClick={hideMenu}>
            <img
              src={logo}
              className="md:w-[150px] w-[110px]"
              alt="Amoza Tegels Logo"
            />
          </NavLink>
        </div>

        <div className="flex md:order-2 md:w-1/3">
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="p-2 rounded-lg md:hidden hover:bg-gray-100 text-gray-400"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
            </svg>
          </button>
        </div>

        <div
          className={`w-full md:flex md:w-auto md:order-1 ${
            showMenu ? "" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-200 rounded-lg bg-gray-100 md:bg-white md:flex-row md:space-x-8 md:mt-0 md:text-lg font-semibold md:border-0 font-kanit">
            <li>
              <span
                className="block py-2 pl-3 pr-4 rounded md:p-0 text-cyan-700 hover:underline hover:underline-offset-8 transition delay-200"
                aria-current="page"
              >
                <NavLink to={"/"} onClick={hideMenu}>
                  Home
                </NavLink>
              </span>
            </li>

            <li>
              <span
                className="block py-2 pl-3 pr-4 rounded md:p-0 text-cyan-700 hover:underline hover:underline-offset-8"
                aria-current="page"
              >
                <NavLink to={"/services"} onClick={hideMenu}>
                  Our Work
                </NavLink>
              </span>
            </li>

            <li>
              <span
                className="block py-2 pl-3 pr-4 rounded md:p-0 text-cyan-700 hover:underline hover:underline-offset-8"
                aria-current="page"
              >
                <NavLink to={"/quote"} onClick={hideMenu}>
                  Request Quote
                </NavLink>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarMenu;
