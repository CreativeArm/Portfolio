import React from "react";

export default function AboutMe() {
  return (
    <div className=" h-auto py-20 bg-black " id="about">
      <div className="md:flex md:justify-start justify-center p-6 md:p-0 md:ml-80 md:space-x-20  py-10 items-center">
        <div
          className="h-[500px] w-96 rounded-sm bg-cover bg-center shadow-md hidden md:block"
          style={{
            backgroundImage: `url('https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg')`,
          }}
        ></div>
        <div>
          <h1 className="md:text-left pb-6  text-white font-bold text-5xl md:text-[70px] flex justify-center md:block ">
            ABOUT ME
          </h1>
          <h2 className="text-green-700 text-lg font-bold mb-2 flex justify-center md:block">
            AYANDOKUN AMOS - WEB DEVELOPER
          </h2>

          <div className="md:text-lg px-4 md:px-0 md:max-w-3xl text-white text-center md:text-left">
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
          </div>
        </div>
      </div>
    </div>
  );
}
