import React, { useEffect, useState } from "react";
import {Container} from './style';
import Featured from "../../components/Featured";
import ListRow from '../../components/ListRow';
import Footer from '../../components/Footer'

import {Link} from 'react-router-dom';

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

            setMovies(list);
            setFeaturedData(movieChosen);

        }

        loadAll();
    }, [])


    return(
        <Container>
            
            {featuredData && 
                <Featured item={featuredData}/>
            }

            <ListRow title='Lançados recentemente' list={movies}/>

            <Footer/>
            
        </Container>
    )
}

export default Home;