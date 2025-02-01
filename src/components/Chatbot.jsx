import React from "react";

const Chatbot = ({ setIsChatOpen }) => {
  return (
    <div className="bg-gray-300 border border-gray-300 rounded-lg p-4 w-[10cm] h-[16cm] shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Chat Support</h3>
        <button
          className="text-gray-600 hover:text-gray-700"
          onClick={() => setIsChatOpen(false)} // Close the chat using the passed prop
        >
          &#x2715;
        </button>
      </div>
      <div className="overflow-y-auto h-full">
        <textarea className='bg-white rounded-md p-5 '>Chatbot will go here...</textarea>
      </div>
    </div>
  );
};

export default Chatbot;
