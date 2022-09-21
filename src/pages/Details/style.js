import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 90vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) , ${props => props.background ? `url(https://image.tmdb.org/t/p/original${props.background})` : ``};
    display: flex;
    justify-content: center;
    align-items: center;

    .box-details {
        width: 90%;
        height: auto;
        padding: 30px;
        border-radius: 10px;
        background-color: rgba(255,255,255,0.6);
        display: flex;
        justify-content: space-evenly;
        gap: 20px;
        position: relative;

        img {
            width: 300px;
            object-fit: cover;
        }

        .video-info {
            display: flex;
            flex-direction: column;
            gap: 12px;

            h3 {
                font-size: 1.5em;
                font-weight: 500;
                margin-bottom: 5px;
            }
            p {
                font-size: 1rem;
            }
        }

        .video-title {
            font-size: 1.2rem;

            span {
                font-size: 1.2rem;
            }
        }

        .video-tagline {
            p {
                font-style: italic;
            }
        }

        .video-overview {
            p {
                max-height: 80px;
                overflow-y: scroll;
            }

            *::-webkit-scrollbar {
                width: 9px;
            }

            *::-webkit-scrollbar-track {
                background: gray;
                border-radius: 10px;
            }

            *::-webkit-scrollbar-thumb {
                background-color: #1a242f;
                border-radius: 20px;
                border: 3px solid gray;
            }
        }

        .video-buttons {
            position: absolute;
            bottom: 5%;
            right: 2%;

            button {
                width: 100px;
                margin-right: 10px;
                text-align: center;
                border: 0;
                border-radius: 2px;
                font-size: 1rem;
                font-weight: 400;
                padding: 10px 25px;
                color: #fff;
                background-color: #0f79af;
                cursor: pointer;
            }
        }
    }

    @media screen and (max-width: 768px){
        padding-bottom: 10vh;

        .box-details {
            img {
                display: none;
            }

            .video-info {
                h3 {
                    font-size: 1.2rem;
                }
                p {
                    font-size: 0.9rem;
                }
            }

            .video-title {
                font-size: 1rem;

                span {
                    font-size: 1rem;
                }
            }

            .video-buttons {
                button {
                    width: 80px;
                    padding: 8px 0;
                    font-size: 0.9rem;
                }
            }
        }

    }
`;