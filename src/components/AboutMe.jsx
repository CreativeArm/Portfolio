import React from "react";

import { MdFacebook, MdLanguage } from "react-icons/md";
import { SiInstagram, SiLinkedin } from "react-icons/si";
import { SiX } from "react-icons/si";

export default function AboutMe() {
  return (
    <div className=" h-auto py-20 bg-gray-20 ">
      <div className="flex justify-start ml-80 space-x-20  py-10 items-center">
        <div
          className="h-[500px] w-96 rounded-sm bg-cover bg-center shadow-md"
          style={{
            backgroundImage: `url('/public/images/Amos_new.jpg')`,
          }}
        ></div>
        <div>
          <h1 className="text-left text-white font-bold text-[70px] ">
            ABOUT ME
          </h1>
          <h2 className="text-red-100 text-lg font-bold mb-2 ">
            AYANDOKUN AMOS - WEB DEVELOPER
          </h2>

          <div className="text-lg  max-w-3xl text-gray-100 text-center md:text-left">
            <p>
              Hello! I’m a passionate web developer with a focus on building
              intuitive, accessible, and responsive web applications. With a
              background in <strong>JavaScript</strong>, <strong>React</strong>,{" "}
              <strong>CSS</strong>, and a love for crafting smooth,
              user-centered experiences, I bring creativity and precision to
              every project.
            </p>
            <p className="mt-4">
              My journey in web development started with a fascination for
              design and coding, and it’s grown into a rewarding career. Whether
              working with dynamic front-end interfaces or complex back-end
              logic, I am committed to delivering top-notch performance, clean
              code, and visually engaging applications.
            </p>
            <p className="mt-4">
              Outside of development, I enjoy{" "}
              <em>[personal hobbies, e.g., reading, hiking, music]</em>, which
              often inspire my approach to projects. Feel free to browse my
              portfolio and get in touch if you’re interested in collaborating!
            </p>
            <div className="flex space-x-10 mt-2">
              <MdFacebook />
              <MdLanguage />
              <SiInstagram />
              <SiLinkedin />
              <SiX />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
