

import ArrowAnimation from "../common/ArrowAnimation";
import LineAnimation from "../common/LineAnimation";
import RollingGlobe from "../common/RollingGlobe";
import Content from "../components/Content";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import UnderlineTxt from "../components/UnderlineTxt";

function Home() {
  return (
    <>
      <div className="w-[90vw] md:h-screen p-4 flex flex-col items-start md:items-center justify-center mx-auto">
        <div className="grid grid-cols-3  my">
          <Sidebar />
          <Content />
        </div>
      </div>
    </>
  );
}

export default Home;
