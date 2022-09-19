import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 15px 20px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    .box-search {
        width: 100%;
        margin: 0 auto;
        position: relative;
    
        input {
            width: 100%;
            padding: 10px;
            font-size: 1rem;
            border: none;
            border-radius: 2px;
            outline: none;
        }

        a {
            text-align: center;
            width: 70px;
            position: absolute;
            right: 0;
            font-size: 1rem;
            border: none;
            padding: 10px 5px;
            color: #fff;
            background-color: #0f79af;
        }   
    }

    .box-options {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
    }

    .option-movie, .option-series {
        background-color: #3F4655;
        color: #fff;
        width: 50%;
        height: 10vh;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

`;