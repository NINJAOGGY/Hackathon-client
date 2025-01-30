import React from "react";

const Chatbot = ({ setIsChatOpen }) => {
  return (
    <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 w-80 h-96 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Chat Support</h3>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={() => setIsChatOpen(false)} // Close the chat using the passed prop
        >
          &#x2715;
        </button>
      </div>
      <div className="overflow-y-auto h-full">
        <p>Chatbot will go here...</p>
      </div>
    </div>
  );
};

export default Chatbot;
