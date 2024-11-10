
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    location: "",
    password: "",
  });

  const handleChange = (e) => {
    const fieldName = e.target.name;

    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://auction-website-auji.onrender.com/api/v1/users",
        formData
      );

      console.log("Response Data:", response.data);
      toast.success("User registered successfully");

      
      setTimeout(() => {
        navigate("/login");
      }, 2000); 
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error);
      toast.error("Failed to register. Please try again later.");
    }
  };

  return (
    <div className="sign-up">
      <div data-aos="zoom-in">
        <div className="checkout flex flex-col md:flex-row mt-10 md:mx-auto md:max-w-6xl">
          <div className="left-side flex-none md:w-1/2 relative">
            <img
              src="https://image.cnbcfm.com/api/v1/image/105643264-1545422639126youngbusinesswoman.jpg?v=1627485420&w=1920&h=1080"
              alt="Cyclist"
              className="h-full  object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <h2 className="text-5xl font-bold text-red-800">Join Us Today</h2>
            </div>
          </div>
          <div className="right-side w-full md:w-1/2 mx-auto p-6 shadow-md">
           
              <div className="flex">

              <Link to="/#" className="flex items-center mb-6">
              <IoMdArrowBack className="text-primary font-bold text-2xl mr-2" />
              <span className="text-primary font-bold">
              <button className="bg-gradient-to-r from-red-800 to-secondary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors duration-300 ">
              Home
              </button>
                </span>
            </Link>              
              </div>
           
            <h1 className="text-2xl font-bold mb-4 text-red-800">Create a new account</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="firstname" className="block font-medium mb-1 text-yellow-800 ">
                  Firstname
                </label>
                <input
                  type="fristname"
                  id="firstname"
                  name="firstname"
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastname" className="block font-medium mb-1 text-yellow-800">
                  Lastname
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-1 text-yellow-800">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="username" className="block font-medium mb-1 text-yellow-800">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="location" className="block font-medium mb-1 text-yellow-800">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block font-medium mb-1 text-yellow-800">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-red-800 to-secondary font-bold text-white w-full py-2 rounded-md hover:bg-primary"
              >
                Sign up
              </button>
              <div className="mt-4">
                <span><i>Already have an account?</i></span>
                <Link to="/login">
                  <span className="font-bold ml-2 text-red-800">Login Here</span>
                </Link>
              </div>
            </form>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Signup;


