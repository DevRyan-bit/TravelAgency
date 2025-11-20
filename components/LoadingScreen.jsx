import React from 'react';
import { motion } from 'framer-motion';
const LoadingScreen = () => {
    return (<motion.div className="fixed inset-0 bg-brand-dark flex items-center justify-center z-[100]" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-gold tracking-wider shimmer">
          Travel Agency
        </h1>
      </motion.div>
    </motion.div>);
};
export default LoadingScreen;
