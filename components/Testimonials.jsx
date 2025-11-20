// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { StarIcon } from '@heroicons/react/24/solid';

// // Default testimonials (static)
// const defaultTestimonials = [
//   {
//     name: 'Eleanor Vance',
//     location: 'Paris, France',
//     avatarUrl: 'https://picsum.photos/seed/person1/100/100',
//     rating: 5,
//     review: "Elysian curated the most magical trip to Japan for our anniversary. Every detail was flawless, from the private tea ceremony in Kyoto to the helicopter tour over Tokyo. Truly a once-in-a-lifetime experience.",
//   },
//   {
//     name: 'Marcus Holloway',
//     location: 'New York, USA',
//     avatarUrl: 'https://picsum.photos/seed/person2/100/100',
//     rating: 5,
//     review: "The Amalfi Coast itinerary they prepared was breathtaking. We discovered hidden gems we never would have found on our own. The level of service and personal attention was unparalleled. Highly recommend!",
//   },
//   {
//     name: 'Isabella Rossi',
//     location: 'Rome, Italy',
//     avatarUrl: 'https://picsum.photos/seed/person3/100/100',
//     rating: 4,
//     review: "Our family safari in Tanzania was an adventure we'll never forget. The lodges were luxurious and the guides were incredibly knowledgeable. A fantastic trip, though one transfer was slightly delayed.",
//   },
// ];

// // Animations
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { duration: 0.5, ease: "easeOut" }
//   },
// };

// // Star display
// const StarRating = ({ rating, onRate }) => (
//   <div className="flex">
//     {[...Array(5)].map((_, i) => (
//       <button
//         key={i}
//         type={onRate ? 'button' : undefined}
//         className={`focus:outline-none ${onRate ? 'cursor-pointer' : ''}`}
//         onClick={onRate ? () => onRate(i + 1) : undefined}
//         tabIndex={onRate ? 0 : -1}
//         aria-label={onRate ? `Rate ${i + 1} stars` : undefined}
//       >
//         <StarIcon
//           className={`w-5 h-5 ${i < rating ? 'text-brand-gold' : 'text-gray-600'}`}
//         />
//       </button>
//     ))}
//   </div>
// );

// // Display a single testimonial
// const ReviewCard = ({ testimonial }) => (
//   <motion.div
//     className="bg-brand-gray p-8 rounded-lg shadow-lg flex flex-col h-full border border-transparent hover:border-brand-gold/30"
//     variants={itemVariants}
//     whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
//   >
//     <div className="flex items-center mb-4">
//       <img
//         src={testimonial.avatarUrl}
//         alt={testimonial.name}
//         className="w-14 h-14 rounded-full mr-4 border-2 border-brand-gold/50"
//       />
//       <div>
//         <h4 className="font-bold text-lg text-white">{testimonial.name}</h4>
//         <p className="text-sm text-gray-400">{testimonial.location}</p>
//       </div>
//     </div>
//     <div className="mb-4">
//       <StarRating rating={testimonial.rating} />
//     </div>
//     <p className="text-gray-300 italic">"{testimonial.review}"</p>
//   </motion.div>
// );

// const Testimonials = () => {
//   // State for user-submitted testimonials
//   const [userTestimonials, setUserTestimonials] = useState([]);
//   const [form, setForm] = useState({
//     name: '',
//     location: '',
//     review: '',
//     rating: 5,
//   });
//   const [error, setError] = useState('');

//   // For a quick avatar, create a random seed
//   const getRandomAvatar = name =>
//     `https://picsum.photos/seed/${encodeURIComponent(name + Date.now())}/100/100`;

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setForm(f => ({ ...f, [name]: value }));
//   };

