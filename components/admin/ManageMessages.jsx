import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
const ManageMessages = () => {
    const { messages } = useContext(AppContext);
    return (<div className="bg-brand-gray p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-serif text-white mb-4">Manage Contact Messages</h2>
            
            {messages.length === 0 ? (<p className="text-gray-400">No messages have been received yet.</p>) : (<div className="space-y-4">
                    {messages.map((message) => (<details key={message.id} className="bg-brand-dark p-4 rounded-lg cursor-pointer">
                           <summary className="font-semibold text-white">
                               From: {message.name} <span className="text-gray-400 font-normal">&lt;{message.email}&gt;</span>
                               <span className="text-xs text-gray-500 float-right pt-1">{message.submittedAt.toLocaleString()}</span>
                           </summary>
                           <p className="mt-3 pt-3 border-t border-brand-gold/20 text-gray-300 whitespace-pre-wrap">
                               {message.message}
                           </p>
                       </details>))}
                </div>)}
        </div>);
};
export default ManageMessages;
