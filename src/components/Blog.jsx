import React, { useState } from "react";
import blog from "./blogs";

export default function Blog() {
  const [details, setDetails] = useState(blog);
  const render = details.map((detail, idx) => {
    return (
      <div
        key={idx}
        className="bg-white shadow-sm rounded-md md:px-10 md:pb-10  md:text-start text-center mb-4 w-96 md:w-[24rem] py-10 mr-auto ml-auto"
      >
        <h1 className="md:text-[28px] text-green-800 md:font-bold md:py-4 md:max-w-md max-w-full text-3xl py-8 px-6 md:px-0">
          {detail.title}
        </h1>
        <pre className="md:text-xl md:py-4 text-lg py-5 ">{detail.info}</pre>
        <p className="md:max-w-[30rem] md:text-xl max-w-80 text-center mr-auto ml-auto md:m-0 md:text-left">
          {detail.more}
        </p>
      </div>
    );
  });

  return (
    <div className="bg-black md:py-40 py-32 " id="blog">
      <div className="lg:flex justify-between lg:max-w-[68%] mr-auto ml-auto ">
        <div>
          <h1 className="lg:text-2xl font-semibold text-white lg:py-4 mb-5 lg:m-0 ml-12">
            Recent Post
          </h1>
        </div>
        <div>
          <p className="text-green-800 text-lg hover:text-green-900 py-4 lg:block hidden">
            <a href="#">View More</a>
          </p>
        </div>
      </div>
      <div>
        <div className=" justify-center lg:max-w-[70%] gap-x-10 mr-auto ml-auto lg:grid lg:grid-cols-3">
          {render}
        </div>

        <div className="">
          <p className="text-green-800 text-lg  py-4 lg:hidden text-center bg-white p-2 rounded-sm block mr-auto ml-auto mt-10 w-32 hover:bg-transparent transition ease-in-out hover:bg-green-800 hover:text-white ">
            <a href="#">View More</a>
          </p>
        </div>
      </div>
    </div>
  );
}
