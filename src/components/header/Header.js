import React from 'react'
import { useState } from 'react';
import { Grid, Link, Typography, Box } from '@mui/material'
import './Header.css';

//import bannerImg from '/img/head_logo.jpg'
///Users/pawanyadav/Documents/OwnTechnologyClient/ignti-landing-page/public/img/head_logo.jpg

// import PowerSlap from "././video/Background_vdo.mov"



const Header = () => {

    return (
        <>
            <Grid
                height={{ lg: '30vh' }}
                >

                <div className='header_img'>
                    <img src="/img/head_logo.jpg" alt="pubg" />
                </div>


            </Grid>



        </>
    )
};

export default Header
