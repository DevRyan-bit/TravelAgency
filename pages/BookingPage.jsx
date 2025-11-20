// import React, { useState, useContext } from 'react';
// import { motion } from 'framer-motion';
// import { CheckCircleIcon, CreditCardIcon, UserCircleIcon, GlobeAltIcon } from '@heroicons/react/24/solid';
// import { AppContext } from '../context/AppContext';
// const FormInput = (props) => (<div>
//         <label htmlFor={props.name} className="block text-sm font-medium text-gray-300 mb-2">{props.label}</label>
//         <input {...props} id={props.name} className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-3 text-white focus:ring-brand-gold focus:border-brand-gold transition"/>
//     </div>);
// const BookingPage = () => {
//     const { addBooking } = useContext(AppContext);
//     const [formData, setFormData] = useState({
//         fullName: '',
//         email: '',
//         phone: '',
//         destination: '',
//         departureDate: '',
//         returnDate: '',
//         travelers: 1,
//         travelType: 'Air',
//         notes: '',
//     });
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: name === 'travelers' ? parseInt(value, 10) : value }));
//     };
//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         addBooking(formData);
//         console.log("Form Data Submitted:", formData);
//         setIsSubmitted(true);
//     };
//     if (isSubmitted) {
//         return (<motion.div className="container mx-auto px-6 py-16 text-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
//                 <CheckCircleIcon className="w-24 h-24 text-brand-gold mx-auto mb-6"/>
//                 <h2 className="text-4xl font-serif text-white mb-4">Booking Request Received!</h2>
//                 <p className="text-gray-300 max-w-2xl mx-auto">
//                     Thank you, {formData.fullName}. Your dream journey is one step closer. One of our travel connoisseurs will review your request and contact you at <strong>{formData.email}</strong> within 24 hours to finalize the details.
//                 </p>
//             </motion.div>);
//     }
//     return (<motion.div className="container mx-auto px-6 py-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//             <div className="text-center max-w-3xl mx-auto mb-12">
//                 <h1 className="text-5xl font-serif text-brand-gold mb-4">Reserve Your Journey</h1>
//                 <p className="text-lg text-gray-300">
//                     Complete the form below to begin the reservation process. A dedicated travel expert will personally handle your request.
//                 </p>
//             </div>

//             <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-10">
//                 {/* Personal Information */}
//                 <div className="bg-brand-gray p-8 rounded-lg shadow-lg">
//                     <h2 className="text-2xl font-serif text-white mb-6 flex items-center"><UserCircleIcon className="w-7 h-7 mr-3 text-brand-gold"/>Personal Information</h2>
//                     <div className="grid md:grid-cols-2 gap-6">
//                         <FormInput label="Full Name" name="fullName" type="text" value={formData.fullName} onChange={handleChange} required/>
//                         <FormInput label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required/>
//                         <FormInput label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange}/>
//                     </div>
//                 </div>

//                 {/* Trip Details */}
//                 <div className="bg-brand-gray p-8 rounded-lg shadow-lg">
//                     <h2 className="text-2xl font-serif text-white mb-6 flex items-center"><GlobeAltIcon className="w-7 h-7 mr-3 text-brand-gold"/>Trip Details</h2>
//                     <div className="grid md:grid-cols-2 gap-6">
//                          <FormInput label="Destination" name="destination" type="text" value={formData.destination} onChange={handleChange} required placeholder="e.g., Paris, France"/>
//                          <div>
//                             <label htmlFor="travelers" className="block text-sm font-medium text-gray-300 mb-2">Number of Travelers</label>
//                             <input id="travelers" name="travelers" type="number" min="1" value={formData.travelers} onChange={handleChange} required className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-3 text-white focus:ring-brand-gold focus:border-brand-gold transition"/>
//                          </div>
//                          <FormInput label="Departure Date" name="departureDate" type="date" value={formData.departureDate} onChange={handleChange} required/>
//                          <FormInput label="Return Date" name="returnDate" type="date" value={formData.returnDate} onChange={handleChange} required/>
//                          <div>
//                             <label htmlFor="travelType" className="block text-sm font-medium text-gray-300 mb-2">Primary Mode of Travel</label>
//                             <select id="travelType" name="travelType" value={formData.travelType} onChange={handleChange} className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-3 text-white focus:ring-brand-gold focus:border-brand-gold transition">
//                                 <option>Air</option>
//                                 <option>Train</option>
//                                 <option>Bus</option>
//                                 <option>Car</option>
//                                 <option>Mixed</option>
//                             </select>
//                          </div>
//                     </div>
//                     <div className="mt-6">
//                         <label htmlFor="notes" className="block text-sm font-medium text-gray-300 mb-2">Additional Notes or Preferences</label>
//                         <textarea id="notes" name="notes" rows={4} value={formData.notes} onChange={handleChange} placeholder="e.g., Requesting a window seat, dietary restrictions, special occasions." className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-3 text-white focus:ring-brand-gold focus:border-brand-gold transition resize-none"></textarea>
//                     </div>
//                 </div>
                
