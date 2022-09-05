import api from '../services/api';

// const API_KEY = 'dc8d1f407a1bd3c7756a115230fc20e7';
// const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const response = await api.get(`${endpoint}`, {
        params: {
            api_key: 'dc8d1f407a1bd3c7756a115230fc20e7',
            language: 'pt-BR',
            page: 1
        }
    });
    return response.data.results;
}

export default {
    getMoviesList: async () => {
        return [
            {
                slug: 'nowplaying',
                title: 'Lançados recentemente',
                items: await basicFetch(`/movie/now_playing`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/movie/week`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35`)
            },
            {
                slug: 'fantasy',
                title: 'Fantasia',
                items: await basicFetch(`/discover/movie?with_genres=14`)
            },
            {
                slug: 'crime',
                title: 'Crime',
                items: await basicFetch(`/discover/movie?with_genres=80`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27`)
            },
        ];
    },
}

