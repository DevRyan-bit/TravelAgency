import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../../context/AppContext';
import { ClipboardDocumentListIcon, ChatBubbleBottomCenterTextIcon, UserGroupIcon, MapIcon } from '@heroicons/react/24/outline';
const StatCard = ({ title, value, icon }) => (<div className="bg-brand-gray p-6 rounded-lg shadow-lg flex items-center space-x-4">
        <div className="bg-brand-dark p-3 rounded-full">
            {icon}
        </div>
        <div>
            <p className="text-gray-400 text-sm">{title}</p>
            <p className="text-2xl font-bold text-white">{value}</p>
        </div>
    </div>);
const DashboardHome = () => {
    const { bookings, messages, destinations } = useContext(AppContext);
    return (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard title="Total Bookings" value={bookings.length} icon={<ClipboardDocumentListIcon className="w-8 h-8 text-brand-gold"/>}/>
                <StatCard title="New Messages" value={messages.length} icon={<ChatBubbleBottomCenterTextIcon className="w-8 h-8 text-brand-gold"/>}/>
                <StatCard title="Managed Destinations" value={destinations.length} icon={<MapIcon className="w-8 h-8 text-brand-gold"/>}/>
                <StatCard title="Site Visitors (24h)" value="1,403" icon={<UserGroupIcon className="w-8 h-8 text-brand-gold"/>}/>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-brand-gray p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-serif text-white mb-4">Recent Bookings</h3>
                    <div className="space-y-4">
                        {bookings.length > 0 ? bookings.slice(0, 5).map(b => (<div key={b.id} className="bg-brand-dark p-3 rounded-md">
                                <p className="font-semibold text-brand-light">{b.fullName} - <span className="font-normal">{b.destination}</span></p>
                                <p className="text-xs text-gray-400">{b.submittedAt.toLocaleString()}</p>
                            </div>)) : <p className="text-gray-400">No recent bookings.</p>}
                    </div>
                </div>

                <div className="bg-brand-gray p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-serif text-white mb-4">Recent Messages</h3>
                     <div className="space-y-4">
                        {messages.length > 0 ? messages.slice(0, 5).map(m => (<div key={m.id} className="bg-brand-dark p-3 rounded-md">
                                <p className="font-semibold text-brand-light">{m.name} <span className="font-normal text-gray-400">&lt;{m.email}&gt;</span></p>
                                <p className="text-xs text-gray-400 truncate">{m.message}</p>
                            </div>)) : <p className="text-gray-400">No recent messages.</p>}
                    </div>
                </div>
            </div>
        </motion.div>);
};
export default DashboardHome;