//   const handleRate = rating => setForm(f => ({ ...f, rating }));

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!form.name.trim() || !form.location.trim() || !form.review.trim() || form.rating <= 0) {
//       setError("All fields and a star rating are required.");
//       return;
//     }
//     setUserTestimonials([
//       {
//         name: form.name,
//         location: form.location,
//         review: form.review,
//         rating: form.rating,
//         avatarUrl: getRandomAvatar(form.name),
//       },
//       ...userTestimonials,
//     ]);
//     setError('');
//     setForm({
//       name: '',
//       location: '',
//       review: '',
//       rating: 5,
//     });
//   };

//   return (
//     <motion.section
//       className="py-20 bg-brand-dark"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={containerVariants}
//     >
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl font-serif text-brand-gold text-center mb-12">From Our Valued Travelers</h2>

//         {/* Submission Form */}
//         <div className="max-w-2xl mx-auto bg-brand-gray rounded-lg p-6 mb-14 shadow-lg">
//           <h3 className="text-xl font-serif text-white mb-2">Share Your Experience</h3>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {error && <p className="text-red-500 text-sm">{error}</p>}
//             <div className="grid md:grid-cols-2 gap-4">
//               <div>
//                 <label htmlFor="name" className="block text-sm text-gray-300 mb-1">Your Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   required
//                   value={form.name}
//                   onChange={handleChange}
//                   className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-2 text-white"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="location" className="block text-sm text-gray-300 mb-1">Location</label>
//                 <input
//                   type="text"
//                   name="location"
//                   id="location"
//                   required
//                   value={form.location}
//                   onChange={handleChange}
//                   className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-2 text-white"
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="review" className="block text-sm text-gray-300 mb-1">Your Testimony</label>
//               <textarea
//                 name="review"
//                 id="review"
//                 rows={4}
//                 required
//                 value={form.review}
//                 onChange={handleChange}
//                 className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-2 text-white resize-none"
//               />
//             </div>
//             <div>
//               <p className="text-sm text-gray-300 mb-1">Your Rating</p>
//               <StarRating rating={form.rating} onRate={handleRate} />
//             </div>
//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 className="bg-brand-gold text-brand-dark font-bold py-2 px-8 rounded-full hover:bg-white transition-colors"
//               >
//                 Submit Testimonial
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Testimonials Grid */}
//         <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
//           {[...userTestimonials, ...defaultTestimonials].map((testimonial, index) => (
//             <ReviewCard key={testimonial.name + testimonial.review + index} testimonial={testimonial} />
//           ))}
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default Testimonials;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';


const defaultTestimonials = [
  {
    name: 'Eleanor Vance',
    location: 'Nairobi, Kenya',
    avatarUrl: 'components/images/horse-profile-2679776_1280.jpg',
    rating: 5,
    review:
      'Travel Agency curated the most magical trip to Zanzibar for our anniversary.',
  },
  {
    name: 'Marcus Kamau',
    email: 'marcus@example.com',
    location: 'Kiambu, Kenya',
    avatarUrl: 'components/images/horse-profile-2679776_1280.jpg',
    rating: 5,
    review:
      'My journey in a hot air balloon was amazing!',
  },
  {
    name: 'Isabella Mangwasha',
    avatarUrl: 'components/images/horse-profile-2679776_1280.jpg',
    rating: 4,
    review:
      "Our family safari in Tanzania was an adventure we'll never forget. The lodges were luxurious and the guides were incredibly knowledgeable. A fantastic trip, though one transfer was slightly delayed.",
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};


const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};


const StarRating = ({ rating, onRate }) => (
  <div className="flex">
    {Array.from({ length: 5 }).map((_, i) => (
      <button
        key={i}
        type="button"
        className={`focus:outline-none ${
          onRate ? 'cursor-pointer' : 'pointer-events-none'
        }`}
        onClick={onRate ? () => onRate(i + 1) : undefined}
        tabIndex={onRate ? 0 : -1}
        aria-label={onRate ? `Rate ${i + 1} stars` : undefined}
      >
        <StarIcon
          className={`w-5 h-5 ${
            i < rating ? 'text-brand-gold' : 'text-gray-600'
          }`}
        />
      </button>
    ))}
  </div>
);


