import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 2vh 0;

    .box-card {
        padding: 10px 15px;
        display: flex;
        justify-content: space-between;
        /* background-color: #0f171e; */

        :not(:first-child) {
            border-top: 2px solid #ddd;
        }

        a {
            display: flex;
        }

        svg {
            cursor: pointer;
            border-radius: 2px;
            color: #fff;
            background-color: #0f79af;
        }
        svg:hover {
            color: #ddd;
        }
    }

    .info-card {
        padding: 0px 5px;
        color: #fff;

        h4 {
            font-weight: 500;
            transition: 0.2s all;
        }
        h4:hover {
            color: #0f79af;
        }

        p {
            font-size: 0.7em;
        }
    }

    @media screen and (max-width: 700px){
        padding-bottom: 12vh;

        img {
            width: 180px;
        }
    }
`;