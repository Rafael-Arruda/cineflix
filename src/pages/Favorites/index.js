import React, {useState, useEffect} from "react";
import {Container} from './style';

import {Link} from 'react-router-dom';

function Favorites(){

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        function getFavorites(){
            const storage = localStorage.getItem('@cineflix');
            const list = JSON.parse(storage) || [];

            setFavorites(list);
        }

        getFavorites();
    }, [])

    return(
        <Container>
            <div className="list">
                {favorites.map((item) => {
                    
                    const releaseDate = new Date(item.type === 'movie'? item.video.release_date : item.video.first_air_date);
                    
                    return(
                        <Link to={`/details/${item.type}/${item.video.id}`} className="box-card" key={item.video.id}>
                            <img src={`https://image.tmdb.org/t/p/w200/${item.video.backdrop_path}`} alt={item.title}/>
                            <div className="info-card">
                                <h4>{item.type === 'movie'? item.video.title : item.video.name}</h4>
                                <p>{releaseDate.getFullYear()}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>  
        </Container>
    )
}

export default Favorites;