const ReviewCard = ({ testimonial }) => (
  <motion.div
    className="bg-brand-gray p-8 rounded-lg shadow-lg flex flex-col h-full border border-transparent hover:border-brand-gold/30"
    variants={itemVariants}
    whileHover={{ y: -5, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
  >
    <div className="flex items-center mb-4">
      <img
        src={testimonial.avatarUrl}
        alt={testimonial.name}
        className="w-14 h-14 rounded-full mr-4 border-2 border-brand-gold/50"
      />
      <div>
        <h4 className="font-bold text-lg text-white">{testimonial.name}</h4>
        <p className="text-sm text-gray-400">{testimonial.location}</p>
        {/* {testimonial.email && (
          <p className="text-xs text-gray-500">{testimonial.email}</p>
        )} */}
      </div>
    </div>
    <div className="mb-4">
      <StarRating rating={testimonial.rating} />
    </div>
    <p className="text-gray-300 italic">"{testimonial.review}"</p>
  </motion.div>
);

const Testimonials = () => {
  
  const [userTestimonials, setUserTestimonials] = useState([]);
  const [form, setForm] = useState({
    name: '',
    // email: '',
    location: '',
    review: '',
    rating: 5,
  });
  const [error, setError] = useState('');
  const [showAll, setShowAll] = useState(false);

  
  const getEmailAvatar = (email) => {
    const trimmed = email.trim().toLowerCase();
    if (!trimmed) {
      return `https://picsum.photos/seed/${Date.now()}/100/100`;
    }
    
    const seed = encodeURIComponent(trimmed);
    return `https://www.gravatar.com/avatar/${seed}?d=identicon`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRate = (rating) => {
    setForm((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.review.trim() ||
      form.rating <= 0
    ) {
      setError('Name, email, testimony, and rating are required.');
      return;
    }

    const newTestimonial = {
      name: form.name.trim(),
      email: form.email.trim(),
      location: form.location.trim(),
      review: form.review.trim(),
      rating: form.rating,
      avatarUrl: getEmailAvatar(form.email),
    };

    setUserTestimonials((prev) => [newTestimonial, ...prev]);

    setError('');
    setForm({
      name: '',
      email: '',
      location: '',
      review: '',
      rating: 5,
    });
  };

  
  const allTestimonials = [...userTestimonials, ...defaultTestimonials];

  
  const visibleTestimonials = showAll
    ? allTestimonials
    : allTestimonials.slice(0, 3);

  return (
    <motion.section
      className="py-20 bg-brand-dark"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-brand-gold text-center mb-12">
          From Our Valued Travelers
        </h2>

        
        <div className="max-w-2xl mx-auto bg-brand-gray rounded-lg p-6 mb-14 shadow-lg">
          <h3 className="text-xl font-serif text-white mb-2">
            Share Your Experience
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-300 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-2 text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-2 text-white"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm text-gray-300 mb-1"
                >
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={form.location}
                  onChange={handleChange}
                  className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-2 text-white"
                />
              </div>
              <div>
                <p className="block text-sm text-gray-300 mb-1">Your Rating</p>
                <StarRating rating={form.rating} onRate={handleRate} />
              </div>
            </div>

            <div>
              <label
                htmlFor="review"
                className="block text-sm text-gray-300 mb-1"
              >
                Your Testimony
              </label>
              <textarea
                name="review"
                id="review"
                rows={4}
                required
                value={form.review}
                onChange={handleChange}
                className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-2 text-white resize-none"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-brand-gold text-brand-dark font-bold py-2 px-8 rounded-full hover:bg-white transition-colors"
              >
                Submit Testimonial
              </button>
            </div>
          </form>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <ReviewCard
              key={`${testimonial.email || testimonial.name}-${index}-${testimonial.review.slice(
                0,
                10
              )}`}
              testimonial={testimonial}
            />
          ))}
        </motion.div>

        {/* Toggle button */}
        {allTestimonials.length > 3 && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="text-brand-gold font-semibold hover:underline"
            >
              {showAll ? 'Show fewer testimonials' : 'View all testimonials'}
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Testimonials;
