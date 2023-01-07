import styled from "styled-components";

export const StyledCard = styled.li`
  color: var(--color-white);

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px;

  img {
    width: 110px;
    height: 110px;

    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    height: 200px;
    width: 120px;

    padding: 10px;
    border-radius: 8px;

    text-align: center;
  }

  @media (max-width: 620px) {
    img {
      width: 80px;
      height: 80px;
    }

    div {
      height: 100px;
      justify-content: flex-start;
      overflow-y: auto;
    }
  }

  .Alive {
    background-color: var(--opacity-green);
  }

  .Dead {
    background-color: var(--opacity-red);
  }

  .unknown {
    background-color: var(--opacity-white);
    color: var(--color-black);
  }
`;
