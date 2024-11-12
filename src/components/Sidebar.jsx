import React from "react";
import RollingGlobe from "../common/RollingGlobe";

function Sidebar() {
  return (
    <div className="col-span-3 md:col-span-1  p-5">
      <div className="flex  h-[450px] ">
        <RollingGlobe />
      </div>
      <div className="flex flex-col p-4 space-y-2">
        <h1 className="text-lg font-bold">Haitham Dihaji</h1>
        <h2 className="text-base text-[#ABC9E9]">Full Stack Developer</h2>
        <div className="flex justify-between w-2/4 text-sm">
          <a href="#">Twitter</a>
          <span className="text-[#F5BFD7]">/</span>
          <a href="#">Github</a>
          <span className="text-[#F5BFD7]">/</span>
          <a href="#">Linkedin</a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
