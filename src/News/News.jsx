import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';


const News = () => {
  return (
    <>
      <div className="newsletter">
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br py-8 px-4 sm:px-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-left">
            Current Newsletter
          </h1>
          <hr></hr>
          <br/>
          <br/>
          <div className="flex space-x-4">
            <div className="w-full lg:w-1/4">
              <div className="flex flex-col items-start">
                <Link to="/Current">
                  <div className="bg-white shadow-lg overflow-hidden mb-4 w-full max-w-[12rem] h-48 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                    <div className="bg-gradient-to-r from-red-800 to-secondary text-white p-4 text-center h-full flex flex-col justify-center">
                      <span className="text-lg">
                      Vol-9
                      <hr></hr>
                      <div className="text-2xl font-bold">
                        Current Newsletter </div>
                        <br/>
                        <hr></hr>
                        October 2024
                        <hr></hr>
                      </span>
                    </div>
                  </div>
                </Link>

                <Link to="/Current">
                  <p className="w-full lg:w-2/3 font-bold text-red-800 hover:underline  transition duration-300 ease-in-out cursor-pointer ">
                  <i>End of Summer Vacation and Begining of New academic year September</i>
                  </p>
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/4">
              <div className="flex flex-col items-start">
                <Link to="/Old">
                  <div className="bg-white shadow-lg overflow-hidden mb-4 w-full max-w-[12rem] h-48 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                    <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 text-center h-full flex flex-col justify-center">
                      <span className="text-lg">
                        Vol-10
                      <hr></hr>
                      <div className="text-2xl font-bold">
                        Current Newsletter </div>
                        <br/>
                        <hr></hr>
                        October 2024
                        <hr></hr>
                      </span>
                    </div>
                  </div>
                </Link>

                <Link to="/Old">
                  <p className="w-full lg:w-2/3 font-bold text-red-800 hover:underline  transition duration-300 ease-in-out cursor-pointer ">
                    <i>The Approaching of Christmas and New Year of 2025</i>
                  </p>
                </Link>
              </div>
            </div>
          </div>              
                    

          <h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary pb-2"></h2>
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-left">
            Old Past Newsletter
          </h1>
          <hr></hr>
          <section className="flex justify-start py-12">
            <div className="flex flex-col items-start max-w-md">
              <Link to="/Merry">
                <div className="bg-white shadow-lg overflow-hidden mb-4 w-full max-w-[12rem] h-48 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                  <div className="bg-gradient-to-r from-gray-500 text-black p-4 text-center h-full flex flex-col justify-center">
                    <span className="text-1xl mb-2">
                    Vol-4
                    <hr></hr>                       
                        <div className="text-2xl font-bold">
                        Past/Old Newsletter </div>
                        <br/>
                        <hr></hr>
                        December 2023
                        <hr></hr>
                    </span>
                  </div>
                </div>
              </Link>

              <div className="text-gray-700 leading-relaxed text-sm">
                <Link to="/Merry">
                  <p className="w-full lg:w-2/3 font-bold text-red-800 hover:underline  transition duration-300 ease-in-out cursor-pointer ">
                  <i>Merry Christmas 2023  And Happy New Year 2024</i>
                  </p>
                </Link>
              </div>
            </div>
          </section>         
        </div>
      </div>
      <Footer />
    </>
  );
}

export default News
