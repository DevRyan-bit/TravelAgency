import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
const ManageBookings = () => {
    const { bookings } = useContext(AppContext);
    return (<div className="bg-brand-gray p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-serif text-white mb-4">Manage Bookings</h2>
            
            {bookings.length === 0 ? (<p className="text-gray-400">No bookings have been submitted yet.</p>) : (<div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-300">
                        <thead className="text-xs text-brand-gold uppercase bg-brand-dark">
                            <tr>
                                <th scope="col" className="px-6 py-3">Client Name</th>
                                <th scope="col" className="px-6 py-3">Destination</th>
                                <th scope="col" className="px-6 py-3">Dates</th>
                                <th scope="col" className="px-6 py-3">Travelers</th>
                                <th scope="col" className="px-6 py-3">Submitted At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking) => (<tr key={booking.id} className="border-b border-brand-gold/20 hover:bg-brand-dark">
                                    <td className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                        {booking.fullName}<br />
                                        <span className="font-normal text-gray-400">{booking.email}</span>
                                    </td>
                                    <td className="px-6 py-4">{booking.destination}</td>
                                    <td className="px-6 py-4">{booking.departureDate} to {booking.returnDate}</td>
                                    <td className="px-6 py-4">{booking.travelers}</td>
                                    <td className="px-6 py-4">{booking.submittedAt.toLocaleString()}</td>
                                </tr>))}
                        </tbody>
                    </table>
                </div>)}
        </div>);
};
export default ManageBookings;
