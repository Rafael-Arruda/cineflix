import React, { Component } from "react";
import {Link} from 'react-router-dom';

import {Container} from './style';

export default class Header extends Component {
    render(){
        return(
            <Container>
                <h2><Link to='/'>cineflix</Link></h2>
                <nav>
                    <ul>
                        <li><Link to='/'>Início</Link></li>
                        <li><Link to='/movies'>Filmes</Link></li>
                        <li><Link to='/series'>Séries</Link></li>
                        <li><Link to='/favorites'>Favoritos</Link></li>
                    </ul>
                </nav>
            </Container>
        )
    }
}