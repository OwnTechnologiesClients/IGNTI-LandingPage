import React, { useRef } from "react";
import { useState, useEffect } from "react";
import "./Result.css";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../../components/header/Header";
import { useDispatch } from "react-redux";
import { SetLoading } from "../../../redux/loaderSlice";
import axios from "axios";
import { message } from "antd";
import html2pdf from "html2pdf.js";

const Result = () => {
  const dispatch = useDispatch();
  const { selectedCategory, num, enrollment } = useParams();
  const navigate = useNavigate();

  const logout = () => {
    navigate("/student");
  };

  let [user, setUser] = useState();
  if (!user) {
    user = {
      courseName: "",
      studentName: "",
      dateOfBirth: "",
      fatherName: "",
    };
  }

  let [result, setResult] = useState([]);
  if (result.length === 0) {
    result = [
      {
        subjectResults: [
          {
            subjectName: "",
            totalNumQuestions: "",
            numCorrectAnswers: "",
          },
        ],
        isDeclared: true,
      },
    ];
  }

  const getUser = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await axios({
        method: "post",
        url: "http://localhost:9000/api/students/get-student-id-enroll",
        data: {
          enroll: enrollment,
        },
      });
      dispatch(SetLoading(false));
      if (response.data.success) {
        message.success(response.data.message);
        setUser(response.data.data);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      dispatch(SetLoading(false));
      message.error(error.message);
    }
  };

  const getResult = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await axios({
        method: "post",
        url: "http://localhost:9000/api/resultSets/get-result-set-id",
        data: {
          studentId: user._id,
          semesterNumber: num,
          courseName: selectedCategory,
        },
      });
      dispatch(SetLoading(false));
      if (response.data.success) {
        setResult(response.data.data);
      }
    } catch (error) {
      dispatch(SetLoading(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    getResult();
  }, [user]);

  useEffect(() => {
    getUser();
  }, []);

  let totalCorrectAnswers = 0;
  let totalTotalNumQuestions = 0;

  result[0].subjectResults.forEach((subjectResult) => {
    totalCorrectAnswers =
      totalCorrectAnswers + +subjectResult.numCorrectAnswers;
    totalTotalNumQuestions =
      totalTotalNumQuestions + subjectResult.totalNumQuestions;
  });

  const roundedNumber = (totalCorrectAnswers / totalTotalNumQuestions) * 100;
  const overallPercentage = roundedNumber.toFixed(2);

  const resultSectionRef = useRef(null);

  const printAsPDF = () => {
    if (resultSectionRef.current) {
      dispatch(SetLoading(true));

      const element = resultSectionRef.current;
      const pdfOptions = {
        margin: 10,
        filename: "result.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      html2pdf(element, pdfOptions).then(() => {
        dispatch(SetLoading(false));
      });
    }
  };

  return (
    <div ref={resultSectionRef}>
      <div id="content-to-pdf">
        <Header />

        <div className="result-section">
          <div className="result-square">
            <div className="square-header">
              <h2>STUDENT DETAILS</h2>
            </div>
            <div className="result-card-parent">
              <div className="border-1"></div>
              <div className="result-user-information-section">
                <p>{user.courseName}</p>
              </div>

              <div className="student-information-section">
                <div className="section-one">
                  <div className="student-info">
                    <p1>Name: </p1>
                    <p2>{user.studentName}</p2>
                  </div>

                  <div className="student-info">
                    <p1>Father Name: </p1>
                    <p2>{user.fatherName}</p2>
                  </div>

                  <div className="student-info">
                    <p1>Date Of Birth: </p1>
                    <p2>{user.dateOfBirth}</p2>
                  </div>

                  <div className="student-info">
                    <p1>Enroll No:</p1>
                    <p2>{user.enrollNo}</p2>
                  </div>
                </div>

                <div className="section-two">
                  <img
                    src={`http://localhost:9000/public/${user.imageFile}`}
                  />
                </div>
              </div>
            </div>

            {result[0].isDeclared ? (
              <div className="square-dashboard">
                <h2>DASHBOARD</h2>

                <div className="result-fields">
                  <div className="sno-examname">
                    <p1>SNo.</p1>
                    <p1>Exam Name</p1>
                  </div>

                  <div className="other-result-fields">
                    <p1>Maximum Marks</p1>
                    <p1>Obtained Marks</p1>
                    <p1>Grade</p1>
                  </div>
                </div>

                {result[0].subjectResults.map((subjectResult, subIndex) => {
                  return (
                    <div>
                      <div className="result-border"></div>

                      <div className="result-fields-2">
                        <div className="marking">
                          <p1>{subIndex + 1}</p1>
                          <p1>{subjectResult.subjectName}</p1>
                        </div>

                        <div className="other-result-fields-2">
                          <p1>{subjectResult.totalNumQuestions}</p1>

                          <p1>{subjectResult.numCorrectAnswers}</p1>

                          {(subjectResult.numCorrectAnswers /
                            subjectResult.totalNumQuestions) *
                            100 <=
                          30 ? (
                            <p1>D</p1>
                          ) : (subjectResult.numCorrectAnswers /
                              subjectResult.totalNumQuestions) *
                              100 <=
                            50 ? (
                            <p1>C</p1>
                          ) : (subjectResult.numCorrectAnswers /
                              subjectResult.totalNumQuestions) *
                              100 <=
                            80 ? (
                            <p1>B</p1>
                          ) : (
                            <p1>A</p1>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="result-border"></div>
              </div>
            ) : (
              <div>
                <div className="result-border"></div>
                <div className="not-declared">
                  <h1>Result not declared yet!</h1>
                </div>
              </div>
            )}
          </div>

          {result[0].isDeclared ? (
            overallPercentage <= 30 ? (
              <div className="percentage-square-dashboard-fail">
                <p1>Percentage : {overallPercentage}%</p1>

                <p1>Grade : D</p1>

                <p1>Result : Fail</p1>
              </div>
            ) : (
              <div className="percentage-square-dashboard">
                <p1>Percentage : {overallPercentage}%</p1>

                {overallPercentage <= 30 ? (
                  <p1>Grade : D</p1>
                ) : overallPercentage <= 50 ? (
                  <p1>Grade : C</p1>
                ) : overallPercentage <= 80 ? (
                  <p1>Grade : B</p1>
                ) : (
                  <p1>Grade : A</p1>
                )}

                <p1>Result : Pass</p1>
              </div>
            )
          ) : null}
        </div>

        <div className="print-section">
          <div className="print-button" onClick={() => {
            window.print();
          }}>
            <p>Print As PDF</p>
          </div>
        </div>

        <div className="logout-section">
          <div className="logout-button" onClick={logout}>
            <p>LOGOUT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
