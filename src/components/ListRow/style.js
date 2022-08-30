import styled from "styled-components";

export const Container = styled.div`
    margin: 20px 0px;
    padding: 0px 20px;
    position: relative;

    h3 {
        margin-bottom: 10px;
    }
    
    .list {
        display: flex;
        gap: 10px;
        overflow: hidden;
    }

    a {
        img {
            width: 160px;
            height: 250px;
            border-radius: 10px;
            transition: 0.3s all;
        }
        img:hover {
            transform: scale(1.02);
        }

        h5 {
            color: #000;
        }
        h5:hover {
            color: #0f79af;
        }
    }

`;