import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 *{
        scroll-behavior: smooth;
        margin: 0;
      }
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin: 0;
      }
      .redColor{
        color:red!important;
      }
      .greenColor{
        font-weight: 600!important;
        color:green!important;
      }

`;
