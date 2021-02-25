import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import GlobalStyle from "./styles/global";

import Context from "./context/index";
// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Context>
        <Routes />
      </Context>
    </BrowserRouter>
  );
};

export default App;
