import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 90vh;
    background-size: cover;
    background-position: center 30%;
    background-repeat: no-repeat;
    background-image: ${props => props.background ? `url(https://image.tmdb.org/t/p/original${props.background})` : ``};

    .featured--vertical {
        width: inherit;
        height: inherit;
        background: linear-gradient(to top, #1a242f, transparent, #1a242f);
    }

    .featured--horizontal {
        width: inherit;
        height: inherit;
        padding: 50px 5%;
        color: #fff;
        background: linear-gradient(to right, #1a242f, transparent, #1a242f);
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;

        .featured--name {
            font-size: 4rem;
        }
        
        a {
            width: 140px;
            text-align: center;
            border: 0;
            border-radius: 2px;
            font-size: 1em;
            font-weight: 400;
            padding: 10px 20px;
            color: #fff;
            background-color: #0f79af;
            cursor: pointer;
        }

        
    }

    @media screen and (max-width: 700px){
        .featured--horizontal {
            .featured--name {
                font-size: 3rem;
            }
        }
    }

`;