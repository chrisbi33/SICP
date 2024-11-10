import React from "react";
import Navbar from "../components/Navbar/Navbar";

import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";


const Gallery = () => {
  return (   
        
    
    <div>

      <Navbar />
      <header
      
        className="hero bg-cover bg-center  h-96 flex items-center justify-center text-center "
        style={{
          backgroundImage:
        "url('https://images.unsplash.com/photo-1507643179773-3e975d7ac515?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <h1 className="text-6xl font-bold text-white">SICP Gallery</h1>
      </header>
      <div className="mt-20 mb-10 text-center">
        <h1 className="text-3xl font-bold text-red-800">Here is Our Gallery</h1>
        <p className="text-gray-600">
          <i>Browse through our collection of pictures</i>
        </p>
      </div>


      <div className="min-h-screen bg-gradient-to-r py-8 px-4 sm:px-10">
      <div className="flex flex-col lg:flex-row justify-center py-12 space-y-8 lg:space-y-0 lg:space-x-4">
          <div className="w-full lg:w-1/4">
            <div className="flex flex-col items-start">
              <Link to="/ChildrenAlbum">
                <div className="bg-white shadow-lg overflow-hidden mb-4 w-full max-w-[13rem] h-68 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                  <div className="bg-gradient-to-r from-red-800 to-secondary text-white p-4 text-center h-full flex flex-col justify-center">
                
                Gallery
                <h2 className="text-2xl font-bold mb-2">
                <hr></hr>
                      Our Children Girls & Boys</h2>
                    <hr></hr>
                    <span className="text-lg">Album</span>
                    <hr></hr>
                    <br/> <br/>     
                <img
              className="w-full h-64 lg:h-auto object-cover rounded-lg  transition-transform duration-300 hover:scale-105"
              src="https://kidshelpline.com.au/sites/default/files/bdl_image/Header_T_DWD.png"
              alt="https://kidshelpline.com.au/sites/default/files/bdl_image/Header_T_DWD.png"/> 

                  </div>
                </div>
              </Link>
              <Link to="/ChildrenAlbum">
              <p className="w-full lg:w-2/3 font-bold text-red-800 hover:underline active:text-blue-700 transition duration-300 ease-in-out ">              
              This Album Consist of Young Ages Children From 2 to 12 Years Old
            </p>
          </Link>          
        </div>
      </div>

      <div className="w-full lg:w-1/4">
        <div className="flex flex-col items-start">
          <Link to="/WomenAlbum">
            <div className="bg-white shadow-lg overflow-hidden mb-4 w-full max-w-[13rem] h-68 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <div className="bg-gradient-to-r from-purple-800 to-secondary text-white p-4 text-center h-full flex flex-col justify-center">
              Gallery
                <h2 className="text-2xl font-bold mb-2">
                <hr></hr>
                Our Women All Ages              
                </h2>
                <hr></hr>
                <span className="text-lg">Album</span>
                <hr></hr>
                <br/>     
                <img
              className="w-full h-64 lg:h-auto object-cover rounded-lg  transition-transform duration-300 hover:scale-105"
              src="https://www.g-epic.eu/sites/g-epic.eu/files/styles/extra_large/public/2023-02/29bis.png?itok=1wFRl6vK"
              alt="https://cdni.iconscout.com/illustration/premium/thumb/boy-carrying-donation-trolley-illustration-download-in-svg-png-gif-file-formats--money-charity-pack-miscellaneous-illustrations-8070604.png?f=webp"/> 

              </div>
            </div>
          </Link>
          <Link to="/WomenAlbum">
            <p className="w-full lg:w-2/3 font-bold text-red-800 hover:underline active:text-blue-700 transition duration-300 ease-in-out ">
            This Album Consists of both photos of Widows and Women who have been approached by SICP
            </p>
          </Link>          
        </div>
      </div>

      <div className="w-full lg:w-1/4">
        <div className="flex flex-col items-start">
          <Link to="/YouthAlbum">
            <div className="bg-white shadow-lg overflow-hidden mb-4 w-full max-w-[13rem] h-68 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <div className="bg-gradient-to-r from-purple-800 to-secondary text-white p-4 text-center h-full flex flex-col justify-center">
              
              Gallery
                <h2 className="text-2xl font-bold mb-2">
                <hr></hr>
                 Our Youth Girls & Boys
                </h2>
                <hr></hr>
                
                <span className="text-lg">Album</span>
                <hr></hr>
                   
                <img
              className="w-full h-64 lg:h-auto object-cover rounded-lg  transition-transform duration-300 hover:scale-105"
              src="https://cdni.iconscout.com/illustration/premium/thumb/boy-and-girl-doing-charity-work-illustration-download-in-svg-png-gif-file-formats--world-logo-global-donation-pack-miscellaneous-illustrations-8070566.png?f=webp"
              alt="https://cdni.iconscout.com/illustration/premium/thumb/boy-carrying-donation-trolley-illustration-download-in-svg-png-gif-file-formats--money-charity-pack-miscellaneous-illustrations-8070604.png?f=webp"/>

              </div>              
            </div>
          </Link>

          <Link to="/YouthAlbum">
            <p className="w-full lg:w-2/3 font-bold text-red-800 hover:underline active:text-blue-700 transition duration-300 ease-in-out ">
            This Album Consists of Youth photos in Various Activities organized by SICP
            </p>
          </Link>          
        </div>
      </div>

      <div className="w-full lg:w-1/4">
        <div className="flex flex-col items-start">
          <Link to="/CharityAlbum">
            <div className="bg-white shadow-lg overflow-hidden mb-4 w-full max-w-[13rem] h-68 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <div className="bg-gradient-to-r from-purple-800 to-secondary text-white p-4 text-center h-full flex flex-col justify-center">
              
              Gallery
                <h2 className="text-2xl font-bold mb-2">
                <hr></hr>
                  Charity Activities
                </h2>
                <hr></hr>
                <span className="text-lg">Album</span>
                <hr></hr>
                   
                <img
              className="w-full h-64 lg:h-auto object-cover rounded-lg  transition-transform duration-300 hover:scale-105"
              src="https://cdni.iconscout.com/illustration/premium/thumb/charity-campaign-illustration-download-in-svg-png-gif-file-formats--humanitarian-philanthropy-box-school-education-illustrations-3575373.png"
              alt="https://cdni.iconscout.com/illustration/premium/thumb/boy-and-girl-doing-charity-work-illustration-download-in-svg-png-gif-file-formats--world-logo-global-donation-pack-miscellaneous-illustrations-8070566.png?f=webp"/> 

              </div>
            </div>
          </Link>
          <Link to="/CharityAlbum">
            <p className="w-full lg:w-2/3 font-bold text-red-800 hover:underline active:text-blue-700 transition duration-300 ease-in-out ">
            This Album Consists of SICP Charity activities photos that showcase its progress from time to time 
            </p>
          </Link>          
        </div>
      </div>
    </div>
  </div>      
      <Footer />
    </div>
  );
}

export default Gallery
