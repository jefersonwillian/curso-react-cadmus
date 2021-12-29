import Menu from "../../../components/menu/index";
import { useCallback, useEffect, useState } from "react";

function ReactHooks() {
  console.log("rederizou :v:");

  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);

  const exibirDobro = () => {
    alert(valor1 * 2);
  };

  // useEffect
  useEffect(() => {
    exibirDobro();
  }, [valor1]);

  // useCallback;
  //   const exibirDobro = useCallback(() => {
  //     alert(valor1 * 2);
  //   }, [valor1]);

  return (
    <>
      <Menu />
      <>
        <div className="container">
          <input
            value={valor1}
            onChange={(e) => setValor1(Number(e.target.value))}
          ></input>
          <input
            value={valor2}
            onChange={(e) => setValor2(Number(e.target.value))}
          ></input>
          <label>{valor1 + valor2}</label>
          <button onClick={exibirDobro}>Exibis dobro</button>
        </div>
      </>
    </>
  );
}

export default ReactHooks;
