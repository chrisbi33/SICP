import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import pic7 from "../assets/women/pic7.jpg";
import pic8 from "../assets/women/pic8.jpg";
import pic10 from "../assets/women/pic10.jpg";
import Footer from '../components/Footer/Footer';

const YouthAlbum = () => {
  return (   
          
    <div>
      <Navbar />
      <header
        className="hero bg-cover bg-center  h-96 flex items-center justify-center text-center "
        style={{
          backgroundImage:
        "url('https://images.unsplash.com/photo-1518998053901-5348d3961a04?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D')",
        }}
      >
        <h1 className="text-6xl font-bold text-white">Youth Gallery</h1>
      </header>
      <div className="mt-20 mb-10 text-center">
        <h1 className="text-3xl font-bold text-red-800">Here is Our Youth Album</h1>
        <p className="text-gray-600">
          <i>Browse through our collection of Youth pictures</i>
        </p>
      </div>

      
      <div
        data-aos="zoom-in"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10"
      >
        
        <img
          className="w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          src={pic7}
          alt="Picture 7"
        />
        <img
          className="w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          src={pic8}
          alt="Picture 8"
        />
        
        <img
          className="w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          src={pic10}
          alt="Picture 10"
        />         
    
      </div>
      <Footer />
    </div>
  );
}

export default YouthAlbum