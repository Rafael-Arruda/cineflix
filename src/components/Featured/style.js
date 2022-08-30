import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 70vh;
    background-size: cover;
    background-position: center 30%;
    background-repeat: no-repeat;
    background-image: ${props => props.background ? `url(https://image.tmdb.org/t/p/original${props.background})` : ``};

    .featured--vertical {
        width: inherit;
        height: inherit;
        background: linear-gradient(to top, #1a242f 10%, transparent 90%);
    }

    .featured--horizontal {
        width: inherit;
        height: inherit;
        padding: 50px 5%;
        color: #fff;
        background: linear-gradient(to right, #1a242f 30%, transparent 70%);
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .featured--name {
            font-size: 2.5em;
        }
        .featured--info {
            display: flex;
            gap: 20px;
        }
        .featured--description {
            p {
                width: 40%;
                max-height: 150px;
                min-width: 250px;
                overflow-y: hidden;
                line-height: 20px;
            }
        }
        
        a {
            width: 140px;
            text-align: center;
            border: 0;
            border-radius: 2px;
            font-size: 1em;
            font-weight: 400;
            padding: 10px 25px;
            color: #fff;
            background-color: #0f79af;
            cursor: pointer;
        }

        input {
            width: 90%;
            padding: 15px 20px;
            border-radius: 25px;
            border: none;
            font-size: 1.2rem;
            outline: none;
            position: absolute;
            bottom: 8%;
        }
    }

`;