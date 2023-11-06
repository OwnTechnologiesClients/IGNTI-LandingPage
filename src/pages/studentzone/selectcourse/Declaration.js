import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./SelectCourse.css";
import { useDispatch } from "react-redux";
import { SetLoading } from "../../../redux/loaderSlice";

function SelectCourse() {
  const { courseName, semesterNumber, enrollment } = useParams();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const navigateToContacts = async () => {
    dispatch(SetLoading(true));
    setTimeout(() => {
      dispatch(SetLoading(false));
      navigate(`/test-subjects/${courseName}/${semesterNumber}/${enrollment}`);
    }, 600);
  };

//   useEffect(() => {
//     if(localStorage.getItem(""))
//   }, [])

  return (
    <div>
      <div className="app">
        <div className="student-section">
          <div className="student-square">
            <div className="square-header">
              <h2>Declaration</h2>
            </div>
            <div className="student-card-parent">
              <div>
                <div className="course-button-parent">
                  <button class="button" onClick={navigateToContacts}>
                    Start Test
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SelectCourse;
