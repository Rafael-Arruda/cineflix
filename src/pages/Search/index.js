import React, {useState} from "react";
import { Link } from "react-router-dom";
import {Container} from './style';

export default function Search(){

    const [search, setSearch] = useState();
    const [option, setOption] = useState('movie');

    return(
        <Container>
            <div className="box-search">
                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Pesquisar..."/>
                {search && 
                    <Link to={`/result/${option}/${search}`}>
                        Buscar
                    </Link>
                }
            </div>

            <div className="box-options">
                <div className="option-movie" onClick={() => setOption('movie')} style={{backgroundColor: option === 'movie' ? '#0F79AF' : '#3F4655'}}>
                    <span>Filmes</span>
                </div>
                <div className="option-series" onClick={() => setOption('series')} style={{backgroundColor: option === 'series' ? '#0F79AF' : '#3F4655'}}>
                    <span>Séries</span>
                </div>
            </div>
        </Container>
    )
}