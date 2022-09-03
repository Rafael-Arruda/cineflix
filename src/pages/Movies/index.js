import React, {useState, useEffect} from "react";

import {Container} from './style';

import Featured from "../../components/Featured";
import ListRow from '../../components/ListRow';
import Footer from '../../components/Footer';
import TmdbMovies from "../../TmdbMovies";

function Movies() {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);

    useEffect(() => {
        const loadAll = async () => {
            //Pegando a lista total
            let list = await TmdbMovies.getHomeList();
            setMovieList(list);

            //Pegando o Featured
            let nowPlaying = list.filter(list => list.slug === 'nowplaying')
            let randomChosenIndex = Math.floor(Math.random() * (nowPlaying[0].items.length));
            let movieChosen = nowPlaying[0].items[randomChosenIndex];
            
            setFeaturedData(movieChosen);
        }

        loadAll();
    }, []);

    return(
        <Container>

            {featuredData && 
                <Featured item={featuredData}/>
            }
            
            {movieList.map((list) => (
                <ListRow key={list.slug} title={list.title} list={list.items}/>
            ))}

            <Footer/>

        </Container>
    )
}

export default Movies;