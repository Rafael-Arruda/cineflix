import React, { Component } from "react";
import {Container} from './style';
import Featured from "../../components/Featured";

import api from '../../services/api';

export default class Home extends Component{

    state = {
        movies: [],
        featuredData: null
    }

    componentDidMount() {
        const loadAll = async () => {
            //Pegando a lista total
            const response = await api.get('/movie/popular', {
              params: {
                api_key: 'dc8d1f407a1bd3c7756a115230fc20e7',
                language: 'pt-BR',
                page: 1
              }
            })

            //Pegando a featured
            let list = response.data.results;
            let randomChosenIndex = Math.floor(Math.random() * (list.length - 1))
            let movieChosen = list[randomChosenIndex]; //Filme aleatório
            
            this.setState({
                movies: list,
                featuredData: movieChosen,
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