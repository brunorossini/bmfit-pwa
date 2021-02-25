import styled from "styled-components";

export const Container = styled.div`
  padding-left: env(safe-area-inset-left);
  height: 100%;
  background-color: #fff;
`;

export const View = styled.div`
  width: 100vw;
  /* padding-bottom: 50px; */
`;

export const Bottom = styled.div`
  position: absolute;
  width: 100vw;
  height: 50px;
  bottom: env(safe-area-inset-bottom);
  background-color: pink;
  /* padding-bottom: env(safe-area-inset-bottom); */
`;
