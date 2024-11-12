import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AnimatedBackground from "./common/AnimatedBackground";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Sidebar from "./components/Sidebar";
import Expriences from "./pages/Expriences";

function App() {
  return (
    <Router>
      <AnimatedBackground>
        <div className="w-[90vw] md:h-screen p-4 flex flex-col items-start md:items-center justify-center mx-auto">
          <div className="grid grid-cols-3">
            <Sidebar />
            <div className="col-span-2">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experiences" element={<Expriences />} />
              </Routes>
            </div>
          </div>
        </div>
      </AnimatedBackground>
    </Router>
  );
}

export default App;
