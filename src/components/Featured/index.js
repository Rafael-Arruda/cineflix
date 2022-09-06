import React from "react";
import {Link} from 'react-router-dom';
import {Container} from './style';

function Featured({type, item}) {

    let firstDate = new Date(type === 'movie'? item.release_date : item.first_air_date);

    return(
        <Container background={item.backdrop_path}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{type === 'movie'? item.title : item.name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                    </div>
                    <div className="featured--description">
                        <p>{item.overview}</p>
                    </div>
                    <Link to={`/details/${type}/${item.id}`}>Saiba mais</Link>
                    <input type="text" placeholder="Buscar por Filmes e Séries..."/>
                </div>
            </div>
        </Container>
        
    )
}

export default Featured;