// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { GlobeAltIcon, MapIcon, SparklesIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
// import Testimonials from '../components/Testimonials';
// const videoUrl = "./components/images/855274-hd_1920_1080_30fps.mp4";

// const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
// };
// const cardVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i) => ({
//         opacity: 1,
//         y: 0,
//         transition: {
//             delay: i * 0.2,
//             duration: 0.5,
//             ease: "easeOut"
//         }
//     })
// };
// const ServiceCard = ({ icon, title, description }) => (<motion.div className="bg-brand-gray p-8 rounded-lg shadow-lg border border-transparent hover:border-brand-gold/30" whileHover={{ y: -8, scale: 1.03, boxShadow: "0px 10px 30px rgba(212, 175, 55, 0.1)" }} transition={{ type: "spring", stiffness: 300 }}>
//     <div className="mb-4 text-brand-gold">{icon}</div>
//     <h3 className="text-xl font-serif font-bold mb-2 text-brand-light">{title}</h3>
//     <p className="text-gray-400">{description}</p>
//   </motion.div>);
// const DestinationCard = ({ name, country, imageUrl }) => (<motion.div className="relative overflow-hidden rounded-lg shadow-lg group" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
//         <img src={imageUrl} alt={name} className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"/>
//         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
//         <div className="absolute bottom-0 left-0 p-6">
//             <p className="text-gray-300 text-sm">{country}</p>
//             <h3 className="text-2xl font-serif font-bold text-white">{name}</h3>
//         </div>
//     </motion.div>);
// const HomePage = () => {
//     return (<div>
      
//       <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
//         <video autoPlay loop muted playsInline className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover">
//           <source src={videoUrl} type="video/mp4"/>
//           Your browser does not support the video tag.
//         </video>
//         <div className="absolute inset-0 bg-black/60"></div>
//         <motion.div className="relative z-10 px-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-4">
//             A World of Luxury Awaits
//           </h1>
//           <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
//             Experience travel like never before. We curate bespoke journeys that transcend the ordinary, creating memories that last a lifetime.
//           </p>
//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <Link to="/booking" className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-full text-lg uppercase tracking-wider hover:bg-white transition-all duration-300 inline-block">
//               Begin Your Journey
//             </Link>
//           </motion.div>
//         </motion.div>
//       </section>

      
//       <motion.section className="py-20 bg-brand-dark" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
//           <div className="container mx-auto px-6 text-center">
//               <h2 className="text-4xl font-serif text-brand-gold mb-4">The Art of Travel, Perfected</h2>
//               <p className="max-w-3xl mx-auto text-gray-300 mb-12">
//                   At Travel Agency, we believe travel should be more than just a trip—it should be an experience. Our experts meticulously plan every detail, from private jet charters to exclusive access, ensuring your journey is seamless and extraordinary.
//               </p>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//                   <ServiceCard icon={<GlobeAltIcon className="w-12 h-12"/>} title="Global Destinations" description="From the vibrant streets of Tokyo to the serene beaches of the Maldives, we cover every corner of the globe."/>
//                   <ServiceCard icon={<SparklesIcon className="w-12 h-12"/>} title="Bespoke Itineraries" description="Your journey is uniquely yours. We tailor every aspect to your personal tastes and desires."/>
//                   <ServiceCard icon={<MapIcon className="w-12 h-12"/>} title="Expert Guidance" description="Our seasoned travel connoisseurs provide unparalleled insights and 24/7 support throughout your adventure."/>
//               </div>
//           </div>
//       </motion.section>

      
//       <motion.section className="py-20 bg-brand-gray" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
//         <div className="container mx-auto px-6">
//             <h2 className="text-4xl font-serif text-brand-gold text-center mb-12">Featured Destinations</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 <motion.div custom={0} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}><DestinationCard name="King of the Jungle" country="Kenya" imageUrl="components\images\lion-8947711_1280.jpg"/></motion.div>
//                 <motion.div custom={1} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}><DestinationCard name="Wild Beasts" country="Tanzania" imageUrl="components\images\leopard-163035_1280.jpg"/></motion.div>
//                 <motion.div custom={2} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}><DestinationCard name="Beautiful Coast" country="Zanzibar" imageUrl="components\images\sunset-4499023_1280.jpg"/></motion.div>
//             </div>
             
//             <div className="text-center mt-12">
//               <Link
//                 to="/destinations"
//                 className="text-brand-gold font-semibold text-lg hover:underline inline-flex items-center group"
//               >
//                 Explore More Destinations
//                 <ChevronRightIcon className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
//               </Link>
//             </div>

//         </div>
//       </motion.section>

//       <Testimonials />

//     </div>);
// };
// export default HomePage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GlobeAltIcon, MapIcon, SparklesIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Testimonials from '../components/Testimonials';

