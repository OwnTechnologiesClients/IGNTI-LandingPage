import React from 'react'
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import Goverment from '../../components/goverment/Goverment';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import './Home.css';


const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />


      <div className='parent'>


        <div className='square'>
          <div className='card-parent'>
            <h2>Course Include</h2>


            <div className='list'>
              <div className='circle' />
              <p>Unlimited Access</p>
            </div>

            <div className='list'>
              <div className='circle' />
              <p>10+ Courses</p>
            </div>

            <div className='list'>
              <div className='circle' />
              <p>Expert Teachers</p>
            </div>

            <div className='list'>
              <div className='circle' />
              <p>Valid Certification</p>
            </div>

            <div className='list'>
              <div className='circle' />
              <p>On-the-go learning</p>
            </div>

            <div className='list'>
              <div className='circle' />
              <p>24x7 Super Support</p>
            </div>

            <div>
              <div className='button-parent'>
                <button class="button">More</button>
                <img src="/icon/next.png" />
              </div>
            </div>

          </div>
        </div>


        <div className='square'>
          <div className='card-parent'>
            <h2>Course Include</h2>


            <div className='list'>
              <div className='circle' />
              <p>Unlimited Access</p>
            </div>

            <div className='list'>
              <div className='circle' />
              <p>10+ Courses</p>
            </div>

            <div className='list'>
              <div className='circle' />
              <p>Expert Teachers</p>
            </div>

            <div className='list'>
              <div className='circle' />
              <p>Valid Certification</p>
            </div>

            <div className='list'>
              <div className='circle' />
              <p>On-the-go learning</p>
            </div>

            <div className='list'>
              <div className='circle' />
              <p>24x7 Super Support</p>
            </div>

            <div>
              <div className='button-parent'>
                <button class="button">More</button>
                <img src="/icon/next.png" />
              </div>
            </div>

          </div>
        </div>


        <div className='square'>
          <div className='card-parent'>
            <h2>Course Include</h2>


            <div className='list'>
              <div className='circle' />
              <p>Unlimited Access</p>
            </div>

            <div className='list'>
              <div className='circle' />
              <p>10+ Courses</p>
            </div>

            <div className='list'>
              <div className='circle' />
              <p>Expert Teachers</p>
            </div>

            <div className='list'>
              <div className='circle' />
              <p>Valid Certification</p>
            </div>

            <div className='list'>
              <div className='circle' />
              <p>On-the-go learning</p>
            </div>

            <div className='list'>
              <div className='circle' />
              <p>24x7 Super Support</p>
            </div>

            <div>
              <div className='button-parent'>
                <button class="button">More</button>
                <img src="/icon/next.png" />
              </div>
            </div>

          </div>
        </div>

      </div>





      <div className='support-service-parent'>
        <div className='flex-container'>
          <div className='support-service'>
            <h2>SUPPORT</h2>
            <h1>SERVICE</h1>
          </div>


          <div className='right-section'>
            <div className='right-section-child'>

              <div className='right-section-flex'>
                <img src="/icon/customer-service.png" />
                <p>xyz@gmail.com</p>
              </div>

              <div className='right-section-flex'>
                <img src="/icon/call.png" />
                <p>+91-9999555588</p>
              </div>

            </div>

          </div>

        </div>
      </div>


      <Goverment />

      <Footer />

    </div >

  )
}

export default Home