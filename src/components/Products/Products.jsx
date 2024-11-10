
import React from "react";
import { Link } from "react-router-dom";
import { CgMediaPodcast } from "react-icons/cg";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { BsSendCheck } from "react-icons/bs";




const Products = () => {
  return (
    <div className="py-12 mt-10 bg-gradient-to-r from-gray-500">
      <div data-aos="zoom-in">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center ">
       
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://archive-images.prod.global.a201836.reutersmedia.net/2016/11/11/LYNXMPECAA0LC.JPG"
              alt="Placeholder"
              className="rounded-lg shadow-md w-full h-auto"
            />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 items-center mt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-center md:text-left text-pink-900">
                HELP FOR HOMELESS CHILD               
              </h2>
              <Link to="/Donation">
                <button className="bg-gradient-to-r from-red-800 to-secondary text-white py-2 px-4 rounded-md">
                  PLEASE DONATE NOW
                </button>
              </Link>
            </div>
          </div>

          
          <div className="w-full md:w-1/2 md:ml-8">
          <h2 className="w-full text-3xl font-bold text-pink-900 text-center md:text-left">
           
              HOW TO HELP US
              <br/>
              <br/>
            </h2>
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <BsSendCheck className="text-2xl mr-4 text-primary" />
                <h3 className="text-lg sm:text-xl font-bold text-yellow-700">SEND DONATION</h3>
              </div>
              <p>
                <i>Please send us donations to help our children grow up and pursue
                their careers.</i>
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-2">
                <CgMediaPodcast className="text-2xl mr-4 text-primary" />
                <h3 className="text-lg sm:text-xl font-bold text-yellow-700">SHARE MEDIA</h3>
              </div>
              <p>
                <i>Help us spread the word by sharing our media content on your
                social channels.</i>
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-2">
                <MdOutlineVolunteerActivism className="text-2xl mr-4 text-primary" />
                <h3 className="text-lg sm:text-xl font-bold text-yellow-700">
                  BECOME VOLUNTEER
                </h3>
              </div>
              <p>
               <i>If you want to become a volunteer, create an account and send us
                your request.</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
