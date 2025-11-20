import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';
const Modal = ({ isOpen, onClose, title, children }) => {
    return (<AnimatePresence>
      {isOpen && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={onClose}>
          <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="relative bg-brand-gray rounded-lg shadow-2xl w-full max-w-lg m-4" onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
            <div className="flex items-center justify-between p-5 border-b border-brand-gold/20">
              <h3 className="text-2xl font-serif text-white">{title}</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                <XMarkIcon className="w-6 h-6"/>
              </button>
            </div>
            <div className="p-6">
              {children}
            </div>
          </motion.div>
        </motion.div>)}
    </AnimatePresence>);
};
export default Modal;
