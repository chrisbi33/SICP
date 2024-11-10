

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import playkid from "../assets/women/playkid.webp";
import momson from "../assets/women/momson.webp";
import happyfamily from "../assets/women/happyfamily.webp";
import momhappy from "../assets/women/momhappy.jpg";
import talkkid from "../assets/women/talkkid.webp";
import sub from "../assets/women/sub.mp4";
function Service() {
  return (
    <div className="what-we-do">
      <Navbar />


      <header

       className="hero bg-cover bg-center h-96  flex items-center justify-center  brightness-90"
       
       
        style={{
          backgroundImage: "url('https://i0.wp.com/privateprep.com/wp-content/uploads/2021/05/tenderness-3-5-years-old-writes-student-african-american-schoolgirl-lesson-caucasian-studying-study_t20_ZYbXgn.jpg?ssl=1')",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center sm:items-start text-center sm:text-left bg-black bg-opacity-50 text-white p-10">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold w-full sm:w-2/4 mb-4 sm:mb-8">
        
          All children Deserve a better Start in life
         
          </h1>          
          <p className="text-lg sm:text-2xl font-light text-yellow-600 w-full sm:w-2/4 mb-6">
           <i> Hunger is the greatest threat to children today.  But Together,
           We can help children fight for their childhoods and feed their futures. </i>
          </p>
        </div>             
                     
        
      </header>

      <span 
      
      className=" block w-11/12 sm:w-2/3 mx-auto text-center bg-secondary text-gray-700 leading-relaxed p-4 sm:pt-20 text-sm ">
      
      <h2 className="text-2xl font-bold mb-3 text-red-800">
      « SICP Ground on Child Care »
      <br/></h2>
      <hr></hr>

      <i>Without enough to eat and the right nutritional balance, 
      children are at high risk of becoming acutely malnourished.
Up to 45 million children are facing acute malnutrition worldwide 
right now, with at least 13.7 million children severely acutely malnourished.
Around 80% of these children currently are not able to access 
the treatment they need to get better.

<br/><br/>
<div className="w-5/7 h-3/6 overflow-hidden text-align:center">
          <video
            controls="controls" preload="none" onclick="this.play()"
            autoPlay
            Unmuted
            loop
            className="w-full h-[300px] sm:h-[450px] object-cover  brightness-100"
          >
            <source
              src={sub}
              type="video/mp4"
            />
          </video>
        </div>
        <br/>

         Therefore through our children dedicated program we are striving to firstly eradicate
         poverty and get rid off hunger and malnutrition amongst the poor families, secondly we
         are prioritizing the good education and children and their families healthcare through 
         provision of health insurance. In addition we educate poor families
        through guidance provision amd Counselling on how to better care for their children from
        their infancy stage to their adulthood for their better tomorrow. We also
        provide spiritual guidance to our communities in terms of giving essence
        to the universe and its creator, in this regard we cultivate peace and
        love, harmony and obedience that shape characters for a househould or family in which 
        children belong to, as a way to
         foster a peaceful environnement for a child to be raised safely into
          and having a true purpose in life that predicate his/her bright future.</i>
      
      <br/>
      <br/>
          <img
            className="w-full h-96 object-cover  transition-transform duration-300 "
            src={happyfamily}
            alt="Picture happyfamily" />
      
      </span>

      <main
        data-aos="zoom-in"
        className="container mx-auto py-16 px-4 flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10"
      >
        <section className="w-full max-w-4xl font-light p-8 bg-gradient-to-r from-gray-400 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-3 text-red-800">
        <i>« Children food security Concerns »</i>
        </h2>
          <hr></hr>
          <p>As the climate crisis deepens, conflict escalates and the cost of living spirals
             out of control, children face the ever-growing threat of hunger. Moreover
            A wave of floods, drought, storms and wildfires driven by climate change is devastating
             crops and livelihoods, leaving children without enough to eat.
             <br/> <br/>
             <img
            className="w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            src="https://sc0.blr1.cdn.digitaloceanspaces.com/article/131013-vosbmhhzbn-1573828467.jpg"
            alt="cause" />
             
             <br/>
             <hr></hr>
             Today the globe counts for atleast           
            153 Million Children who Are Facing Food Insecurity,
          Hunger knows no borders, no boundaries and no limits.
        	Today, a rising wave of geopolitic conflict from Sudan to Gaza not 
          to mention Ukrain-Russia War is causing families to struggle to get the food they need
          to feed their children.
          The effects of these conflicts in addition to the devastation residues effects of COVID-19 had
          crippled almost all the economic backup of most households in sub-Saharan countries
          by putting in vulnerable conditions many children categorically like being homeless, 
          dropout of schools, facing hunger, becoming orphans and refugies and so on. 
          
          <br/><br/>
          <hr></hr>
          All these 
          issues are in
          one way or the other are connected to the food insecurity and malnutrition that are causing the 
          substantial increase in stunting rate both in urban and rural area of Africa today.
          This is because the Economic turmoil has driven up prices, creating a cost-of-living crisis
           across the world pushing the price of food beyond the reach of many families.

</p>
<br/><br/>
          
          
          <img
            className="w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            src={playkid}
            alt="Picture playkid" />
          <br/>
          <br/>
          <h2 className="text-xl mb-3 text-yellow-800">
            <i>What is the contribution of SICP in matters of Child Food Security?</i>
          </h2>
          <hr></hr>
          <p className=" leading-relaxed text-left max-w-2xl mx-auto text-sm">


          <i>As we takes into account how stunting rate has been rising lately in sub-saharan 
          countries including Rwanda, Through SICP work and programs, we are highly invested and
          eager to support as many children as we can especially children with hunger-related 
          interventions. This is because we believe that children are the best leaders of tomorrow
          and they need two important things to get the first class ticket for a promising tomorrow and those things are 
          food security and education. 
          <br/>We understand and we know well that:          
          <br/> 
          <hr></hr>
          Kids can't be hungry for knowledge if they are hungry for food. And I they are not 
          hungry for knowledge, the tomorrow social service and leadership is at risk.
           We understand that Hungry children are more likely to have lower math scores, repeat 
          a grade, come to school late, or miss school entirely.
          <br/> 
          <hr></hr>
          Without clean water, enough food or the right nutrition, children can’t learn, play, 
          or sleep. While they should be exploring with their friends, or expanding 
          their minds in class, instead too many are worrying about where their 
          next meal will come from, or if their younger sibling will recover from 
          malnutrition.
          <br/> <br/> 
          <hr></hr>
                  
       Therefore in SICP Charity is calling for your kind hand and heart to help us help these children
       to get the quality and quantiy of food they require to have a good performance in the 
       school as well as securing their scholarships. By joining hand with SICP in anyways Whether
       through volunteering or donation you are making a lasting impact in lives of many children
       who are in the vulnerable condition they did not invite, and you are opening the great doors
       to their bright future. So please help us in this noble cause to make a difference.</i>


            <br/>
            <br/>

{/* Button positioned below the text */}
<Link to="/Donation">
              <button className="bg-gradient-to-r from-red-800 to-secondary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-300">
                Donate Now
              </button>
            </Link>
            <br/>
            <br/>
          </p>

          <h2 className="text-2xl font-bold mb-3 text-red-800">
          <i>We foster Children Best Characters</i> </h2>
            <br/>
            <hr></hr>

         We reach out to Children through their Parents by training them on how 
         to raise their children in a good environment that foster their bright 
         future. For instance we teach them on how to set rules and limits for
          their children as a way to prepare them for the outside tough world.
          <br/>
          <br/>

          <img
              className="w-full h-64 lg:h-auto object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              src={momson}
              alt="Picture momson"/>
              <br/>
          <hr></hr>

            At first we make parents understand that they have to act as their 
            child’s parent not as their friend. The important capture here is 
            that we make them understand that they have to be authoritative sometimes toward their children,
             it doesn't matter if it’s a toddler who’s
             deliberately dumped their lunch on the floor or a baby who keeps running
              before bedtime,
               since always children seem to repeatedly challenge the boundaries we as parents
                set for them. It’s what kids do who are growing up and becoming 
                independent. So always as a parent, you have to invoke the parent energy toward children
                to keep them in line. 
                <br/><br/>
             <hr></hr>
                This is because many parents get discouraged about
                 establishing, and enforcing, family rules and boundaries, and 
                 even question if it’s really worth the all the hassle & effort.
             It’s tiring, exhausting and challenging raising kids but it’s also 
             one of the most important jobs parents can do in the world.
             Structure and rules not only make bringing up a happy, confident well
              behaved child easier, they’re also essential. 
              <br/><br/>
             <hr></hr>
              Trying to raise a responsible,
               cooperative child without age-appropriate boundaries is setting your child
                up for failure, unpopularity & stress because a well-balanced, self-regulated
                 adult, starts with a child able to follow your rules first until they can 
                 self-regulate their own behaviour. 
                 <br/><br/>
                 
                 <img
              className="w-full h-64 lg:h-auto object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              src="https://i0.wp.com/ourweekly.com/wp-content/uploads/2022/01/image-49.jpeg?fit=2048%2C2048&ssl=1"
              alt="Picture Cause"/>
                 
                 <br/><br/>
                 <hr></hr>
                 <i>Setting your own family rules is really
                  important & far from squelching your child’s spirit, rules are needed for 
                  kids to flourish & bloom.</i>

         
          
        </section>
        <div className="lg:w-1/3 w-full font-extralight">
            
            <h2 className="text-xl font-bold mb-3 text-red-800">
           <i>« Why Do We Focus on Rules? And Why They are Crucial?»</i></h2>
          <br/>
          <hr></hr>
          <h2 className="text-xl mb-3 text-yellow-800">
          <i>Rules prepare children for the real world</i></h2>
          
           As your limits & boundaries provide a framework so your child can understand 
          what’s expected of them and what will happen if they don’t comply. 
          
          Having clear family expectations, such as “no hitting each other” or ” all your
           toys need to be picked up before bedtime & tidied away,” to “ we all brush our 
           teeth after breakfast” and then enforcing consequences if they break the rules,
            will help them adapt better to new situations, perform better at school and fit
             in easily at work & in society generally.
             <br/>
             <br/>
          <img
              className="w-full h-64 lg:h-auto object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              src={talkkid}
              alt="Picture talkkid"
            />            
                  <br/>
            
             <hr></hr>
             <h2 className="text-xl mb-3 text-yellow-800">
          <i>Rules teach children how to socialise.
            </i> </h2>
          <br/>
          Some rules are just basic manners, like saying “please” & “thank you” or “excuse me”
           before interrupting. If you make it a policy to use polite words at home, your child
            will not only be more pleasant to be around, but they’ll also learn appropriate ways
             to get what they want & need. Respect is the key energy of any happy home.
             <br/>
             <br/>
             <hr></hr>
             <h2 className="text-xl mb-3 text-yellow-800">
         <i>Rules provide a sense of order.</i></h2>
         <br/>
         Certain rules help a child predict what will come next, such as “Washing their hands 
         before dinner” or “Holding your hand when they cross the road.” Even little ones cooperate
          better when they know what’s required of them, and that helps them gain a sense of 
          belonging & security.
          <br/>
          <br/>
          <hr></hr>
          <h2 className="text-xl mb-3 text-yellow-800">
        <i> Rules make kids feel capable & competent.</i> </h2>
         <br/>
         Clear, consistent, fair limits reduce power struggles because your kids won’t need 
         to constantly test you to discover where your boundaries lie. This doesn’t mean your 
         kids won’t ever test you; it just means that after the hundredth time they’ll realise
          it won’t get them anywhere. You can’t be worn down! Take the longer-term view, not 
          the short term quick easy way out!
          <br/>
          <br/>
          <hr></hr>
          <h2 className="text-xl mb-3 text-yellow-800">
        <i> State your rules in the positive</i> </h2>
         <br/>
         “We eat in the kitchen at the table” rather than
          “No running about with food” & praise them and catch them doing something right
          rather than moaning and nagging and shouting when they do something wrong.
           Get your kids to make positive posters of your family house rules so they buy into 
           them. ( And be clear and consistent on the consequences if they break or forget the rules!)
           <br/>
           <br/>
           <hr></hr>
           <h2 className="text-xl mb-3 text-yellow-800">
        <i>Rules reassure kids.</i> </h2>
        <br/>
        No matter how often children act as if they want to be in control, having too much
         power is frightening.They intuitively know that they need an adult to be in charge,
          and they count on you to guide, nurture and steer their behaviour.
          <br/><br/>
          <hr></hr>
         When your 6 year old comes out of their bedroom repeatedly at bedtime, they need 
         you to take consistent, repetitive, predicable & decisive action instead of giving
          half-hearted warnings that carry no weight. Speak in commands “Back to bed” don’t
           appeal in begging tones “asking” them to go back to bed – appealing to their better 
           selves! There’s no need to shout, or get angry simply take them back each time as 
           you calmly state your rules “You’re to stay in your room and go to sleep after your
            story.” Then reinforce your consequences “If you come out again, you won’t get your
             sticker, go to the sleepover at Grandma’s” or whatever you have set up as the 
             consequences in your house.
             <br/><br/>
             <hr></hr>
             <h2 className="text-xl mb-3 text-yellow-800">
            <i> Rules help keep kids safe & encourage good behaviour & citizenship. </i></h2>
             <br/>
             Children, and some adults, often complain as if rules were made up randomly but 
             the truth is that society, work places & schools run efficiently around rules, as 
             rules and regulations are designed to protect your kids & keep them safe. Be mindful 
             of how you speak about rules as your kids are learning your values from how you talk 
             about rules.
             <br/>
             <br/>
             <hr></hr>

             <h2 className="text-xl mb-3 text-yellow-800">
           <i> Rules boost confidence. </i></h2>
            <br/>
            Gradually (& age and maturity appropriately)  expand the limits placed around your
             child, they’ll become more confident about their own emerging independence and their
              ability to handle responsibility as you help them to become more independent and 
              autonomous.
              <br/><br/>
              <hr></hr>

              <h2 className="text-xl mb-3 text-yellow-800">
           <i> Establishing Rules</i></h2>
            <br/>
           Make sure the limits you set are in line with your child’s development and support their
            natural drive to explore, learn, and practice new skills.
            <br/>
            
            <a  href="/Donation"> 
            <img
              className="w-full h-46 lg:h-auto object-cover rounded-lg  transition-transform duration-300 hover:scale-105"
              src="https://i.pinimg.com/originals/0c/68/d0/0c68d044ffd91d3234ffa3dad8fdb037.gif"
              alt="https://www.pngall.com/wp-content/uploads/8/Coins-Piggy-Bank-PNG-Image.png"/>
              </a>
          </div>    
       
        
      
     
      </main>

      <span className="block w-11/12 sm:w-2/3 mx-auto text-center text-gray-700 font-extralight leading-relaxed p-4 sm:pt-20 text-sm ">
      
      
      
            <h2 className="text-2xl font-bold mb-3 text-red-800">
            ««« Some of the guidelines SICP Offers to Parents »»»</h2>
            <br/><br/>
           
          
            <h2 className="text-xl mb-3 text-yellow-800">
            <i>Don’t be too strict.</i> </h2>
            <br/>  <br/>
          <hr></hr>
          <p>
            In an effort to be firm and avoid spoiling, & indulging their kids some parents
             sometimes set too many boundaries; without meaning to, they end up severely 
             restricting & trying to control their child’s behaviour. Don’t expect your toddler
              to sit for an hour at the table every evening while you all eat dinner with Grandma
               or to never to run in the house – you are setting up your child to fail as your 
               rules aren’t realistic. You could also damage your child’s self-esteem as your
                high expectations could make them feel that they’re incapable of ever getting
                 things right or ever pleasing you. Just only set 5 important rules that are realistic
                 to understand and be covered by a child.
                 </p>
                 
                 <br/> <br/>
          <img
              className="w-full h-64 lg:h-auto object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              src={momhappy}
              alt="Picture momhappy"
            />
            <div>
                  <p>
                 <hr></hr>
                 <br/><br/>
                 <h2 className="text-xl mb-3 text-yellow-800">
             <i>Keep your child’s age and abilities in mind when you’re making your family rules, and
              try and give an explanation for your reasons.</i> </h2>
              <br/>
          You can’t expect your 2-year-old to put their toys away without being told to.
          <br/>
         “Talk & Teach” your kids your rules and encourage and praise them when they do remember!

          
         <br/>
         <hr></hr>
         <h2 className="text-xl mb-3 text-yellow-800">
          <i>Don’t be too easy going. </i></h2>
          <br/><br/>
          Empty threats prevent your child from learning to act responsibly
          and the message they learn is that your rules don’t matter.
          <br/>
          <br/>
          <hr></hr>
          <h2 className="text-xl mb-3 text-yellow-800">
          <i>Give commands don’t ask questions.</i></h2>
          <br/><br/>
          Children respond better to commands rather than questions & react better
          the more specific you are. “Put the towel on the rack, put the toothbrush
          in the pot and close the door.”
          <br/>
          <hr></hr>
          <h2 className="text-xl mb-3 text-yellow-800">
         <i> Be consistent. </i></h2>
          <br/><br/>
          When you allow a certain kind of behaviour one day and then overreact to it
           the next, you’re confusing your child. Your mixed messages will only encourage
            your child to test you more to find out where your real boundaries really lie.

            <br/>
            <hr></hr>
            <h2 className="text-xl mb-3 text-yellow-800">
            <i>Create fewer rules that you can enforce consistently, rather than lots of rules erratically.</i></h2>
            
            <br/>
              <hr></hr>
              <h2 className="text-xl mb-3 text-yellow-800">
           <i> Give your child a say. </i></h2>
            <br/><br/>
            Sit down and have a chat about how a happy home runs on everyone pulling their
             weight, joining in, and doing their bit. Let your child have some say in what
              your house rules are as well as what the consequences for breaking them should
               be as this will motivate them to be more cooperative. They will feel more responsible,
                engaged and part of your “We Team” & you may be pleasantly surprised to find out 
                just how good their ideas are.
                <br/>
                <br/>
                <hr></hr>
                <h2 className="text-xl mb-3 text-yellow-800">
            <i>Pause To Ponder</i></h2>
            <br/><br/>
            Chaos and disaster happens without rules. But they need to be good 
            rules & age appropriate rules. So, you need to consciously think about 
            your family rules, explain them to your kids and then you need to enforce 
            them consistently. 
            <br/><br/>
              <hr></hr>
            Rules are important so allocate some serious time and thought to creating
             them & pause to ponder what do you want to accomplish by having them.
             <br/><br/>
              <hr></hr>
              <h2 className="text-xl text-left mb-3 text-red-800">
             <i>As a Parent We Think that it's better to follow this checklist when creating
              your family rules:</i></h2>
             <br/>
             <h2 className="text-sm text-left font-italic mb-3 text-lightgrey">
             <li>	Create rules to keep your children safe.</li>
            <br/>
            <li>	Create rules to help teach your children right from wrong.</li>
            <br/>
            <li>	Create rules that will teach your child self-reliance & independence.</li>
            <br/>
            <li>	Create rules so that your children learn self-control.</li>
            <br/>
            <li>	Create rules to nurture the safe, structured environment 
              in which your child can thrive.</li>
            <br/>
            <li>	Create rules around technology, bedtime & homework.</li>

            </h2>
            
                  </p>   
                        
         </div>
        

        </span>
      <Footer />
      
    </div>
  );
}

export default Service;
