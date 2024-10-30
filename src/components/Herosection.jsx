import React from "react";

export default function Herosection() {
  return (
    <div className="flex justify-center space-x-60 my-60">
      <div>
        <h1 className="text-7xl font-semibold ">
          <div className="typing-effect">
            Hi, I am <span className="text-red-100">Amos,</span>
          </div>
          Creative Technologist
        </h1>
        <p className="mt-10 text-2xl">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet{" "}
          <br />
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam <br /> consequat sunt nostrud amet.
        </p>

        <button className="bg-red-100 p-4 mt-10 text-2xl rounded-sm font-medium text-white hover:bg-red-900 mb- ">
          Download Resume
        </button>
      </div>
      <div className="">
        <div
          className="h-80 w-80 rounded-full bg-black  bg-center items-center justify-center bg-cover"
          style={{
            backgroundImage: `url('/public/images/Amos.jpg')`,
          }}
        ></div>
      </div>
    </div>
  );
}
