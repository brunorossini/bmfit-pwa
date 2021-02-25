import React from "react";

import { Container } from "./styles";

import { useAuth } from "../../context/auth";
import { useToast } from "../../context/toast";

import { chamaToast } from "./test";

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  const { addToast } = useToast();

  return (
    <Container>
      <button onClick={signOut}>Sair</button>
      {/* <button onClick={() => chamaToast()}>Mensagem</button> */}
      <button onClick={() => addToast({ text: "Olá mundo!" })}>Mensagem</button>
      <h1>Dashboard</h1>
    </Container>
  );
};

export default Dashboard;
