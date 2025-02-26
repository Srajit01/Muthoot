import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Send, MessageCircle } from 'lucide-react';

const ChatbotSupport = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([
    { type: 'bot', text: 'Hello! How can I assist you today?' },
    { type: 'user', text: 'I need help with my loan application.' },
    { type: 'bot', text: 'I can help you with that. What specific information do you need about the loan application process?' }
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setChat([...chat, { type: 'user', text: message }]);
      setMessage('');
      // Simulate bot response
      setTimeout(() => {
        setChat(prev => [...prev, { type: 'bot', text: 'I understand your query. Let me help you with that.' }]);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="max-w-4xl mx-auto p-6">
        <Link 
          to="/"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-6"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to Dashboard
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-4">
            <h1 className="text-xl font-bold text-white flex items-center">
              <MessageCircle className="h-6 w-6 mr-2" />
              AI Banking Assistant
            </h1>
          </div>

          <div className="h-[600px] flex flex-col">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chat.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.type === 'user'
                        ? 'bg-indigo-500 text-white ml-auto'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg hover:bg-indigo-600 hover:to-indigo-700 transition-colors"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChatbotSupport;