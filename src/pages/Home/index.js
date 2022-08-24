import React, { Component } from "react";
import {Container} from './style';

import api from '../../services/api';

export default class Home extends Component{

    state = {
        movies: []
    }

    componentDidMount() {
        
        const getMovies = async () => {
            const response = await api.get('/movie/popular', {
              params: {
                api_key: 'dc8d1f407a1bd3c7756a115230fc20e7',
                language: 'pt-BR',
                page: 1
              }
            })
            
            this.setState({
                movies: response.data.results
            })

            console.log(response)
        }

        getMovies();
    }

    render(){
        return(
            <Container>
                <div className="movies-list">
                    {this.state.movies.map((item) => (
                        <div key={item.title}>
                            <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt={item.title}/>
                            <h5>{item.title}</h5>
                        </div>
                    ))}
                </div>
            </Container>
        )
    }
}