//                 {/* Payment Information Placeholder */}
//                 <div className="bg-brand-gray p-8 rounded-lg shadow-lg opacity-50">
//                      <h2 className="text-2xl font-serif text-white mb-6 flex items-center"><CreditCardIcon className="w-7 h-7 mr-3 text-brand-gold"/>Payment Information</h2>
//                      <p className="text-center text-gray-400 mb-4">Payment processing is disabled for this demonstration. In a live environment, a secure payment form would appear here.</p>
//                      <div className="grid grid-cols-1 gap-6 blur-sm pointer-events-none">
//                         <FormInput label="Card Number" name="cc-number" type="text" value="" onChange={() => { }} placeholder="•••• •••• •••• ••••"/>
//                         <div className="grid grid-cols-2 gap-6">
//                            <FormInput label="Expiry Date" name="cc-expiry" type="text" value="" onChange={() => { }} placeholder="MM / YY"/>
//                            <FormInput label="CVC" name="cc-cvc" type="text" value="" onChange={() => { }} placeholder="•••"/>
//                         </div>
//                      </div>
//                 </div>


//                 <div className="text-center">
//                     <motion.button type="submit" className="bg-brand-gold text-brand-dark font-bold py-4 px-12 rounded-full text-lg uppercase tracking-wider hover:bg-white transition-all duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                         Submit Booking Request
//                     </motion.button>
//                 </div>
//             </form>
//         </motion.div>);
// };
// export default BookingPage;

import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircleIcon,
  CreditCardIcon,
  UserCircleIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/solid';
import { AppContext } from '../context/AppContext';

const AGENCY_EMAIL = 'email@travelagency.com'; 

const FormInput = (props) => (
  <div>
    <label
      htmlFor={props.name}
      className="block text-sm font-medium text-gray-300 mb-2"
    >
      {props.label}
    </label>
    <input
      {...props}
      id={props.name}
      className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-3 text-white focus:ring-brand-gold focus:border-brand-gold transition"
    />
  </div>
);

