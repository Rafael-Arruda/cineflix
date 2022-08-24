import axios from 'axios';

//Base da Url: https://api.themoviedb.org/3/
//Url da Api: /movie/popular?api_key=<<api_key>>&language=en-US&page=1

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;