import React from "react";
import {Link} from 'react-router-dom';
import {Container} from './style';

function Featured(props) {

    let firstDate = new Date(props.item.release_date);

    return(
        <Container background={props.item.backdrop_path}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{props.item.title}</div>
                    <div className="featured--info">
                        <div className="featured--points">{props.item.vote_average} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                    </div>
                    <div className="featured--description">
                        <p>{props.item.overview}</p>
                    </div>
                    <Link to={`/details/${props.item.id}`}>Saiba mais</Link>
                    <input type="text" placeholder="Buscar por Filmes e Séries..."/>
                </div>
            </div>
        </Container>
        
    )
}

export default Featured;