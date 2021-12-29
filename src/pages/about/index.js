import Menu from '../../components/menu/index'
import LayoutBase from '../../components/layout-base/index'

function About() {
  return (
    <div>
      <>
        <Menu />
        <LayoutBase
          title="Nós somos ágeis, digitais e humanos"
          descrition="Transformamos ideias em potência com propósito de impactar a sociedade."
        />
      </>
    </div>
  );
}

export default About;
