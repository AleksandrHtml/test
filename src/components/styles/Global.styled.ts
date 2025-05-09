import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme.ts";

export const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
  body {
      min-width: 375px;
      margin: 0;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 18px;
      color: ${Theme.colors.font};
      
      @media ${Theme.media.tablet} {
          font-size: 16px;
      }
  }
  
  a {
      text-decoration: none;
  }
  
  ul {
      list-style: none;
  }
  
  button {
      background-color: unset;
      border: none;
  }
  
  svg {
      display: block;
  }
  
  section:nth-of-type(odd) {
      background-color: ${Theme.colors.primaryBg};
  }

    section:nth-of-type(even) {
        background-color: ${Theme.colors.secondaryBg};
    }
`