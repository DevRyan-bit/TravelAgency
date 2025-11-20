import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) {
            
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, []);
    const handleConsent = (consent) => {
        localStorage.setItem('cookie_consent', consent);
        setIsVisible(false);
    };
    return (<AnimatePresence>
      {isVisible && (<motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="fixed bottom-0 left-0 right-0 z-[60] bg-brand-gray/90 backdrop-blur-md p-5 border-t border-brand-gold/20 shadow-2xl">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-300 text-center md:text-left">
              We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
            </p>
            <div className="flex items-center gap-4 flex-shrink-0">
              <button onClick={() => handleConsent('declined')} className="text-sm text-gray-400 hover:text-white transition-colors">
                Decline
              </button>
              <motion.button onClick={() => handleConsent('accepted')} className="bg-brand-gold text-brand-dark font-bold py-2 px-6 rounded-full text-sm hover:bg-white transition-colors duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Accept
              </motion.button>
            </div>
          </div>
        </motion.div>)}
    </AnimatePresence>);
};
export default CookieConsent;
