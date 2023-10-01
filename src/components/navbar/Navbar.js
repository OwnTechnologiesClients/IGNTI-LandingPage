import React from 'react'
import "./navbar.css"
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa'
import { Button, Grid, Link, Typography, } from '@mui/material'
import { NavLink } from "react-router-dom"

const SocialMedia = ({ icon, alt }) => (
    <Grid
        ml={3}
        width={40}
        height={40}
        bgcolor="#7C81E2"
        sx={{ borderRadius: 20 }}
        alignItems='center'
        display='flex'
        justifyContent='center'>

        <div className='social-media-img-size'>
            <img src={icon} alt={alt} />
        </div>

    </Grid>
)

const Navbar = () => {
    return (
        <>
            <Grid

                id="downloadApp"
            // container
            // direction={{ lg: 'row', md: 'row', sm: 'column', xs: 'column' }}
            >

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

                {/* <section className='hero-section'>
                    <p>Welcome to</p>
                    <h1>Thapa Technical</h1>

                </section> */}

            </Grid>
        </>
    )
}

export default Navbar