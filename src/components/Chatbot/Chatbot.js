import React, { useState } from 'react';

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = () => {
    if (message.trim() !== '') {
      setChatHistory([...chatHistory, { type: 'user', text: message }]);
      setMessage('');
      // Add logic for chatbot response here
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isChatOpen ? (
        <div className="bg-black rounded-lg border border-zinc-900 shadow-2xl max-w-md">
          {/* Header */}
          <div className="flex justify-between bg-zinc-900 p-2 rounded-t-lg">
            <div className="text-white text-lg font-semibold">Chatbot</div>
            <button
              className="text-gray-300 hover:text-white"
              onClick={toggleChat}
            >
              X
            </button>
          </div>

          {/* Chat content */}
          <div className="p-4">
            <div className="max-h-80 overflow-y-auto mb-4 w-96">
              {/* Display chat history */}
              {chatHistory.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 p-2 rounded ${msg.type === 'user' ? 'bg-slate-900' : 'bg-blue-100'}`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={handleInputChange}
                className="flex-1 border border-gray-700 font-mono bg-midnight  rounded px-2 py-1"
              />
              <button
                onClick={handleSendClick}
                className="bg-slate-400 text-black px-4 py-2 rounded ml-2"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={toggleChat}
        >
          Open Chat
        </button>
      )}
    </div>
  );
};

export default Chatbot;
