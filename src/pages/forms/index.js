import Menu from "../../components/menu/index";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { getUser, createUser } from "../../service/user-service";
import CardComponent from "../../components/card-component/index";
import { useLoading } from "../hooks/custom-hook";

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "precisa conter no mínimo 2 caracteres.")
    .max(20, "precisa conter no maximo 20 caracteres.")
    .required("Campo obrigatório"),
  job: Yup.string().required("Campo obrigatório"),
});

function FormReact() {
  const [users, setUsers] = useState([]);

  const handleInit = async () => {
    const userAPI = await getUser();
    setUsers(userAPI);
  };

  const { setLoading } = useLoading();

  const mostraLoading = async  () => {
    setLoading(true);

    let el = document.querySelector("body");
    el.style.overflow = "hidden";

    try {
      await handleInit();
      setLoading(false);
      el.style.overflow = "auto";
    } catch (error) {
      setLoading(false);
      el.style.overflow = "auto";
    }
  };

  // useEffect
  useEffect(() => {
    mostraLoading();
  }, []);

  const handleSubmit = async  (values) => {
    setLoading(true);

    try {
      await createUser(values);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <Menu />
      <div className="customer-component__name">
        <h1>Forms React</h1>
      </div>
      <div className="container">
        <Formik
          initialValues={{
            name: "",
            job: "",
          }}
          validationSchema={ValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div>
                <Field name="name" placeholder="Digite seu nome" />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
              </div>

              <div>
                <Field name="job" placeholder="Digite seu job" />
                {errors.job && touched.job ? <div>{errors.job}</div> : null}
              </div>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
      <br />
      <br />
      <br />
      <div className="customer-component">
        {users.map((item, index) => (
          <CardComponent img={item.avatar} key={index} text={item.first_name} />
        ))}
      </div>
    </>
  );
}

export default FormReact;
