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

  a{
    text-decoration: none;
    color: var(--primary-blue);
  }

  :root{
    --color-white: #FFFFFF;
    --opacity-white: #FFFFFF90;
    --color-black: #000000;
    --opacity-black: #00000090;
    --primary-yellow: #E2E25A;
    --opacity-yellow: #E2E25A50;
    --primary-green: #4E852A;
    --opacity-green: #4E852A50;
    --primary-red: #D26D87;
    --opacity-red: #D26D8750;
    --primary-blue: #B4E0EF;
    --color-title: #00ADC8
  }

  h1, h2{
    font-family: 'Get Schwifty', sans-serif;
  }

  h3{
    font-family: monospace, sans-serif;
  }

  ul {
    ::-webkit-scrollbar {
    background-color: transparent;
    height: 5px;
    width: 5px;
    }

  ::-webkit-scrollbar-thumb {
    background-color: var(--opacity-yellow);
    border-radius: 4px;
    }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--primary-yellow);
    border-radius: 4px;
    }
  }
`;
