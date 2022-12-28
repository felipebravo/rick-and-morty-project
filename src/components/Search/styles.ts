import styled from "styled-components";

export const SearchAndGif = styled.div`
  position: absolute;
  bottom: 30%;
  left: 0px;

  width: fit-content;
  height: fit-content;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-self: flex-start;
  align-items: flex-start;
  gap: 10px;

  .search__style {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .input {
    width: 200px;
    height: 40px;

    padding: 10px;

    background-color: var(--opacity-green);

    border: 1px solid var(--opacity-green);
    border-radius: 25px;

    color: var(--primary-yellow);

    ::placeholder {
      color: var(--primary-yellow);
    }

    :focus {
      border: none;
    }
  }

  .gif__style {
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 300px;
    max-height: 300px;
    overflow: hidden;

    border-radius: 50%;

    img {
      width: 150%;
      align-self: center;
    }
  }
`;
