import React, { Component } from "react";
import {Container} from './style';

export default class Featured extends Component {
    render(){

        let firstDate = new Date(this.props.item.release_date);

        return(
            <Container background={this.props.item.backdrop_path}>
                <div className="featured--vertical">
                    <div className="featured--horizontal">
                        <div className="featured--name">{this.props.item.title}</div>
                        <div className="featured--info">
                            <div className="featured--points">{this.props.item.vote_average} pontos</div>
                            <div className="featured--year">{firstDate.getFullYear()}</div>
                        </div>
                        <div className="featured--description">
                            <p>{this.props.item.overview}</p>
                        </div>
                        <div className="featured--button">
                            <button>Saiba mais</button>
                        </div>
                        <input type="text" placeholder="Buscar por Filmes e Séries..."/>
                    </div>
                </div>
            </Container>
        )
    }
}