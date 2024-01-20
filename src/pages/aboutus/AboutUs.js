import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./AboutUs.css";
import Goverment from "../../components/goverment/Goverment";
import Herosection from "../../components/herosection/Herosection";
import Footers from "../../components/footers/Footers";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Herosection />

      <div className="about-section">
        <div className="about-parent">
          <h2>About Us</h2>

          {/*  <div className='about-content'>
                         <h3>About IGNIC Institute</h3>
                     </div>

                     */}

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

          {/* <div className='about-content'>
                        <h3>Our Vision:</h3>
                    </div>

                    <div className='about-content'>
                        <p>To empower individuals with the knowledge and skills they need to thrive in a rapidly evolving world.</p>
                    </div>


                    <div className='about-content'>
                        <h3>Our Mission:</h3>
                    </div>

                    <div className='about-content'>
                        <p>To provide exceptional educational experiences, foster creativity, and cultivate leaders who make a positive impact on society.</p>
                    </div>


                    <div className='about-content'>
                        <h3>Why Choose IGNTI Institute?</h3>
                    </div>

                    <div className='about-content'>
                        <p><b>1. Experienced Faculty:</b> Our faculty members are experts in their fields, bringing a wealth of knowledge and real-world experience to the classroom.</p>
                    </div>


                    <div className='about-content'>
                        <p><b>2. Innovative Programs:</b> We offer a diverse range of programs designed to meet the evolving needs of learners and industries.</p>
                    </div>

                    <div className='about-content'>
                        <p><b>3. Hands-On Learning:</b> Practical, hands-on learning is at the core of our approach, preparing students for real-world challenges.</p>
                    </div>


                    <div className='about-content'>
                        <p><b>4. Global Perspective:</b> Our international partnerships and global outlook ensure that our students are prepared for a globalized world.</p>
                    </div>


                    <div className='about-content'>
                        <p><b>5. Personalized Support:</b> We believe in individualized attention and provide support services to help each student succeed.</p>
                    </div>


                    <div className='about-content'>
                        <p><b>6. Cutting-Edge Facilities:</b> Our state-of-the-art facilities create an optimal learning environment.</p>
                    </div>

                    <div className='about-content'>
                        <p><b>7. Research Opportunities:</b> We encourage research and innovation, nurturing the curiosity and creativity of our students.</p>
                    </div>

                    <div className='about-content'>
                        <p><b>8. Community Engagement:</b> We are committed to giving back to the community and fostering a sense of social responsibility.</p>
                    </div>

                    <div className='about-content'>
                        <h3>Join Us in Your Educational Journey:</h3>
                    </div>

                    <div className='about-content'>
                        <p>Whether you’re a prospective student seeking to pursue your passion, a professional looking to upskill, or an organization seeking customized training solutions, IGNIC Institute welcomes you with open arms.</p>
                    </div> */}
        </div>

        <div className="space"></div>
      </div>

      <Goverment />
      <Footers />
    </div>
  );
};

export default AboutUs;
