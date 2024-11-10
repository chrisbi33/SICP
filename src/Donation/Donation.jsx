import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import alicode from "../assets/women/alicode.jpg";
import wecode from "../assets/women/wecode.jpg";
import mtn from "../assets/women/mtn.png";
import airtel from "../assets/women/airtel.jpg";
import sub from "../assets/women/sub.mp4";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Donation = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    amount: "",
  });

  const handleChange = (e) => {
    const fieldName = e.target.name;
    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
  };

  const handleAmountClick = (amt) => {
    setFormData({ ...formData, amount: amt.toString() });
  };

  const handleAmountChange = (e) => {
    setFormData({ ...formData, amount: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Request Data:", formData);

      const response = await axios.post(
        "https://auction-website-auji.onrender.com/api/v1/donations",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response Data:", response.data);
      toast.success("Donation created successfully");

      setTimeout(() => {
        navigate("/checkout");
      }, 2000);
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error);
      toast.error("Failed to donate. Please try again later.");
    }
  };

  return (
    <div className="Donation">
      <Navbar />
      <header
         className="hero bg-cover bg-center h-96  flex items-center justify-center  brightness-90"
         style={{
           backgroundImage:
         "url('https://dailytrust.com/wp-content/uploads/2019/01/Severe-Acute-Malnutrition-of-nigeria.jpg')",
         }}
       >
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center sm:items-start text-center sm:text-left bg-black bg-opacity-50 text-white p-10">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold w-full sm:w-2/4 mb-2 sm:mb-4">
           THE HUNGER AND POVERTY CRISIS IN SUBSAHARAN
           </h1>
           
           <p className="text-lg sm:text-xl font-light text-yellow-600 w-full sm:w-2/4 mb-2">
            <i> Hunger is the greatest threat to children today.  But together, 
            We can help children fight for their childhoods and feed their futures. </i>
           </p>
         </div>            
      </header>
     
      {/* Main Content */}
      <main className="container mx-auto py-12 px-6" style={{
           backgroundImage:
         "url('https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
         }} >     
        <section className="mb-12 text-center bg-gradient-to-r from-slate-500 to-transparent">
        <br/>
        <h1 className="text-4xl  text-secondary font-extrabold mb-4">DONATE NOW</h1>

          <p className="text-2xl font-semibold text-rose-200 text-center ">
         
          <i>Make a difference with your contribution</i></p>

          <h2 className="text-3xl font-semibold mb-6 text-red-900 "> <br/>
            How Much Would You Like To Donate?
          </h2>

          <div className="flex flex-col items-center mb-6">
            <div className="flex justify-center mb-4">
              {[30, 50, 75, 100].map((amt) => (
                <button
                  key={amt}
                  className={`px-4 py-2 rounded ${
                    formData.amount === amt.toString()
                      ? "bg-blue-600"
                      : "bg-gradient-to-r from-yellow-800 to-secondary"
                  } text-white transition-colors mx-1`}
                  onClick={() => handleAmountClick(amt)}
                >
                  ${amt}
                </button>
              ))}
            </div>
            <div className="flex justify-center">
              {[250, 500, 750, 1000].map((amt) => (
                <button
                  key={amt}
                  className={`px-4 py-2 rounded ${
                    formData.amount === amt.toString()
                      ? "bg-blue-600"
                      : "bg-gradient-to-r from-red-800 to-secondary"
                  } text-white transition-colors mx-1`}
                  onClick={() => handleAmountClick(amt)}
                >
                  ${amt}
                </button>
              ))}
            </div>
          </div>
          <input
            type="number"
            placeholder="Other amount"
            value={formData.amount}
            onChange={handleAmountChange}
            className="block mx-auto px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <br/>
        </section>
    
       <div >
        <div  className="flex flex-col md:flex-row md:space-x-20 items-start" >
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4 text-red-800">
              Would You Like To Make a Regular Donation?
            </h2>

            <p className="mb-4">
              <i>Your regular contributions help us sustain our mission and reach
              more people in need.</i>
            </p>
            <div className="mb-6">
              <select
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="monthly">Monthly</option>
                <option value="onetime">One Time</option>
                <option value="quarterly">Quarterly</option>
                <option value="trimester">Trimester</option>
                <option value="annually">Annually</option>
              </select>
            </div>

         
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={formData.firstname}
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={formData.amount}
                onChange={handleAmountChange}
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Payment Method</option>
                <option value="creditCard">Credit Card/Visa/Mastercard</option>
                <option value="paypal">Paypal</option>
              </select>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <label htmlFor="newsletter" className="text-sm">
                  Subscribe to our newsletter
                </label>
              </div>

              
              <button
                
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-red-800 to-secondary text-white rounded hover:bg-blue-600 transition-colors"
              >
                Proceed to Checkout
              </button>
            </form><br/> <i>Also you Can Make a Donation Using Telephone Mobile Money services or Mobile Apps </i>
            <ToastContainer />

            <div className="pt-4 font-bold text-blue-600 text-sm">
          <button className="bg-gray-300 text-gray-800 py-1 px-2 rounded-lg hover:bg-primary-dark transition-colors duration-300 ">
          <i>Please dial the following numbers to Donate through MTN Mobile Money</i><br/> <hr/>
          <img
                src={mtn}
                className="w-14 h-15 rounded-lg ml-10 p"
                alt="Description" 
              />  <br/><hr/>
              *182*1*1*0793017617#  
              </button>
              </div>


              <div className="pt-4 font-bold text-blue-600 text-sm">
          <button className="bg-gray-300 text-gray-800 py-1 px-2 rounded-lg hover:bg-primary-dark transition-colors duration-300 ">
          <i>Please dial the following numbers to Donate through Airtel Money</i> <hr/><br/>
          
              
                 <img
                src={airtel}
                className="w-14 h-10 rounded-lg ml-10 p"
                alt="Description" 
              />  <br/> <hr/>
              *500*1*1*0725151768#     
              </button>
              </div>
          </div> 

           
          <div className="w-full md:w-1/2 " >
            <h2 className=" text-2xl font-semibold mb-4 text-yellow-400">Why Donate?</h2>
            <div className="relative mt-10">
        <div className="w-full h-1/2 overflow-hidden">
          <video
            controls="controls" preload="none" onclick="this.play()"
            autoPlay
            Unmuted
            loop
            className="w-full h-[180px] sm:h-[230px] object-cover  brightness-100"
          >
            <source
              src={sub}
              type="video/mp4"
            />
          </video>
        </div>
        </div>
            
            <br/>
            <i><p className="mb-4">
              Your donations support our ongoing efforts to provide clean water,
              education, and healthcare to communities in need.
            </p>
            <p className="mb-4">
              With your help, we can continue to make a significant impact and
              improve lives around the world.
            </p>
            <p>
              Every contribution, no matter the size, makes a difference. 
            <br/><br/>
            <p >
            We believe that even the one who is being helped can help too, 
            After all We all always in need of help from one another.
            Thank you for your generosity and support.
            </p><br/>
            <img
              src="https://cdn-icons-png.flaticon.com/512/702/702691.png"
              className="w-16 h-17 place-items-center rounded-lg ml-10 p"
              alt="Description" 
            />

            </p></i> 
     </div>
            
          <div className="pt-4 bg-orange-400 font-bold text-blue-600">
          <button className="bg-blue-600 text-white py-4 px-6  hover:bg-primary-dark transition-colors duration-300 ">
          //////////////◌\\\\\\\\\\\\\<br/><hr/>          
          Scan the QR Code to Make  Donation Through Alipay<br/>
          <img
                src="https://static.thenounproject.com/png/1433173-200.png"
                className="w-12 h-12 rounded-lg place-items-center ml-10 p"
                alt="Description" /><hr/> 
          \\\\\\\\\\\\\\◌/////////////
              </button>
              
          <div className="pt-4 font-bold text-blue-600">
             
              <img
                src={alicode}
                className="w-36 h-37 rounded-lg ml-10 p"
                alt="Description" 
              />              
            </div>
            <br/><br/>
            <div>
            <button className="bg-green-600 text-white py-4 px-6  hover:bg-primary-dark transition-colors duration-300 ">
            //////////////◌\\\\\\\\\\\\\<br/> <hr/>
          Scan the QR Code to Make  Donation Through Wechat<br/>
          <img
                src="https://static.thenounproject.com/png/1433173-200.png"
                className="w-12 h-12 rounded-lg ml-10 p"
                alt="Description" />
                <hr/>
          \\\\\\\\\\\\\\◌/////////////
              
            </button>
             <br/><br/>
             <div className="pt-4 font-bold text-green-600">
              <img
              
                src={wecode}
                className="w-36 h-37 rounded-lg ml-10 p"
                alt="Description" 
              />
              </div>
              </div>
              <br/>
            </div>
            <br/>
          </div>
          <br/>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Donation;
