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
    getSeriesList: async () => {
        return [
            {
                slug: 'popular',
                title: 'Populares',
                items: await basicFetch(`/tv/popular`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/tv/top_rated`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/tv/week`)
            },
            {
                slug: 'action&adventure',
                title: 'Ação e Aventura',
                items: await basicFetch(`/discover/tv?with_genres=10759`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/tv?with_genres=35`)
            },
            {
                slug: 'family',
                title: 'Para a família',
                items: await basicFetch(`/discover/tv?with_genres=10751`)
            },
            {
                slug: 'crime',
                title: 'Crime',
                items: await basicFetch(`/discover/tv?with_genres=80`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/tv?with_genres=99`)
            }
        ]
    },
}