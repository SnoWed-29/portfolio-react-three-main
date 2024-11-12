import React from "react";
import Navbar from "./Navbar";
import LineAnimation from "../common/LineAnimation";
import img from "../assets/image-4.jpg";

const ProjectCards = () => {
  return (
    <div className="col-span-3  md:col-span-2 flex flex-col justify-around p-5">
      <Navbar />
      <div className="p-4 overflow-x-auto sm:overflow-visible">
        <div className="flex sm:grid sm:grid-cols-2 sm:gap-4 gap-1 sm:space-x-0 space-x-4 p-1">
          <div className="bg-white/80 p-4 rounded-lg shadow-md text-gray-800 flex flex-col md:flex-row gap-4 min-w-[300px] sm:min-w-0">
            <img
              src={img}
              alt="Spotify Profile"
              className="w-full md:w-1/3 rounded-md"
            />
            <div className="flex flex-col justify-between w-full md:w-2/3">
              <div>
                <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-900">
                  Spotify Profile
                  <span className="text-pink-400">↗</span>
                </h3>
                <p className="text-sm text-gray-700 mt-2">
                  Web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-pink-200 text-pink-800 rounded-full text-xs">
                  React
                </span>
                <span className="px-2 py-1 bg-purple-200 text-purple-800 rounded-full text-xs">
                  Express
                </span>
                <span className="px-2 py-1 bg-green-200 text-green-800 rounded-full text-xs">
                  Spotify API
                </span>
                <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded-full text-xs">
                  Heroku
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white/80 p-4 rounded-lg shadow-md text-gray-800 flex flex-col md:flex-row gap-4 min-w-[300px] sm:min-w-0">
            <img
              src={img}
              alt="Spotify Profile"
              className="w-full md:w-1/3 rounded-md"
            />
            <div className="flex flex-col justify-between w-full md:w-2/3">
              <div>
                <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-900">
                  Spotify Profile
                  <span className="text-pink-400">↗</span>
                </h3>
                <p className="text-sm text-gray-700 mt-2">
                  Web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-pink-200 text-pink-800 rounded-full text-xs">
                  React
                </span>
                <span className="px-2 py-1 bg-purple-200 text-purple-800 rounded-full text-xs">
                  Express
                </span>
                <span className="px-2 py-1 bg-green-200 text-green-800 rounded-full text-xs">
                  Spotify API
                </span>
                <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded-full text-xs">
                  Heroku
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white/80 p-4 rounded-lg shadow-md text-gray-800 flex flex-col md:flex-row gap-4 min-w-[300px] sm:min-w-0">
            <img
              src={img}
              alt="Spotify Profile"
              className="w-full md:w-1/3 rounded-md"
            />
            <div className="flex flex-col justify-between w-full md:w-2/3">
              <div>
                <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-900">
                  Spotify Profile
                  <span className="text-pink-400">↗</span>
                </h3>
                <p className="text-sm text-gray-700 mt-2">
                  Web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-pink-200 text-pink-800 rounded-full text-xs">
                  React
                </span>
                <span className="px-2 py-1 bg-purple-200 text-purple-800 rounded-full text-xs">
                  Express
                </span>
                <span className="px-2 py-1 bg-green-200 text-green-800 rounded-full text-xs">
                  Spotify API
                </span>
                <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded-full text-xs">
                  Heroku
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white/80 p-4 rounded-lg shadow-md text-gray-800 flex flex-col md:flex-row gap-4 min-w-[300px] sm:min-w-0">
            <img
              src={img}
              alt="Spotify Profile"
              className="w-full md:w-1/3 rounded-md"
            />
            <div className="flex flex-col justify-between w-full md:w-2/3">
              <div>
                <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-900">
                  Spotify Profile
                  <span className="text-pink-400">↗</span>
                </h3>
                <p className="text-sm text-gray-700 mt-2">
                  Web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-pink-200 text-pink-800 rounded-full text-xs">
                  React
                </span>
                <span className="px-2 py-1 bg-purple-200 text-purple-800 rounded-full text-xs">
                  Express
                </span>
                <span className="px-2 py-1 bg-green-200 text-green-800 rounded-full text-xs">
                  Spotify API
                </span>
                <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded-full text-xs">
                  Heroku
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <LineAnimation />
      </div>
    </div>
  );
};

export default ProjectCards;
