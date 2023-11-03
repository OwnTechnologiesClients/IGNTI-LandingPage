import "./App.css";
import React from "react";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";

import Courses from "./pages/courses/Courses";
import Franchise from "./pages/franchise/Franchise";
import ContactUs from "./pages/contactus/ContactUs";
import AboutUs from "./pages/aboutus/AboutUs";
import Gallery from "./pages/gallery/Gallery";
import StudentZone from "./pages/studentzone/StudentZone";
import SelectCourse from "./pages/studentzone/selectcourse/SelectCourse";
import TestSubjects from "./pages/studentzone/testsubject/TestSubjects";
import TestQuestions from "./pages/studentzone/testsubject/testquestions/TestQuestions";
import Result from "./pages/studentzone/result/Result";
import ExamSubmitSuccess from "./pages/studentzone/examPublishSuccess/ExamSubmitSuccess";
import Spinner from "./load/Spinner";
import { useSelector } from "react-redux";

const App = () => {
  const { loading } = useSelector((state) => state.loaders);
  return (
    <div>
      {loading && <Spinner />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/student" element={<StudentZone />} />
        <Route path="/select-course" element={<SelectCourse />} />
        <Route path="/test-subjects/:courseName/:semesterNumber" element={<TestSubjects />} />
        <Route path="/test-subjects/quesions/:courseName/:semesterNumber/:subjectName" element={<TestQuestions />} />
        <Route path="/test-subjects/submit" element={<TestQuestions />} />
        <Route path="/result" element={<Result />} />
        <Route path="/exam-submited" element={<ExamSubmitSuccess />} />
      </Routes>
    </div>
  );
};

export default App;
