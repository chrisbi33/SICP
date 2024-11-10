import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer';

const Second = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-2xl font-bold text-center text-primary mb-12 leading-tight w-2/2">
           

          <small>
          <tr bgcolor="grey" align="center">
          <td>From 3:00 PM to 5:00 PM Kigali Time</td>
          </tr>
            
          <br/> <i>We Will Have a Monthly Session on:</i></small>
          <br/><br/>

          « Cooperatives in Pandemics, Food Security, War Conflict and Climate
          Issues in Africa »
        </h1>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <p className="text-1xl text-gray-700 leading-relaxed mb-6">
            Cooperatives have an important role in increasing community
            resilience to climate change, wars, conflicts, and pandemics.
            According to the seventh principle of cooperatives, "Concern for
            Community," cooperatives should have concern for not just their
            shareholders but in addition the community around them during times
            of crisis. The latest exceptional global issues, including as the
            COVID-19 pandemic, the Ukraine-Russia war, international conflicts,
            environmental destruction, and the energy and food collapse, have
            had a negative impact on society and necessitate ongoing joint
            responses.
          </p>

          <p className="text-1xl text-gray-700 leading-relaxed mb-6">
            African cooperatives have helped to facilitate climate change
            adaptation and mitigation by supporting, among other things, the
            Kyoto Protocol and the Paris Agreement on greenhouse gas reductions
            (ICA, 2023). Cooperatives are more connected to people's needs and
            have systems and processes in place that can identify climate change
            victims and provide targeted adaptation and mitigation strategies.
            The cooperative movement engages its members and prospective members
            in sustainable resource management and the selection of suitable
            projects.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h2 className="text-1xl font-semibold text-primary mb-6">
            Cooperatives in Pandemics
          </h2>
          <p className="text-1xl text-gray-700 leading-relaxed mb-6">
            Concerning pandemics, the cooperative movement promotes the creation
            of robust measures to mitigate the disastrous impacts of pandemics.
            Several countries implemented stringent steps to combat the spread
            of COVID-19, particularly during the period when it was most
            prevalent. These initiatives had varying effects on people's
            livelihoods and different sectors of the African economy. Among
            other things, the effects included lower demand and supply of goods
            and services, higher adoption of internet-based services, less
            productivity in agriculture, higher levels of food insecurity, and
            the shutdown of businesses. Notwithstanding these consequences,
            numerous cooperatives continued to operate while offering
            humanitarian assistance to their members and nearby populations
            (ICA, 2023).
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-1xl font-semibold text-primary mb-6">
            Cooperatives in Conflict and Food Security
          </h2>
          <p className="text-1xl text-gray-700 leading-relaxed mb-6">
            Certain African countries are still experiencing instability as a
            result of conflicts and wars. These wars have resulted in the
            collapse or reduction of corporate activities, displacement, low
            social cohesiveness, inadequate leadership structures and
            procedures, widespread poverty, joblessness, and inequality, all of
            which contribute to unrest and destabilization. Governments and
            cooperative movements in war-torn nations have since shifted their
            focus to mediation and reconciliation (ICA, 2023).
          </p>

          <p className="text-1xl text-gray-700 leading-relaxed mb-6">
            In this context, the African cooperative movement as a social and
            commercial model focuses on reducing risk for marginalised and
            disadvantaged populations by facilitating social protection efforts
            and identifying reliable and appropriate business prospects.
            Furthermore, they seek to bring back peace in conflict zones.
          </p>

          <p className="text-1xl text-gray-700 leading-relaxed">
            Another major issue confronting most African countries is food
            insecurity. There are several cooperatives in Africa, particularly
            agricultural ones that seek to promote food security for not only
            their members but additionally those nearby (ICA, 2023). More
            importantly, the African continent is packed with resources that
            have never been used to their full potential including fertile and
            virgin lands, water, and human resources for which cooperatives can
            utilize to make difference in food security issues on the continent.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Second
