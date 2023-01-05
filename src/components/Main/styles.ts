import styled from "styled-components";

export const StyledMain = styled.main`
  position: absolute;
  bottom: 30%;
  left: 25%;

  display: flex;
  align-items: center;
  gap: 20px;

  width: 70%;

  @media (max-width: 1290px) {
    left: 30%;
  }

  @media (max-width: 790px) {
    left: 10%;

    width: 80%;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  gap: 10px;

  width: 100%;
  overflow-x: scroll;

  @media (max-width: 1290px) {
    width: 60%;
  }

  @media (max-width: 1040px) {
    width: 50%;
  }

  @media (max-width: 790px) {
    width: 100%;
  }
`;
