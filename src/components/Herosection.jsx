import React from "react";

export default function Herosection() {
  return (
    <div className="py-20 md:px-10 md:py-10  md:flex md:justify-center md:space-x-60 md:my-60">
      <div>
        <h1 className="md:text-6xl md:font-semibold md:text-start text-center text-3xl font-bold py-10 md:py-8 ">
          <div className="md:typing-effect  ">
            Hi, I am <span className="text-red-100">Amos,</span>
          </div>
          Creative Technologist
        </h1>
        <p className="max-w-lg lg:max-w-xl lg:text-left lg:text-lg text-center md:max-w-2xl md:mr-0 md:ml-0 flex mr-auto ml-auto ">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet{" "}
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>

        <button className="bg-red-100 lg:text-lg lg:p-3 mt-8 p-4 mr-auto lg:ml-0 ml-[30%] mb-10 rounded-sm hover:bg-red-500">
          Download Resume
        </button>
      </div>
      <div className="">
        <div
          className="h-80 w-80 md:rounded-full bg-black  bg-center items-center justify-center bg-cover mr-auto ml-auto"
          style={{
            backgroundImage: `url('/public/images/Amos.jpg')`,
          }}
        ></div>
      </div>
    </div>
  );
}
