import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';

class App extends React.Component{
  
  render(){
    return(
      <div>
      
        <Header/>
        <Navbar/>
      </div>
    )
  }
}

export default App;
