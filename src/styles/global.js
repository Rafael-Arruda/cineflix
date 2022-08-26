import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        font-family: 'Roboto', sans-serif;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: #000;
    }
`;
