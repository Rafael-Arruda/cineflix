import styled from "styled-components";

export const Container = styled.div`
    margin: 20px 0px;
    padding: 0px 20px;

    h3 {
        margin-bottom: 10px;
        color: #fff;
        font-weight: 500;
    }
    
    .list {
        display: flex;
        overflow: hidden;
        transition: all ease 0.5s;
    }

    a {
        img {
            width: 150px;
            height: 240px;
            transform: scale(0.94);
            transition: 0.3s all;
        }
        img:hover {
            transform: scale(1);
        }

        h5 {
            color: #fff;
            text-align: center;
            font-weight: 500;
        }
        h5:hover {
            color: #0f79af;
        }
    }

    .listRow--left,
    .listRow--right {
        position: absolute;
        width: 40px;
        height: 250px;
        background-color: rgba(26, 36, 47, 0.6);
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        transition: all ease 0.5s;
    }

    .listRow--left {
        left: 0;
    }
    .listRow--right {
        right: 0;
    }

    :hover .listRow--left,
    :hover .listRow--right {
        opacity: 1;
    }

`;