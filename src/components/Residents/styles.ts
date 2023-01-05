import styled from "styled-components";

export const StyledResidents = styled.div`
  width: 60%;
  height: 100%;
  padding: 5px;

  text-align: center;

  overflow-y: hidden;

  @media (max-width: 1200px) {
    height: 80%;
  }

  @media (max-width: 1030px) {
    width: 40%;
  }

  @media (max-width: 1030px) {
    width: 60%;
  }
`;

export const StyledResidentsHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    color: var(--primary-blue);

    margin-bottom: 20px;

    font-size: 32px;
  }

  button {
    position: absolute;
    top: 0;
    right: 5px;
    background-color: transparent;
    font-size: 24px;
    color: var(--primary-red);
  }

  @media (max-width: 430px) {
    h2 {
      font-size: 24px;
    }

    button {
      font-size: 16px;
    }
  }
`;

export const StyledUlResidents = styled.ul`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;

  overflow-y: auto;
`;

export const StyledCardResidents = styled.li`
  width: fit-content;
  height: fit-content;

  border-radius: 50%;

  cursor: pointer;

  button {
    width: fit-content;
    height: fit-content;

    background-color: transparent;
    border-radius: 50%;
  }

  img {
    width: 100px;
    height: 100px;

    border-radius: 50%;
  }
`;
