import styled from "styled-components";
import BackgroundButton from "../../assets/Button.svg";

export const Button = styled.button`
  width: 100px;
  height: 100px;

  border-radius: 50%;

  background-image: url(${BackgroundButton});
  background-repeat: no-repeat;
  background-size: cover;

  svg {
    display: none;
    font-size: 2.5rem;
  }

  &:hover {
    scale: 1.08;
    svg {
      display: unset;
    }
  }
`;
