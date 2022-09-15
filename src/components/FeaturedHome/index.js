import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {Container} from './style';

function Featured({type, item}) {

    return(
        <Container background={item.backdrop_path}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{type === 'movie'? item.title : item.name}</div>
                    <Link to={`/details/${type}/${item.id}`}>Saiba mais</Link>
                </div>
            </div>
        </Container>
        
    )
}

export default Featured;