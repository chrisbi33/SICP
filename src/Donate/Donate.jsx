import React from 'react'
import { Link } from 'react-router-dom';
import love from "../assets/women/love.jpg";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';


const Donate = () => {
  return (
    <div className='who can donate'>
      <Navbar />
      <header
        className="hero bg-cover bg-center  h-96 flex items-center justify-center text-center "
        style={{
          backgroundImage:
        "url('https://www.americanadoptions.com/blog/wp-content/uploads/2020/07/Ramyas-Blog-final.jpg')",
        }}
      >
        <h1 className="text-7xl font-extrabold text-white">Our Donors</h1>
      </header>
      <div
        data-aos="zoom-in"
        className="container font-extralight mx-auto flex flex-col md:flex-row items-center justify-between py-8 bg-gradient-to-r from-gray-400"
      >
        <div className="md:w-2/4 mb-6 md:mb-0 md:pr-8 ">
          <h2 className="text-3xl font-bold mb-3 text-red-900">
            « Who Can Donate? »
          </h2>
          <hr></hr>
          <i>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Anyone who believes in our mission and values can contribute to our
            cause, whether through financial donations or goods and services. Your
            support helps to transform lives and build brighter future.
          </p>
          <hr></hr>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            A donator of SICP is everyone who has understood the goal and value
            of our organization and decides to support our agenda and charity
            activities. A donator from his/her kind heart and capacity can
            either support our community financially or through essentials kits
            provision. We have many children today who lack many basic needs
            either in their homes and school life, and want support from you.
            Children are angels and leaders of tomorrow, as we take into account
            this statement, let’s nourish our minds that the best leaders of
            tomorrow are cultivated from the early cared childhoods with good
            education and healthy life, therefore this is where your role comes
            into play by helping to strengthen the cared childhood stage. 
            </p>
            <hr></hr>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
            With
            your kind heart, you can choose to donate today from your capacity.
            If for example you donate only $50 every month to a kindergarten
            child, he/she will be able to eat, cloth and study well. If it is
            for a primary school child, only a $100 every trimester or $300 for
            three trimesters will help him/her to study, eat and cloth well. In
            addition for a high school child, only $160 every trimester or $480
            for three trimesters, can help him/her study, eat and cloth.
            Moreover a $250 might help to change a young girl or boy and a left
            behind woman life from marginalized families; as such amount could
            act as a capital to start a small business that can generate income
            to them saving them from being beggars in the streets.
          </p>
          </i>
          <Link to="/donation">
            <button className="bg-gradient-to-r from-red-800 to-secondary text-white font-bold py-2 px-4 rounded transition duration-300">
              Donate Now
            </button>
          </Link>
        </div>

        <div className="md:w-2/5">
          <img
            src={love}
            alt="Love"
            className="w-full h-auto max-h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Donate
