import React from "react";

export default function Skills() {
  return (
    <>
      <div className="py-24">
        <h1 className="bg-white text-red-100 py-2 flex justify-center  font-bold text-[70px] ">
          SKILLS
        </h1>
        <p className=" text-lg text-center flex justify-center max-w-6xl ml-auto mr-auto">
          With a strong foundation in front-end and back-end development, along
          with a creative flair for multimedia, I bring both technical precision
          and innovative design to each project. Here, you’ll find the tools,
          languages, and techniques that empower me to craft seamless,
          user-friendly, and visually engaging digital experiences.
        </p>
        <div className="flex py-20 space-x-40 justify-center">
          <div className="mt-auto mb-auto ">
            <div>
              <p className="relative text-center  text-2xl font-bold mb-8  after:justify-center after:mt-4 after:content-[''] after:block after:w-52 after:h-[2px] after:bg-gray-500 after:absolute ">
                My Focus
              </p>
            </div>
            <div>
              <ul className="text-lg font-medium">
                <li className="mb-2">Web Development</li>
                <li className="mb-2">Responsive Web App</li>
                <li className="mb-2">Graphics Design</li>
                <li className="mb-2">Ui/Ux Design</li>
                <li className="mb-2">Web Design</li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className="flex mb-2">
              <div className=" bg-black p-3 w-32 text-white font-medium text-center ">
                HTML
              </div>
              <div className="bg-gray-600 p-2 w-72 text-white font-medium">
                {" "}
              </div>
            </div>
            <div className="flex mb-2">
              <div className=" bg-black p-3 w-32 text-white font-medium text-center ">
                CSS
              </div>
              <div className="bg-gray-600 p-2 w-72 text-white font-medium">
                {" "}
              </div>
            </div>
            <div className="flex mb-2">
              <div className=" bg-black p-3  w-32 text-white font-medium text-center">
                JavaScript
              </div>
              <div className="bg-gray-600 p-2 w-72 text-white font-medium">
                {" "}
              </div>
            </div>
            <div className="flex mb-2">
              <div className=" bg-black p-3 w-32  text-white font-medium text-center">
                React Js
              </div>
              <div className="bg-gray-600 p-2 w-72 text-white font-medium">
                {" "}
              </div>
            </div>
            <div className="flex mb-2">
              <div className=" bg-black p-3 w-32  text-white font-medium text-center">
                Wordpress
              </div>
              <div className="bg-gray-600 p-2 w-72 text-white font-medium">
                {" "}
              </div>
            </div>
            <div className="flex mb-2">
              <div className=" bg-black p-3 w-32 text-white font-medium text-center">
                Photoshop
              </div>
              <div className="bg-gray-600 p-2 w-72 text-white font-medium">
                {" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
