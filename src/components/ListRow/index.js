import React from "react";
import {Link} from 'react-router-dom';
import { Container } from "./style";

export default function ListRow({title, list}) {
    return(
        <Container>
            <h3>{title}</h3>
            <div className="list">
                {list.map((item) => (
                    <Link to={`/details/${item.id}`} key={item.id}>
                        <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt={item.title}/>
                        <h5>{item.title}</h5>
                    </Link>   
                ))}
            </div>
            
        </Container>
    )
}