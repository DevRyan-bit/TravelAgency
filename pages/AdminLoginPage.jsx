import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/24/solid';
import { AppContext } from '../context/AppContext';
const AdminLoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AppContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        // change the required email but do some further fixes n staff
        if (email === 'admin@gmail.com' && password === 'admin') {
            login({ id: 'superadmin', name: 'Super Admin', email: 'admin@gmail.com', role: 'Super Admin' });
            navigate('/admin/dashboard');
        }
        else {
            setError('Invalid email or password.');
        }
    };
    return (<motion.div className="container mx-auto px-6 py-16 flex flex-col items-center justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
           <LockClosedIcon className="w-16 h-16 text-brand-gold mx-auto mb-4"/>
          <h1 className="text-4xl font-serif text-brand-gold mb-2">Admin Portal</h1>
          <p className="text-gray-400">Secure sign-in for staff.</p>
        </div>

        <div className="bg-brand-gray p-8 rounded-lg shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-3 text-white focus:ring-brand-gold focus:border-brand-gold transition"/>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-3 text-white focus:ring-brand-gold focus:border-brand-gold transition"/>
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <div>
              <motion.button type="submit" className="w-full bg-brand-gold text-brand-dark font-bold py-3 px-6 rounded-full uppercase tracking-wider hover:bg-white transition-colors duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Sign In
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>);
};
export default AdminLoginPage;
