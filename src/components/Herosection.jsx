import React from "react";

export default function Herosection() {
  return (
    <div className="bg-white">
      <div className="py-20 md:px-10 md:pt-10 md:pb-5  md:flex md:justify-center md:space-x-60 md:my-60 max-w-[80%] mr-auto ml-auto">
        <div>
          <div className=" md:font-semibold md:text-start text-center text-3xl font-bold py-10 md:py-8 ">
            <div className="md:typing-effect  ">
              <h4 className="text-2xl text-gray-500">FOLAHAN AMOS</h4>
            </div>
            <h1 className="font-bold pt-4 md:text-7xl text-green-900">
              FRONT END <br />
              WEB DEVELOPER
            </h1>
          </div>

          <button className="bg-green-800 text-white rounded-lg lg:text-md lg:font-semibold  lg:px-5  md:mt-4 p-4 mr-auto lg:ml-0 md:ml-[30%] mb-10  hover:bg-green-900 shadow-md hidden md:block">
            View My Work
          </button>
        </div>

        <div className="">
          <div
            className="hidden md:block h-80 w-80 md:rounded-full bg-black  bg-center items-center justify-center bg-cover mr-auto ml-auto"
            style={{
              backgroundImage: `url('https://static.wixstatic.com/media/c31f19_8dd97127a4a14c7caaad20c0c0256de9~mv2.jpg/v1/crop/x_0,y_449,w_2304,h_1974/fill/w_560,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Amos2.jpg')`,
            }}
          ></div>
          <div
            className="md:hidden rounded-md  h-[28rem] w-[20rem] items-center justify-center bg-cover bg-center mr-auto ml-auto"
            style={{
              backgroundImage: `url('https://static.wixstatic.com/media/c31f19_8dd97127a4a14c7caaad20c0c0256de9~mv2.jpg/v1/crop/x_0,y_449,w_2304,h_1974/fill/w_560,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Amos2.jpg')`,
            }}
          ></div>
          <div className="flex justify-center py-8">
            <button className="bg-green-800 text-white py-3 px-10 rounded-lg text-md md:hidden hover:bg-green-900 shadow-md">
              View My Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
