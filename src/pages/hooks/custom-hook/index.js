import Menu from "../../../components/menu/index";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CustomHook() {
  const navigate = useNavigate();
  const irparaHome = () => {
    navigate("/");
  };
  return (
    <>
      <Menu />
      <>
        <div className="container">
          <button onClick={irparaHome}>Ir para CustomHook</button>
        </div>
      </>
    </>
  );
}

export default CustomHook;
