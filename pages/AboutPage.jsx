import React from 'react';
import { motion } from 'framer-motion';
import { HandThumbUpIcon, HeartIcon, StarIcon } from '@heroicons/react/24/solid';

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};
const AboutPage = () => {
    return (<div>
      
      <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('components/images/book-2341083_1280.jpg')" }}>
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <motion.h1 className="text-5xl md:text-7xl font-serif font-bold text-white" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            Our Story
          </motion.h1>
        </div>
      </section>
      
      
      <motion.section className="py-20 bg-brand-dark" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif text-brand-gold mb-4">Redefining Luxury Travel</h2>
            <p className="text-gray-300 mb-4">
              Travel Agency was founded on a simple yet profound principle: to transform travel from a mere vacation into a profound, life-enriching experience. We saw a world of breathtaking beauty and diverse cultures, yet travel often felt standardized and impersonal.
            </p>
            <p className="text-gray-300">
              Our mission is to unlock the world's most exclusive and authentic experiences for our discerning clients. We handle the logistics, so you can immerse yourself fully in the magic of your destination. Every journey we craft is a masterpiece of personalization and seamless execution.
            </p>
          </div>
          <div>
            <img src="components\images\konigssee-7276585_1280.jpg" alt="Crafting a journey" className="rounded-lg shadow-2xl"/>
          </div>
        </div>
      </motion.section>

     
      <motion.section className="py-20 bg-brand-gray" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif text-brand-gold mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8">
              <StarIcon className="w-16 h-16 mx-auto mb-4 text-brand-gold"/>
              <h3 className="text-2xl font-serif text-white mb-2">Excellence</h3>
              <p className="text-gray-400">We pursue the highest standards in every detail, from the accommodations we select to the guides who lead your excursions.</p>
            </div>
            <div className="p-8">
              <HeartIcon className="w-16 h-16 mx-auto mb-4 text-brand-gold"/>
              <h3 className="text-2xl font-serif text-white mb-2">Passion</h3>
              <p className="text-gray-400">Travel is our passion. We are constantly exploring and discovering new gems to share with our clients.</p>
            </div>
            <div className="p-8">
              <HandThumbUpIcon className="w-16 h-16 mx-auto mb-4 text-brand-gold"/>
              <h3 className="text-2xl font-serif text-white mb-2">Integrity</h3>
              <p className="text-gray-400">We operate with transparency and honesty, building lasting relationships based on trust and mutual respect.</p>
            </div>
          </div>
        </div>
      </motion.section>
      
      
      <motion.section className="py-20 bg-brand-dark" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-serif text-brand-gold mb-12">Meet Our Connoisseurs</h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-10">Our team is a collective of seasoned travelers, expert planners, and dedicated support staff, all united by a love for exploration.</p>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="text-center">
                    <img src="components\images\horse-profile-2679776_1280.jpg" alt="Team Member 1" className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-brand-gold/50 object-cover"/>
                    <h4 className="text-xl font-bold text-white">Person 1</h4>
                    <p className="text-brand-gold">Founder & CEO</p>
                </div>
                <div className="text-center">
                    <img src="components\images\horse-profile-2679776_1280.jpg" alt="Team Member 2" className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-brand-gold/50 object-cover"/>
                    <h4 className="text-xl font-bold text-white">Person 2</h4>
                    <p className="text-brand-gold">Head of Travel Design</p>
                </div>
                <div className="text-center">
                    <img src="components\images\horse-profile-2679776_1280.jpg" alt="Team Member 3" className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-brand-gold/50 object-cover"/>
                    <h4 className="text-xl font-bold text-white">Person 3</h4>
                    <p className="text-brand-gold">Air travel Specialist</p>
                </div>
              </div>
          </div>
      </motion.section>

    </div>);
};
export default AboutPage;
