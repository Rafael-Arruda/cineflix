import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    .now-playing {
        padding: 30px 30px 30px 30px;
    }

    .movies-list {
        display: flex;
        gap: 20px;
        overflow: auto;
        padding-top: 10px;
        
        ::-webkit-scrollbar {
            background-color: transparent;
            height: 8px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #ddd;
            border-radius: 10px;
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
    }
`;