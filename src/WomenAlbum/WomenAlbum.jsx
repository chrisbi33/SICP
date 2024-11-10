import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import pic3 from "../assets/women/pic3.jpg";
import pic4 from "../assets/women/pic4.jpg";
import pic9 from "../assets/women/pic9.jpg";
import Footer from '../components/Footer/Footer';

const WomenAlbum = () => {
  return (   
       
    <div>
      <Navbar />
      <header
        className="hero bg-cover bg-center  h-96 flex items-center justify-center text-center "
        style={{
          backgroundImage:
        "url('https://images.unsplash.com/photo-1566534491166-1c89d1e949f0?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <h1 className="text-6xl font-bold text-white">Women Gallery</h1>
      </header>
      <div className="mt-20 mb-10 text-center">
        <h1 className="text-3xl font-bold text-red-800">Here is Our Gallery</h1>
        <p className="text-gray-600">
          <i>Browse through our collection of pictures</i>
        </p>
      </div>

      
      <div
        data-aos="zoom-in"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10"
      >
        
        <img
          className="w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          src={pic3}
          alt="Picture 3"
        />
        <img
          className="w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          src={pic4}
          alt="Picture 4"
        />
        
        <img
          className="w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          src={pic9}
          alt="Picture 9"
        />
            
      </div>
      <Footer />
    </div>
  );
}

export default WomenAlbum