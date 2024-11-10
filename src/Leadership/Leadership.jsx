import React from 'react'
import michel from "../assets/women/michel.jpg";
import CEO from "../assets/women/CEO.jpg";
import vera from "../assets/women/vera.jpg";
import petite from "../assets/women/petite.jpg";
import mag from "../assets/women/mag.jpg";
import martha from "../assets/women/martha.jpg";
import pic24 from "../assets/pic24.jpg";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Leadership = () => {
  return (
    <div className="leadership">
        <Navbar />
        <header
        className="hero bg-cover bg-center  h-96 flex items-center justify-center text-center "
        style={{
          backgroundImage:
        "url('https://groco.com/wp-content/uploads/2021/02/getty_464502432_2000156820009280437_118883.jpg')",
        }}
      >
        <h1 className="text-7xl font-extrabold text-white">Leadership</h1>
      </header>
      <div className="bg-white py-12 pt-20">
      <h1 className="text-3xl font-bold text-red-800 text-center">Here is Our Leadership's Team</h1>
        <p className="text-gray-600 text-center">
          <i>Get To Know the motivation behind our Leaders' enthusiastic nature in charity work.</i>
        </p>
        
        <br/><br/>
        <hr></hr> 
        <br/>
        <main
          data-aos="zoom-in"
          className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
         
          {[
            {
              name: "NYIRAHABARUGIRA Winifred",
              title: "President & Founder of SICP",
              image: pic24,
              quote:
                "Together, we can make a lasting impact and create a brighter future for children and people in need.",
            },
            {
              name: "BISANGWA Christophe",
              title: "Chief Executive Officer & Co-founder of SICP",
              image: CEO,
              quote:
                "Across the globe, I have seen with my own eyes the power of solidarity. The opportunity and protection of individuals and communities it brings against vulnerability. I joined SICP mainly because the fight for justice and inclusion for all and the fight against the cruelty of poverty SICP holds in its principles.",
            },
            {
              name: "Francine Nishimwe",
              title: "Chief Financial Officer of SICP",
              image: petite,
              quote:
                "I am sure we can change the world if we lift our voices and help others to find their voice against poverty. SICP is on the front, and I am pleased to be a part of this team.",
            },
            {
              name: "SAN Michel",
              title: "Chief of Strategy and Operations of SICP",
              image: michel,
              quote:
                "I am inspired by the team at SICP and their genuine commitment to conquer inequality and eradicate poverty and injustice in the community.",
            },
            {
              name: "Vera Flores",
              title: "Ambassador of SICP in Europe",
              image: vera,
              quote:
                "If we don't help who will?. Let's help one another while we can, After all it's the only thing that will be instilled in the soul and last a lifetime.",
            },
            {
              name: "Mag Li",
              title: "Ambassador of SICP in Asia",
              image: mag,
              quote:
                "Let's strive for a change, change the world to a better place by eradicating poverty for once and for all.",
            },
            {
              name: "MARTHA Nzeyimana",
              title: "SICP Chief Representative of Volunteers",
              image: martha,
              quote:
                "When we speak as one, giant organizations and our political leaders listen. You and SICP can make sure that the voices of the world’s poorest people are heard loud and clear. Together we can end the injustice of poverty. Changing the world starts here.",
            },
            

          ]
        
          
          .map((member, index) => (
            <section
              key={index}
              className="bg-gradient-to-r from-gray-400 rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <div className="h-96 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <h2 className="text-xl font-bold text-center text-yellow-900">{member.name}</h2>
                <p className="text-sm text-gray-600 text-center mt-1 mb-2 font-bold">
                  {member.title}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed text-center">
                  {member.quote}
                </p>
              </div>
            </section>
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Leadership
