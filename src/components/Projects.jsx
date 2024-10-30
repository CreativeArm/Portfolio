import React from "react";

export default function () {
  return (
    <div className="mb-10">
      <div>
        <p className="ml-[400px] text-2xl pt-10">Recent Works</p>
        <div className="flex space-x-16 ml-[400px] border-b-2 border-slate-200 py-10 max-w-[65rem]">
          <div className="">
            <img src="/public/images/dashbord.png" width={"300rem"} alt="" />
          </div>
          <div>
            <h1 className="text-4xl font-bold pb-5">Designing Dashboards</h1>
            <div className="flex items-center space-x-8 pb-5">
              <div className="bg-black p-1 text-center text-white rounded-2xl">
                <p className="text-lg font-bold px-2">2020</p>
              </div>
              <p className="text-2xl font-normal items-center text-slate-400">
                Dashboard
              </p>
            </div>
            <p className="max-w-[42rem] text-lg font-medium">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="flex space-x-16 ml-[400px] border-b-2 border-slate-200 py-10 max-w-[65rem]">
          <div className="">
            <img src="/public/images/portrait.png" width={"300rem"} alt="" />
          </div>
          <div>
            <h1 className="text-4xl font-bold pb-5">
              Vibrant Portraits of 2020
            </h1>
            <div className="flex items-center space-x-8 pb-5">
              <div className="bg-black p-1 text-center text-white rounded-2xl">
                <p className="text-lg font-bold px-2">2022</p>
              </div>
              <p className="text-2xl font-normal items-center text-slate-400">
                Illustration
              </p>
            </div>
            <p className="max-w-[42rem] text-lg font-medium">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="flex space-x-16 ml-[400px] border-b-2 border-slate-200 py-10 max-w-[65rem]">
          <div className="">
            <img src="/public/images/typo.png" width={"300rem"} alt="" />
          </div>
          <div>
            <h1 className="text-4xl font-bold pb-5">
              36 Days of Malayalam type
            </h1>
            <div className="flex items-center space-x-8 pb-5">
              <div className="bg-black p-1 text-center text-white rounded-2xl">
                <p className="text-lg font-bold px-2">2023</p>
              </div>
              <p className="text-2xl font-normal items-center text-slate-400">
                Typography
              </p>
            </div>
            <p className="max-w-[42rem] text-lg font-medium">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="border-red-300 border-2 text-lg py-2 px-8 rounded-sm    hover:bg-red-300 mt-10">
          <a href="">View More</a>
        </button>
      </div>
    </div>
  );
}
