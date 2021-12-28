import Menu from "../../components/menu/index";

function Home() {
  const title =
    "A Cadmus é a empresa que vai te apoiar na consolidação da Cultura Digital.";
  const descrition =
    "Somos incansáveis na busca dos melhores talentos Porque só com pessoas extraordinárias entregamos resultados extraordinários. Seja com a busca do melhor profissional de TI, seja com desenvolvimento ágil dando vida à ideias, seja com a nova cultura digital, nós nos apaixonamos pelo negócio dos nossos clientes e é isso que nos move. Acreditamos no ser humano e na sua capacidade de virar a chave para o novo e essa é a nossa inspiração ao longo de 25 anos.Afinal, à frente de toda tecnologia há uma pessoa.";
  return (
    <div className="container">
      {Menu()}
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="descrition">
        <p>{descrition}</p>
      </div>
    </div>
  );
}

export default Home;
