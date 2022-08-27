import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    .list {
        
    }

    .box-card {
        padding: 10px 15px;
        display: flex;
        /* background-color: #0f171e; */

        :not(:first-child) {
            border-top: 2px solid #ddd;
        }
    }

    .info-card {
        padding: 0px 5px;

        h4 {
            font-weight: 500;
        }

        p {
            font-size: 0.7em;
        }
    }
`;