
import React, { useEffect, useMemo, useState } from "react";
import TestSubjects from "../testsubject/TestSubjects";
import { Link, useNavigate } from "react-router-dom"
import './SelectCourse.css';

//Filter list by category in React JS
function SelectCourse() {
    // Default Value

    const [sportList, setSportList] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState();



    // Function to get filtered list
    function getFilteredList() {
        // Avoid filter when selectedCategory is null
        if (!selectedCategory) {
            return sportList;
        }
        return sportList.filter((item) => item.category === selectedCategory);
    }

    // Avoid duplicate function calls with useMemo
    var filteredList = useMemo(getFilteredList, [selectedCategory, sportList]);

    function handleCategoryChange(event) {
        setSelectedCategory(event.target.value);
    }

    const navigate = useNavigate();

    const navigateToContacts = () => {
        navigate('/test-subjects');
    };

    return (

        <div >
            {/* <Header />
        <Navbar />
        <Banner /> */}

            <div className="app">


                <div className='student-section'>

                    <div className='student-square'>
                        <div className='square-header'>
                            <h2>Select Course & Semester</h2>
                        </div>
                        <div className='student-card-parent'>
                            <div className='userid-section'>
                                <p>Course</p>
                                <div className="dropdown">

                                    <select
                                        name="category-list"
                                        id="category-list"
                                        onChange={handleCategoryChange}>
                                        <option value="">All</option>
                                        <option value="Advance Diploma in Computer Application (ADCA)-Old">Advance Diploma in Computer Application (ADCA)-Old</option>
                                        <option value="Diploma in Fire and Safety Management">Diploma in Fire and Safety Management</option>
                                        <option value="X-Ray and ECG Technology">X-Ray and ECG Technology</option>
                                    </select>
                                </div>

                                {/* ------------ User Id Input textfield -------------------- */}

                            </div>

                            <div className='userid-section'>
                                <p>Semester</p>

                                <div className="dropdown">
                                    <select
                                        name="category-list"
                                        id="category-list"
                                        onChange={handleCategoryChange}>
                                        <option value="">1</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>

                                </div>

                            </div>


                            <div>


                                <div className='course-button-parent'>
                                    <button class="button" onClick={navigateToContacts}>Continue</button>

                                </div>

                            </div>

                        </div>
                    </div>


                </div>

            </div>

            {/* <Footer /> */}
        </div>


    );
}
export default SelectCourse