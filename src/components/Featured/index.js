import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {Container} from './style';

function Featured({type, item}) {

    let firstDate = new Date(type === 'movie'? item.release_date : item.first_air_date);
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name)
    }

    const [search, setSearch] = useState('');

    return(
        <Container background={item.backdrop_path}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{type === 'movie'? item.title : item.name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{Number(item.vote_average).toFixed(1)} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">
                            {type === 'series' && 
                                <>{item.number_of_seasons} {item.number_of_seasons === 1? 'Temporada' : 'Temporadas'}</>
                            }
                        </div>
                    </div>
                    <div className="featured--description">
                        <p>{item.overview}</p>
                    </div>
                    <div className="featured--genres">
                        <span>Gêneros:</span>
                        {genres.join(', ')}
                    </div>
                    <Link to={`/details/${type}/${item.id}`}>Saiba mais</Link>
                    <div className="featured--search">
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder={type === 'movie' ? 'Buscar por Filmes...' : 'Buscar por Séries...'}/>
                        {search && <Link to={`/search/${type}/${search}`}>Buscar</Link>}
                    </div>
                </div>
            </div>
        </Container>
        
    )
}

export default Featured;