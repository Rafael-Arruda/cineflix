import React, { useEffect, useState } from "react";

import {Container} from './style';

import Featured from "../../components/Featured";
import ListRow from '../../components/ListRow';
import Footer from "../../components/Footer";
import TmdbSeries from '../../Tmdb/TmdbSeries';
import Loader from "../../components/Loader";

function Series(){

    const [seriesList, setSeriesList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadAll = async () => {
            //Pegando a lista total de séries
            let list = await TmdbSeries.getSeriesList();
            setSeriesList(list);

            //Pegando o Featured
            let popular = list.filter((list) => list.slug === 'popular');
            let randomChosenIndex = Math.floor(Math.random() * (popular[0].items.length));
            let seriesChosen = popular[0].items[randomChosenIndex];

            setFeaturedData(seriesChosen);
            setLoading(false);
        }

        loadAll();
    }, [])

    return(
        <>

            {loading ? 
                <Loader/> 
            :
                <Container>

                    {featuredData && 
                        <Featured type='series' item={featuredData}/>
                    }

                    {seriesList.map((list) => (
                        <ListRow key={list.slug} type='series' title={list.title} list={list.items}/>
                    ))}

                    <Footer/>
                </Container>
            }

        </>
    )
}

export default Series;