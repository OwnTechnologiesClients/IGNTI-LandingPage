import "./studentdetail.css";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { SetLoading } from "../../redux/loaderSlice";

const Studentdetail = () => {
  const [courses, setCourses] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [dob, setDob] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [image, setImage] = useState();
  const [file, setFile] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addStudentButton = async (e) => {
    e.preventDefault();
    try {
      if (selectedCategory === "") {
        throw new Error("course not selected");
      }
      if (file === null) {
        throw new Error("No file is chosen! Please select the file.");
      }
      if (
        firstname === "" ||
        emailAddress === "" ||
        fatherName === "" ||
        dob === "" ||
        contactNumber === "" ||
        city === "" ||
        state === "" ||
        pincode === "" ||
        address == ""
      ) {
        throw new Error("Please fill all details");
      }
      const formData = new FormData();
      formData.append("fileName", file);
      formData.append("studentName", firstname);
      formData.append("email", emailAddress);
      formData.append("fatherName", fatherName);
      formData.append("dateOfBirth", dob);
      formData.append("mobileNumber", contactNumber);
      formData.append("city", city);
      formData.append("state", state);
      formData.append("pincode", pincode);
      formData.append("address", address);
      formData.append("courseName", selectedCategory);

      dispatch(SetLoading(true));
      const result = await axios.post(
        "https://igti-backend-5bgl.onrender.com/api/students/register",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      const response = await axios({
        method: "post",
        url: "https://igti-backend-5bgl.onrender.com/api/students/get-student-id",
        data: {
          email: emailAddress,
        },
      });
      dispatch(SetLoading(false));
      if (result.data.success && response.data.success) {
        message.success(result.data.message);
      } else {
        throw new Error(result.data.message);
      }
    } catch (error) {
      dispatch(SetLoading(false));
      message.error(error.message);
    }
  };

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleContactChange(event) {
    setContactNumber(event.target.value);
  }

  const getAllCoursesName = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await axios({
        method: "post",
        url: "https://igti-backend-5bgl.onrender.com/api/courses/name-Course-all",
      });
      dispatch(SetLoading(false));
      if (response.data.success) {
        setCourses(response.data.data);
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
    <div className="student-section-1">
      <div className="student-head">
        <h2>Student Details</h2>
      </div>
      <div className="student-container">
        <div className="student-form">
          <input
            type="text"
            className="form-control-1"
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            placeholder="First Name"
          />

          <input
            type="email"
            className="form-control-1"
            value={emailAddress}
            onChange={(e) => {
              setEmailAddress(e.target.value);
            }}
            placeholder="Email Address"
          />

          <input
            type="text"
            className="form-control-1"
            value={fatherName}
            onChange={(e) => {
              setFatherName(e.target.value);
            }}
            placeholder="Father Name"
          />

          <div className="date-course">
            <input
              type="date"
              className="form-control-1 custom-date-input"
              value={dob}
              onChange={(e) => {
                setDob(e.target.value);
              }}
              placeholder="Date Of Birth"
            />

            <div className="add-course-dropdowns">
              <select
                name="category-list"
                id="category-listss"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option disabled value="">
                  Select Course
                </option>
                {courses.map((course, index) => {
                  return <option value={course}>{course}</option>;
                })}
              </select>
            </div>
          </div>

          <input
            type="number"
            className="form-control-1"
            value={contactNumber}
            onChange={(e) => {
              // setContactNumber(e.target.valu((e);
              handleContactChange(e);
            }}
            placeholder="Contact Number"
          />

          <input
            type="text"
            className="form-control-1"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            placeholder="Enter City"
          />

          <input
            type="text"
            className="form-control-1"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            placeholder="Enter Full Address"
          />

          <div className="date-course">
            <input
              type="text"
              className="form-control-1"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
              placeholder="State"
            />

            <input
              type="number"
              className="form-control-1"
              value={pincode}
              onChange={(e) => {
                setPincode(e.target.value);
              }}
              placeholder="Enter Pincode"
            />
          </div>

          <input
            type="file"
            className="form-control-1"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
              setFile(e.target.files[0]);
            }}
            placeholder="Upload Image"
            accept="image/*"
          />
        </div>
      </div>

      <div className="buttons-submitt">
        <button className="btns" onClick={addStudentButton}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Studentdetail;
