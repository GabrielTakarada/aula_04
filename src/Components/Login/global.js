import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        whidth: 100vw;
        height: 100vh;
        background-color: #F7F7EE;
        font-family: Arial, Helvetica, sans-serif
    }
`;

export default GlobalStyle;
