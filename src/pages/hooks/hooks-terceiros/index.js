import Menu from "../../../components/menu/index";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HooksTerceiros() {
  
    const navigate = useNavigate();
    const irparaHome = () => {
        navigate('/');
    }
  return (
    <>
      <Menu />
      <>
        <div className="container">
          <button onClick={irparaHome}>Ir para Home</button>
        </div>
      </>
    </>
  );
}

export default HooksTerceiros;
