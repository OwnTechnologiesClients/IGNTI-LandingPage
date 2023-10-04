import React from 'react'
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import Goverment from '../../components/goverment/Goverment';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import { useState } from "react";
import './StudentZone.css';


const StudentZone = () => {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");



    return (
        <div>
            <Header />
            <Navbar />
            <Banner />

            <div className='student-section'>

                <div className='student-square'>
                    <div className='square-header'>
                        <h2>Login</h2>
                    </div>
                    <div className='student-card-parent'>
                        {/* <h2>BECOME A MEMBER</h2> */}
                        <div className='userid-section'>
                            <p>User ID</p>

                            {/* ------------ User Id Input textfield -------------------- */}
                            <input type="text" className="form-control" name="title"
                                value={userId}
                                onChange={(e) => { setUserId(e.target.value) }}
                                placeholder="" />
                        </div>

                        <div className='userid-section'>
                            <p>Password</p>

                            {/* ------------ Password Input textfield -------------------- */}
                            <input type="text" className="form-control" name="title"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                placeholder="" />
                        </div>


                        <div>
                            <div className='student-button-parent'>
                                <button class="button">LOGIN</button>

                            </div>
                        </div>

                    </div>
                </div>


            </div>
            <Footer/>
        </div>
    )
}

export default StudentZone