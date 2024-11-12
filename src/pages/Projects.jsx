import Content from "../components/Content";
import ProjectCards from "../components/ProjectCards";
import Sidebar from "../components/Sidebar";




function Projects() {


  return (
    <>
      <div className="w-[90vw] md:h-screen p-4 flex flex-col items-start md:items-center justify-center mx-auto">
        <div className="grid grid-cols-3  my">
          <Sidebar />
          <ProjectCards />
        </div>
      </div>
    </>
  );
}

export default Projects;
