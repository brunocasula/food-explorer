import { createGlobalStyle } from "styled-components";
import theme from "./theme"

export default createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-family: "Poppins", serif;
    font-size: 62.5%;
  }

  body{
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.6rem;
    /* overflow-x: hidden; */

    -webkit-font-smoothing: antialiased;      
  }

  html, body, body *{
    ::-webkit-scrollbar {
      /* height: 4px; */
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.DARK_1000};
      border-radius: 8px;
    }
  }

  body, input, button, textarea {
    font-family: "Roboto", serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    outline: none;
  }

  a {
    text-decoration: none;    
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

`;