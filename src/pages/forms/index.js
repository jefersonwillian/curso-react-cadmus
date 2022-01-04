import Menu from "../../components/menu/index";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "precisa conter no mínimo 2 caracteres.")
    .max(20, "precisa conter no maximo 20 caracteres.")
    .required("Campo obrigatório"),
  email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
});

function FormReact() {
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
            email: "",
          }}
          validationSchema={ValidationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div>
                <Field name="name" placeholder="Digite seu nome" />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
              </div>

              <div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Digite seu e-mail"
                />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
              </div>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default FormReact;
