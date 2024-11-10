import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

const Event = () => {
 
  return (
    <><div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r py-8 px-4 sm:px-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-left">
          Upcoming Events
        </h1>                  

        <hr></hr>

        <div className="flex flex-col lg:flex-row justify-center py-12 space-y-8 lg:space-y-0 lg:space-x-4">
          <div className="w-full lg:w-1/4">
            <div className="flex flex-col items-start">
              <Link to="/New">
                <div className="bg-white shadow-lg overflow-hidden mb-4 w-full max-w-[12rem] h-48 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                  <div className="bg-gradient-to-r from-red-800 to-secondary text-white p-4 text-center h-full flex flex-col justify-center">
                
                Charity
                <h2 className="text-2xl font-bold mb-2">
                <hr></hr>
                      Upcoming Event</h2>
                    <hr></hr>
                    <span className="text-lg">05 December 2024</span>
                    <hr></hr>
                  </div>
                </div>
              </Link>
              <Link to="/New">
              <p className="w-full lg:w-2/3 font-bold text-red-800 hover:underline active:text-blue-700 transition duration-300 ease-in-out ">              
            Visiting of Patients at MUHIMA Hospital
            </p>
          </Link>

          <p className="text-gray-700 leading-relaxed w-full lg:w-2/3 mt-3 text-sm">
            
          <hr></hr>
            <i>SICP Team of Volunteers will help the patients to take showers and change
            to new clothes. It will also give motivation words
            and foster hope to patients to help them not to feel lonely and left. Furthermore,
            we will provide foods, snacks, and some pocket money to buy
            medications to those patients who are unable to afford hospital
            bills.</i>
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/4">
        <div className="flex flex-col items-start">
          <Link to="/Month">
            <div className="bg-white shadow-lg overflow-hidden mb-4 w-full max-w-[12rem] h-48 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <div className="bg-gradient-to-r from-purple-800 to-secondary text-white p-4 text-center h-full flex flex-col justify-center">
              Course
                <h2 className="text-2xl font-bold mb-2">
                <hr></hr>
                 Upcoming Event
                </h2>
                <hr></hr>
                <span className="text-lg">11 December 2024</span>
                <hr></hr>
              </div>
            </div>
          </Link>
          <Link to="/Month">
            <p className="w-full lg:w-2/3 font-bold text-red-800 hover:underline active:text-blue-700 transition duration-300 ease-in-out ">
              Environmental Course: The Importance of Preserving and Conserving Green Grassland
            </p>
          </Link>

          <p className="text-gray-700 leading-relaxed w-full lg:w-2/3 mt-3 text-sm">
            
          <hr></hr>
            <i>Globally, over-utilization of resources and climate change have
            caused increasingly serious ecological damage, including but not
            limited to losses of biodiversity and ecosystem stability,
            threatening the sustainability of ecological functions and
            services.</i>
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/4">
        <div className="flex flex-col items-start">
          <Link to="/Social">
            <div className="bg-white shadow-lg overflow-hidden mb-4 w-full max-w-[12rem] h-48 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <div className="bg-gradient-to-r from-purple-800 to-secondary text-white p-4 text-center h-full flex flex-col justify-center">
              
              Course
                <h2 className="text-2xl font-bold mb-2">
                <hr></hr>
                  Upcoming Event
                </h2>
                <hr></hr>
                <span className="text-lg">15 December 2024</span>
                <hr></hr>
              </div>
            </div>
          </Link>

          <Link to="/Social">
            <p className="w-full lg:w-2/3 font-bold text-red-800 hover:underline active:text-blue-700 transition duration-300 ease-in-out ">
              Social Transformation Topic: Cooperatives As A Path Way to The Women Sustainable
              Livelihoods and Empowerment
            </p>
          </Link>

          <p className="text-gray-700 leading-relaxed w-full lg:w-2/3 mt-3 text-sm">
            
          <hr></hr>
           <i>Over the past two centuries cooperatives had been introduced to
            the world and ever since, the term cooperative has been
            developed in various form in different sectors in which human
            survival activities take places.</i>
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/4">
        <div className="flex flex-col items-start">
          <Link to="/Second">
            <div className="bg-white shadow-lg overflow-hidden mb-4 w-full max-w-[12rem] h-48 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <div className="bg-gradient-to-r from-purple-800 to-secondary text-white p-4 text-center h-full flex flex-col justify-center">
              
              Course
                <h2 className="text-2xl font-bold mb-2">
                <hr></hr>
                  Upcoming Event
                </h2>
                <hr></hr>
                <span className="text-lg">28 December 2024</span>
                <hr></hr>
              </div>
            </div>
          </Link>
          <Link to="/Second">
            <p className="w-full lg:w-2/3 font-bold text-red-800 hover:underline active:text-blue-700 transition duration-300 ease-in-out ">
              Monthly Social Studies: Cooperatives in Pandemics, Food Security, War conflict and
              Climate Issues in Africa
            </p>
          </Link>

          <p className="text-gray-700 text-sm leading-relaxed w-full lg:w-2/3 mt-3">
            
          <hr></hr>
            <i>Cooperatives have an important role in increasing community
            resilience to climate change, wars, conflicts, and pandemics.</i>
          </p>
        </div>
      </div>
    </div><h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary pb-2"></h2><h1 className="text-3xl sm:text-4xl font-bold mb-8 text-left">
        Past Events
        <br/><br/>
        <hr></hr>
      </h1><section className="flex justify-start py-12">
      
        <div className="flex flex-col items-start max-w-md">
          <Link to="/Students">
            <div className="bg-white shadow-lg overflow-hidden mb-4 w-full max-w-[12rem] h-48 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <div className="bg-gradient-to-r from-gray-500 text-black p-4 text-center h-full flex flex-col justify-center">
              
              Charity
                <h2 className="text-2xl font-bold mb-2">
                <hr></hr>
                  Past/Old Event</h2>
                <hr></hr>
                <span className="text-lg">15 September 2024</span>
                <hr></hr>
              </div>
            </div>
          </Link>

          <div className="text-gray-700 leading-relaxed text-sm">
            <Link to="/Students">
              <p className="w-full lg:w-2/3 font-bold text-red-800 hover:underline active:text-blue-700 transition duration-300 ease-in-out">
                Provision of School Supplies to Students
              </p>
            </Link>

           
            <p className="text-gray-700 leading-relaxed w-full lg:w-2/3 mt-3 text-sm">
            <hr></hr>
            <i>SICP Team will visit and assist our students<br/>
            who are at schools to boost their morale
            and awaken their positive attitude toward<br/>
            Success.</i>
            </p>
          </div>
        </div>

     
        <div className="flex flex-col items-start max-w-md">
          <Link to="/Children">
            <div className="bg-white shadow-lg overflow-hidden mb-4 w-full max-w-[12rem] h-48 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <div className="bg-gradient-to-r from-gray-500 text-black p-4 text-center h-full flex flex-col justify-center">
              
              Charity
                <h2 className="text-2xl font-bold mb-2">
                <hr></hr>
                  Past/Old Event</h2>
                <hr></hr>
                <span className="text-lg">29 July 2024</span>
                <hr></hr>
              </div>
            </div>
          </Link>

          <div className="text-gray-700 leading-relaxed text-sm">
            <Link to="/Children">
              <p className="w-full lg:w-2/3 font-bold text-red-800 hover:underline active:text-blue-700 transition duration-300 ease-in-out">
                Paying a Visit <br/>to Vulnerable Widows and Children
              </p>
            </Link>

           
            <p className="text-gray-700 leading-relaxed w-full lg:w-2/3 mt-3 text-sm">
            <hr></hr>
            <i>SICP Volunteers Team will approach widows and their children in our community<br/>
            support them both physically and emotionally in their home.<br/>
            There will be an entertaining moment and game time for children .
            </i>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start max-w-md">
          <Link to="/Refugies">
            <div className="bg-white shadow-lg overflow-hidden mb-4 w-full max-w-[12rem] h-48 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <div className="bg-gradient-to-r from-gray-500 text-black p-4 text-center h-full flex flex-col justify-center">
              
              Charity
                <h2 className="text-2xl font-bold mb-2">
                <hr></hr>
                  Past/Old Event</h2>
                <hr></hr>
                <span className="text-lg">01 June 2024</span>
                <hr></hr>
              </div>
            </div>
          </Link>

          <div className="text-gray-700 leading-relaxed text-sm">
            <Link to="/Refugies">
              <p className="w-full lg:w-2/3 font-bold text-red-800 hover:underline active:text-blue-700 transition duration-300 ease-in-out">
                Provision of Supplies <br/>to refugees in Rubavu, Nkamira Refugee Camp
              </p>
            </Link>

           
            <p className="text-gray-700 leading-relaxed w-full lg:w-2/3 mt-3 text-sm">
            <hr></hr>
            <i>SICP Team will visit and assist refugees<br/>
            who are residing in northwest part of Rwanda
            and help them feel welcomed and safe <br/> as well 
            as reminding them that the future is better.
            </i>
            </p>
          </div>
        </div>


        <div className="flex flex-col items-start max-w-md">
          <Link to="/Patients">
            <div className="bg-white shadow-lg overflow-hidden mb-4 w-full max-w-[12rem] h-48 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <div className="bg-gradient-to-r from-gray-500 text-black p-4 text-center h-full flex flex-col justify-center">
              
              Charity
                <h2 className="text-2xl font-bold mb-2">
                <hr></hr>
                  Past/Old Event</h2>
                <hr></hr>
                <span className="text-lg">15 May 2024</span>
                <hr></hr>
              </div>
            </div>
          </Link>

          <div className="text-gray-700 leading-relaxed text-sm">
            <Link to="/Patients">
              <p className="w-full lg:w-2/3 font-bold text-red-800 hover:underline active:text-blue-700 transition duration-300 ease-in-out">
              Visiting of Patients at  <br/>CHUK Hospital
              </p>
            </Link>

           
            <p className="text-gray-700 leading-relaxed w-full lg:w-2/3 mt-3 text-sm">
            <hr></hr>
            <i>SICP Team of Volunteers will help the patients to take
              showers and change to new clothes. 
              <br/>It will also give those words of
               encouragement and hope to help 
               them not to feel lonely and left.</i>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start max-w-md">
          <Link to="/Past">
            <div className="bg-white shadow-lg overflow-hidden mb-4 w-full max-w-[12rem] h-48 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <div className="bg-gradient-to-r from-gray-500 text-black p-4 text-center h-full flex flex-col justify-center">
              
              Charity
                <h2 className="text-2xl font-bold mb-2">
                <hr></hr>
                  Past/Old Event</h2>
                <hr></hr>
                <span className="text-lg">27 April 2024</span>
                <hr></hr>
              </div>
            </div>
          </Link>

          <div className="text-gray-700 leading-relaxed text-sm">
            <Link to="/Past">
              <p className="w-full lg:w-2/3 font-bold text-red-800 hover:underline active:text-blue-700 transition duration-300 ease-in-out">
                Provision of School Supplies to both <br/>Children and Youth
              </p>
            </Link>

           
            <p className="text-gray-700 leading-relaxed w-full lg:w-2/3 mt-3 text-sm">
            <hr></hr>
            <i>SICP Team will pay a visit and assist our students<br/>
            who are at schools to boost their morale
            and awaken their positive attitude toward<br/>
            Success.</i>
            </p>
          </div>
        </div>




       
      </section>
    
    
    </div><Footer/>
    </div>
    </>
  );
};

export default Event;
