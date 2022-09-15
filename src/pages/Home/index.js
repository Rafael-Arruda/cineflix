import React, { useEffect, useState } from "react";
import {Container} from './style';
import FeaturedHome from '../../components/FeaturedHome';

import Loader from '../../components/Loader';

import api from '../../services/api';

function Home(){

    const [movies, setMovies] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadAll() {
            //Pegando a lista total
            const response = await api.get('/movie/now_playing', {
              params: {
                api_key: 'dc8d1f407a1bd3c7756a115230fc20e7',
                language: 'pt-BR',
                page: 1
              }
            })

            //Pegando a featured
            let list = response.data.results;
            let randomChosenIndex = Math.floor(Math.random() * (list.length))
            let movieChosen = list[randomChosenIndex]; //Filme aleatório

            let movieChosenInfo = await api.get(`/movie/${movieChosen.id}`, {
                params: {
                    api_key: 'dc8d1f407a1bd3c7756a115230fc20e7',
                    language: 'pt-BR',
                    page: 1
                }
            })

            setMovies(list);
            setFeaturedData(movieChosenInfo.data);
            setLoading(false);

        }

        loadAll();
    }, [])


    return(

        <>
            {loading?
                <Loader/>
            :
                <Container>
                
                    {featuredData && 
                        <FeaturedHome type='movie' item={featuredData}/>
                    }
        
                </Container>
            }
        </>
    )
}

export default Home;