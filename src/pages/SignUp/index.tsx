import React from "react";
import { useFormik } from "formik";
import { useAuth } from "../../context/auth";

import SignUpValidation from "../../validations/signup.validation";

import { Container, LinkTo } from "../SignIn/styles";

const SignUp: React.FC = () => {
  const { signUp } = useAuth();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      phone: "",
    },
    validationSchema: SignUpValidation,
    onSubmit: (values) => {
      try {
        signUp(values);
      } catch (error) {
        alert(JSON.stringify(error));
      }
    },
  });

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <h1>Cadastro</h1>
        <input
          id="name"
          name="name"
          placeholder="Nome"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <span>{formik.errors.name}</span>
        ) : null}
        <input
          id="email"
          name="email"
          placeholder="E-mail"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <span>{formik.errors.email}</span>
        ) : null}
        <input
          id="password"
          name="password"
          placeholder="Senha"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <span>{formik.errors.password}</span>
        ) : null}
        <input
          id="confirm_password"
          name="confirm_password"
          placeholder="Confirme a Senha"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirm_password}
        />
        {formik.touched.confirm_password && formik.errors.confirm_password ? (
          <span>{formik.errors.confirm_password}</span>
        ) : null}
        <input
          id="phone"
          name="phone"
          placeholder="Telefone"
          type="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <span>{formik.errors.phone}</span>
        ) : null}
        <button type="submit">Cadastrar</button>

        <LinkTo to="/">Já tenho cadastro</LinkTo>
      </form>
    </Container>
  );
};

export default SignUp;
