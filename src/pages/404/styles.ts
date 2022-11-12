import styled from "styled-components";
import BackgroundImg from "../../assets/Background-img.svg";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    color: var(--primary-blue);

    text-transform: uppercase;
    text-align: center;

    font-size: 8rem;
    font-weight: 500;
    line-height: 8rem;
  }
`;