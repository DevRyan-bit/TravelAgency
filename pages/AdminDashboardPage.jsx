import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChartPieIcon, ClipboardDocumentListIcon, ChatBubbleBottomCenterTextIcon, MapIcon, SparklesIcon, UsersIcon, ShieldCheckIcon, ArrowLeftOnRectangleIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { AppContext } from '../context/AppContext';
import DashboardHome from '../components/admin/DashboardHome';
import ManageBookings from '../components/admin/ManageBookings';
import ManageMessages from '../components/admin/ManageMessages';
import ManageDestinations from '../components/admin/ManageDestinations';
import ManageServices from '../components/admin/ManageServices';
import ManageStaff from '../components/admin/ManageStaff';
import ClientHistory from '../components/admin/ClientHistory';
const AdminDashboardPage = () => {
    const { isAuthenticated, currentUser, logout } = useContext(AppContext);
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/admin');
        }
    }, [isAuthenticated, navigate]);
    const handleLogout = () => {
        logout();
        navigate('/admin');
    };
    const renderSection = () => {
        switch (activeSection) {
            case 'dashboard': return <DashboardHome />;
            case 'bookings': return <ManageBookings />;
            case 'messages': return <ManageMessages />;
            case 'destinations': return <ManageDestinations />;
            case 'services': return <ManageServices />;
            case 'client-history': return <ClientHistory />;
            case 'staff': return <ManageStaff />;
            default: return <DashboardHome />;
        }
    };
    const NavItem = ({ section, icon, label }) => (<button onClick={() => { setActiveSection(section); setIsSidebarOpen(false); }} className={`flex items-center w-full px-4 py-3 text-left transition-colors duration-200 rounded-md ${activeSection === section ? 'bg-brand-gold text-brand-dark font-bold' : 'text-gray-300 hover:bg-brand-gray'}`}>
      <span className="w-6 h-6 mr-3">{icon}</span>
      <span>{label}</span>
    </button>);
    const sidebarContent = (<>
      <div className="px-4 py-6">
        <h2 className="text-xl font-serif font-bold text-brand-gold">Admin Panel</h2>
        <p className="text-sm text-gray-400">Welcome, {currentUser?.name}</p>
      </div>
      <nav className="flex-grow px-4 pb-4 space-y-2">
        <NavItem section="dashboard" icon={<ChartPieIcon />} label="Dashboard"/>
        <NavItem section="bookings" icon={<ClipboardDocumentListIcon />} label="Bookings"/>
        <NavItem section="messages" icon={<ChatBubbleBottomCenterTextIcon />} label="Messages"/>
        <NavItem section="destinations" icon={<MapIcon />} label="Destinations"/>
        <NavItem section="services" icon={<SparklesIcon />} label="Services"/>
        <NavItem section="client-history" icon={<UsersIcon />} label="Client History"/>
        <NavItem section="staff" icon={<ShieldCheckIcon />} label="Manage Staff"/>
      </nav>
      <div className="px-4 py-4 border-t border-brand-gold/20">
        <button onClick={handleLogout} className="flex items-center w-full px-4 py-3 text-left text-gray-300 transition-colors duration-200 rounded-md hover:bg-brand-gray">
          <ArrowLeftOnRectangleIcon className="w-6 h-6 mr-3"/>
          <span>Logout</span>
        </button>
      </div>
    </>);
    if (!isAuthenticated) {
        return null; 
    }
    return (<div className="flex min-h-[calc(100vh-150px)]">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-brand-dark border-r border-brand-gold/20">
        {sidebarContent}
      </aside>
      
      {/* Mobile Sidebar */}
       <AnimatePresence>
        {isSidebarOpen && (<motion.aside initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="fixed inset-y-0 left-0 z-50 flex flex-col w-64 bg-brand-dark border-r border-brand-gold/20 lg:hidden">
            {sidebarContent}
          </motion.aside>)}
      </AnimatePresence>


      
      <main className="flex-1 p-6 lg:p-10 bg-brand-dark">
         <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-serif text-white capitalize">{activeSection.replace('-', ' ')}</h1>
            <button className="lg:hidden text-brand-light" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                {isSidebarOpen ? <XMarkIcon className="w-7 h-7"/> : <Bars3Icon className="w-7 h-7"/>}
            </button>
         </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeSection} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>);
};
export default AdminDashboardPage;
