import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 2vh 0;

    .without-results {
        margin: 60px;
        text-align: center;

        h2 {
            font-weight: 500;
            color: #fff;
        }
    }

    .box-card {
        padding: 10px 15px;

        :not(:first-child) {
            border-top: 2px solid #ddd;
        }

        a {
            display: flex;
        }
    }

    .info-card {
        padding: 0px 5px;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h4 {
            font-weight: 500;
            transition: 0.2s all;
        }
        h4:hover {
            color: #0f79af;
        }

        span {
            font-size: 0.7em;
        }

        p {
            font-size: 0.8em;
            max-height: 40px;
            overflow: hidden;
        }
    }

    @media screen and (max-width: 600px){
        padding-bottom: 12vh;

        img {
            width: 150px;
        }

        .info-card {
            h4 {
                font-size: 0.8em;
            }

            span {
                font-size: 0.6em;
            }

            p {
                font-size: 0.7em;
            }
        }
    }
`;