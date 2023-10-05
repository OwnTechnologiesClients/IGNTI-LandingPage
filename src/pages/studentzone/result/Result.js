import React from 'react'

import { useState } from "react";
import './Result.css';
import { NavLink, Link, useNavigate } from "react-router-dom"
import Header from '../../../components/header/Header';




const Result = () => {
    const navigate = useNavigate();

    const navigateToContacts = () => {
        // 👇️ navigate to /contacts
        navigate('/select-course');
    };

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");



    return (
        <div>

            <Header />

            <div className='result-section'>

                <div className='result-square'>
                    <div className='square-header'>
                        <h2>STUDENT DETAILS</h2>
                    </div>
                    <div className='result-card-parent'>
                        {/* <h2>BECOME A MEMBER</h2> */}
                        <div className='border-1'></div>
                        <div className='result-user-information-section'>
                            <p>Diploma in Computer Application (DCA)</p>
                        </div>


                        <div className='student-information-section'>

                            <div className='section-one'>
                                <div className='student-info'>
                                    <p1>Name: </p1>
                                    <p2>Gaurav Sharma</p2>
                                </div>

                                <div className='student-info'>
                                    <p1>Father Name: </p1>
                                    <p2>VISHWAJEET SHARMA</p2>
                                </div>


                                <div className='student-info'>
                                    <p1>Date Of Birth: </p1>
                                    <p2>12-05-2014</p2>
                                </div>

                                <div className='student-info'>
                                    <p1>Enroll No:</p1>
                                    <p2>01-08-2014-005</p2>
                                </div>

                            </div>

                            <div className='section-two'>
                                <img src="/img/dummyimg.png" />
                            </div>


                        </div>



                    </div>
                    <div className='square-dashboard'>



                        <h2>DASHBOARD</h2>


                        <div className='result-fields'>
                            <div className='sno-examname'>
                                <p1>SNo.</p1>
                                <p1>Exam Name</p1>
                            </div>

                            <div className='other-result-fields'>
                                <p1>Maximum Marks</p1>
                                <p1>Obtained Marks</p1>
                                <p1>Grade</p1>

                            </div>


                        </div>
                        <div className='result-border'></div>




                        <div className='result-fields-2'>
                            <div className='marking'>
                                <p1>1</p1>
                                <p1>COMPUTER FUNDAMENTALS</p1>
                            </div>

                            <div className='other-result-fields-2'>
                                <p1>200</p1>

                                <p1>79</p1>


                                <p1>A</p1>

                            </div>


                        </div>
                        <div className='result-border-2'></div>



                        <div className='result-fields-2'>
                            <div className='marking'>
                                <p1>1</p1>
                                <p1>COMPUTER FUNDAMENTALS</p1>
                            </div>

                            <div className='other-result-fields-2'>
                                <p1>200</p1>

                                <p1>79</p1>


                                <p1>A</p1>

                            </div>


                        </div>
                        <div className='result-border-2'></div>



                        <div className='result-fields-2'>
                            <div className='marking'>
                                <p1>1</p1>
                                <p1>COMPUTER FUNDAMENTALS</p1>
                            </div>

                            <div className='other-result-fields-2'>
                                <p1>200</p1>

                                <p1>79</p1>


                                <p1>A</p1>

                            </div>


                        </div>
                        <div className='result-border-2'></div>


                        <div className='result-fields-2'>
                            <div className='marking'>
                                <p1>1</p1>
                                <p1>COMPUTER FUNDAMENTALS</p1>
                            </div>

                            <div className='other-result-fields-2'>
                                <p1>200</p1>

                                <p1>79</p1>


                                <p1>A</p1>

                            </div>


                        </div>
                    </div>





                </div>

                <div className='percentage-square-dashboard'>
                    <p1>Percentage : 78</p1>

                    <p1>Grade : A</p1>

                    <p1>Result : Pass</p1>
                </div>
            </div>

            <div className='print-section'>

                <div className='print-button'>
                    <p>Print As PDF</p>
                </div>

            </div>

            <div className='logout-section'>

                <div className='logout-button'>
                    <p>Print As PDF</p>
                </div>

            </div>
        </div>
    )
}

export default Result