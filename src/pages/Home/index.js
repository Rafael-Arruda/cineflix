import React, { useEffect, useState } from "react";
import {Container} from './style';
import Featured from '../../components/Featured';
import Footer from '../../components/Footer';
import ListRow from '../../components/ListRow';

import api from '../../services/api';

function Home(){

    const [movies, setMovies] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);

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

        }

        loadAll();
    }, [])


    return(
        <Container>
            
            {featuredData && 
                <Featured type='movie' item={featuredData}/>
            }

            <ListRow type='movie' title='Lançados recentemente' list={movies}/>

            <Footer/>
    
        </Container>
    )
}

export default Home;