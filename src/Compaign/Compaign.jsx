import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import charite from "../assets/women/charite.jpg";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

const Compaign = () => {
  const [modal, setModal] = useState(null);

  const showModal = (campaign) => setModal(campaign);
  const hideModal = () => setModal(null);

  return (
    <>
      <Navbar />
      <div className="min-h-screen ">
        <header
          className="bg-blue-600 text-white py-16 md:py-32"
          style={{
            backgroundImage:
              "url('https://image.cnbcfm.com/api/v1/image/105643264-1545422639126youngbusinesswoman.jpg?v=1627485420&w=1920&h=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div 
          
          
          className="container mx-auto bg-opacity-75 bg-primary py-8 md:py-12 rounded-lg text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Support Our Causes
            </h1>
            <p className="mt-2 text-sm md:text-base lg:text-lg">
              Help us make a difference by donating to specific campaigns or
              through our general fundraising efforts.
            </p>
          </div>
        </header>

        <div className="flex justify-center items-center mt-20 px-4">
          
          </div>
              
       
       <div>  
       
          <main

style={{
  backgroundImage:
    "url('https://images.unsplash.com/photo-1614447412838-3f4ebd5c2dc0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
}}
        data-aos="zoom-in"
        className="container mx-auto py-16 px-4 flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10"
      >
        
        <section className="w-full max-w-4xl p-8 font-extralight bg-gradient-to-r from-gray-400 to-secondary rounded-lg shadow-lg">
          
        <h2 className="text-2xl font-bold mb-3 text-red-800">
          <i>« Give Us a Push »</i>
          </h2>
        <hr></hr>
        <i>Our concrete measures include supporting children's education, vocational 
        training for school dropouts, and social & developmental projects for widows
         and the marginalized. We primarily work in sub-Saharan countries, with a focus 
         on Rwanda.</i>
         <br/>
         <br/>
          
          <img
            className="w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            src={charite}
            alt="Picture Charite" />
          <h2 className="text-2xl font-bold text-center mb-6 mt-5 text-yellow-800">
            Our Concerns
          </h2>
          <hr></hr>
         
           <p>
            
            We ceaselessly promote peace, reconciliation, autonomy, liberty,
            justice, and equity and gender equality for women in their
            respective social gatherings and lives as a pathway to foster a
            community with strong and empowered women.

            Many children, left-behind women, and others need our support. 
          Together, we can make an unforgettable and huge positive impact
           on the lives of these less fortunate individuals. We believe that
            by joining hands, we can eradicate poverty and end global suffering.
             We invite you to work with us in this noble cause.

            <br/><br/>

{/* Button positioned below the text */}
<Link to="/Donation">
              <button className="bg-gradient-to-r from-red-800 to-secondary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-300">
                Donate Now
              </button>
            </Link>

          </p>
                     
        </section>


        <div className="w-full max-w-md bg-gradient-to-r from-gray-300 to-secondary shadow-md rounded-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>

              </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-900 mb-2 text-center">
              OUR MISSION
            </h3>
            <p className="mt-2 text-gray-600 text-center text-sm">
              <i>
              Solidarity Initiative for Children and People (SICP) aims to get
              poor and marginalized people out of poverty through charity work,
              leading them to meaningful jobs that provide decent income. Our
              goal is to help them regain belief in their lives and achieve
              parity with others in terms of job opportunities, welfare,
              education, economic stability, and development.
              </i>
            </p>

            <br/>
            <div className="lg:w-2/3 w-full">

            <a  href="/Donation"> 
            <img
              className="w-full h-46 lg:h-auto object-cover rounded-lg  transition-transform duration-300 hover:scale-105"
              src="https://i.pinimg.com/originals/0c/68/d0/0c68d044ffd91d3234ffa3dad8fdb037.gif"
              alt="https://www.pngall.com/wp-content/uploads/8/Coins-Piggy-Bank-PNG-Image.png"/>
              </a>
              <br/>
              <Link to="/Donation">
              <button className="bg-gradient-to-r from-red-800 to-secondary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-300 ">
                Please Donate
              </button>
            </Link>
        </div>
          
            </div>

      
        </main>              
        </div>  


          <main 
     style={{
      backgroundImage:
        "url('https://i.pinimg.com/originals/83/a6/8e/83a68ede151a440ec4e433ca578daaa3.jpg')",
    }}

          className="container mx-auto py-8 bg-lightgrey">
          <section data-aos="zoom-in" className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-red-800">
              <i>« Support Our Campaigns »</i>
            </h2>

            <hr></hr> 
            <br/>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-extralight">
              <div className="bg-gradient-to-r from-gray-400 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-red-800">
                  Children and Youth pupils
                </h3>
                <hr/><br/>
        <img
              src="https://static.thenounproject.com/png/681875-200.png"
              className="w-14 h-15 rounded-lg ml-10 p"
              alt="Description" 
            />  <br/><hr/>
                <p className="mb-4 text-sm">
                  <i>Our Children at primary school and youth at high school
                  campaign focuses on providing educational resources, school
                  supplies, school fees and scholarships to underprivileged
                  children. By donating, you help these children get the
                  education they deserve, opening doors to a brighter future.</i>



                </p>
                <Link to="/Donation">
                  <button className="bg-gradient-to-r from-red-800 to-secondary text-white py-2 px-4 rounded-lg">
                    Donate Now
                  </button>
                </Link>
              </div>
              <div className="bg-gradient-to-r from-gray-400 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-red-800">Youth</h3>

                <hr/><br/>
             <img
              src="https://static.thenounproject.com/png/1145601-200.png"
              className="w-14 h-15 rounded-lg ml-10 p"
              alt="Description" 
            />  <br/><hr/>


                <p className="mb-4 text-sm">

              
                  <i>The Youth campaign is dedicated to supporting young people
                  through mentorship programs, career training, and recreational
                  activities. Your donations help to empower youth, fostering
                  their development and ensuring that they have the skills and
                  opportunities to succeed.</i>
                </p>
                <Link to="/Donation">
                  <button className="bg-gradient-to-r from-red-800 to-secondary text-white py-2 px-4 rounded-lg">
                    Donate Now
                  </button>
                </Link>
              </div>
              <div className="bg-gradient-to-r from-gray-400 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-red-800">Women</h3>

                <hr/>
             <img
              src="https://www.svgheart.com/wp-content/uploads/2021/11/i-am-woman-empowerment-girl-power-free-svg-file-SvgHeart.Com-1.png"
              className="w-14 h-15 rounded-lg ml-10 p"
              alt="Description" 
            />  <br/><hr/>

                <p className="mb-4 text-sm">
                  <i>Our Women’s campaign focuses on empowering women through
                  education, job training, and support services. Donations to
                  this campaign help women to achieve financial autonomy, gain
                  confidence, and build a better future for themselves and their
                  families.</i>
                </p>
                <Link to="/Donation">
                  <button className="bg-gradient-to-r from-red-800 to-secondary text-white py-2 px-4 rounded-lg">
                    Donate Now
                  </button>
                </Link>
              </div>
              <div className="bg-gradient-to-r from-gray-400 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-red-800">Patients</h3>

                <hr/>
             <img
              src="https://static.thenounproject.com/png/2737189-200.png"
              className="w-14 h-15 rounded-lg ml-10 p"
              alt="Description" 
            />  <br/><hr/>

                <p className="mb-4 text-sm">
                 <i>The Patients campaign aims to provide medical assistance,
                  medications, and support for individuals who cannot afford
                  healthcare. Your contributions help improve the quality of
                  life for patients by ensuring that they receive the necessary
                  medical care and support.</i>
                </p>
                <Link to="/Donation">
                  <button className="bg-gradient-to-r from-red-800 to-secondary text-white py-2 px-4 rounded-lg">
                    Donate Now
                  </button>
                </Link>
                
              
              </div>
              

              <div className="lg:w-4/7 w-64 h-64 rounded-lg ml-10 p ">

              <a  href="/Donation">
            <img
              className="w-full h-46 lg:h-auto object-cover rounded-lg  transition-transform duration-300 hover:scale-105"
              src="https://i.pinimg.com/originals/0c/68/d0/0c68d044ffd91d3234ffa3dad8fdb037.gif"

              alt="https://give.do/blog/wp-content/uploads/2023/02/Philanthropy-4-1024x576.png"
              
            />
            </a>
            </div>                     
            <div className="lg:w-4/7 w-64 h-64 rounded-lg ml-10 p ">

              <a  href="/Donation">
            <img
              className="w-full h-64 lg:h-auto object-cover   transition-transform duration-300 hover:scale-105"
              src="https://cdn-icons-png.flaticon.com/512/3637/3637449.png"

              alt="https://give.do/blog/wp-content/uploads/2023/02/Philanthropy-4-1024x576.png"
              
            />
            </a>
            </div>                     


            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Compaign;
