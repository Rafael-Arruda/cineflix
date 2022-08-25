import React, { Component } from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Filmes from './pages/Filmes';
import Series from './pages/Series';
import Favoritos from './pages/Favoritos';
import Details from './pages/Details';

export default class RoutesApp extends Component{
    render(){
        return(
            <BrowserRouter>
                
                <Header/>
                
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/filmes' element={<Filmes/>}/>
                    <Route path='/series' element={<Series/>}/>
                    <Route path='/favoritos' element={<Favoritos/>}/>
                    <Route path='/details/:id' element={<Details/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}