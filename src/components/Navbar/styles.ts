import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: #333;
`;

export const LinkTo = styled(Link)<{ active: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  flex-direction: column;
  color: #fff;
  font-size: 23px;
  opacity: ${(props) => (props.active ? "1" : "0.6")};

  span {
    margin-top: 3px;
    font-size: 11px;
    font-family: "Ubuntu", sans-serif;
    letter-spacing: 0.4px;
  }
`;
