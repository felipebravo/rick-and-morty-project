import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Geo', sans-serif;
  }

  button{
    cursor: pointer;
    border: none;
  }

  :root{
    --color-white: #FFFFFF;
    --color-black: #000000;
    --primary-yellow: #E2E25A;
    --opacity-yellow: #E2E25A50;
    --primary-green: #4E852A;
    --opacity-green: #4E852A50;
    --primary-red: #D26D87;
    --opacity-red: #D26D8750;
    --primary-blue: #B4E0EF;
    --color-title: #00ADC8
  }

  h1{
    font-family: 'Get Schwifty', sans-serif;
  }

  ul {
    ::-webkit-scrollbar {
    background-color: var(--grey-4);
    height: 10px;
    width: 10px;
    }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-primary-1);
    border-radius: 4px;
    }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--color-primary-hover);
    border-radius: 4px;
    }
  }
`;
