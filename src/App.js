import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import ReactHooks from './pages/hooks/react-hooks'
import HooksTerceiros from "./pages/hooks/hooks-terceiros";
import {LoadingProvider} from "./pages/hooks/custom-hook";
import Desafio04 from './pages/desafio-04/index';
import { ColorProvider } from './pages/contexts/colorContext';

function App() {
  return (
    <div>
      <ColorProvider>
        <LoadingProvider>
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="react-hooks" element={<ReactHooks />} />
            <Route path="hooks-terceiros" element={<HooksTerceiros />} />
            <Route path="desafio04" element={<Desafio04 />} />
          </Routes>
        </LoadingProvider>
      </ColorProvider>
    </div>
  );
}

export default App;
