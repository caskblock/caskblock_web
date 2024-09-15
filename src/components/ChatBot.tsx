import React, { useState, useEffect } from 'react';

const ChatBot: React.FC = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setShowChatbot(params.get('chatbot') === 'true');
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput('');
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Let me think about it...", isUser: false }]);
      }, 1000);
    }
  };

  if (!showChatbot) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white shadow-lg rounded-lg w-80 h-96 flex flex-col">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">CaskBlock Concierge</h3>
            <button onClick={toggleChat} className="text-xl">&times;</button>
          </div>
          <div className="flex-grow overflow-y-auto p-4">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.isUser ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${msg.isUser ? 'bg-blue-100' : 'bg-gray-200'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="w-full p-2 border rounded-lg"
            />
          </form>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          Chat with Concierge
        </button>
      )}
    </div>
  );
};

export default ChatBot;
