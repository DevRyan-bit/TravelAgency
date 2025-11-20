// import React, { useState, useContext } from 'react';
// import { motion } from 'framer-motion';
// import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
// import { AppContext } from '../context/AppContext';
// const ContactPage = () => {
//     const { addMessage } = useContext(AppContext);
//     const [formState, setFormState] = useState({
//         name: '',
//         email: '',
//         message: '',
//     });
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormState(prevState => ({ ...prevState, [name]: value }));
//     };
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // --- BACKEND SIMULATION ---
//         // Add the message to our global context state so the admin dashboard can see it.
//         addMessage(formState);
//         console.log('Form submitted:', formState);
//         // For demonstration purposes, we will just show the success message.
//         setIsSubmitted(true);
//     };
//     return (<motion.div className="container mx-auto px-6 py-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
//       <div className="text-center mb-12">
//         <h1 className="text-5xl font-serif text-brand-gold mb-4">Get In Touch</h1>
//         <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//           Have a question or ready to start planning your next adventure? We'd love to hear from you.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-12 bg-brand-gray p-8 md:p-12 rounded-lg shadow-2xl">
//         {/* Contact Info */}
//         <div className="space-y-8">
//           <div>
//             <h2 className="text-3xl font-serif text-white mb-6">Contact Information</h2>
//             <div className="flex items-center space-x-4 mb-4">
//               <EnvelopeIcon className="w-6 h-6 text-brand-gold"/>
//               <a href="mailto:concierge@elysiantravels.com" className="text-gray-300 hover:text-brand-gold transition-colors">
//                 email@elysiantravels.com
//               </a>
//             </div>
//             <div className="flex items-center space-x-4 mb-4">
//               <PhoneIcon className="w-6 h-6 text-brand-gold"/>
//               <a href="tel:+1234567890" className="text-gray-300 hover:text-brand-gold transition-colors">
//                 +254700000000
//               </a>
//             </div>
//             <div className="flex items-start space-x-4">
//               <MapPinIcon className="w-6 h-6 text-brand-gold mt-1"/>
//               <p className="text-gray-300">
//                 Along Nyeri Road<br />
//                 Nyeri, 12345
//               </p>
//             </div>
//           </div>
//           <div className="pt-8 border-t border-brand-gold/20">
//              <h3 className="text-xl font-serif text-white mb-4">Business Hours</h3>
//              <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
//              <p className="text-gray-400">Saturday: 10:00 AM - 4:00 PM</p>
//              <p className="text-gray-400">Sunday: By Appointment Only</p>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div>
//           {isSubmitted ? (<motion.div className="h-full flex flex-col items-center justify-center bg-brand-dark p-8 rounded-lg" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
//                 <h3 className="text-2xl font-serif text-brand-gold mb-4">Thank You!</h3>
//                 <p className="text-gray-300 text-center">Your message has been sent. One of our travel connoisseurs will be in touch with you shortly.</p>
//             </motion.div>) : (<form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
//                 <input type="text" name="name" id="name" value={formState.name} onChange={handleChange} required className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-3 text-white focus:ring-brand-gold focus:border-brand-gold transition"/>
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
//                 <input type="email" name="email" id="email" value={formState.email} onChange={handleChange} required className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-3 text-white focus:ring-brand-gold focus:border-brand-gold transition"/>
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
//                 <textarea name="message" id="message" rows={5} value={formState.message} onChange={handleChange} required className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-3 text-white focus:ring-brand-gold focus:border-brand-gold transition resize-none"></textarea>
//               </div>
//               <div>
//                 <motion.button type="submit" className="w-full bg-brand-gold text-brand-dark font-bold py-3 px-6 rounded-full uppercase tracking-wider hover:bg-white transition-colors duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   Send Message
//                 </motion.button>
//               </div>
//             </form>)}
//         </div>
//       </div>
//     </motion.div>);
// };
// export default ContactPage;


import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { AppContext } from '../context/AppContext';

const AGENCY_EMAIL = 'email@travelagency.com'; 

const ContactPage = () => {
  const { addMessage } = useContext(AppContext);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const subject = encodeURIComponent(
      `New contact message from ${formState.name}`
    );
    const bodyLines = [
      `Name: ${formState.name}`,
      `Email: ${formState.email}`,
      '',
      'Message:',
      formState.message,
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));

    
    window.location.href = `mailto:${AGENCY_EMAIL}?subject=${subject}&body=${body}`;

    
    addMessage(formState);
    console.log('Form submitted:', formState);

    setIsSubmitted(true);
  };

  return (
    <motion.div
      className="container mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-brand-gold mb-4">Get In Touch</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Have a question or ready to start planning your next adventure? We'd
          love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 bg-brand-gray p-8 md:p-12 rounded-lg shadow-2xl">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-serif text-white mb-6">
              Contact Information
            </h2>
            <div className="flex items-center space-x-4 mb-4">
              <EnvelopeIcon className="w-6 h-6 text-brand-gold" />
              <a
                href={`mailto:${AGENCY_EMAIL}`}
                className="text-gray-300 hover:text-brand-gold transition-colors"
              >
                {AGENCY_EMAIL}
              </a>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <PhoneIcon className="w-6 h-6 text-brand-gold" />
              <a
                href="tel:+1234567890"
                className="text-gray-300 hover:text-brand-gold transition-colors"
              >
                +100000000
              </a>
            </div>
            <div className="flex items-start space-x-4">
              <MapPinIcon className="w-6 h-6 text-brand-gold mt-1" />
              <p className="text-gray-300">
                Along the Road
                <br />
                City, 12345
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-brand-gold/20">
            <h3 className="text-xl font-serif text-white mb-4">Business Hours</h3>
            <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-400">Saturday: 10:00 AM - 4:00 PM</p>
            <p className="text-gray-400">Sunday: By Appointment Only</p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          {isSubmitted ? (
            <motion.div
              className="h-full flex flex-col items-center justify-center bg-brand-dark p-8 rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <h3 className="text-2xl font-serif text-brand-gold mb-4">
                Thank You!
              </h3>
              <p className="text-gray-300 text-center">
                Your message has been sent. One of our travel connoisseurs will
                be in touch with you shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-3 text-white focus:ring-brand-gold focus:border-brand-gold transition"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-3 text-white focus:ring-brand-gold focus:border-brand-gold transition"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-3 text-white focus:ring-brand-gold focus:border-brand-gold transition resize-none"
                ></textarea>
              </div>
              <div>
                <motion.button
                  type="submit"
                  className="w-full bg-brand-gold text-brand-dark font-bold py-3 px-6 rounded-full uppercase tracking-wider hover:bg-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
