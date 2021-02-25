import React from "react";
import { useFormik } from "formik";
import { useAuth } from "../../context/auth";

import SignInValidation from "../../validations/signin.validation";

import { Container, LinkTo } from "./styles";

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "brunorossini@live.com",
      password: "123457",
    },
    validationSchema: SignInValidation,
    onSubmit: (values) => {
      signIn(values);
    },
  });

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <h1>Faça Login</h1>
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
        <button type="submit">Entrar</button>
        <LinkTo to="/signup">Quero me registrar</LinkTo>
      </form>
    </Container>
  );
};

export default SignIn;
