import React from "react";
import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

import api from '../../services/api';

import {Container} from './style'

function Details() {
    const {type, id} = useParams();

    const [video, setVideo] = useState({}); //video pode ser filmes ou series

    let firstDate = new Date(type === 'movie'? video.release_date : video.first_air_date);
    let genres = [];
    for(let i in video.genres) {
        genres.push(video.genres[i].name);
    }

    useEffect(() => {
        async function loadMovie(){
            const response = await api.get(type === 'movie'? `/movie/${id}` : `/tv/${id}`, {
                params: {
                  api_key: 'dc8d1f407a1bd3c7756a115230fc20e7',
                  language: 'pt-BR',
                }
            })
            setVideo(response.data);
            console.log(response.data)
        }

        loadMovie();
    }, [])

    function saveVideo(){
        let storage = localStorage.getItem('@cineflix');
        let favorites = JSON.parse(storage) || [];
        favorites.push({
            type: type,
            video: video
        });

        //salvando no localStorage
        localStorage.setItem('@cineflix', JSON.stringify(favorites));
    }

    return(
        <Container background={video.backdrop_path}>
            <div className="background"></div>
            <div className="box-details">
                <img src={`https://image.tmdb.org/t/p/w300/${video.poster_path}`} alt={type === 'movie'? video.title : video.name}/>
                <div className="video-info">
                    <div className="video-title">
                        <h2>{type === 'movie'? video.title : video.name}</h2>
                        <span>({firstDate.getFullYear()})</span>
                    </div>
                    <div className="video-tagline">
                        <p>{video.tagline}</p>
                    </div>
                    <div className="video-overview">
                        <h3>Sinopse</h3>
                        <p>{video.overview}</p>
                    </div>
                    <div className="video-genres">
                        <h3>Gêneros</h3>
                        <p>{genres.join(', ')}</p>
                    </div>
                    <div className="video-points">
                        <h3>Pontos</h3>
                        <p>{parseFloat(video.vote_average).toFixed(1)} / 10</p>
                    </div>
                </div>
                <div className="video-buttons">
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${type === 'movie'? video.title : video.name} Trailer`}>
                        <button>Trailer</button>
                    </a>
                    <button onClick={() => saveVideo()}>Salvar</button>
                </div>
            </div>
        </Container>
    )
}

export default Details;