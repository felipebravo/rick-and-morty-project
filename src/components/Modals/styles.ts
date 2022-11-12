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

  background-color: var(--opcacity-green);

  z-index: 1;
  position: fixed;
  top: 0;
`;

const BackgroundVariations = {
  alive: css`
    background-image: url(${BackgroundAlive});
    background-repeat: no-repeat;
    background-size: cover;
  `,
  dead: css`
    background-repeat: no-repeat;
    background-size: cover;
  `,
};

export const ModalStyled = styled.div<iBackgroundVariationsProps>`
  ${({ variant }) => BackgroundVariations[variant || "alive"]}

  width: 80%;
  height: 90%;

  border-radius: 4px;
`;

// background-image: url(${BackgroundDead});
