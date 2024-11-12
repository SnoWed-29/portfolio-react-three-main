import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AnimatedBackground from './common/AnimatedBackground';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <AnimatedBackground>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </AnimatedBackground>
    </Router>
  );
}

export default App;
