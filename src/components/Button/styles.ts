import styled from "styled-components";

export const Button = styled.button`
  width: fit-content;
  height: fit-content;

  background-color: transparent;

  :hover {
    filter: brightness(2);
  }

  span {
    font-size: 1.7rem;
    font-family: "Get Schwifty", sans-serif;
    font-weight: 700;

    color: var(--primary-green);
  }
`;
