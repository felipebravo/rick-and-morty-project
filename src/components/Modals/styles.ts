import styled, { css } from "styled-components";
import BackgroundAlive from "../../assets/Modal-background-alive.svg";
import BackgroundDead from "../../assets/Modal-background-dead.svg";

interface iBackgroundVariationsProps {
  variant?: "Alive" | "Dead" | "unknown";
}

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--opacity-green);

  z-index: 1;
  inset: 0;
  position: fixed;
  top: 0;
`;

const BackgroundVariations = {
  Alive: css`
    background-image: url(${BackgroundAlive});
    background-size: 100% 100%;

    div {
      bottom: 0px;
    }
  `,
  Dead: css`
    background-image: url(${BackgroundDead});
    background-size: 100% 100%;

    button {
      color: var(--color-white);
    }

    div {
      top: 0px;
      right: 0px;

      color: var(--primary-blue);
    }
  `,
  unknown: css`
    background-image: url(${BackgroundAlive});
    background-size: 100% 100%;

    div {
      bottom: 0px;
    }
  `,
};

export const ModalStyled = styled.div<iBackgroundVariationsProps>`
  ${({ variant }) => BackgroundVariations[variant || "Alive"]}

  position: relative;

  width: 25%;
  height: 70%;

  border-radius: 8px;

  button {
    position: absolute;
    left: 10px;
    top: 15px;

    background-color: transparent;

    font-size: 24px;
  }
`;

export const ModalContent = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;

  width: 50%;
  padding: 10px;

  img {
    width: 100px;
    height: 100px;

    border-radius: 50%;
  }

  span {
    font-family: monospace, sans-serif;
  }
`;
