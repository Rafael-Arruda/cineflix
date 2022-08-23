import React, { Component } from "react";
import GlobalStyle from './styles/global'

import RoutesApp from "./routes";

export default class App extends Component {
  render(){
    return (
      <div className="app">
        <RoutesApp/>

        <GlobalStyle/>
      </div>
    );
  }
}