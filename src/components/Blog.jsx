import React from "react";

export default function Blog() {
  return (
    <div className="bg-slate-200 py-20">
      <div className="flex justify-center space-x-[55rem] py-4">
        <h1 className="text-2xl font-semibold">Recent Post</h1>
        <p className="text-blue-500 text-lg hover:text-blue-700">
          <a href="#">View More</a>
        </p>
      </div>
      <div className="flex justify-center space-x-14 ">
        <div className="bg-white rounded-md px-16 py-10">
          <h1 className="text-[28px] font-bold py-4">
            Making a design system from <br /> scratch
          </h1>
          <pre className="text-xl py-4 ">12 Feb 2020 | Design, Pattern</pre>
          <p className="max-w-[24rem]  text-xl">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="bg-white rounded-md py-10 px-16">
          <h1 className="text-[28px] font-bold py-4 ">
            Creating pixel perfect icons in <br /> Figma
          </h1>
          <pre className="text-xl py-4 ">12 Feb 2020 | Figma, Icon Design</pre>
          <p className="max-w-[24rem] text-xl  ">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </div>
  );
}
