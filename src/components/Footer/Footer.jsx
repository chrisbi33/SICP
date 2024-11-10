

import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CiFacebook } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import code from "../../assets/women/code.jpg";
import log from "../../assets/women/log.png"

const Footer = () => {
  
   const [email, setEmail] = useState("");

   const handleChange = (e) => {
     setEmail(e.target.value);
   };

   const handleSubmit = async (e) => {
     e.preventDefault();

     try {
       let token = localStorage.getItem("token");
       console.log("Newsletter Subscription Email:", email);

       const response = await axios({
         url: "https://auction-website-auji.onrender.com/api/v1/subscriptions",
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           Authorization: `Bearer ${token}`,
         },
         data: JSON.stringify({ email }),
       });

       console.log("Subscription Response Data:", response.data);
       toast.success(
         "Thank you for subscribing to our news letter"
       );

       
       setEmail(""); 
     } catch (error) {
       console.error("Error:", error.response ? error.response.data : error);
       toast.error("Failed to subscribe. Please try again later.");
     }
   };
  return (
    <div style={{
      backgroundImage:
        "url('https://img.freepik.com/free-vector/abstract-navy-blue-colour-rhombus-pattern-background-banner-multipurpose-design_1340-17102.jpg?semt=ais_hybrid')",
    }}

   
    className=" text-white  mt-8 md:mt-0 shadow-2xl relative z-10">
      <small>
      <div className="container mx-auto p-8 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <a href="/"
            className="flex items-center space-x-4">
            
             <img src={log} alt="Logo" className="w-10 rounded-full" />
              <h3 className="font-bold text-1xl text-primary w-2/3">
                Solidarity Initiative for Children and People(SICP)
              </h3>
            </a>
            
            <p className="text-gray-300"> 
           
            <hr></hr>
              
             <i> Together, we can make a lasting impact and create 
              a brighter future for children and people in need.</i>
            </p>
            
            <div>
              <p className="text-lg font-semibold mb-3">
                <i>Subscribe to our Newsletters</i>
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brightColor"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-red-800 to-secondary text-white rounded-lg font-semibold hover:bg-primary-dark transition duration-300 shadow-md"
                >
                  Subscribe
                </button>
              </form>
              <ToastContainer />
            </div>
            <div className="">
              <h3>Follow us</h3>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.facebook.com/sicpcharity?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CiFacebook className="cursor-pointer text-2xl hover:bg-primary" />
                </a>
                <a
                  href="https://youtube.com/@sicpcharity?si=Pmw5ZNp2pR7CWm5V"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="cursor-pointer text-2xl hover:bg-primary" />
                </a>
                <a
                  href="https://www.instagram.com/sicpcharity?igsh=MXZiY2g5MzJkeW84cg=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="cursor-pointer text-2xl hover:bg-primary " />
                </a>

                <a
                  href="https://x.com/chrisbi33?s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="cursor-pointer text-2xl hover:bg-primary" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-1xl font-bold text-primary mb-6">
              Important Links
            </h2>
            <nav className="space-y-3">
              <Link
                to="/"
                className="block text-gray-300 font-bold hover:text-primary transition duration-300"
              >


                Home
              </Link>
              <Link
                to="/Event"
                className="block text-gray-300 font-bold hover:text-primary transition duration-300"
              >
                Our Events
              </Link>
              <Link
                to="/News"
                className="block text-gray-300 font-bold hover:text-primary transition duration-300"
              >
                News Letters
              </Link>
              <Link
                to="/Donation"
                className="block text-gray-300 font-bold hover:text-primary transition duration-300"
              >
                Donate
              </Link>
              <Link
                to="/contact"
                className="block text-gray-300 font-bold hover:text-primary transition duration-300"
              >
                Contact Us
              </Link>
            </nav>
          </div>
           
                   
            
            <div>
            <h2 className="text-1xl font-bold text-primary mb-6">Links</h2>
            <nav className="space-y-3">
              <Link
                to="/compaign"
                className="block text-gray-300 font-bold hover:text-primary transition duration-300"
              >
                Our Campaigns
              </Link>
              <Link
                to="/funraise"
                className="block text-gray-300 font-bold hover:text-primary transition duration-300"
              >
                Our Impact
              </Link>
              <Link
                to="/service"
                className="block text-gray-300 font-bold hover:text-primary transition duration-300"
              >
                What We Do
              </Link>
              <Link
                to="/About"
                className="block text-gray-300 font-bold hover:text-primary transition duration-300"
              >
                About Us
              </Link>
              <Link
               target="_blank" to="https://www.visitrwanda.com"
                className="block text-gray-300 font-bold hover:text-primary transition duration-300"
              >
                Visit Rwanda
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-1xl font-bold text-primary mb-6">
              Our Contact
            </h2>
            <p className="mb-4 text-gray-300  font-bold hover:text-primary transition duration-300 flex items-center mr-10">
              Chief Executive Officer
            </p>
            <nav className="space-y-4">
              <a
                href="mailto: chrisbisangwaceo@sicpcharity.org"
                className=" text-gray-300 font-bold hover:text-primary transition duration-300 flex items-center"
              >
                <MdOutlineMailOutline className="text-2xl mr-3" />
                chrisbisangwaceo@sicpcharity.org
              </a>
              <a
                href="tel:+250793017617"
                className="text-gray-300 font-bold hover:text-primary transition duration-300 flex items-center"
              >
               <FaPhoneAlt className="text-xl mr-3" />
                 +250793017617 or +8613717622593
              </a>
              <a
                href="https://goo.gl/maps/yourAddress"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-gray-300 hover:text-primary transition duration-300 flex items-start"
              >
                <IoLocationOutline className="text-2xl mr-3 mt-1" />
                <span>
                 <i> Paroisse St Famille Central
                  <br /> St Dominic 32
                  <br /> FW+4JH, NR3
                  <br /> Kigali, Rwanda</i>
                </span>
              </a>
            </nav>
            <div className="pt-4 font-bold"><i>Scan the QR Code to Add Us On Wechat</i> 
              <img
                src={code}
                className="w-32 h-32 rounded-lg ml-10 p"
                alt="Description" 
              />
              
            </div>
          </div>
        </div>

        <div>
          <br/> 
          <hr></hr>
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 Solidarity Initiative for Children and People(SICP)
              |copyright
            </p>
          
        </div>
      </div>
      </small>
    </div>
  );
};

export default Footer;
