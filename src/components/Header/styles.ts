import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;

  width: 100%;

  padding: 20px;

  div {
    display: flex;
    gap: 20px;
  }

  .navigation__icons {
    width: 70px;

    border-radius: 50%;
  }

  .navigation__spotify {
    width: 80px;
  }

  @media (max-width: 720px) {
    div:nth-child(2) {
      display: none;
    }
  }
`;
