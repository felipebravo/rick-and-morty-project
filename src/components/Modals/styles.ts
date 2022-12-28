import styled, { css } from "styled-components";
import BackgroundAlive from "../../assets/Modal-background-alive.svg";
import BackgroundDead from "../../assets/Modal-background-dead.svg";

interface iBackgroundVariationsProps {
  variant?: "alive" | "dead";
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
  alive: css`
    background-image: url(${BackgroundAlive});
    background-size: 100% 100%;
  `,
  dead: css`
    background-image: url(${BackgroundDead});
    background-size: 100% 100%;
  `,
};

export const ModalStyled = styled.div<iBackgroundVariationsProps>`
  ${({ variant }) => BackgroundVariations[variant || "alive"]}

  width: 25%;
  height: 70%;

  border-radius: 8px;
`;

export const ModalContent = styled.div`
  padding: 10px;
`;
