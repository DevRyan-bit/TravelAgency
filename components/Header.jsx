import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Book a Trip', path: '/booking' },
    { name: 'Contact', path: '/contact' },
    { name: 'Admin', path: '/admin' },
];
const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20 },
};
const mobileLinkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
};
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    useEffect(() => {
        setIsOpen(false);
    }, [location]);
    return (<header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="text-2xl md:text-3xl font-serif font-bold text-brand-gold tracking-wider">
            Travel Agency
          </NavLink>
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (<NavLink key={link.name} to={link.path} className={({ isActive }) => `text-sm uppercase tracking-widest transition-colors duration-300 hover:text-brand-gold ${isActive ? 'text-brand-gold' : 'text-brand-light'}`}>
                {link.name}
              </NavLink>))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-light focus:outline-none z-50 relative">
              {isOpen ? <XMarkIcon className="h-7 w-7"/> : <Bars3Icon className="h-7 w-7"/>}
            </button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (<motion.div variants={mobileMenuVariants} initial="hidden" animate="visible" exit="exit" className="md:hidden absolute top-0 left-0 w-full bg-brand-dark/95 backdrop-blur-lg pt-24">
            <nav className="flex flex-col items-center space-y-6 py-8">
              {NAV_LINKS.map((link) => (<motion.div variants={mobileLinkVariants} key={link.name}>
                  <NavLink to={link.path} className={({ isActive }) => `text-lg uppercase tracking-widest transition-colors duration-300 hover:text-brand-gold ${isActive ? 'text-brand-gold' : 'text-brand-light'}`}>
                    {link.name}
                  </NavLink>
                </motion.div>))}
            </nav>
          </motion.div>)}
      </AnimatePresence>
    </header>);
};
export default Header;
