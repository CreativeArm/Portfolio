import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const cancleClick = () => {
    if (navbar === true) {
      setNavbar(false);
    }
  };

  return (
    <div>
      <nav className="bg-white shadow-md top-0 left-0 right-0 fixed md:h-auto ">
        <div className="max-w-8xl mx-28 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 text-gray-600 -ml-16  ">
              <Link
                href={"/"}
                onClick={cancleClick}
                className="font-extralight h-10 rounded-2xl bg-gray-200 hover:bg-gray-300 hover:text-black px-5 p-3 text-xl font-mono  "
              >
                cDEV
              </Link>
            </div>

            <div className="hidden md:flex  ">
              <div className="ml-4 flex items-center space-x-5 transition-all">
                <Link to="/" className="mx-4 font-semibold hover:text-red-600">
                  Home
                </Link>

                <Link
                  to="/about"
                  className="mx-4 font-semibold hover:text-red-600"
                >
                  About
                </Link>

                <Link
                  to="/skills"
                  className="mx-4 font-semibold hover:text-red-600"
                >
                  Skills
                </Link>

                <Link
                  to="blog"
                  className="mx-4 font-semibold hover:text-red-600"
                >
                  Blogs
                </Link>

                <Link
                  to="/projects"
                  className="mx-4 font-semibold hover:text-red-600"
                >
                  Projects
                </Link>

                <Link
                  to="/contact"
                  className="mx-4 font-semibold hover:text-red-600"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center ml-28">
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
                className="text-gray-600 block hover:bg-gray-300 hover:text-black  p-5 border-b-2 border-gray-200 "
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setNavbar(!navbar)}
                className="text-gray-600 block hover:bg-gray-300 hover:text-black  p-5 border-b-2 border-gray-200 "
              >
                About
              </Link>

              <Link
                to="/skills"
                onClick={() => setNavbar(!navbar)}
                className="text-gray-600 block hover:bg-gray-300 hover:text-black  p-5 border-b-2 border-gray-200 "
              >
                Skills
              </Link>

              <Link
                to="blog"
                onClick={() => setNavbar(!navbar)}
                className="text-gray-600 block hover:bg-gray-300 hover:text-black  p-5 border-b-2 border-gray-200 "
              >
                Blogs
              </Link>

              <Link
                to="/projects"
                onClick={() => setNavbar(!navbar)}
                className="text-gray-600 block hover:bg-gray-300 hover:text-black  p-5 border-b-2 border-gray-200 "
              >
                Projects
              </Link>

              <Link
                to="/contact"
                onClick={() => setNavbar(!navbar)}
                className="text-gray-600 block hover:bg-gray-300 hover:text-black  p-5 border-b-2 border-gray-200 "
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
