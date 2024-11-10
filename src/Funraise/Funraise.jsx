

import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import sub from "../assets/women/sub.mp4";
import pic41 from "../assets/women/pic41.jpg";
import impact from "../assets/women/impact.jpg";
import pic56 from "../assets/women/pic56.webp";
import visitRwanda from "../assets/women/visitRwanda.png";
const Funraise = () => {
 

  return (
    <div className="min-h-screen">
      <Navbar />
      <header
        className="hero bg-cover bg-center bg-black bg-opacity-50 h-96 flex items-center justify-center text-center "
        style={{
          backgroundImage:
            "url(https://www.zuehlke.com/sites/default/files/images/shared-essential-services-knowledge-base-of-vulnerable-customers.jpg)",
        }}
      >
        <h1 className="text-6xl font-extrabold  text-yellow-900 relative  mb-6 leading-tight">Our Impact</h1>
      </header>

      

      <div className="flex flex-wrap justify-center p-4 mt-10" style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    }}>
        <div className="w-full md:w-1/2 lg:w-1/2 p-4  bg-gradient-to-r from-gray-400">
          <div className="max-w-2xl mx-auto p-4 left-side ">
            <span className="text-sm text-gray-700 font-light">
              
            <h2 className="text-2xl font-bold mb-3 text-red-800">How Far Are WE Now?

            <a>                      
            <img     
              src="https://image.savethechildren.org/upwards-arrow.svg-ch11041234.svg/aa75ivm2wpby06o5kru04x83h3a5fng5.svg"         
              className=" w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-sm xl:max-w-sm h-auto"
              alt=""          
               />             
             </a>
            </h2>
             <hr></hr>
              Our organizations had emitted positive effects to our community, and
              many of our people have enriched their critical thinking after following
              our teachings of social and environment studies. In addition many of our
              community are now self-employed. Depression and loneliness is a
              tale in the lives of many of our community todays and
              self-confidence is prevalent. In the similar vein Reconciliation
              is a living testimony as our people are working together in peace
              and unity through charity and other activities of our
              organization programs. Moreover a reasonable number of children are being
              cared for in the proper way and their bright future is rest assured.
              Lastly but not the least our impact outreached to at
              least 500 lives so far and played a significant part in improving their living standards.
            </span>
            <br/><br/>
            <table bgcolor="black" class=" font-serif" width="400">
            <tr bgcolor="grey">
              
              <th width="100">Achievements</th>
              <th width="100">Rate</th>
              </tr>

              
              <tr bgcolor="lightgrey" align="center">
              <td><i>Children Education Supported</i></td>
              <td>260</td>
              </tr>

              <tr bgcolor="lightgrey" align="center">
              <td><i>Empowered Women</i></td>
              <td>130</td>
              </tr>


              <tr bgcolor="lightgrey" align="center">
              <td><i>Others supported (patients, refugees, elders etc.)</i></td>
              <td>92</td>
              </tr>


              <tr bgcolor="lightgrey" align="center">
              <td><i>Approached Associations</i></td>
              <td>18</td>
              </tr>
              
              </table>  

              <br/><br/>
              <h2 className="text-xl font-semibold mb-3 place-items-center text-center text-yellow-800">Our Response to the Sub-saharan Hunger and Poverty Crisis          
              </h2>
             <br/>
             <hr></hr> <p class="font-light">
             Through working with local communities and governments, our response to sub-saharan extreme poverty and hunger is tackling acute and chronic food security needs. 
             </p>
             
         <div className="relative mt-10">
        <div className="w-4/5 h-1/2 overflow-hidden">
          <video
            controls="controls" preload="none" onclick="this.play()"
            autoPlay
            Unmuted
            loop
            className="w-full h-[200px] sm:h-[250px] object-cover  brightness-100"
          >
            <source
              src={sub}
              type="video/mp4"
            />
          </video>
        </div>
        </div>

          </div>
         </div>
          


        
        <div className="w-full md:w-1/2 lg:w-1/2 p-4 font-extralight">

        <h3 className="text-xl  mb-2 text-orange-700"> Our Core Accomplishments</h3>
        <hr/><hr/><br/><br/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-gray-400 p-6 rounded-lg shadow-md">                             
               
        <i>144 children + 116 teenagers and their families were supported to boost their 
          livelihoods in various ways with focus to those affected by disasters and poverty</i><br/> <hr/><br/>
        <img
              src="https://image.savethechildren.org/boy-girl.svg-ch11043637.svg/nb1a606wo3inr208173h01v58jrur1eh.svg"
              className="w-14 h-15 rounded-lg ml-10 p"
              alt="Description" 
            />  <br/><hr/>
            SICP Charity        
                
              </div>

              <div className="bg-gradient-to-r from-gray-400 p-6 rounded-lg shadow-md">
              <i>95 Widows and old women in our communities were supported through 
                culturally appropriate social behavior change initiatives and have been empowered</i><br/><hr/><br/>
        <img
              src="https://image.savethechildren.org/girl-parent.svg-ch11043339.svg/yu32ap2qm0oe28tfx8j544xdn740d6dq.svg"
              className="w-14 h-15 rounded-lg ml-10 p"
              alt="Description" 
            />  <br/><hr/>
           SICP Charity   
              </div>
              <div className="bg-gradient-to-r from-gray-400 p-6 rounded-lg shadow-md">
              <i>35 pregnant and lactating women were counselled on infant and young child feeding 
                and some of them were introduced to the livestock as a source of income </i><br/> <hr/><br/>
        <img
              src="https://image.savethechildren.org/breastfeeding.svg-ch11043645.svg/s85x022n52o5hj1t6d4ucmg0foerkkj5.svg"
              className="w-14 h-15 rounded-lg ml-10 p"
              alt="Description" 
            /> <br/> <hr/>
           SICP Charity    
              </div>
          
                <div className="bg-gradient-to-r from-gray-400 p-6 rounded-lg shadow-md">
              <i>69 Patients in hospitals were supported and gained healthcare insurence, and given
                 cash and voucher assistance for hospital bills and services</i> <hr/><br/>
        <img
              src="https://static.thenounproject.com/png/1524820-200.png"
              className="w-14 h-15 rounded-lg ml-10 p"
              alt="Description" 
            />  <hr/>
            SICP Charity                 
              </div>                  
                   
              <div className="bg-gradient-to-r from-gray-400 p-6 rounded-lg shadow-md">
              <i>18 Cooperatives and organizations were introduced to our community members as a possible 
                source of income diversification and jobs opportunities.</i><br/> <hr/><br/>
        <img
              src="https://image.savethechildren.org/hand-shake.svg-ch11043008.svg/2v77k468b121706gi80750083gd0a5ta.svg"
              className="w-14 h-15 rounded-lg ml-10 p"
              alt="Description" 
            />  <br/><hr/>
            SICP Charity    
              </div>
              <div className="bg-gradient-to-r from-gray-400 p-6 rounded-lg shadow-md">
              <i>23 Refugees were supported with cash and voucher assistance plus other essential servives. In additionthey received
                Counselling.</i><br/> <hr/><br/>
        <img
              src="https://cdn.iconscout.com/icon/premium/png-128-thumb/refugees-1541329-1308072.png?f=webp"
              className="w-14 h-15 rounded-lg ml-10 p"
              alt="Description" 
            />  <hr/>
            SICP Charity                   
              </div>        
            </div>


          <div className="impact flex flex-col items-center my-4 right-side">
            <img
              src={impact}
              className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto"
              alt="Impact Image"              
            />
         <br/>        
         
                     
          </div>
        </div>
       
      </div>			
     <div  style={{
      backgroundImage:
        "url('https://media.gettyimages.com/id/1179729978/vector/rwanda-map-connection-network-mesh-on-white-background.jpg?s=612x612&w=0&k=20&c=MZk0rCtsGM7Jh1FLnEVLrf8k48Pfy_YRLcGj4ge5xZ4=')",
    }}>
        <div className="w-full md:w-1/2 lg:w-1/2 p-4" >
          <div className=" max-w-2xl mx-auto p-4 text-center bg-gradient-to-r from-gray-500">
            <span className="text-sm text-gray-900 font-extralight ">
           
            <h2 className="text-2xl font-bold mb-3 text-red-800">We Are For  <a target="_blank" href="https://www.visitrwanda.com/">« Visit Rwanda » </a>        
              </h2>
             
             <hr></hr> 
          Rwanda is an excellent hub for meetings and events, with world-class facilities 
            such as the Kigali Convention Centre which is conveniently located close to 
            Kigali International Airport and offers a premium environment for regional and
             international conventions, exhibitions, festivals, meetings and other events. 
             SICP Charity is on front of promoting the Rwandan natural beauty with millions 
             of peoples across the globe, falling into the footprints of some of the global
              giant brands in sport and tourism. Although far beyond that we are also here 
              to beautify the well being of its people.

              <div className="impact flex flex-col items-center my-4 right-side">
              <p>
             

           <a target="_blank" href="https://visitrwanda.com/">                      
      <img     
              src={visitRwanda}          
              className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-sm xl:max-w-sm h-auto"
              alt="Picture visitrwanda"          
               />             
             </a>
           </p>
                     
      <div>    
   <     p><img decoding="async" src="https://visitrwanda.com/779.jpeg" 
   className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-sm xl:max-w-sm h-auto"
                       
           alt="" /></p>
      </div><br/>
      </div>

            </span>                 
          </div> 
        </div>
      </div>           
       <br/>
       <br/>
       <h2 className="text-3xl font-semibold mb-3 place-items-center text-center text-yellow-800">
        Together, We Can 
        Break the Cycle of Poverty and Feed Children’s Futures          
              </h2>
             <br/><br/>
             <p className=" text-center font-extralight text-xl mb-10 max-w-[600px] mx-auto -mt-8"> 
             <hr></hr> 
             Many families live trapped in a cycle of extreme poverty. 
             Undernourished mothers are more likely to have undernourished children, 
             the effects of which are devastating. But when families and children eat well,
              they are better equipped to pull themselves out of the cycle of poverty.
             </p>
       <div className="relative mt-10">
        <div className="w-full h-screen overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="w-full h-[500px] sm:h-[550px] object-cover  brightness-50"
          >
            <source
              src="https://videos.ctfassets.net/wvozpes63uc8/3LyhCLp2YLQ02HnzHp5IPw/b98b99451d4472709662737809306735/home-cycle-video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-white mb-20" 
       >
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-20 ">
              We Have Organized More Than 50 Events Every Year
            </h1>
            <Link to="/Event">
              <button className="bg-gradient-to-r from-red-800 to-secondary hover:scale-105 duration-200 text-white py-4 px-10  ">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      
      <div className="text-center" 
      style={{
      backgroundImage:
        "url('https://img.freepik.com/free-vector/geometric-background-vector-white-cube-patterns_53876-126683.jpg')",
    }}>
            <h1 className="text-3xl font-semibold mb-20 text-red-800">
              <hr/><hr/><br/>
            « Discover our latest Initiatives »
            </h1>
            
            <button className="bg-gradient-to-r from-gray-500 text-gray-800 py-2 px-8  hover:bg-primary-dark transition-colors duration-300 ">
          <p className=" text-center font-extralight text-xl mb-10 max-w-[600px] mx-auto -mt-8"> 
          <br/><br/><hr></hr>
            Welcome to our community of kindness and compassion.
             We believe in the power of collective action to change lives.
              Each donation, big or small, is a beacon of hope for those in need.
               Join us as we strive to make the world a better place,
                one act of generosity at a time.<hr></hr></p>
                </button>

                </div>
                


      
       <br/>
       <br/>
       <hr></hr> 

      
      <main
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/83/a6/8e/83a68ede151a440ec4e433ca578daaa3.jpg')",
      }}
        data-aos="zoom-in"
        className="container mx-auto py-16 px-4 flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10"
      >
        <section className="w-full max-w-4xl p-8 bg-gradient-to-r from-gray-500 shadow-lg">
          <img
            className="w-full h-90 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            src={pic56}
            alt="Picture 56"
          />
      

      <br/>
      <h2 className="w-full lg text-xl font-bold text-red-800 text-center"><i>Sports and Counselling</i></h2>
          <br/>
          <hr></hr>
          <p className="text-gray-800 font-extralight leading-relaxed text-center max-w-2xl mx-auto">
            <i>The sports and other trainings activities designated to our children
            had made them leave their depressing inner world and loneliness to
            embark in the world full of inner peace, laughter, genuine smile and
            hope of life in our community.</i>

            <a  href="/Service"> 
                    
                    <h2 className="text-xl font-bold mb-3 text-yellow-800">
                      
                    <hr></hr>
                  « Read More »
                  </h2>
                    </a>
          </p>
        </section>

        <section className="w-full max-w-4xl p-8 bg-gradient-to-r from-gray-400  shadow-lg">
          <img
            className="w-full h-90 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            src="https://st.depositphotos.com/1049680/55505/i/450/depositphotos_555055588-stock-photo-young-african-american-woman-wearing.jpg"
            alt="Picture 29"
          />
          <br/>
          <h2 className="w-full lg text-xl font-bold text-red-800 text-center">
            <i>Charity and Teaching Activities</i>
          </h2>
          <br/>
          
          <hr></hr>
          <p className="text-gray-700 font-extralight leading-relaxed text-center max-w-2xl mx-auto">
          <i> Through charity activities, teaching and different trainings, the
            spirit of reconciliation had taken off amongst our community</i>

            <a  href="/Women"> 
                    
                    <h2 className="text-xl font-bold mb-3 text-yellow-800">
                      <br/> <br/><br/>
                    <hr></hr>
                  « Read More »
                  </h2>
                    </a>
          </p>
        </section>

        <section className="w-full max-w-4xl p-8 bg-gradient-to-r from-gray-400  shadow-lg">
          <img
            className="w-full h-90 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            src={pic41}
            alt="Picture 41"
          />
          <br/>
          <h2 className="w-full lg text-xl font-bold text-red-800 text-center"><i>Social Activities</i></h2>
          <br/>
          <hr></hr>
          <p className="text-gray-700 font-extralight leading-relaxed text-center max-w-2xl mx-auto ">
            <i>Through trainings, social and environmental studies, our youth today
            help elderly and some institution to protect environment and
            contribute in other various social works in the region.</i>

            <a  href="/Youth"> 
                    
                    <h2 className="text-xl font-bold mb-3 text-yellow-800">
                      <br/><br/>
                    <hr></hr>
                  « Read More »
                  </h2>
                    </a>
          </p>

           </section>

        </main>

      <Footer />
    </div>
  );
};

export default Funraise;

