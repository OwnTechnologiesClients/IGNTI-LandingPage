import React from 'react'
import './Footer.css';


const Footer = () => {
    return (
        <div className='footer-section'>


            <div className='left-section'>

                {/* --------------- left section ---------------- */}

                <div className='center-verticle'>
                    <h1>IGNTI</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>


                    <div className='footer-social-media-parent'>
                        <div className='footer-social-media-circle'>
                            <div className='social-media-img-size'>
                                <img src="/img/facebook.png" />
                            </div>

                        </div>
                        <div className='footer-social-media-circle'>
                            <div className='footer-social-media-img-size'>
                                <img src="/img/instagram.png" />
                            </div>
                        </div>
                        <div className='footer-social-media-circle'>
                            <div className='social-media-img-size'>
                                <img src="/img/linkedin.png" />
                            </div>
                        </div>
                    </div>
                </div>


                {/* --------------- Middle section one ---------------- */}
                <div className='middle-center-verticle'>
                    <h1>Courses</h1>
                    <div className='middle-section-list'>
                        <div className='middle-list'>
                            <div className='middle-circle' />
                            <p>Html & Css</p>
                        </div>

                        <div className='middle-list'>
                            <div className='middle-circle' />
                            <p>Python</p>
                        </div>

                        <div className='middle-list'>
                            <div className='middle-circle' />
                            <p>Java</p>
                        </div>

                        <div className='middle-list'>
                            <div className='middle-circle' />
                            <p>MS-PowerPoint</p>
                        </div>

                        <div className='middle-list'>
                            <div className='middle-circle' />
                            <p>MS-Excel</p>
                        </div>

                    </div>


                </div>


                {/* --------------- Middle section two ---------------- */}
                <div className='middle-center-verticle'>
                    <h1>Usefull Link</h1>
                    <div className='middle-section-list' />
                    <div className='middle-list'>
                        <div className='middle-circle' />
                        <p>About Us</p>
                    </div>

                    <div className='middle-list'>
                        <div className='middle-circle' />
                        <p>Gallery</p>
                    </div>

                    <div className='middle-list'>
                        <div className='middle-circle' />
                        <p>Testimonial</p>
                    </div>

                    <div className='middle-list'>
                        <div className='middle-circle' />
                        <p>Courses</p>
                    </div>

                    <div className='middle-list'>
                        <div className='middle-circle' />
                        <p>Student</p>
                    </div>




                </div>



                {/* --------------- Right section ---------------- */}
                <div className='right-center-verticle'>
                    <h1>Contact Us</h1>
                    <div className='middle-section-list' />

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>



                </div>


            </div>
        </div>
    )
}

export default Footer