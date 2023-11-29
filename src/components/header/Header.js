import React from 'react'
import { useState } from 'react';
import { Grid, Link, Typography, Box } from '@mui/material'
import './Header.css';


const Header = () => {

    return (
        <>

            {/* --------------- header image ---------------------- */}

            <div className='header_img'>
                <img src="/img/WEBSITE LOGO.jpg" alt="header-logo" />
            </div>

        </>
    )
};

export default Header
