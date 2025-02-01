import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Chatbot from './Chatbot';
import Sos from './Sos';
import Footer from './Footer';
import EmergencyContacts from './EmergencyContacts';
import DisasterNews from './DisasterNews';
import WeatherForecast from './WeatherForecast';

const Home = () => {
    return (
        <div className="relative flex flex-col min-h-screen">
            {/* Navbar */}
            <nav className="bg-blue-500 text-white p-4 flex items-center justify-between">
                <h2 className="text-lg font-bold">Crisis Management</h2>
                <div className="space-x-8">
                    <Link to="#donation" className="hover:underline">Donation</Link>
                    <Link to="/about" className="hover:underline">About</Link>
                    <Link to="#testimonials" className="hover:underline">Testimonials</Link>
                </div>
                <button className="bg-white text-blue-500 px-4 py-2 rounded">Profile</button>
            </nav>

            {/* Three Sections */}
            <div className='flex justify-between items-start p-6 gap-6'>
                {/* Left Section - Disaster News */}
                <div className="flex-1 p-4 bg-gray-100 rounded-lg shadow border border-gray-300">
                    <h2 className="text-lg font-bold mb-2">Latest Disaster News</h2>
                    <DisasterNews />
                </div>

                {/* Center Section - Weather Forecast */}
                <div className="flex-1 p-4 bg-gray-100 rounded-lg shadow border border-gray-300">
                    <h2 className="text-lg font-bold mb-2">Weather Forecast</h2>
                    <WeatherForecast />
                </div>

                {/* Right Section - SOS & Emergency Contacts */}
                <div className="flex-1 p-4 bg-gray-100 rounded-lg shadow border border-gray-300 flex flex-col items-center">
                    <Sos />
                    <EmergencyContacts />
                </div>
            </div>

            {/* Chatbot Button - Fixed Bottom Left */}
            <div className="fixed bottom-4 right-4">
                <ChatbotButton />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};



const ChatbotButton = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <>
            {isChatOpen ? (
                <Chatbot setIsChatOpen={setIsChatOpen} />
            ) : (
                <button
                    className="bg-blue-500 text-white rounded-full w-16 h-16 shadow-lg flex items-center justify-center hover:bg-blue-600"
                    onClick={() => setIsChatOpen(true)} // Open the chat when clicked
                >
                    💬
                </button>
            )}
        </>
    );
};

export default Home
