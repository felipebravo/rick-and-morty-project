import styled from "styled-components";
import BackgroundButton from "../../assets/Button.svg";

export const Button = styled.button`
  width: 40px;
  height: 40px;

  border-radius: 50%;

  background-image: url(${BackgroundButton});
  background-repeat: no-repeat;
  background-size: 200%;
  background-position: center;

  animation: spinnerButton 10s infinite;

  svg {
    display: none;
    font-size: 2.5rem;
  }

  &:hover {
    animation: none;

    svg {
      display: unset;
    }
  }

  @keyframes spinnerButton {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
