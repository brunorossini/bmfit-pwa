import React from "react";

import { Container, LinkTo } from "./styles";
import { BsPersonFill } from "react-icons/bs";
import { MdExplore, MdNotifications } from "react-icons/md";

import { useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <LinkTo to="/dashboard" active={pathname === "/dashboard"}>
        <MdExplore />
        <span>Explore</span>
      </LinkTo>
      <LinkTo to="/dashboard" active={pathname === "/dashboard"}>
        <MdNotifications />
        <span>Notificações</span>
      </LinkTo>
      <LinkTo to="/profile" active={pathname === "/profile"}>
        <BsPersonFill />
        <span>Perfil</span>
      </LinkTo>
    </Container>
  );
};

export default Navbar;
