// import React, { createContext, useState } from 'react';
// // --- MOCK INITIAL DATA ---
// const initialDestinations = [
//     { id: 'dest1', name: 'Santorini', country: 'Greece', imageUrl: 'https://picsum.photos/seed/santorini/800/1200', description: 'Iconic blue-domed churches and stunning sunsets.' },
//     { id: 'dest2', name: 'Kyoto', country: 'Japan', imageUrl: 'https://picsum.photos/seed/kyoto/800/1200', description: 'Ancient temples, sublime gardens, and traditional geishas.' },
//     { id: 'dest3', name: 'Amalfi Coast', country: 'Italy', imageUrl: 'https://picsum.photos/seed/amalfi/800/1200', description: 'Sheer cliffs and a rugged shoreline dotted with small beaches.' },
// ];
// const initialServices = [
//     { id: 'serv1', name: 'Global Destinations', description: 'From the vibrant streets of Tokyo to the serene beaches of the Maldives, we cover every corner of the globe.' },
//     { id: 'serv2', name: 'Bespoke Itineraries', description: 'Your journey is uniquely yours. We tailor every aspect to your personal tastes and desires.' },
//     { id: 'serv3', name: 'Expert Guidance', description: 'Our seasoned travel connoisseurs provide unparalleled insights and 24/7 support throughout your adventure.' },
// ];
// const initialStaff = [
//     { id: 'superadmin', name: 'Super Admin', email: 'admin@gmail.com', role: 'Super Admin' },
//     { id: 'admin2', name: 'Jane Doe', email: 'jane@elysiantravels.com', role: 'Admin' }
// ];
// export const AppContext = createContext({});
// export const AppProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState(null);
//     const [bookings, setBookings] = useState([]);
//     const [messages, setMessages] = useState([]);
//     const [destinations, setDestinations] = useState(initialDestinations);
//     const [services, setServices] = useState(initialServices);
//     const [staff, setStaff] = useState(initialStaff);
//     const login = (user) => setCurrentUser(user);
//     const logout = () => setCurrentUser(null);
//     const isAuthenticated = !!currentUser;
//     const addBooking = (booking) => {
//         const newBooking = {
//             ...booking,
//             id: `book_${Date.now()}`,
//             submittedAt: new Date(),
//         };
//         setBookings(prev => [newBooking, ...prev]);
//     };
//     const addMessage = (message) => {
//         const newMessage = {
//             ...message,
//             id: `msg_${Date.now()}`,
//             submittedAt: new Date(),
//         };
//         setMessages(prev => [newMessage, ...prev]);
//     };
//     // Destination Management
//     const updateDestination = (updatedDest) => setDestinations(prev => prev.map(d => d.id === updatedDest.id ? updatedDest : d));
//     const addDestination = (dest) => setDestinations(prev => [...prev, { ...dest, id: `dest_${Date.now()}` }]);
//     const deleteDestination = (id) => setDestinations(prev => prev.filter(d => d.id !== id));
//     // Service Management
//     const updateService = (updatedServ) => setServices(prev => prev.map(s => s.id === updatedServ.id ? updatedServ : s));
//     // Staff Management
//     const updateStaff = (updatedStaff) => setStaff(prev => prev.map(s => s.id === updatedStaff.id ? updatedStaff : s));
//     const addStaff = (staffMember) => setStaff(prev => [...prev, { ...staffMember, id: `staff_${Date.now()}` }]);
//     const deleteStaff = (id) => setStaff(prev => prev.filter(s => s.id !== id));
//     return (<AppContext.Provider value={{
//             isAuthenticated,
//             currentUser,
//             login,
//             logout,
//             bookings,
//             addBooking,
//             messages,
//             addMessage,
//             destinations,
//             updateDestination,
//             addDestination,
//             deleteDestination,
//             services,
//             updateService,
//             staff,
//             updateStaff,
//             addStaff,
//             deleteStaff
//         }}>
//             {children}
//         </AppContext.Provider>);
// };


import React, { createContext, useState } from 'react';
const initialDestinations = [
    // ... as previously provided
];
const initialServices = [
    // ... as previously provided
];
const initialStaff = [
    // ... as previously provided
];
export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [bookings, setBookings] = useState([]);
    const [messages, setMessages] = useState([]);
    const [destinations, setDestinations] = useState(initialDestinations);
    const [services, setServices] = useState(initialServices);
    const [staff, setStaff] = useState(initialStaff);

    const login = user => setCurrentUser(user);
    const logout = () => setCurrentUser(null);
    const isAuthenticated = !!currentUser;
    const addBooking = (booking) => {
        const newBooking = {
            ...booking,
            id: `book_${Date.now()}`,
            submittedAt: new Date()  // ensures .toLocaleString() works!
        };
        setBookings(prev => [newBooking, ...prev]);
    };
    const addMessage = (message) => {
        const newMessage = {
            ...message,
            id: `msg_${Date.now()}`,
            submittedAt: new Date()  
        };
        setMessages(prev => [newMessage, ...prev]);
    };
   

    return (
        <AppContext.Provider value={{
            isAuthenticated,
            currentUser,
            login,
            logout,
            bookings,
            addBooking,
            messages,
            addMessage,
            destinations,
            updateDestination: updatedDest => setDestinations(prev => prev.map(d => d.id === updatedDest.id ? updatedDest : d)),
            addDestination: dest => setDestinations(prev => [...prev, { ...dest, id: `dest_${Date.now()}` }]),
            deleteDestination: id => setDestinations(prev => prev.filter(d => d.id !== id)),
            services,
            updateService: updatedServ => setServices(prev => prev.map(s => s.id === updatedServ.id ? updatedServ : s)),
            staff,
            updateStaff: updatedStaff => setStaff(prev => prev.map(s => s.id === updatedStaff.id ? updatedStaff : s)),
            addStaff: staffMember => setStaff(prev => [...prev, { ...staffMember, id: `staff_${Date.now()}` }]),
            deleteStaff: id => setStaff(prev => prev.filter(s => s.id !== id)),
        }}>
            {children}
        </AppContext.Provider>
    );
};
