import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
const New = () => {
  return (
    <div className="min-h-screen ">
    <Navbar />
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-2xl font-bold text-center text-primary mb-12 leading-tight">
        
        <small>
          <tr bgcolor="grey" align="center">
          <td>From 9:00 AM to 3:30 PM Kigali Time</td>
          </tr>
            
          </small>
          <br/><br/>
          « Visiting Unaccompanied Patients at Hospitals »        
      </h1>

      <div className="bg-gradient-to-r from-gray-400 rounded-lg shadow-xl p-8">
        <p className="text-1xl  leading-relaxed mb-6">
         <i>We plan to visit and assist the unaccompanied patients at MUHIMA
          Hospital. Our mission is to provide comfort, care, and support to
          those who may be feeling lonely or isolated during their hospital
          stay.</i>
        </p>

        <h2 className="text-2xl font-semibold text-red-800 mb-4">
          Our Planned Activities:
        </h2>

        <ul className="list-disc list-inside text-1xl leading-relaxed mb-6 space-y-2">
          <li>
            Help patients with personal care, including assisting with showers
            and changing into clean clothes
          </li>
          <li>
            Offer words of encouragement and hope to boost morale and reduce
            feelings of loneliness
          </li>
          <li>
            Provide nutritious meals and snacks to support patients' recovery
          </li>
          <li>
            Offer financial assistance for medications to patients struggling
            with hospital bills
          </li>
        </ul>

        <p className="text-1xl leading-relaxed italic">
          Through these acts of kindness, we aim to make a positive impact on
          the lives of unaccompanied patients, showing them that they are not
          forgotten and that their community cares about their well-being.
        </p>
      </div>
    </div>
    <Footer />
  </div>
);
};

export default New;
