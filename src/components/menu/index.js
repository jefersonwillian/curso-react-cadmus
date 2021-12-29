import * as React from "react";
import { Link } from "react-router-dom";
import logoCadmus from "./logo-cadmus.png";
import "./menu.css";
import MenuMuia from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";

function Menu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const LinkJeff = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: "#202024",
  }));

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
        <a
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Hooks
        </a>

        <MenuMuia
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>
            <LinkJeff to="/react-hooks">React Hooks</LinkJeff>
          </MenuItem>
          <MenuItem>
            <LinkJeff to="/hooks-terceiros">Hooks Terceiros</LinkJeff>
          </MenuItem>
          <MenuItem>
            <LinkJeff to="/custom-hook">Custom Hook</LinkJeff>
          </MenuItem>
        </MenuMuia>
      </div>
    </div>
  );
}

export default Menu;
