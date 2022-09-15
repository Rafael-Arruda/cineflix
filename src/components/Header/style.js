import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 10vh;
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

        ul {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .mobile-icon {
                display: none;
            }

            a {
                color: #dde0e3;
                letter-spacing: 1px;
                font-size: 1em;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
    }

    @media screen and (max-width: 700px){
        justify-content: center;

        nav {
            background-color: #000;
            margin: 0;
            padding: 10px;
            width: 100%;
            position: fixed;
            bottom: 0;
            z-index: 999;

            ul {
                .mobile-icon {
                    display: flex;
                }

                a {
                    font-size: 0.7em;
                    transition: 0.2s all;
                }
                a:hover {
                    color: #0F79AF;
                }
            }
        }
    }
`;