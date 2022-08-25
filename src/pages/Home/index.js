import React, { Component } from "react";
import {Container} from './style';
import Featured from "../../components/Featured";

import {Link} from 'react-router-dom';

import api from '../../services/api';

export default class Home extends Component{

    state = {
        movies: [],
        featuredData: null,
    }

    componentDidMount() {
        const loadAll = async () => {
            //Pegando a lista total
            const response = await api.get('/movie/now_playing', {
              params: {
                api_key: 'dc8d1f407a1bd3c7756a115230fc20e7',
                language: 'pt-BR',
                page: 1
              }
            })

            //Pegando a featured
            let list = response.data.results;
            let randomChosenIndex = Math.floor(Math.random() * (list.length))
            let movieChosen = list[randomChosenIndex]; //Filme aleatório
            
            this.setState({
                movies: list,
                featuredData: movieChosen,
                loading: false,
            })
        }

        loadAll();
    }



    render(){
        return(
            <Container>
                
                {this.state.featuredData && 
                    <Featured item={this.state.featuredData}/>
                }

                <div className="now-playing">
                    <h3>Nos Cinemas</h3>
                    <div className="movies-list">
                        {this.state.movies.map((item) => (
                            <Link to={`/details/${item.id}`} key={item.title}>
                                <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt={item.title}/>
                                <h5>{item.title}</h5>
                            </Link>
                        ))}
                    </div>
                </div>
                
            </Container>
        )
    }
}