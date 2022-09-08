import React, {useState, useEffect} from "react";

import {Container} from './style';

import Loader from '../../components/Loader';
import Featured from "../../components/Featured";
import ListRow from '../../components/ListRow';
import Footer from '../../components/Footer';
import TmdbMovies from "../../Tmdb/TmdbMovies";

function Movies() {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadAll = async () => {
            //Pegando a lista total
            let list = await TmdbMovies.getMoviesList();
            setMovieList(list);

            //Pegando o Featured
            let nowPlaying = list.filter(list => list.slug === 'nowplaying')
            let randomChosenIndex = Math.floor(Math.random() * (nowPlaying[0].items.length));
            let movieChosen = nowPlaying[0].items[randomChosenIndex];
            
            setFeaturedData(movieChosen);
            setLoading(false);
        }

        loadAll();
    }, []);

    return(
        
        <>
            {loading? 
                <Loader/>
            :
                <Container>

                    {featuredData && 
                        <Featured type='movie' item={featuredData}/>
                    }
                    
                    {movieList.map((list) => (
                        <ListRow key={list.slug} type='movie' title={list.title} list={list.items}/>
                    ))}

                    <Footer/>

                </Container>
            }
        </>
    )
}

export default Movies;