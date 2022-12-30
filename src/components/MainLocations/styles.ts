import styled from "styled-components";

export const StyledMainLocation = styled.main`
  position: absolute;
  bottom: 27%;
  left: 25%;

  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 70%;
  height: 60%;
`;

export const StyledUlLocations = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;

  height: 100%;
  width: 30%;

  overflow-y: auto;

  background-color: var(--opacity-black);
`;

export const StyledCardLocations = styled.li`
  cursor: pointer;

  h3 {
    color: var(--primary-red);
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
`;
