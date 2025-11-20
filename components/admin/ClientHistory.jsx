import React, { useContext, useMemo } from 'react';
import { AppContext } from '../../context/AppContext';
const ClientHistory = () => {
    const { bookings } = useContext(AppContext);
    const clients = useMemo(() => {
        const clientMap = new Map();
        bookings.forEach(booking => {
            const existingClient = clientMap.get(booking.email);
            if (existingClient) {
                existingClient.tripCount += 1;
            }
            else {
                clientMap.set(booking.email, {
                    email: booking.email,
                    name: booking.fullName,
                    tripCount: 1
                });
            }
        });
        return Array.from(clientMap.values()).sort((a, b) => b.tripCount - a.tripCount);
    }, [bookings]);
    return (<div className="bg-brand-gray p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-serif text-white mb-4">Client Travel History</h2>
            <p className="text-gray-400 mb-6 text-sm">This is a read-only list of unique clients generated from booking submissions.</p>
            
            {clients.length === 0 ? (<p className="text-gray-400">No client history available. Bookings will populate this list.</p>) : (<div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-300">
                        <thead className="text-xs text-brand-gold uppercase bg-brand-dark">
                            <tr>
                                <th scope="col" className="px-6 py-3">Client Name</th>
                                <th scope="col" className="px-6 py-3">Email</th>
                                <th scope="col" className="px-6 py-3">Total Trips Booked</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client) => (<tr key={client.email} className="border-b border-brand-gold/20 hover:bg-brand-dark">
                                    <td className="px-6 py-4 font-medium text-white">{client.name}</td>
                                    <td className="px-6 py-4">{client.email}</td>
                                    <td className="px-6 py-4 text-center">{client.tripCount}</td>
                                </tr>))}
                        </tbody>
                    </table>
                </div>)}
        </div>);
};
export default ClientHistory;
