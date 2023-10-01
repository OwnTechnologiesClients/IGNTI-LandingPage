import React from 'react'
import "./navbar.css"
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa'
import { Button, Grid, Link, Typography, } from '@mui/material'


const Navbar = () => {
    return (
        <>
            <Grid
                bgcolor="#ccc"
                id="downloadApp"
                height={{ lg: 900, xs: 1300 }}
                justifyContent="center"
                // container
                // direction={{ lg: 'row', md: 'row', sm: 'column', xs: 'column' }}
                alignItems={{ lg: "center" }}
            >
                <Grid width={{ lg: 600, md: 400, sm: 700 }} pt={10} pl={{ xs: 5 }} >
                    <Typography width={{ xs: 300 }} fontSize={15} color="#0D19EB" fontFamily="poppins-semibold">
                        Download App Now
                    </Typography>

                    <Typography width={{ lg: 500, xs: 300 }} pt={3} fontSize={{ lg: 50, md: 40, sm: 30, xs: 30 }} color="#000" fontFamily="poppins-semibold">
                        Available for Android devices
                    </Typography>

                    <div className='logo'>
                        <h2>
                            <span>T</span>hapa
                            <span>T</span>echnical
                        </h2>
                    </div>

                    <Typography width={{ xs: 300 }} pr={2} pt={2} color="#000" fontSize={13} fontFamily="poppins-regular">
                        No matter how you choose to reach out to us, we’re committed to providing you with the best possible customer service experience. We value your input and appreciate the opportunity to help you get the most out of our Ownsafe app.
                    </Typography>





                </Grid>

                <nav className='main-nav'>
                    {/* --------------- Logo ---------------------- */}
                    <div className='logo'>
                        <h2>
                            <span>T</span>hapa
                            <span>T</span>echnical
                        </h2>
                    </div>

                    {/* --------------- Menu Links ---------------------- */}
                    <div className='menu-link'>
                        <ul>
                            <Typography width={{ xs: 100 }} fontSize={10} color="#0D19EB" fontFamily="poppins-semibold">
                                Home
                            </Typography>

                            <li>
                                <a href='#'>About</a>
                            </li>

                            <li>
                                <a href='#'>Services</a>
                            </li>

                            <li>
                                <a href='#'>Contact</a>
                            </li>
                        </ul>
                    </div>


                    <div className='social-media'>
                        <ul className='social-media-desktop'>
                            <li>
                                <a href="#"><FaFacebookSquare className='facebook' /></a>
                            </li>

                            <li>
                                <a href="#"><FaInstagramSquare className='instagram' /></a>
                            </li>

                            <li>
                                <a href="#"><FaYoutubeSquare className='youtube' /></a>
                            </li>

                        </ul>

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