import React from "react";
import Navbar from "../components/Navbar";
import LineAnimation from "../common/LineAnimation";
import experiences from "../data/experiences.json";
function Experiences() {
  return (
    <div className="col-span-3 md:col-span-2 flex flex-col justify-around p-5">
      <Navbar />
      <div className="relative flex w-full mx-auto py-8 rounded-lg mb-1">
        <div className="absolute left-0 h-full w-1 bg-gradient-to-b from-green-400 to-blue-400 rounded-full"></div>

        <div className="flex flex-col justify-around ">
          {experiences.experience.map((item, index) => (
            <div
              key={index}
              className="bg-transparent text-gray-800 dark:text-white pl-8 ml-4 rounded-lg w-full"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-semibold text-pink-500">
                    {item.title} at{" "}
                    <span className="text-[#4cda89]">{item.company}</span>
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-1">{item.duration}</p>

              <ul className="text-gray-900 dark:text-gray-900 mt-4">
                {item.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
              <p className="text-xs text-gray-400 mt-4"></p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mt-8">
        <LineAnimation />
      </div>
    </div>
  );
}

export default Experiences;
