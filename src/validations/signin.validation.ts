import * as Yup from "yup";

export default Yup.object({
  email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: Yup.string().required("Senha é obrigatório."),
});
