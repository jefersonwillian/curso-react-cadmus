import Menu from "../../components/menu/index";
import LayoutBase from "../../components/layout-base/index";
import Customer from "../../components/customer/index";
import CardComponent from "../../components/card-component/index";
import { useLoading } from "../hooks/custom-hook";
import { useCallback, useContext, useEffect, useState } from "react";
import { colorContext } from '../contexts/colorContext'

function Home() {
  const customers = [
    {
      name: "DaVita Médicos",
      active: false,
    },
    {
      name: "Dufry",
      active: true,
    },
    {
      name: "Duratex",
      active: true,
    },
    {
      name: "Câmara Arabe",
      active: true,
    },
    {
      name: "Medgrupo",
      active: false,
    },
    {
      name: "Pamcary",
      active: true,
    },
  ];

  const customerTestimonials = [
    {
      img: "https://mui.com/static/images/avatar/1.jpg",
      text: "In nulla felis, pellentesque vel tincidunt eu, tristique tristique purus. Suspendisse blandit nunc eros, non imperdiet urna eleifend in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Fusce eros felis, elementum ut ultricies suscipit, egestas sit amet nunc. Curabitur rutrum porttitor metus ut cursus. Aliquam non nunc fermentum, efficitur mi id, convallis tortor.",
    },
    {
      img: "https://mui.com/static/images/avatar/3.jpg",
      text: "In nulla felis, pellentesque vel tincidunt eu, tristique tristique purus. Suspendisse blandit nunc eros, non imperdiet urna eleifend in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Fusce eros felis, elementum ut ultricies suscipit, egestas sit amet nunc. Curabitur rutrum porttitor metus ut cursus. Aliquam non nunc fermentum, efficitur mi id, convallis tortor.",
    },
    {
      img: "https://mui.com/static/images/avatar/2.jpg",
      text: "In nulla felis, pellentesque vel tincidunt eu, tristique tristique purus. Suspendisse blandit nunc eros, non imperdiet urna eleifend in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Fusce eros felis, elementum ut ultricies suscipit, egestas sit amet nunc. Curabitur rutrum porttitor metus ut cursus. Aliquam non nunc fermentum, efficitur mi id, convallis tortor.",
    },
  ];

  const { setLoading } = useLoading();

  const mostraLoading = () => {
    setLoading(true);

    let el = document.querySelector("body");
    el.style.overflow = "hidden";

    setTimeout(() => {
      setLoading(false);
      el.style.overflow = "auto";
    }, 3000);
  };

  // useEffect
  useEffect(() => {
    mostraLoading();
  }, []);


  const { color, setColor } = useContext(colorContext);
  return (
    <>
      <>
        <Menu />
        <LayoutBase
          title="A Cadmus é a empresa que vai te apoiar na consolidação da Cultura Digital."
          descrition="Somos incansáveis na busca dos melhores talentos Porque só com pessoas extraordinárias entregamos resultados extraordinários. Seja com a busca do melhor profissional de TI, seja com desenvolvimento ágil dando vida à ideias, seja com a nova cultura digital, nós nos apaixonamos pelo negócio dos nossos clientes e é isso que nos move. Acreditamos no ser humano e na sua capacidade de virar a chave para o novo e essa é a nossa inspiração ao longo de 25 anos.Afinal, à frente de toda tecnologia há uma pessoa."
        />
      </>
      <div className="customer-component__name">
        <h1>NOSSOS CLIENTES</h1>

        <h1>
          Alterar cor: <input value={color} onChange={e => setColor(e.target.value)}></input>
        </h1>
      </div>
      <div className="customer-component">
        {customers.map((res, i) => (
          <Customer name={res.name} key={i} active={res.active} />
        ))}
      </div>
      <div className="customer-component__name">
        <h1>O QUE DIZEM SOBRE A CADMUS</h1>
      </div>
      <div className="customer-component">
        {customerTestimonials.map((res, i) => (
          <CardComponent img={res.img} key={i} text={res.text} />
        ))}
      </div>
    </>
  );
}

export default Home;
