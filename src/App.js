import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';

class App extends React.Component{
  
  render(){
    return(
      <div>
      
        <Header/>
        <Navbar/>
        <Banner/>
        <Home/>
        <Footer/>
        
      </div>
    )
  }
}

export default App;