const BookingPage = () => {
  const { addBooking } = useContext(AppContext);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    travelers: 1,
    travelType: 'Air',
    notes: '',
  });

  const [paymentPdf, setPaymentPdf] = useState(null);
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'travelers' ? parseInt(value, 10) || 1 : value,
    }));
  };

  const handlePdfChange = (e) => {
    const file = e.target.files?.[0] || null;
    if (file && file.type !== 'application/pdf') {
      setError('Payment receipt must be a PDF file.');
      setPaymentPdf(null);
      return;
    }
    setError('');
    setPaymentPdf(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!paymentPdf) {
      setError('Please upload your payment receipt as a PDF before submitting.');
      return;
    }


    addBooking({
      ...formData,
      sentToEmail: AGENCY_EMAIL,
      paymentReceipt: {
        fileName: paymentPdf.name,
        fileSize: paymentPdf.size,
        fileType: paymentPdf.type,
      },
    });

    
    const subject = encodeURIComponent(
      `New booking request from ${formData.fullName}`
    );

    const bodyLines = [
      `Name: ${formData.fullName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'N/A'}`,
      '',
      `Destination: ${formData.destination}`,
      `Departure Date: ${formData.departureDate}`,
      `Return Date: ${formData.returnDate}`,
      `Travelers: ${formData.travelers}`,
      `Primary Mode of Travel: ${formData.travelType}`,
      '',
      'Additional Notes:',
      formData.notes || 'None provided',
      '',
      `Payment Receipt PDF: ${paymentPdf.name} (${Math.round(
        paymentPdf.size / 1024
      )} KB)`,
      '',
      '(In this demo, you must attach the PDF manually in your email client if needed.)',
    ];

    const body = encodeURIComponent(bodyLines.join('\n'));

    
    window.location.href = `mailto:${AGENCY_EMAIL}?subject=${subject}&body=${body}`;

    console.log('Form Data Submitted:', formData, paymentPdf);

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="container mx-auto px-6 py-16 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <CheckCircleIcon className="w-24 h-24 text-brand-gold mx-auto mb-6" />
        <h2 className="text-4xl font-serif text-white mb-4">
          Booking Request Received!
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Thank you, {formData.fullName}. Your booking request and payment
          receipt details have been sent to our concierge team at{' '}
          <strong>{AGENCY_EMAIL}</strong>. We will contact you at{' '}
          <strong>{formData.email}</strong> within 24 hours to finalize the
          details.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="container mx-auto px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-5xl font-serif text-brand-gold mb-4">
          Reserve Your Journey
        </h1>
        <p className="text-lg text-gray-300">
          Complete the form below to begin the reservation process. A dedicated
          travel expert will personally handle your request.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-10">
        {error && (
          <p className="text-red-500 text-sm text-center mb-2">{error}</p>
        )}

        {/* Personal Information */}
        <div className="bg-brand-gray p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-serif text-white mb-6 flex items-center">
            <UserCircleIcon className="w-7 h-7 mr-3 text-brand-gold" />
            Personal Information
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FormInput
              label="Full Name"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Trip Details */}
        <div className="bg-brand-gray p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-serif text-white mb-6 flex items-center">
            <GlobeAltIcon className="w-7 h-7 mr-3 text-brand-gold" />
            Trip Details
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FormInput
              label="Destination"
              name="destination"
              type="text"
              value={formData.destination}
              onChange={handleChange}
              required
              placeholder="e.g., Nairobi, Kenya"
            />
            <div>
              <label
                htmlFor="travelers"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Number of Travelers
              </label>
              <input
                id="travelers"
                name="travelers"
                type="number"
                min="1"
                value={formData.travelers}
                onChange={handleChange}
                required
                className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-3 text-white focus:ring-brand-gold focus:border-brand-gold transition"
              />
            </div>
            <FormInput
              label="Departure Date"
              name="departureDate"
              type="date"
              value={formData.departureDate}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Return Date"
              name="returnDate"
              type="date"
              value={formData.returnDate}
              onChange={handleChange}
              required
            />
            <div>
              <label
                htmlFor="travelType"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Primary Mode of Travel
              </label>
              <select
                id="travelType"
                name="travelType"
                value={formData.travelType}
                onChange={handleChange}
                className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-3 text-white focus:ring-brand-gold focus:border-brand-gold transition"
              >
                <option>Air</option>
                <option>Train</option>
                <option>Bus</option>
                <option>Car</option>
                <option>Mixed</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Additional Notes or Preferences
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              value={formData.notes}
              onChange={handleChange}
              placeholder="e.g., Requesting a window seat, dietary restrictions, special occasions."
              className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-3 text-white focus:ring-brand-gold focus:border-brand-gold transition resize-none"
            ></textarea>
          </div>
        </div>

        
        <div className="bg-brand-gray p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-serif text-white mb-6 flex items-center">
            <CreditCardIcon className="w-7 h-7 mr-3 text-brand-gold" />
            Payment Receipt
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            Please upload a PDF receipt of your payment (for example, a PayPal
            or M‑Pesa confirmation PDF). This is required to submit your
            booking.
          </p>
          <input
            type="file"
            accept="application/pdf"
            onChange={handlePdfChange}
            className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-brand-gold file:text-brand-dark hover:file:bg-white"
          />
        </div>

        <div className="text-center">
          <motion.button
            type="submit"
            className="bg-brand-gold text-brand-dark font-bold py-4 px-12 rounded-full text-lg uppercase tracking-wider hover:bg-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Booking Request
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default BookingPage;
