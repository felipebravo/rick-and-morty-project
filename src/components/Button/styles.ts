import styled from "styled-components";
import BackgroundButton from "../../assets/Button.svg";

export const Button = styled.button`
  width: 130px;
  height: 100px;

  border-radius: 50%;

  background-image: url(${BackgroundButton});
  background-repeat: no-repeat;
  background-size: 190%;
  background-position: center;

  animation: spinnerButton 5s linear infinite;

  span {
    display: none;

    font-size: 1.7rem;
    font-family: "Get Schwifty", sans-serif;
    font-weight: 700;
  }

  &:hover {
    animation: none;

    span {
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
