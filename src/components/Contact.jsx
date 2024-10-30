import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="bg-slate-50 py-20">
        <div className="flex justify-center space-x-10 ">
          <img src="/icons/fb.png" alt="" className="hover:scale-95" />
          <img src="/icons/Group.png" alt="" className="hover:scale-95" />
          <img src="/icons/insta.png" alt="" className="hover:scale-95" />
          <img src="/icons/Linkedin.png" alt="" className="hover:scale-95" />
        </div>
        <p className="text-center text-md pt-6">
          Copyright ©2020 All rights reserved{" "}
        </p>
      </div>
    </div>
  );
}
