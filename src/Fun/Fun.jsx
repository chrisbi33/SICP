import React from "react";
import Navbar from "../components/Navbar/Navbar";
import coins from "../assets/women/coins.jpg";
import hands from "../assets/women/hands.jpg";
import Footer from "../components/Footer/Footer";

const Fun = () => {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <header
        className="hero bg-cover bg-center  h-96 flex items-center justify-center text-center "
        style={{
          backgroundImage:
            "url('https://4agoodcause.com/wp-content/uploads/2016/10/coins-jar-thumb.jpg')",
        }}
      >
        <h1 className="text-6xl font-extrabold text-white">Fundraising</h1>     
          
      </header>
        <div className="container mx-auto py-12 px-4 mt-10 font-extralight ">
          <section className="ml-0 md:ml-20">         

            <div className="flex flex-col md:flex-row">             
              <div className="md:w-full w-full p-4 md:p-8 mt-6 md:mt-0 md:ml-8">                       

                <h2 className="text-2xl font-bold mb-3 text-red-800">
                  How We Do It?
                </h2>
                <div className="space-y-4 text-gray-600">

                  <hr></hr>
                  <br/>
                <h3 className="font-bold">
                Community Fundraising or local fundraising
                  </h3>

                <p>
                                    
                Through community fundraising work in the local community. 
                We entice a group of volunteers or arrange fundraising events
                 within a certain area by securing funding and by building positive
                relationships with the local community. During this work we usually
                work with a smaller group of individuals, companies or sometimes
                with local government. In this respect we are able to collect 
                donations, and same time support locals to hold events such as 
                bake sales, quizzes and sponsored challenges. 
                 </p>
                 <hr></hr>
                
                 <h3 className="font-bold">
                 Corporate Fundraising
                  </h3>
                  <p>
                In this way of fundraising we partner with businesses and other NGOs
                 to raise money. In this respect we create cooperation between a 
                 for-profit business and a charity program of ours SICP and as longer
                we nurture mutually beneficial relationships, it is the longer our SICP
                charity program gains income and the company associated with our charity
                 as result gain skills or advice. 
                 </p>
                 <hr></hr>
                 
                 <h3 className="font-bold">
                Direct Fundraising & Individual Giving Fundraising
                 </h3>

                <p>
               Through this way, the fundraising is directly and our SICP practice 
               is similar to direct marketing as it’s linked with specific appeals.
                We do this sometimes using the mail, or via telemarketing, but more
                 frequently we use email and social. Sometimes we do it from door 
                 to door or at street level with our volunteers. 
                </p>         
                              
                <hr></hr>
                
                <h3 className="font-bold">
                Events Fundraising or Challenge Events 
                 </h3>
               <p>
               Events are an important part of our SICP charity’s calendar and are 
               our great way to raise money. Normally we organize event for supporters
                to take part in pre-arranged events (such as Youth Entertainment and 
                Talents Shows or other types of fetes) and generate income via 
                sponsorship, admittance to or services provided there. In addition
                 these events help us not generate income only but also do publicity
                  and awareness for the SICP charity and its cause.
                </p>
                <hr></hr>
                

                <h3 className="font-bold">
              Major Donor Fundraising
              </h3>

              <p>

             This involves us tying nots with a small number of high-net-worth 
             individuals who can make large donations forms the bulk of a charity’s 
             funding. In this respect we create a lasting relationship with people
              who could be a source of these large donations to secure lasting income. 
               </p>
              <hr></hr>
                

               <h3 className="font-bold">
           Trusts (and foundations) Fundraising or Grants 
           </h3>

           <p>
            Trusts and foundations are legal entities set up by a group,
             company or individual who wishes to set aside money specifically 
             for charitable giving. We SICP seek to obtain income from these 
             funds through the process of a formally written application in order
              to support our main cause of helping children and women as well as
               other peoples who are in vulnerable conditions and needing our help.

                  </p>
                 
                  
                <h2 className="text-2xl font-bold mb-3 text-red-800">
                  What We Do With The Fund?
                </h2>
                <hr></hr>
                  <p>
                   After securing funds from fundraising we build income generating projects for
                    and provide guidance to poor families on how to better care for their children 
                   from infancy to adulthood, ensuring a bright future. Our spiritual guidance 
                   throughout the whole process cultivates peace,
                    love, and obedience, giving life true meaning and purpose.
                  </p>
                  <br/>
                  <a  href="/Donation">
                  <img
            className="w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            src={coins}
            alt="Picture coins"
            />
            </a>
                  <p>
                    Through fundraising, we support those in need, including
                    patients, widows, refugees, and other vulnerable groups. We
                    use social media to highlight their plight and direct our
                    efforts toward relieving poverty, especially for children
                    and women.
                  </p>
                  <p>
                    <hr></hr>
                    Our concrete measures include supporting children's
                    education, vocational training for school dropouts, and
                    social & developmental projects for widows and the
                    marginalized. We primarily work in sub-Saharan countries,
                    with a focus on Rwanda.
                  </p>
                </div>
              
 
              </div>
           <div>
           <h2 className="text-2xl font-bold mb-3 text-red-800">
           « Work With Us»
                </h2>
            <hr></hr>
           <i>We believe that by joining hands, we can eradicate poverty and end global
            suffering. We invite you to work with us in this noble cause.</i>
            <br/>
            <br/>
            <a  href="/Donation">
              <img

            className="w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            src={hands}
            alt="Picture hands"      
            />

<br/><br/>
            </a>
            <br/>
            <a  href="/Compaign"> 
                    
                    <h2 className="text-xl font-bold mb-3 text-primary">
                      
                    <hr></hr>
                  « Read More »
                  </h2>
                    </a>

          </div>
        
            </div>
                     
          </section>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Fun;
