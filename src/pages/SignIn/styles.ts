import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 5vh;
  width: 100vw;
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    width: 80vw;
    place-content: center;

    h1 {
      margin-bottom: 15px;
    }

    input {
      margin-bottom: 10px;
      height: 30px;
      border: none;
      border-radius: 4px;
      padding-left: 10px;
    }

    button {
      height: 30px;
      border: none;
      color: #fff;
      background-color: #333;
      border-radius: 4px;
      font-size: 14px;
    }

    span {
      color: red;
      font-size: 12px;
      margin-bottom: 10px;
    }
  }
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
  color: #333;
  margin-top: 20px;
  align-self: center;
`;
