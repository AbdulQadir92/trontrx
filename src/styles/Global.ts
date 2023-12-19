import { createGlobalStyle } from "styled-components"


const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        scroll-behavior: smooth;
    }

    // hide scrollbar
    html, body {
        overflow-y: auto;
        overflow-x: hidden;
    }
    
    ::-webkit-scrollbar {
        width: 15px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    ::-webkit-scrollbar-thumb {
        background: #888; 
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }


    @media (min-width: 1400px) {
        section, nav {
            padding-left: 5%;
            padding-right: 5%;
        }
    }

    @media (min-width: 1600px) {
        section, nav {
            padding-left: 8%;
            padding-right: 8%;
        }
    }

    @media (min-width: 2000px) {
        section, nav {
            padding-left: 10%;
            padding-right: 10%;
        }
    }
`

export default GlobalStyles