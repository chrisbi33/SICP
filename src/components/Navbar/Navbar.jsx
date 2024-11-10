

import React, { useState } from "react";
import log from "../../assets/women/log.png";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
const Menu = [
 
 
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About Us",
    link: "/About",
    submenu: [
      {
        id: 21,
        name: "Who We Are",
        link: "/About",
      },
      {
        id: 22,
        name: "Our History",
        link: "/Historic",
      },
      {
        id: 23,
        name: "Our Leadership",
        link: "/Leadership",
      },
      {
        id: 24,
        name: "Who Can Donate",
        link: "/Donate",
      },
    ],
  },

  {
    id: 3,
    name: "What We Do",
    link: "/Service",
    submenu: [
      {
        id: 21,
        name: "Children Care",
        link: "/Service",
      },
      {
        id: 22,
        name: "Youth Training",
        link: "/Youth",
      },
      {
        id: 23,
        name: "Fundraising ",
        link: "/Fun",
      },
      {
        id: 24,
        name: "Women Empowerment",
        link: "/Women",
      },
      {
        id: 24,
        name: "Events",
        link: "/Event",
      },
      {
        id: 24,
        name: "Newsletters",
        link: "/News",
      },
    ],
  },

 
  {
    id: 4,
    name: "Our Gallery",
    link: "/Gallery",
  },
  {
    id: 5,
    name: "Our Campaigns",
    link: "/Compaign",
  },
  {
    id: 6,
    name: "Our Impact",
    link: "/Funraise",
  },
  {
    id: 7,
    name: "Contact Us",
    link: "/Contact",
  },
  
  ];



const Navbar = ({ handleOrderPopup }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="bg-gray-800 text-white font-light rounded-t-3xl mt-8 md:mt-0 shadow-2xl relative z-10">
    
   
        <div  className="py-4 bg-red-900">             
          <div className="container flex justify-between items-center">
            <div>
                            
                <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={log} alt="Logo" className="w-12" />
              <h2 className="text-3xl font-bold mb-3 text-primary">
                  SICP
                </h2>
            </a>
       
          
          </div>

          <div className="flex justify-between items-center gap-4">         
          
            <div className="relative group hidden sm:block">
            <form action="/search_results" method="GET">
              <input
                type="text"
                name="query"
                placeholder="Search...."
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 
                rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 
                focus:border-primary dark:border-gray-500 dark:bg-gray-800 text-black"
              />
             
             <button type="submit"><IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
             </button>
            </form>           

            </div>
           
        <div class="weather-condition">
          <span class="weather-temp">
            
          <h2 className="text-xl font-light mb-3 text-yellow-600">

            24°C
            </h2>
            </span>
           
           <span class="sub-weather weather-link">
            
            <img src="https://i.pinimg.com/originals/ce/ec/be/ceecbeb53f0b0c93d6b25745be759ab2.gif" alt=""
            className="w-10"
            />            
            </span>
            <a class="burger_menu"><span class="lines">
              </span>
              </a>        
            </div>


            <Link to="/Login">
              <div className="sign-in flex text-primary">
                <FaRegUser className="mt-3" />
                <span 
              className="text-gray-900 font-bold mt-1">
                <button className="bg-gradient-to-r from-red-800 to-secondary font-extralight text-white py-1 px-2 rounded-lg hover:bg-primary-dark transition-colors duration-300 ">
                Log In
              </button>
                </span>
              </div>
            </Link>         
           
          
                     
            <button
              className="sm:hidden block text-gray-600 dark:text-gray-300 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>

          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? "translate-y-16" : "-translate-x-full"
        } md:hidden  bg-yellow-700 dark:bg-gray-800 py-2 z-0 fixed inset-y-16 mt-16 transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-center space-y-0 pt-1">
          {Menu.map((data) => (
            <li key={data.id} className="w-full text-center relative">
              {data.submenu ? (
                <>
                  <button
                    className="block w-full px-4 py-3 text-sm font-light text-gray-300 dark:text-secondary hover:text-red-800 duration-200"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === data.id ? null : data.id
                      )
                    }
                  >
                    {data.name}
                    <FaChevronDown className="ml-0 inline" />
                  </button>
                  {activeDropdown === data.id && (
                    <ul className="bg-gray-400 dark:bg-yellow-700 py-2">
                      {data.submenu.map((subItem) => (
                        <li key={subItem.id}>
                          <Link
                            to={subItem.link}
                            className="block px-4 py-2 text-yellow-700 text-sm font-light dark:text-gray-300 hover:text-red-700 duration-200"
                          >
                            {subItem.name}
                          </Link>
                        </li>  
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={data.link}
                  className="block w-full px-4 py-3 text-sm font-light text-gray-300 dark:text-secondary hover:text-red-800 duration-200"
                >
                  {data.name}
                </Link> 
              )}
            </li>
          ))}
        </ul>        
      </div>

      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center mb-5">
          {Menu.map((data, index) => (
            <li
              key={data.id}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {data.submenu ? (
                <>
                  <button className="flex items-center px-4 py-2 hover:text-primary duration-200">
                    {data.name}
                    {/* <FaChevronDown className="ml-1" /> */}
                  </button>
                  {activeDropdown === index && (
                    <ul className="absolute left-0 top-full bg-gray-800  dark:bg-yellow-700    py-5 min-w-[200px]">
                      {data.submenu.map((subItem) => (
                        <li key={subItem.id}>
                          <Link
                            to={subItem.link}
                            className="block px-4 py-2 font-light hover:bg-gray-100 dark:hover:bg-gray-700 text-yellow-700  dark:text-gray-200 hover:text-primary duration-200"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={data.link}
                  className="inline-block px-4 py-2 hover:text-secondary duration-200"
                >
                  {data.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;