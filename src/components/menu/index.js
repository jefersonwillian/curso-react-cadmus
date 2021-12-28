import { Link } from "react-router-dom";
import logoCadmus from "./logo-cadmus.png";
import "./menu.css";

function Menu() {
  return (
    <div className="menu">
      <div className="menu__logo">
        <Link to="/">
          <img src={logoCadmus} alt="logo cadmus"></img>
        </Link>
      </div>
      <div className="menu__nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Menu;
