import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([{id: 1, type: 'bot', message: 'Hello! How can I help you?'}]);

  // Ref for the chat container
  const chatContainerRef = useRef(null);

  // Effect to scroll to the bottom of the chat on chat history update
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);


  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = async () => {
    if (message.trim() !== '') {
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { id: prevChatHistory.length + 1, type: 'user', message: message },
      ]);
  
      const question = message;
      setMessage('');

      try {
        const response = await fetch('https://syntactic-backend-d1b6d0af8db5.herokuapp.com/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ question: question }),
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
  
        const result = await response.json();
        console.log(result);
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          {
            id: prevChatHistory.length + 1,
            type: 'bot',
            message: result,
          },
        ]);
      } catch (error) {
          console.error('Error:', error.message);
      }
  
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
            <div className="flex flex-col max-h-80 overflow-y-auto mb-4 w-96" ref={chatContainerRef}>
              {/* Display chat history */}
              {chatHistory.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-8 p-2 rounded w-fit max-w-xs ${msg.type === 'user' ? 'bg-blue-500 self-end' : 'bg-slate-800'}`}
                >
                  {msg.message}
                </div>
              ))}
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={handleInputChange}
                className="flex-1 border border-gray-700 font-mono bg-midnight  rounded px-2 py-1 break-all"
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