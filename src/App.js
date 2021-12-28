import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home/index';
import About from './pages/about/index';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;
