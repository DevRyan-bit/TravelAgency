import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import Modal from './Modal';
import { motion } from 'framer-motion';
import { PencilIcon } from '@heroicons/react/24/outline';
const ManageServices = () => {
    const { services, updateService } = useContext(AppContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingService, setEditingService] = useState(null);
    const [formData, setFormData] = useState({ name: '', description: '' });
    useEffect(() => {
        if (editingService) {
            setFormData({ name: editingService.name, description: editingService.description });
        }
    }, [editingService]);
    const openModalForEdit = (service) => {
        setEditingService(service);
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingService(null);
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingService) {
            updateService({ ...editingService, ...formData });
        }
        handleCloseModal();
    };
    return (<div className="bg-brand-gray p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-serif text-white mb-6">Manage Services</h2>
            <p className="text-gray-400 mb-6 text-sm">Update the details for the services featured on the homepage. Adding or deleting services requires code changes as they are structurally integral to the page layout.</p>
            
            <div className="space-y-4">
                {services.map((service) => (<div key={service.id} className="bg-brand-dark p-4 rounded-lg flex justify-between items-center">
                       <div>
                           <h3 className="font-bold text-lg text-white">{service.name}</h3>
                           <p className="text-gray-400 text-sm">{service.description}</p>
                       </div>
                       <button onClick={() => openModalForEdit(service)} className="text-gray-400 hover:text-white flex-shrink-0 ml-4">
                           <PencilIcon className="w-5 h-5"/>
                       </button>
                    </div>))}
            </div>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={`Editing: ${editingService?.name}`}>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Service Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-2 text-white"/>
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">Description</label>
                        <textarea name="description" rows={4} value={formData.description} onChange={handleChange} required className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-2 text-white resize-none"/>
                    </div>
                    <div className="pt-4 flex justify-end">
                         <motion.button type="submit" className="bg-brand-gold text-brand-dark font-bold py-2 px-6 rounded-md">
                            Save Changes
                        </motion.button>
                    </div>
                </form>
            </Modal>
        </div>);
};
export default ManageServices;
