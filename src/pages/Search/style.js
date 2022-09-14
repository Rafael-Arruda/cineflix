import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

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
            max-height: 70px;
            overflow: hidden;
        }
    }
`;