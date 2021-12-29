import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home/index';
import About from './pages/about/index';
import ReactHooks from './pages/hooks/react-hooks/index'

function App() {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="/" element={<ReactHooks />} />
    </Routes>
  );
}

export default App;
