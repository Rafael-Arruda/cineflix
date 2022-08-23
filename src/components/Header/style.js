import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #1a242f;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
        font-size: 1.3em;
        margin-left: 5%;
        letter-spacing: 2px;

        a {
            color: #fff;
        }
    }

    nav {
        width: 50%;
        margin-right: 5%;
    }

    ul {
        display: flex;
        align-items: center;
        justify-content: space-between;

        a {
            color: #dde0e3;
            letter-spacing: 1px;
            font-size: 1em;
        }
    }
`;