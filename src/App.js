import "./App.css";
import logoCadmus from "./logo-cadmus.png";

function App() {
  const title = "Nós somos ágeis, digitais e humanos";
  const descrition =
    "Somos incansáveis na busca dos melhores talentos Porque só com pessoas extraordinárias entregamos resultados extraordinários. Seja com a busca do melhor profissional de TI, seja com desenvolvimento ágil dando vida à ideias, seja com a nova cultura digital, nós nos apaixonamos pelo negócio dos nossos clientes e é isso que nos move. Acreditamos no ser humano e na sua capacidade de virar a chave para o novo e essa é a nossa inspiração ao longo de 25 anos.Afinal, à frente de toda tecnologia há uma pessoa.";
  return (
    <div className="container">
      <div className="logo">
        <img src={logoCadmus} alt="logo cadmus"></img>
      </div>
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="descrition">
        <p>{descrition}</p>
      </div>
    </div>
  );
}

export default App;
