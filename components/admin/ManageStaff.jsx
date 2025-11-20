import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import Modal from './Modal';
import { motion } from 'framer-motion';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
const ManageStaff = () => {
    const { staff, addStaff, updateStaff, deleteStaff, currentUser } = useContext(AppContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingStaff, setEditingStaff] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', role: 'Admin' });
    useEffect(() => {
        if (editingStaff) {
            setFormData({ name: editingStaff.name, email: editingStaff.email, role: editingStaff.role });
        }
        else {
            setFormData({ name: '', email: '', role: 'Admin' });
        }
    }, [editingStaff]);
    const openModalForNew = () => {
        setEditingStaff(null);
        setIsModalOpen(true);
    };
    const openModalForEdit = (staffMember) => {
        setEditingStaff(staffMember);
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingStaff(null);
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingStaff) {
            updateStaff({ ...editingStaff, ...formData });
        }
        else {
            addStaff(formData);
        }
        handleCloseModal();
    };
    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this staff member?')) {
            deleteStaff(id);
        }
    };
    return (<div className="bg-brand-gray p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-serif text-white">Manage Staff</h2>
                <motion.button onClick={openModalForNew} className="flex items-center bg-brand-gold text-brand-dark font-bold py-2 px-4 rounded-md hover:bg-white transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <PlusIcon className="w-5 h-5 mr-2"/> Add Staff
                </motion.button>
            </div>
            
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-300">
                    <thead className="text-xs text-brand-gold uppercase bg-brand-dark">
                        <tr>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Email</th>
                            <th scope="col" className="px-6 py-3">Role</th>
                            <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {staff.map((member) => (<tr key={member.id} className="border-b border-brand-gold/20 hover:bg-brand-dark">
                                <td className="px-6 py-4 font-medium text-white">{member.name}</td>
                                <td className="px-6 py-4">{member.email}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${member.role === 'Super Admin' ? 'bg-yellow-500/20 text-yellow-300' : 'bg-blue-500/20 text-blue-300'}`}>
                                        {member.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4 flex items-center space-x-3">
                                    <button onClick={() => openModalForEdit(member)} className="text-gray-400 hover:text-white"><PencilIcon className="w-5 h-5"/></button>
                                    <button onClick={() => handleDelete(member.id)} disabled={member.id === currentUser?.id} className="text-gray-400 hover:text-red-500 disabled:text-gray-600 disabled:cursor-not-allowed">
                                        <TrashIcon className="w-5 h-5"/>
                                    </button>
                                </td>
                            </tr>))}
                    </tbody>
                </table>
            </div>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={editingStaff ? 'Edit Staff Member' : 'Add New Staff Member'}>
                <form onSubmit={handleSubmit} className="space-y-4">
                     <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-2 text-white"/>
                    </div>
                     <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-2 text-white"/>
                    </div>
                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">Role</label>
                        <select name="role" id="role" value={formData.role} onChange={handleChange} className="w-full bg-brand-dark border border-brand-gold/30 rounded-md p-2 text-white">
                            <option>Admin</option>
                            <option>Super Admin</option>
                        </select>
                    </div>
                    <div className="pt-4 flex justify-end">
                         <motion.button type="submit" className="bg-brand-gold text-brand-dark font-bold py-2 px-6 rounded-md" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            {editingStaff ? 'Save Changes' : 'Add Staff'}
                        </motion.button>
                    </div>
                </form>
            </Modal>
        </div>);
};
export default ManageStaff;
