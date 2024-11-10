import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import pic2 from "../assets/women/pic2.jpg";
import pic5 from "../assets/women/pic5.jpg";
import pic6 from "../assets/women/pic6.jpg";
import Footer from '../components/Footer/Footer';

const ChildrenAlbum = () => {
  return ( 
           
    <div>
      <Navbar />
      <header
        className="hero bg-cover bg-center  h-96 flex items-center justify-center text-center "
        style={{
          backgroundImage:
        "url('https://images.unsplash.com/photo-1547322617-3f783b07f999?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <h1 className="text-6xl font-bold text-white">Children Gallery</h1>
      </header>
      <div className="mt-20 mb-10 text-center">
        <h1 className="text-3xl font-bold text-red-800">Here is Our Children Album</h1>
        <p className="text-gray-600">
          <i>Browse through our collection of Children pictures</i>
        </p>
      </div>

      
      <div
        data-aos="zoom-in"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10"
      >
        <img
          className="w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          src={pic2}
          alt="Picture 2"
        />
       
        <img
          className="w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          src={pic5}
          alt="Picture 5"
        />
        <img
          className="w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          src={pic6}
          alt="Picture 6"
        />
               
    
      </div>
      <Footer />
    </div>
  );
}

export default ChildrenAlbum