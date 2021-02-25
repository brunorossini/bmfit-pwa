import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useToast } from "./toast";

import * as auth from "../services/auth";
import api from "../services/api";

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

interface UserData {
  name: string;
  email: string;
}

interface AuthContextData {
  signed: boolean;
  loading: boolean;
  user: UserData | null;
  signIn(values: SignInData): void;
  signUp(values: SignUpData): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}

export const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory();

  const { addToast } = useToast();

  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = localStorage.getItem("@RNAuth:user");
      const storagedToken = localStorage.getItem("@RNAuth:token");

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function signIn(values: SignInData) {
    try {
      const { data } = await auth.signIn(values);

      setUser(data.user);

      api.defaults.headers.Authorization = `Bearer ${data.token}`;

      localStorage.setItem("@RNAuth:user", JSON.stringify(data.user));
      localStorage.setItem("@RNAuth:token", data.token);
    } catch (error) {
      const { msg } = error.response.data;
      addToast({ text: msg });
    }
  }

  async function signUp(values: SignUpData) {
    try {
      await auth.signUp(values);
      history.push("/");
    } catch (error) {
      const { msg } = error.response.data;
      addToast({ text: msg });
    }
  }

  async function signOut() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        loading,
        user,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
