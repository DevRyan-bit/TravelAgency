import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import Modal from './Modal';
import { motion } from 'framer-motion';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
const ManageDestinations = () => {
    const { destinations, addDestination, updateDestination, deleteDestination } = useContext(AppContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingDest, setEditingDest] = useState(null);
    const [formData, setFormData] = useState({ name: '', country: '', imageUrl: '', description: '' });
    useEffect(() => {
        if (editingDest) {
            setFormData({ name: editingDest.name, country: editingDest.country, imageUrl: editingDest.imageUrl, description: editingDest.description });
        }
        else {
            setFormData({ name: '', country: '', imageUrl: '', description: '' });
        }
    }, [editingDest]);
    const openModalForNew = () => {
        setEditingDest(null);
        setIsModalOpen(true);
    };
    const openModalForEdit = (dest) => {
        setEditingDest(dest);
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingDest(null);
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingDest) {
            updateDestination({ ...editingDest, ...formData });
        }
        else {
            addDestination(formData);
        }
        handleCloseModal();
    };
    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this destination?')) {
            deleteDestination(id);
        }
    };
    return (<div className="bg-brand-gray p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-serif text-white">Manage Destinations</h2>
                <motion.button onClick={openModalForNew} className="flex items-center bg-brand-gold text-brand-dark font-bold py-2 px-4 rounded-md hover:bg-white transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <PlusIcon className="w-5 h-5 mr-2"/> Add Destination
                </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destinations.map(dest => (<div key={dest.id} className="bg-brand-dark rounded-lg shadow-md overflow-hidden relative group">
                        <img src={dest.imageUrl} alt={dest.name} className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h3 className="font-bold text-lg text-white">{dest.name}, <span className="font-normal text-gray-300">{dest.country}</span></h3>
                            <p className="text-sm text-gray-400 mt-1 truncate">{dest.description}</p>
                        </div>
                        <div className="absolute top-2 right-2 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 p-1 rounded-md">
                           <button onClick={() => openModalForEdit(dest)} className="text-gray-300 hover:text-white"><PencilIcon className="w-5 h-5"/></button>
                           <button onClick={() => handleDelete(dest.id)} className="text-gray-300 hover:text-red-500"><TrashIcon className="w-5 h-5"/></button>
                        </div>
                    </div>))}
            </div>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={editingDest ? 'Edit Destination' : 'Add New Destination'}>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-2 text-white"/>
                        </div>
                        <div>
                            <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-1">Country</label>
                            <input type="text" name="country" value={formData.country} onChange={handleChange} required className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-2 text-white"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-300 mb-1">Image URL</label>
                        <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-2 text-white"/>
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">Description</label>
                        <textarea name="description" rows={3} value={formData.description} onChange={handleChange} required className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-2 text-white resize-none"/>
                    </div>
                    <div className="pt-4 flex justify-end">
                         <motion.button type="submit" className="bg-brand-gold text-brand-dark font-bold py-2 px-6 rounded-md">
                            {editingDest ? 'Save Changes' : 'Add Destination'}
                        </motion.button>
                    </div>
                </form>
            </Modal>
        </div>);
};
export default ManageDestinations;
