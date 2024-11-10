
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import train from "../assets/women/train.jpg";
import girl from "../assets/women/girl.jpeg";
import plant from "../assets/women/plant.jpg";
import reap from "../assets/women/reap.jpg";
import teach from "../assets/women/teach.jpg";


function Youth() {
  return (
    <div className="what-we-do">
      <Navbar />


      <header
        className="hero bg-cover bg-center h-96  flex items-center justify-center  brightness-90"
        style={{
          backgroundImage: "url('https://www.dbsa.org/sites/default/files/media/images/2022-06/Ways%20To%20Empower%20Our%20Youth%20to%20Ensure%20Africa%27s%20Ongoing%20Development.jpg')",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center sm:items-start text-center sm:text-left bg-black bg-opacity-50 text-white p-10">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold w-full sm:w-2/4 mb-2 sm:mb-6">
          
          EDUCATION CAN CHANGE CHILDREN & YOUTH' FUTURE
          </h1>                
          <p className="text-lg sm:text-xl font-light text-yellow-600 w-full sm:w-2/4 mb-6">
           <i>To bridge the global and societal learning gap is crucial as everyone 
             Deserves the right to learn. SICP Charity is invested in this cause for school dropouts 
             for their shot to learn again. </i>
          </p>
        </div>             
        
      </header>

      <span 
      
      className="block w-11/12 sm:w-2/3 mx-auto bg-secondary text-center text-gray-700 leading-relaxed p-4 sm:pt-20 text-sm ">
      
      <h2 className="text-2xl font-bold mb-3 text-red-800">
           « SICP Ground »
      <br/></h2>
      <hr></hr>
      <i>We train vulnerable peoples from various backgrounds on how to embark on
        decent works that generate reliable incomes. We educate on social and
        environmental studies in order to foster peace, unity and sustainable
        development amongst our communities. We also support poor families
        through guidance provision on how to better care for their children from
        their infancy stage to their adulthood for their bright future. We
        provide spiritual guidance to our communities in terms of giving essence
        to the universe and its creator, in this regard we cultivate peace and
        love and obedience that give a life a true meaning and purpose amongst
        our community's members as well as the youngsters. Moreover we do the fundraising
        to give a hand of support the people in need.</i>
      </span>
  
      
      <main
        data-aos="zoom-in"
        className="container mx-auto py-16 px-4 flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10"
      >
     
        <section className="w-full max-w-4xl p-8 font-light bg-gradient-to-r from-gray-400 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-3 text-red-800">
        <hr></hr>
          <i> « Our Youth Future in The Lens of SICP » </i>
          </h2>
          <hr></hr>
          <i>Our concrete measures include supporting children's education, vocational training
           for school dropouts, and social & developmental projects for widows and the marginalized.
            We primarily work in sub-Saharan countries, with a focus on Rwanda.</i>
            <br/>
          <br/>
          <img

            className="w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            src={train}
            alt="Picture Train" />
          <h2 className="text-1xl font-bold text-center mb-6 mt-5 text-yellow-800">
            We Train Youth
          </h2>
          <hr></hr>
          <p className="leading-relaxed text-center  max-w-2xl mx-auto text-sm">
          For millions of unemployed yet tech-savvy youth across Africa,
             increased connectivity is bringing tremendous opportunities.
              By tapping into the continent’s growing digital revolution,
               young entrepreneurs are using information and communications
                technology (ICT) to boost their own prospects. 
          <br/>
          <br/>
                “ICT brings
                 tremendous opportunity” to Africa’s youth, argues Ahmed Alfi,
                  chief executive officer of Sawari Ventures, a venture capital
                   firm in Egypt that focuses on new technology. 
                   <br/>
          <br/>
          <hr></hr>
                   “With 
                   software development, there’s nowhere else you’ll start with 
                   a thousand dollars and end with a million. It’s one of the few
                    times in history those types of returns are available,” he told 
                    Africa Renewal. 

            
           

            <br/><br/>

           
                <h2 className="text-2xl font-bold mb-3 text-red-800">
                  How Does SICP Do iT?
                </h2>

                <hr></hr>
                
                  <p>
                  <h3 className="font-bold text-yellow-800">
                 Let's Find Out..
                  </h3>
                 <br/>
                 <br/>
                 <img
            className="w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            src={teach}
            alt="Picture Teach" />
            <br/>
            <hr></hr>
            By quoting the importance of modern technology, SICP is invested 
                    in helping youth to attend the ICT short courses for the dropout Sprouts
                    so that in tomorrow world they will be stepping in the footprints of Mark Zuckerberg 
                    by living a billionaire lifestyle.

                    <br/>
                    <br/>

                    Moreover we assist many of our youth to attend vocational school in various
                    programs like road construction, hotel management, Nursing Assistance, Tailoring, and
                    Fashion Design and so on as we take into account 
                    the global labour market trend today.
                

                  </p>
                  

          </p>
           
          
        </section>
        
        <div className="lg:w-1/3 w-full font-extralight">
        
        <hr></hr>
        <h3 className="font-bold text-red-800 ">
        <i>« Our Ways With Youth »</i>
        </h3>
        <br/>
            <img
              className="w-full h-64 lg:h-auto object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              src={reap}
              alt="Picture Reap"
            />
            <br/>
            <hr></hr>
            <h3 className="font-bold text-red-800">
                    Our Youth Initiatives Harvest
                  </h3>
                  <br/>
                  <p>
                    <i>
                  So far We have trained more than 50 students after two years and helped
              them to get jobs successfully. We have been highly successful in
              bringing education and vocational training to students living in
              rural areas. It is also a wonderful opportunity for school dropouts to enroll in
              career-based training. The majority of the beneficiaries are
              marginalized in the communities who otherwise struggle to find
              daily labor. Programs such as Nursing Assistance, Tailoring, and
              Fashion Design and ICT are popular. More than 30 trainees have received
              job offers with a salary of $100 to $200 per month.
            </i>           
            <br/> <br/> 
                  </p>              
                     <hr></hr>
                       <h3 className="font-bold text-red-800">
              Empowering Youth For A Bright Future: Every Effort Counts
            </h3>
            <br/>
                  <p>
                       <i>              
                       Our aim is to develop capable, job-ready graduates by offering several
                       practical programs in technology and community service. We aim for
                       a big number of graduating students from the Vocational Training
                       Program in the future to find jobs earning as much as $300.00 per
                       month. This will be excellent for our people as starting a job is
                       a closer step out of poverty. So far, women have benefited greatly
                       from finding jobs as nursing assistants and tailors. 60% of our
                       candidates are successful in getting placements in cooperatives
                       throughout the country.
                      </i>
                     </p>
                     <br/>                        
                 <br/>
                     <img
              className="w-full h-64 lg:h-auto object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              src={girl}
              alt="Picture girl"
            />
            
            <br/> 
            <hr></hr>
            <h3 className="font-bold text-red-800 ">
        <i>Fostering Jobs Creation For Poverty Reduction</i>
        </h3>
        <br/>
            <hr></hr> 



{/* Button positioned below the text */}
<Link to="/Donation">
              <button className="bg-gradient-to-r from-red-800 to-secondary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-300">
                Donate Now
              </button>
            </Link>

                <hr></hr>  




          </div>    
       
      
      </main>

      <span 
      
      className="block w-11/12 sm:w-2/3 font-extralight mx-auto text-center text-gray-700 leading-relaxed p-4 sm:pt-20 text-sm ">
      
      <h2 className="text-2xl font-bold mb-3 text-red-800">
        How Do We Think?
      <br/></h2>
      <hr></hr>

      <hr></hr>
                        
                        <h3 className="font-bold text-yellow-800">
                            Charity is a continuous process toward success and joyful
                    life
                        </h3>

                        <br/>
                     <img
              className="w-full h-64 lg:h-auto object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              src={plant}
              alt="Picture Plant"
            />       

<hr></hr>
<br/>
<p>
                    SICP Charity serves as a lifeline to those living at the
                    fringes of society, encouraging and developing them. We are
                    actively serving a population often forgotten and oppressed.
                    Young generation are the best leaders of the Tomorrow World. Their greatness and good 
                    leasdership is cultivated today from the good educatiom they get now.
                     With your generosity
                    and kindness, we can continue to shape their bright future and the best world of tomorrow.
                  </p>
                  <br/>
                  <hr></hr>
                  <p>
                    Our concrete measures include supporting children's
                    education, vocational training for school dropouts, and
                    social & developmental projects for Youth and the
                    marginalized. We primarily work in sub-Saharan countries,
                    with a focus on Rwanda.
                  </p>         

      </span>

      <Footer />
    </div>
  );
}

export default Youth;


