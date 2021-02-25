import * as Yup from "yup";

export default Yup.object({
  name: Yup.string().required("Nome é obrigatório"),
  email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  phone: Yup.string()
    .required("Telefone é obrigatório")
    .length(11)
    .matches(/^[0-9]+$/, "Telefone não é válido"),
  password: Yup.string().required("Senha é obrigatório."),
  confirm_password: Yup.string()
    .required("Confirmação da senha é obrigatório")
    .oneOf([Yup.ref("password"), null], "Senha não confere"),
});
