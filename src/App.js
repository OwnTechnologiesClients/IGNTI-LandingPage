import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';

// import { Redirect, Route, Switch } from 'react-router';
import { Routes, Route } from 'react-router-dom';



import Courses from './pages/courses/Courses';
import Franchise from './pages/franchise/Franchise';
import ContactUs from './pages/contactus/ContactUs';
import AboutUs from './pages/aboutus/AboutUs';
import Gallery from './pages/gallery/Gallery';


class App extends React.Component {

  render() {
    return (
      <div>

        <Routes>


          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/franchise' element={<Franchise />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/aboutus' element={<AboutUs />} />


        </Routes>
      </div>
    )
  }
}

export default App;
