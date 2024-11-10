import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Children = () => {
  return (
    <div className="min-h-screen ">
    <Navbar />
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-2xl font-bold text-center text-primary mb-12 leading-tight">
      <small>
          <tr bgcolor="lightgrey" align="center">
          <td>From 10:00 AM to 3:00 PM Kigali Time</td>
          </tr>
            
          <br/> We Will Visit Vulnerable Widows and Children

:</small>
          <br/><br/>            
          « The Visiting Will Take Place in homes of one of our community' families »     
                 
      </h1>

      <div className="bg-gradient-to-r from-gray-400 rounded-lg shadow-xl p-8">
        <p className="text-1xl  leading-relaxed mb-6">
          We plan to visit and assist widows and children in need of support.
          
        </p>

        <h2 className="text-2xl font-semibold text-red-800 mb-4">
          Our Planned Activities:
        </h2>

        <ul className="list-disc list-inside text-1xl text-balance leading-relaxed mb-6 space-y-2">
          <li>
            Provision of essential school materials such as Books, Pens, Pads, Cream, clothes and Shoes etc.. to children.
          </li>
          <li>
          Entertain children and play with them to make them feel happy again
          </li>
          <li>
            Offer words of encouragement and hope to boost morale and reduce
            feelings of loneliness to the widows
          </li>
          <li>
            Provision of food stock to make them feel loved
          </li>
          <li>
            Help them pay the Health insurance
          </li>
          <li>
            Advocate them on the possible solution that can help them be financially stable 
            in near future
          </li>
        </ul>

        <p className="text-1xl  leading-relaxed italic">
          Through these acts of kindness, we aim to make a positive impact on
          the lives of children from poor families, showing them that they are not
          forgotten and that their community cares about their well-being.
        </p>
      </div>
    </div>
    <Footer />
  </div>
);
};

export default Children;
