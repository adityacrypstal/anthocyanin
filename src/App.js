import React, { Component } from 'react';
import './App.css';
import Container from "./Container/Container";
import {me} from "./author";
class App extends Component {
  render() {
    me();
    return (
       <Container/>
    );
  }
}

export default App;
