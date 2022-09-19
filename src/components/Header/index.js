import React from "react";
import {Link} from 'react-router-dom';

import {MdOutlineHome, 
    MdOutlineMovie, 
    MdOutlineLocalMovies, 
    MdFavoriteBorder,
    MdOutlineSearch} from 'react-icons/md';

import {Container} from './style';

export default function Header() {

    return(
        <Container>
            <h2><Link to='/'>cineflix</Link></h2>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>
                            <MdOutlineHome className="mobile-icon" size={30}/>
                            Início
                        </Link>
                    </li>

                    <li>
                        <Link to='/movies'>
                            <MdOutlineMovie className="mobile-icon" size={30}/>
                            Filmes
                        </Link>
                    </li>

                    <li>
                        <Link to='/series'>
                            <MdOutlineLocalMovies className="mobile-icon" size={30}/>
                            Séries
                        </Link>
                    </li>

                    <li className="mobile-search">
                        <Link to='/search'>
                            <MdOutlineSearch className="mobile-icon" size={30}/>
                            Buscar
                        </Link>
                    </li>

                    <li>
                        <Link to='/favorites'>
                            <MdFavoriteBorder className="mobile-icon" size={30}/>
                            Favoritos
                        </Link>
                    </li>

                </ul>
            </nav>
        </Container>

    )
}