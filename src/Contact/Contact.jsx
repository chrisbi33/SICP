
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import cutekid from "../assets/women/cutekid.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
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
      let token = localStorage.getItem("token");
      console.log("Request Data:", formData);

      const response = await axios({
        url: "https://auction-website-auji.onrender.com/api/v1/contacts",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: JSON.stringify(formData),
      });

      console.log("Response Data:", response.data);
      toast.success("Thank you for your feedback");

      // Clear the form
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        subject: "",
        message: "",
      });

     
      document.getElementById("firstname").focus();
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error);
      toast.error("Failed to send message. Please try again later.");
    }
  };


  return (
    <>
      <Navbar />

      <div className="contact-page  ">
        <div
          className="hero-section h-screen bg-cover bg-center flex flex-col justify-center items-center relative"
          style={{
            backgroundImage:
              "url('https://onlinesocialwork.vcu.edu/wp-content/uploads/sites/2/2022/06/social-work-vulnerable-populations.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-center relative  mb-6 leading-tight">
            Let's Get in Touch
          </h1>
          <p className="text-xl text-yellow-600 text-center font-extralight relative  mb-12 max-w-3xl px-6q">
           <i> Do you have a question or need some more information about our
            organization? We are here to help. Fill out the form below and let's
            start a conversation that could lead to great impact in our
            community and make this world a better place.</i>
          </p>
        </div>

        <div
          data-aos="zoom-in"
          id="contact-form"
          className="container mx-auto px-4 py-20 -mt-48 relative  "
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            <div 
            style={{
              backgroundImage:
                "url('https://sueatkinsparentingcoach.com/wp-content/uploads/2019/09/cute-cheeky-black-child.jpg')",
            }}
            
            className="lg:w-1/2  text-white p-12">
              <h2 className="text-4xl font-bold mb-6 bg-black bg-opacity-50 text-primary">
                We'd Love to Hear from You
              </h2>
              <p className="w-full lg font-light text-rose-300 bg-black bg-opacity-50 transition duration-300 ease-in-out cursor-pointer">
                <i>Whether you are a beginner to working with a charity
                organization like ours or an experienced kind hearted donor,
                your journey with us begins here. Share your thoughts, advices
                and let's create something extraordinary together, something
                that will always be held tenderly in the hearts of our
                community.</i>
              </p>
              <br/>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <IoLocationOutline className="text-4xl text-primary opacity-80" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">Our Address</h3>
                    <p className="text-sm leading-relaxed  ">
                      Paroisse St Famille Central St Dominic 32
                      <br/>
                      FW+4JH, NR3, Kigali, Rwanda
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MdOutlineMailOutline className="text-4xl text-primary opacity-80" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">Write to Us</h3>
                    <p className="text-sm opacity-100">info@sicpcharity.org</p>
                    <a
                      href="mailto: info@sicpcharity.org"
                      className="text-sm font-medium underline hover:text-gray-200 transition-colors inline-block mt-2"
                    >
                      Send an Email
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaPhoneAlt className="text-3xl text-primary opacity-80" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">Call Us</h3>
                    <p className="text-sm opacity-100"> +250793017617 or +8613717622593 </p>
                    <a
                      href="tel:+250793017617 or +8613717622593"
                      className="text-sm font-medium underline hover:text-gray-200 transition-colors inline-block mt-2"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 p-12">
              <h2 className="text-3xl font-bold mb-6 text-red-800">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      value={formData.firstname}
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300  focus:bg-white focus:ring-0"
                      placeholder="e.g., Marie"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastname"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      value={formData.lastname}
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300  focus:bg-white focus:ring-0"
                      placeholder="e.g., Dupont"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300  focus:bg-white focus:ring-0"
                    placeholder="you@example.com"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300  focus:bg-white focus:ring-0"
                    placeholder="Your Subject"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300  focus:bg-white focus:ring-0"
                    placeholder="Your message here"
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-red-800 to-secondary text-white rounded-lg font-semibold text-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
       </div>
      <Footer />
      {/* <ToastContainer /> */}
    </>
  );
}

export default Contact;




