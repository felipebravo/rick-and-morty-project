import styled from "styled-components";

export const StyledMainLocation = styled.main`
  position: absolute;
  bottom: 27%;
  left: 25%;

  display: flex;
  gap: 20px;

  width: 70%;
  height: 50%;

  @media (max-width: 1330px) {
    left: 30%;
  }

  @media (max-width: 790px) {
    left: 10%;

    width: 80%;
  }

  @media (max-width: 640px) {
    left: 5%;

    width: 95%;
  }
`;

export const StyledUlLocations = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;

  height: 100%;
  width: 30%;

  overflow-y: auto;

  background-color: var(--opacity-black);

  h2 {
    color: var(--primary-blue);
    align-self: center;
    margin-bottom: 20px;

    font-size: 32px;
  }

  @media (max-width: 1200px) {
    height: 80%;
  }

  @media (max-width: 1030px) {
    width: 50%;
  }

  @media (max-width: 430px) {
    width: 80%;
  }
`;

export const StyledCardLocations = styled.li`
  button {
    display: contents;
    color: var(--primary-red);
    background-color: transparent;
    font-family: monospace, sans-serif;
    font-size: 24px;
  }

  .Planet {
    color: var(--primary-green);
  }

  .Cluster {
    color: var(--primary-blue);
  }

  .Microverse {
    color: var(--primary-yellow);
  }

  @media (max-width: 540px) {
    button {
      font-size: 16px;
    }
  }
`;
