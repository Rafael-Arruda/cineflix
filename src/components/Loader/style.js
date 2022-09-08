import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .loader {
        animation: isrotating 1s infinite;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 6px solid #ddd;
        border-top-color: #0f79af;
    }

    @keyframes isrotating {
        to {
            transform: rotate(1turn);
        }
    }
`;