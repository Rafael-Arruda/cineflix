import React, { Component } from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Favorites from './pages/Favorites';
import Details from './pages/Details';

export default class RoutesApp extends Component{
    render(){
        return(
            <BrowserRouter>
                
                <Header/>
                
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/movies' element={<Movies/>}/>
                    <Route path='/series' element={<Series/>}/>
                    <Route path='/favorites' element={<Favorites/>}/>
                    <Route path='/details/:id' element={<Details/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}