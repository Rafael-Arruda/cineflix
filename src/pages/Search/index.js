import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import { Container } from './style';

import {Link} from 'react-router-dom';

import Loader from '../../components/Loader';

import TmdbMovies from '../../Tmdb/TmdbMovies';
import TmdbSeries from '../../Tmdb/TmdbSeries';

export default function Search() {

    const {type, title} = useParams();

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadAll = async () => {
            //Pegando a lista total
            let listAll = [];
            if(type === 'movie') {
                listAll = await TmdbMovies.getMoviesList();
            }else if(type === 'series') {
                listAll = await TmdbSeries.getSeriesList();
            }

            //Filtrando pelo título
            let filterList = []
            listAll.forEach((list) => {
                let listAux = []
                {type === 'movie'? 
                listAux = list.items.filter((item) => item.title.toUpperCase().includes(title.toUpperCase()))
                :
                listAux = list.items.filter((item) => item.name.toUpperCase().includes(title.toUpperCase()))
                }
                filterList = filterList.concat(listAux);
            })

            //Removendo itens repetidos da lista
            let listId = []
            let searchList = []
            filterList.forEach(item => {
                if(!listId.includes(item.id)){
                    listId.push(item.id)
                    searchList.push(item)
                }
            })

            setList(searchList);
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
                    <div className="list">
                        {list.map((item, index) => {
                            
                            const releaseDate = new Date(type === 'movie'? item.release_date : item.first_air_date);
                            
                            return(
                                <div key={index} className="box-card">
                                    <Link title='Ver detalhes' to={`/details/${type}/${item.id}`}>
                                        <img src={`https://image.tmdb.org/t/p/w200/${item.backdrop_path}`} alt={item.title}/>
                                        <div className="info-card">
                                            <div>
                                                <h4>{type === 'movie'? item.title : item.name}</h4>
                                                <span>{releaseDate.getFullYear()}</span>
                                            </div>
                                            <p>{item.overview}</p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>  

                </Container> 
            }
        </>
    )
}