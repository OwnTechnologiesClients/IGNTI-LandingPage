import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Declaration.css";
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

  useEffect(() => {
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      window.history.pushState(null, null, window.location.href);
    };

    // Clean up the event listener when the component unmounts
    return () => {
      window.onpopstate = null;
    };
  }, []);

  return (
    <div className="instruction-container">
      <div className="instruction-header">
        <h2>
          INDIRA GANDHI NATIONAL TRAINING INSTITUTE
          <br />
          EXAMINATION
        </h2>
      </div>

      <div className="instruction-exam">
        <div className="instruction-exam-heading">
          <h3>Exam Related Quires</h3>
        </div>

        <div className="instruction-exam-list">
          <li>1) 100 Marks Per Subjects.</li>
          <li>2) 50 Question For Each Subjects.</li>
          <li>3) 2 Marks for Each Question.</li>
          <li>4) Negative Marking is 1 Mark For Each Question.</li>
        </div>
      </div>

      <div className="instruction-button-parent">
        <button class="instruction-button" onClick={navigateToContacts}>
          Submit Test
        </button>
      </div>
    </div>
  );
}
export default SelectCourse;
