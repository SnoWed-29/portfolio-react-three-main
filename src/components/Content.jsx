import React from "react";
import Navbar from "./Navbar";
import UnderlineTxt from "./UnderlineTxt";
import LineAnimation from "../common/LineAnimation";

function Content() {
  return (
    <div className="col-span-3 md:col-span-2 flex flex-col justify-around p-5">
      <Navbar />
      <p className="text-xl leading-10 font-regular mb-6">
        Hi I’m&nbsp;
        <UnderlineTxt text="Haitham" />, based in Casablanca, Morocco. I am a
        dedicated web developer with expertise in Laravel/PHP and React.js. I
        have experience working on various management projects and am skilled in
        handling systems such as Linux and performing deployments. I am eager to
        pursue a full-stack web developer role, where I can apply my skills and
        contribute to innovative web solutions.
      </p>
      <div className=" flex w-full justify-end  px-4">
        <p
          className="text-3xl font-light"
          style={{ fontFamily: '"Playwrite CU", cursive' }}
        >
          <span className="text-6xl font-serif ">&apos;&apos;</span>Make it
          work, make it right, make it fast.
          <span className="text-6xl font-serif ">&apos;&apos;</span>
        </p>
        <span className=" my-14 text-3xl font-medium text-[#ABC9E9]">
          —Kent Beck
        </span>
      </div>
      <div className="w-full">
        <LineAnimation />
      </div>
    </div>
  );
}

export default Content;
