import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import pic12 from "../assets/women/pic12.jpg";
import Footer from '../components/Footer/Footer';

const CharityAlbum = () => {
  return (   
        
    
    <div>
      <Navbar />
      <header
        className="hero bg-cover bg-center  h-96 flex items-center justify-center text-center "
        style={{
          backgroundImage:
        "url('https://images.unsplash.com/photo-1548618771-dfd3f73251b8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <h1 className="text-6xl font-bold text-white">Charity Galery</h1>
      </header>
      <div className="mt-20 mb-10 text-center">
        <h1 className="text-3xl font-bold text-red-800">Here is Our Charity Events Album</h1>
        <p className="text-gray-600">
          <i>Browse through our collection of Charity Events</i>
        </p>
      </div>

      
      <div
        data-aos="zoom-in"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10"
      >
        
        <img
          className="w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          src={pic12}
          alt="Picture 12"
        />       
    
      </div>
      <Footer />
    </div>
  );
}

export default CharityAlbum