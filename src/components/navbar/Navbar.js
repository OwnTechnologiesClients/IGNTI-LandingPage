import React from 'react'
import "./navbar.css"
import { Button, Grid, Link, Typography, } from '@mui/material'
import { NavLink } from "react-router-dom"


const Navbar = () => {
    return (
        <>


            <nav className='main-nav'>

                {/* --------------- Menu Links ---------------------- */}
                <div className='menu-link'>
                    <ul>
                        <li>
                            <NavLink to='/home'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/courses'>Courses</NavLink>
                        </li>
                        <li>
                            <NavLink to='/franchise'>Franchise</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contactus'>Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink to='/aboutus'>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to='/gallery'>Gallery</NavLink>
                        </li>

                        <li>
                            <NavLink to='/student'>Student Zone</NavLink>
                        </li>


                    </ul>
                </div>


                <div className='social-media-parent'>
                    <div className='social-media-circle'>
                        <div className='social-media-img-size'>
                            <img src="/img/facebook.png" />
                        </div>

                    </div>
                    <div className='social-media-circle'>
                        <div className='social-media-img-size'>
                            <img src="/img/instagram.png" />
                        </div>
                    </div>
                    <div className='social-media-circle'>
                        <div className='social-media-img-size'>
                            <img src="/img/linkedin.png" />
                        </div>
                    </div>
                </div>

            </nav>


        </>
    )
}

export default Navbar