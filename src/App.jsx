import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Chatbot from './components/Chatbot';
import Sos from './components/Sos';
import Footer from './components/Footer';
import EmergencyContacts from './components/EmergencyContacts';

const Home = () => (
  <div className="relative flex flex-col min-h-screen">
    {/* Navbar */}
    <nav className="bg-blue-500 text-white p-4 flex items-center">
      <h2 className="text-lg font-bold mr-[10cm]">Crisis Management</h2>
      <div className="space-x-[2cm]">
        <Link to="#donation" className="hover:underline">Donation</Link>
        <Link to="#about" className="hover:underline">About</Link>
        <Link to="#testimonials" className="hover:underline">Testimonials</Link>
      </div>
      <div>
        <button className="ml-[12cm]">Profile</button>
      </div>
    </nav>

    {/* Main Content (Hero Section) */}
    <div className="flex-1 flex flex-col justify-center items-center text-center p-4 z-10">
      <section className="text-white relative">
        <button className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600">
          Get Started
        </button>
      </section>
    </div>

    {/* SOS Button */}
    <Sos />

    {/* Emergency Contacts */}
    <EmergencyContacts/>

    {/* Footer */}
    <Footer />

    {/* Chatbot Button and Panel */}
    <div className="fixed bottom-4 right-4">
      <ChatbotButton />
    </div>
  </div>
);

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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
