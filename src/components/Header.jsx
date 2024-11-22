import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const cancleClick = () => {
    if (navbar === true) {
      setNavbar(false);
    }
  };

  const location = useLocation();

  useEffect(() => {
    console.log(location.hash);
    if (location.hash) {
      const element = document.querySelector(location.hash);
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <nav className="bg-green-800 shadow-md top-0 left-0 right-0  md:h-auto fixed z-10 ">
        <div className="md:max-w-6xl  mx-28 px-4 sm:px-6 lg:px-8 md:mr-auto md:ml-auto">
          <div className="flex  items-center justify-between h-20">
            <div className="flex-shrink-0 text-gray-600 -ml-16  ">
              <Link
                to={"/"}
                onClick={cancleClick}
                className="font-extralight h-10 rounded-2xl bg-gray-200 hover:bg-gray-300 hover:text-black px-5 p-3 text-xl font-mono  "
              >
                cDEV
              </Link>
            </div>

            <div className="hidden md:flex  ">
              <div className="ml-4 flex items-center space-x-5 transition-all">
                <Link
                  to="/"
                  className="mx-4 hover:text-green-300 font-light text-lg text-white"
                >
                  Home
                </Link>

                <Link
                  to="#about"
                  className="mx-4 hover:text-green-300 font-light text-lg text-white"
                >
                  About
                </Link>

                <Link
                  to="#skills"
                  className="mx-4 hover:text-green-300 font-light text-lg text-white"
                >
                  Skills
                </Link>

                <Link
                  to="#blog"
                  className="mx-4 hover:text-green-300 font-light text-lg text-white"
                >
                  Blogs
                </Link>

                <Link
                  to="#project"
                  className="mx-4 font-light text-lg hover:text-green-300 text-white"
                >
                  Projects
                </Link>

                <Link
                  to="#contact"
                  className="mx-4 font-light text-lg text-white hover:text-green-300"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center ">
              <button
                className="p-3 text-gray-200 rounded-lg outline-none focus:border-gray-400 hover:outline-2 hover:outline-gray-500 "
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <div className="text-2xl ">
                    <h1>X</h1>
                  </div>
                ) : (
                  <div className="text-2xl flex  ">
                    <h1 className="rotate-90 ">|||</h1>
                  </div>
                )}{" "}
              </button>
            </div>
          </div>
        </div>

        {navbar && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
              <Link
                to="/"
                onClick={() => setNavbar(!navbar)}
                className="text-white block hover:bg-gray-300 hover:text-black  p-5 border-b-2 border-gray-200 "
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setNavbar(!navbar)}
                className="text-white block hover:bg-gray-300 hover:text-black  p-5 border-b-2 border-gray-200 "
              >
                About
              </Link>

              <Link
                to="/skills"
                onClick={() => setNavbar(!navbar)}
                className="text-white block hover:bg-gray-300 hover:text-black  p-5 border-b-2 border-gray-200 "
              >
                Skills
              </Link>

              <Link
                to="blog"
                onClick={() => setNavbar(!navbar)}
                className="text-white block hover:bg-gray-300 hover:text-black  p-5 border-b-2 border-gray-200 "
              >
                Blogs
              </Link>

              <Link
                to="/projects"
                onClick={() => setNavbar(!navbar)}
                className="text-white block hover:bg-gray-300 hover:text-black  p-5 border-b-2 border-gray-200 "
              >
                Projects
              </Link>

              <Link
                to="/contact"
                onClick={() => setNavbar(!navbar)}
                className="text-white block hover:bg-gray-300 hover:text-black  p-5 border-b-2 border-gray-200 "
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
