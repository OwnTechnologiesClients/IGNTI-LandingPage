import React, { useEffect, useState } from "react";
import "./Goverment.css";
import { Link } from "react-router-dom";
import { message } from "antd";
import { SetLoading } from "../../redux/loaderSlice.js";
import { useDispatch } from "react-redux";
import axios from "axios";

const Goverment = () => {
  const dispatch = useDispatch();
  const [courses, setCourses] = useState([]);
  const [duration, setDuration] = useState([]);

  const getAllCoursesName = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await axios({
        method: "post",
        url: "https://backend.ignti.com/api/courses/name-Course-all",
      });
      dispatch(SetLoading(false));
      // console.log(response.data);
      if (response.data.success) {
        setCourses(response.data.data);
        setDuration(response.data.data2);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      dispatch(SetLoading(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    getAllCoursesName();
  }, []);

  return (
    <div className="gov-container">
      <div className="gov-border">
        {courses.map((courseData, courseIndex) => {
          return (
            <div key={courseIndex} className="gov-card">
              <div className="head-gov">
                <p>{courseData}</p>
              </div>

              <div className="gov-month">
                <p>{duration[courseIndex]} MONTHS</p>
              </div>

              <div className="gov-read-more">
                <a href="#">Read More</a>
              </div>
            </div>
          );
        })}
        <div className="gov-other-course">
          <Link to="/courses">For Other Courses</Link>
        </div>
      </div>
    </div>
  );
};

export default Goverment;
