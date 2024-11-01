import React from "react";

export default function Blog() {
  return (
    <div className="bg-black md:py-40 py-32 ">
      <div className="lg:flex justify-center lg:space-x-14 pt-4 ">
        <div>
          <h1 className="lg:text-2xl font-semibold text-white lg:py-4 mb-5 md:m-0 ml-12">
            Recent Post
          </h1>
          <div className="bg-white shadow-sm rounded-md md:px-16 md:py-10 md:text-start text-center mb-4 w-96 md:w-[35rem] py-20 mr-auto ml-auto">
            <h1 className="md:text-[28px] md:font-bold md:py-4 md:max-w-md max-w-full text-3xl py-8">
              Making a design system from scratch
            </h1>
            <pre className="md:text-xl md:py-4 text-lg py-5 ">
              12 Feb 2020 | Design, Pattern
            </pre>
            <p className="md:max-w-[24rem]  md:text-xl max-w-80 text-center mr-auto ml-auto md:m-0 md:text-left">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div>
          <p className="text-blue-500 text-lg hover:text-blue-700 py-4 md:block hidden">
            <a href="#">View More</a>
          </p>

          <div className="bg-white shadow-sm rounded-md md:px-16 md:py-10 md:text-start text-center mb-4 w-96 md:w-[35rem] py-20 mr-auto ml-auto">
            <h1 className="md:text-[28px] md:font-bold md:py-4 md:max-w-md max-w-80 mr-auto ml-auto text-3xl py-8 ">
              Creating pixel perfect icons in Figma
            </h1>
            <pre className="text-xl py-4 ">
              12 Feb 2020 | Figma, Icon Design
            </pre>
            <p className="md:max-w-[24rem]  md:text-xl max-w-80 text-center mr-auto ml-auto md:m-0 md:text-left ">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="">
            <p className="text-blue-500 text-lg  py-4 md:hidden text-center bg-white p-2 rounded-sm block mr-auto ml-auto mt-10 w-32 hover:bg-transparent hover:border-2 hover:border-white hover:text-teal-50">
              <a href="#">View More</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
