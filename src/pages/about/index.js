import Menu from '../../components/menu/index'

function About() {
  const title = "Nós somos ágeis, digitais e humanos";
  const descrition =
    "Transformamos ideias em potência com propósito de impactar a sociedade. ";
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

export default About;
