import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';

// import { Redirect, Route, Switch } from 'react-router';
import { Routes, Route } from 'react-router-dom';



import Courses from './pages/courses/Courses';


class App extends React.Component {

  render() {
    return (
      <div>

        <Routes>


          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/courses' element={<Courses />} />


        </Routes>
      </div>
    )
  }
}

export default App;
