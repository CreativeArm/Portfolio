import React from "react";

export default function Skills() {
  return (
    <>
      <div className="lg:py-24 bg-gray-100" id="skills">
        <h1 className=" text-green-700 py-6 flex justify-center  font-bold text-[70px] ">
          SKILLS
        </h1>
        <p className=" lg:text-lg max-w-sm md:text-left lg:text-center lg:mt-0 flex justify-center lg:max-w-6xl text-center px-6 md:px-0 ml-auto mr-auto">
          With a strong foundation in front-end and back-end development, along
          with a creative flair for multimedia, I bring both technical precision
          and innovative design to each project. Here, you’ll find the tools,
          languages, and techniques that empower me to craft seamless,
          user-friendly, and visually engaging digital experiences.
        </p>
        <div className="lg:flex py-20 lg:space-x-40 justify-center">
          <div className="lg:mt-auto lg:mb-auto ">
            <div>
              <p className="text-center  text-2xl font-bold mb-8 after:text-center   ">
                My Focus
              </p>
              <hr className="  h-0.5 -mt-4 mb-4 w-52 flex justify-center mr-auto ml-auto bg-gray-500" />
            </div>
            <div className="text-center lg:text-start mb-20 lg:mb-0">
              <ul className="text-lg font-medium ">
                <li className="mb-2">Web Development</li>
                <li className="mb-2">Responsive Web App</li>
                <li className="mb-2">Graphics Design</li>
                <li className="mb-2">Ui/Ux Design</li>
                <li className="mb-2">Web Design</li>
              </ul>
            </div>
          </div>
          <div className=" max-w-[20rem] mr-auto ml-auto md:max-w-max">
            <div className="flex mb-2">
              <div className=" bg-black px-3 py-2 w-32 text-white font-medium text-center ">
                HTML
              </div>
              <div className="bg-gray-600 px-3 py-2  w-60 text-white font-medium"></div>
              <div className="bg-gray-300 px-3 py-2 w-12 text-white font-medium"></div>
            </div>
            <div className="flex mb-2">
              <div className=" bg-black px-3 py-2  w-32 text-white font-medium text-center ">
                CSS
              </div>
              <div className="bg-gray-600 px-3 py-2  w-52 text-white font-medium"></div>
              <div className="bg-gray-300 px-3 py-2  w-20 text-white font-medium"></div>
            </div>
            <div className="flex mb-2">
              <div className=" bg-black px-3 py-2   w-32 text-white font-medium text-center">
                JavaScript
              </div>
              <div className="bg-gray-600 px-3 py-2  w-40 text-white font-medium"></div>
              <div className="bg-gray-300 px-3 py-2  w-32 text-white font-medium"></div>
            </div>
            <div className="flex mb-2">
              <div className=" bg-black px-3 py-2  w-32  text-white font-medium text-center">
                React Js
              </div>
              <div className="bg-gray-600 px-3 py-2  w-36 text-white font-medium"></div>
              <div className="bg-gray-300 px-3 py-2  w-36 text-white font-medium"></div>
            </div>
            <div className="flex mb-2">
              <div className=" bg-black px-3 py-2  w-32  text-white font-medium text-center">
                Wordpress
              </div>
              <div className="bg-gray-600 px-3 py-2  w-56 text-white font-medium"></div>
              <div className="bg-gray-300 px-3 py-2  w-16 text-white font-medium"></div>
            </div>
            <div className="flex mb-2">
              <div className=" bg-black px-3 py-2  w-32 text-white font-medium text-center">
                Photoshop
              </div>
              <div className="bg-gray-600 px-3 py-2  w-64 text-white font-medium"></div>
              <div className="bg-gray-300 px-3 py-2  w-8 text-white font-medium"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
