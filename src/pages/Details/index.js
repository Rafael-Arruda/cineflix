import React from "react";
import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

import api from '../../services/api';

import {Container} from './style'

function Details() {
    const {id} = useParams();

    const [movie, setMovie] = useState({});

    let firstDate = new Date(movie.release_date);
    let genres = [];
    for(let i in movie.genres) {
        genres.push(movie.genres[i].name);
    }

    useEffect(() => {
        async function loadMovie(){
            const response = await api.get(`/movie/${id}`, {
                params: {
                  api_key: 'dc8d1f407a1bd3c7756a115230fc20e7',
                  language: 'pt-BR',
                }
            })
            setMovie(response.data);
            console.log(response.data)
        }

        loadMovie();
    }, [])

    function saveMovie(){
        let storage = localStorage.getItem('@cineflix');
        let favorites = JSON.parse(storage) || [];
        favorites.push(movie);

        //salvando no localStorage
        localStorage.setItem('@cineflix', JSON.stringify(favorites));
    }

    return(
        <Container background={movie.backdrop_path}>
            <div className="background"></div>
            <div className="box-details">
                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}/>
                <div className="movie-info">
                    <div className="movie-title">
                        <h2>{movie.title}</h2>
                        <span>({firstDate.getFullYear()})</span>
                    </div>
                    <div className="movie-tagline">
                        <p>{movie.tagline}</p>
                    </div>
                    <div className="movie-overview">
                        <h3>Sinopse</h3>
                        <p>{movie.overview}</p>
                    </div>
                    <div className="movie-genres">
                        <h3>Gêneros</h3>
                        <p>{genres.join(', ')}</p>
                    </div>
                    <div className="movie-points">
                        <h3>Pontos</h3>
                        <p>{parseFloat(movie.vote_average).toFixed(1)} / 10</p>
                    </div>
                </div>
                <div className="movie-buttons">
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${movie.title} Trailer`}>
                        <button>Trailer</button>
                    </a>
                    <button onClick={() => saveMovie()}>Salvar</button>
                </div>
            </div>
        </Container>
    )
}

export default Details;