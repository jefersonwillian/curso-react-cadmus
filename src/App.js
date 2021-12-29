import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home/index';
import About from './pages/about/index';
import ReactHooks from './pages/hooks/react-hooks/index'
import HooksTerceiros from "./pages/hooks/hooks-terceiros/index";
import CustomHook from "./pages/hooks/custom-hook/index";

function App() {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="react-hooks" element={<ReactHooks />} />
      <Route path="hooks-terceiros" element={<HooksTerceiros />} />
      <Route path="custom-hook" element={<CustomHook />} />
    </Routes>
  );
}

export default App;
