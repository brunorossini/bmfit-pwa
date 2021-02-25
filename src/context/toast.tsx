import React, { createContext, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

interface ToastData {
  text: string;
}

interface ToastContextData {
  addToast(text: ToastData): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}

export const ToastProvider: React.FC = ({ children }) => {
  const addToast = (values: ToastData) => {
    const { text } = values;

    toast(text, { type: "error" });
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};