const videoUrl = "./public/images/2873374-hd_720_720_30fps.mp4";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const ServiceCard = ({ icon, title, description }) => (
  <motion.div
    className="bg-brand-gray p-8 rounded-lg shadow-lg border border-transparent hover:border-brand-gold/30"
    whileHover={{ y: -8, scale: 1.03, boxShadow: "0px 10px 30px rgba(212, 175, 55, 0.1)" }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="mb-4 text-brand-gold">{icon}</div>
    <h3 className="text-xl font-serif font-bold mb-2 text-brand-light">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const DestinationCard = ({ name, country, imageUrl }) => (
  <motion.div
    className="relative overflow-hidden rounded-lg shadow-lg group"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
  >
    <img
      src={imageUrl}
      alt={name}
      className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-6">
      <p className="text-gray-300 text-sm">{country}</p>
      <h3 className="text-2xl font-serif font-bold text-white">{name}</h3>
    </div>
  </motion.div>
);

const HomePage = () => {
  const [showTestimonials, setShowTestimonials] = useState(false);

  const handleScrollToDestinations = () => {
    const el = document.getElementById('featured-destinations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          className="relative z-10 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-4">
            A World of Luxury Awaits
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Experience travel like never before. We curate bespoke journeys that transcend the
            ordinary, creating memories that last a lifetime.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              type="button"
              onClick={handleScrollToDestinations}
              className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-full text-lg uppercase tracking-wider hover:bg-white transition-all duration-300 inline-block"
            >
              Begin Your Journey
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <motion.section
        className="py-20 bg-brand-dark"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif text-brand-gold mb-4">
            The Art of Travel, Perfected
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 mb-12">
            At Travel Agency, we believe travel should be more than just a trip—it should be an
            experience. Our experts meticulously plan every detail, from private jet charters to
            exclusive access, ensuring your journey is seamless and extraordinary.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ServiceCard
              icon={<GlobeAltIcon className="w-12 h-12" />}
              title="Global Destinations"
              description="From the vibrant streets of Tokyo to the serene beaches of the Maldives, we cover every corner of the globe."
            />
            <ServiceCard
              icon={<SparklesIcon className="w-12 h-12" />}
              title="Bespoke Itineraries"
              description="Your journey is uniquely yours. We tailor every aspect to your personal tastes and desires."
            />
            <ServiceCard
              icon={<MapIcon className="w-12 h-12" />}
              title="Expert Guidance"
              description="Our seasoned travel connoisseurs provide unparalleled insights and 24/7 support throughout your adventure."
            />
          </div>
        </div>
      </motion.section>

      {/* Featured Destinations Section */}
      <motion.section
        id="featured-destinations"
        className="py-20 bg-brand-gray"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-brand-gold text-center mb-12">
            Featured Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <DestinationCard
                name="King of the Jungle"
                country="Kenya"
                imageUrl="public/images/lion-8947711_1280.jpg"
              />
            </motion.div>
            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <DestinationCard
                name="Wild Beasts"
                country="Tanzania"
                imageUrl="public/images/leopard-163035_1280.jpg"
              />
            </motion.div>
            <motion.div
              custom={2}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <DestinationCard
                name="Beautiful Coast"
                country="Zanzibar"
                imageUrl="public/images/sunset-4499023_1280.jpg"
              />
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/destinations"
              className="text-brand-gold font-semibold text-lg hover:underline inline-flex items-center group"
            >
              Explore More Destinations
              <ChevronRightIcon className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Toggle + Section */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-6">
          {/* Glassy button panel */}
          {!showTestimonials && (
            <div className="max-w-xl mx-auto mb-10">
              <div className="bg-white/10 backdrop-blur-md border border-brand-gold/30 rounded-2xl p-8 text-center shadow-xl">
                <h3 className="text-2xl font-serif text-brand-gold mb-3">
                  Hear From Our Travelers
                </h3>
                <p className="text-gray-300 mb-6">
                  See what our clients say about their bespoke journeys with us.
                </p>
                <motion.button
                  type="button"
                  onClick={() => setShowTestimonials(true)}
                  className="bg-brand-gold text-brand-dark font-bold py-3 px-10 rounded-full text-sm uppercase tracking-wider hover:bg-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  View Testimonials
                </motion.button>
              </div>
            </div>
          )}

          {showTestimonials && (
            <>
              <Testimonials />
              <div className="mt-8 flex justify-center">
                <motion.button
                  type="button"
                  onClick={() => setShowTestimonials(false)}
                  className="bg-transparent border border-brand-gold text-brand-gold font-semibold py-2 px-8 rounded-full text-sm uppercase tracking-wider hover:bg-brand-gold hover:text-brand-dark transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Hide Testimonials
                </motion.button>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
