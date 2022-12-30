import styled from "styled-components";

export const StyledResidents = styled.div`
  width: 60%;
  height: 100%;

  text-align: center;

  h2 {
    color: var(--primary-blue);

    margin-bottom: 20px;

    font-size: 32px;
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
