import React, { useEffect, useState } from "react";
import Item from "../../components/item/Item.js";
import "./Courses.css";
import Herosection from "../../components/herosection/Herosection.jsx";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footers from "../../components/footers/Footers.jsx";
import { message } from "antd";
import { SetLoading } from "../../redux/loaderSlice.js";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function Courses() {
  const dispatch = useDispatch();
  const [courses, setCourses] = useState([]);
  const [data, setData] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState();

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const getAllCoursesName = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await axios({
        method: "post",
        url: "http://localhost:9000/api/courses/name-Course-all",
      });
      dispatch(SetLoading(false));
      if (response.data.success) {
        setCourses(response.data.data);
        setSelectedCategory(response.data.data[0]);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      dispatch(SetLoading(false));
      message.error(error.message);
    }
  };

  const getCourse = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await axios({
        method: "post",
        url: "http://localhost:9000/api/courses/get-course",
        data: {
          courseName: selectedCategory,
        },
      });
      setData(response.data.data.semesters);
      dispatch(SetLoading(false));
      if (response.data.success) {
        // message.success(response.data.message);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      dispatch(SetLoading(false));
    }
  };

  const getAllCourse = async () => {
    try {
      dispatch(SetLoading(true));
      const promises = courses.map(async (courseName) => {
        const response = await axios({
          method: "post",
          url: "http://localhost:9000/api/courses/get-course",
          data: {
            courseName: courseName,
          },
        });

        if (response.data.success) {
          return response.data.data.semesters;
        } else {
          throw new Error(response.data.message);
        }
      });

      const results = await Promise.all(promises);

      const allSemesters = [].concat(...results);

      setData(allSemesters);
      dispatch(SetLoading(false));
    } catch (error) {
      dispatch(SetLoading(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (selectedCategory === "all") {
      getAllCourse();
    } else {
      getCourse();
    }
  }, [selectedCategory]);

  useEffect(() => {
    getAllCoursesName();
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <Herosection />

      <div className="app">
        <div className="filter-container">
          <h3>Filters</h3>
          <p>Course Name</p>
          <div className="course-dropdown">
            <select
              name="category-list"
              className="category-list"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="all">All</option>
              {courses.map((course) => {
                return <option value={`${course}`}>{course}</option>;
              })}
            </select>
          </div>
        </div>

        <div className="sport-list">
          {data.map((element, index) => (
            <Item {...element} key={index} />
          ))}
        </div>
      </div>

      <Footers />
    </div>
  );
}
