import styled from "styled-components";

export const SearchAndGif = styled.div`
  position: absolute;
  bottom: 20%;
  left: 0px;

  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-self: flex-start;
  align-items: flex-start;

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

    :active {
      border-color: var(--primary-yellow);
    }
  }

  .gif {
    width: 300px;

    border-radius: 50%;
  }
`;
