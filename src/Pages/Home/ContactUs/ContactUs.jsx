import { useState } from 'react';
import './ContactUs.css';
const ContactUs = () => {
    // State variables for form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { name, email, message });
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='flex bg5 items-center justify-center py-9'>
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <form onSubmit={handleSubmit} className="max-w-md text-center m-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
                            rows="5"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
