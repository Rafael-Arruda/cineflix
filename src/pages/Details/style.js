import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 90vh;
    padding: 40px 0;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) , ${props => props.background ? `url(https://image.tmdb.org/t/p/original${props.background})` : ``};
    position: relative;

    .background{
        width: 90%;
        height: 100%;
        margin: 0px auto;
        border-radius: 10px;
        background: #fff;
        opacity: 0.7;
    }

    .box-details {
        width: 85%;
        position: absolute;
        top: 11%;
        left: 8%;
        display: flex;
        justify-content: space-evenly;

        .movie-info {
            width: 50%;
            display: flex;
            flex-direction: column;
            gap: 20px;

            h3 {
                font-size: 1.5em;
                font-weight: 500;
                margin-bottom: 5px;
            }
        }

        .movie-title {
            font-size: 1.4em;
            display: flex;
            align-items: center;
            gap: 10px;

            span {
                font-size: 1.4em;
            }
        }

        .movie-tagline {
            p {
                font-style: italic;
            }
        }

        .movie-buttons {
            position: absolute;
            bottom: 0;
            right: 0;

            button {
                width: 140px;
                margin-right: 10px;
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
        }
    }
`;