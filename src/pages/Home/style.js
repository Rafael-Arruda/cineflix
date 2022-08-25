import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    .movies-list {
        display: flex;
        gap: 20px;
        overflow: auto;
        padding: 30px;

        ::-webkit-scrollbar {
            background-color: transparent;
            height: 8px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #ddd;
            border-radius: 10px;
        }
        
        div {
            img {
                width: 160px;
                height: 250px;
                border-radius: 10px;
                transition: 0.3s all;
            }
            img:hover {
                transform: scale(1.02);
            }
        }
    }
`;