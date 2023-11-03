import React, { useEffect, useMemo, useState } from "react";
import Item from "../../components/item/Item.js";
import "./Courses.css";
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';

//Filter list by category in React JS
export default function Courses() {
  // Default Value
  var defaultSports = [
    { name: "Advance Diploma in Computer Application (ADCA)-Old", category: "Advance Diploma in Computer Application (ADCA)-Old", semester: "SEMESTER-1" },
    { name: "Diploma in Fire and Safety Management", category: "Diploma in Fire and Safety Management", semester: "SEMESTER-2" },
    { name: "X-Ray and ECG Technology", category: "X-Ray and ECG Technology", semester: "SEMESTER-3" },
    { name: "Diploma in Fire and Safety Management", category: "Diploma in Fire and Safety Management", semester: "SEMESTER-4" },
    { name: "Advance Diploma in Computer Application (ADCA)-Old", category: "Advance Diploma in Computer Application (ADCA)-Old", semester: "SEMESTER-4" }
  ];
  const [sportList, setSportList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState();

  // Add default value on page load
  useEffect(() => {
    setSportList(defaultSports);
  }, []);

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

  return (

    <div >
      <Header />
      <Navbar />
      <Banner />

      <div className="app">


        <div className="filter-container">
          <h3>Filters</h3>
          <p>Course Name</p>
          <div className="dropdown">
            <select
              name="category-list"
              id="category-list"
              onChange={handleCategoryChange}
            >
              <option value="">All</option>
              <option value="Advance Diploma in Computer Application (ADCA)-Old">Advance Diploma in Computer Application (ADCA)-Old</option>
              <option value="Diploma in Fire and Safety Management">Diploma in Fire and Safety Management</option>
              <option value="X-Ray and ECG Technology">X-Ray and ECG Technology</option>
            </select>
          </div>
        </div>
        <div className="sport-list">
          {filteredList.map((element, index) => (
            <Item {...element} key={index} />
          ))}
        </div>
      </div>

      <Footer />
    </div>


  );
}