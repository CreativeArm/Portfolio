import React, { useState } from "react";
import project from "./project";
import { Link } from "react-router-dom";

export default function () {
  const [details, setDetails] = useState(project);

  const render = details.map((detail, idx) => {
    return (
      <div
        key={idx}
        className="md:w-[30rem] md:h-[34rem] w-[24rem] h-[38rem] shadow-lg  rounded-md group lg:mb-5 mb-20 "
      >
        <div className=" bg-white">
          <div
            className="h-[18rem] relative z-0 bg-cover bg-center hover:bg-green-500"
            style={{ backgroundImage: `url(${detail.img})` }}
          >
            <div className="absolute inset-0  bg-gradient-to-t from-green-600 via-transparent to-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-0">
              <h1>Lern MOre</h1>
            </div>
          </div>
          <h2 className="text-center text-2xl pt-4 font-bold text-green-900">
            {detail.title}
          </h2>
          <p className="px-8 py-4 text-center">{detail.body}</p>
          <div className="grid justify-center">
            <Link
              to={"#"}
              className="border-2 border-green-800 shadow-md font-medium p-2 mt-10 lg:mt-2  mr-auto hover:bg-green-900 hover:text-white transition ease-in-out "
            >
              View Project
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-white " id="projects">
      <div className="max-w-[60%] mr-auto ml-auto ">
        <div className="text-green-700 pb-10 lg:pb-5 pt-20 flex justify-center  font-bold md:text-[70px] text-5xl text-center ">
          <h1>MY PROJECTS</h1>
        </div>

        <div className="lg:grid lg:grid-cols-2 md:justify-center lg:gap-10 md:my-20 my-30 grid justify-center ">
          {render}
        </div>
      </div>
    </div>
  );
}
