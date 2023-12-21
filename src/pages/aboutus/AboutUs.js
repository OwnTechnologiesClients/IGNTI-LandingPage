import React from 'react'
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import './AboutUs.css';
import Goverment from '../../components/goverment/Goverment';
import Herosection from '../../components/herosection/Herosection';
import Footers from '../../components/footers/Footers';




const AboutUs = () => {



    return (
        <div>
            <Header />
            <Navbar />
            <Herosection />


            <div className='about-section'>
                <div className='about-parent'>
                    <h2>About Us</h2>

                    <div className="about-content">
                        <p>
                            Indira Gandhi National Training Institute (IGNTI) Established in
                            the year of 2017. IGNTI has been Registered Under the Trust Act.
                            Of 1882 Govt. of Delhi, India (Registration No. 745) & also
                            certified from ISO No. 9001:2015.
                        </p>

                        <p>The main function of this trust to provide higher technical education in
                            nominal charges for every group of social of Urban and Rural areas all
                            over the India and get success in computer & vocational education
                            which is the main dream of Govt. IGNTI have been working in
                            Computer Education, Hardware & Networking field, Vocational
                            Training like Shorthand & Typing, Spoken English, Trainings & Other
                            Govt. Authorized Courses.</p>

                        <p>Through These Courses & Programmes we ensure that our students
                            learn more & more and become more talented and skillful person. Our
                            strong Infrastructure, efficient, energetic, dedicated and capable officers
                            urge the student to move forward. In our institution we have very
                            experience and hardworking teachers and staff. Thousands of students
                            have already got trained professionally and made their career
                            successfully in the past.</p>
                    </div>



                </div>

                <div className='space'>

                </div>




            </div>

            <Goverment />
            <Footers />

        </div>
    )
}

export default AboutUs