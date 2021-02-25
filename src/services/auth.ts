import { AxiosResponse } from "axios";
import api from "./api";

interface SignInResponseData {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

interface SignUpResponseData {}

interface SignInData {
  email: string;
  password: string;
}

interface SignUpData {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  phone: string;
}

export function signIn(
  values: SignInData
): Promise<AxiosResponse<SignInResponseData>> {
  return api.post("/auth", values);
}

export function signUp(
  values: SignUpData
): Promise<AxiosResponse<SignUpResponseData>> {
  return api.post("/users", values);
}
